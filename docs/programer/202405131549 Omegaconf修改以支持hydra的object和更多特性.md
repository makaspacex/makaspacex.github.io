---
title: Omegaconf修改以支持hydra的object和更多特性
lang: zh-CN
date: 2024-05-13 15:49:37
author: makaspacex
cover: https://cdn.jsdelivr.net/gh/makaspacex/PictureZone@main/uPic/E27fpQ.png
tags:
 - python
 - hydra
 - yaml
 - omegaconf
---

# Omegaconf修改以支持hydra的object和更多特性

**1、修改load方法**

```python

from omegaconf import OmegaConf
OmegaConf.load() # 修改这个方法

# /opt/mambaforge/envs/iecr/lib/python3.10/site-packages/omegaconf/omegaconf.py
@staticmethod
    def load(file_: Union[str, pathlib.Path, IO[Any]]) -> Union[DictConfig, ListConfig]:
        from ._utils import get_yaml_loader

        if isinstance(file_, (str, pathlib.Path)):
            with io.open(os.path.abspath(file_), "r", encoding="utf-8") as f:
                obj = yaml.load(f, Loader=get_yaml_loader())
        elif getattr(file_, "read", None):
            obj = yaml.load(file_, Loader=get_yaml_loader()) # [!code focus]
        else:
            raise TypeError("Unexpected file type")

        if obj is not None and not isinstance(obj, (list, dict, str)):
            raise IOError(  # pragma: no cover
                f"Invalid loaded object type: {type(obj).__name__}"
            )

        ret: Union[DictConfig, ListConfig]
        if obj is None:
            ret = OmegaConf.create()
        else:
            # ret = OmegaConf.create(obj) # [!code --] # [!code focus:2]
            ret = OmegaConf.create(obj, flags={"allow_objects": True}) # [!code ++]
        return ret

```

**2、修改get_yaml_loader()方法**

```python
# /opt/mambaforge/envs/iecr/lib/python3.10/site-packages/omegaconf/_utils.py

def get_yaml_loader() -> Any:
    # class OmegaConfLoader(yaml.SafeLoader):  # type: ignore # [!code --] # [!code focus:2]
    class OmegaConfLoader(yaml.UnsafeLoader):  # type: ignore # [!code ++]
        def construct_mapping(self, node: yaml.Node, deep: bool = False) -> Any:
            keys = set()
            for key_node, value_node in node.value:
                if key_node.tag != yaml.resolver.BaseResolver.DEFAULT_SCALAR_TAG:
                    continue
                if key_node.value in keys:
                    raise yaml.constructor.ConstructorError(
                        "while constructing a mapping",
                        node.start_mark,
                        f"found duplicate key {key_node.value}",
                        key_node.start_mark,
                    )
                keys.add(key_node.value)
            return super().construct_mapping(node, deep=deep)

```

**3、【可选】使用hydra的时候，修改run_job 中的save_config保存为resolve之后的值**
```python
from hydra.core.utils import run_job

# /opt/mambaforge/envs/iecr/lib/python3.10/site-packages/hydra/core/utils.py
if config.hydra.output_subdir is not None:
        hydra_output = Path(config.hydra.runtime.output_dir) / Path(
            config.hydra.output_subdir
        )
        _task_cfg = copy.deepcopy(task_cfg) # [!code ++]
        OmegaConf.resolve(_task_cfg)  # [!code ++]
        _save_config(_task_cfg, "config.yaml", hydra_output) # [!code ++]
        # _save_config(task_cfg, "config.yaml", hydra_output)  # [!code --]
        _save_config(hydra_cfg, "hydra.yaml", hydra_output)
        _save_config(config.hydra.overrides.task, "overrides.yaml", hydra_output)
```
