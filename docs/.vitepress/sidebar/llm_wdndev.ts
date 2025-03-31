export default function sidebarwdndevLLM() {
  return [
    {
      text: "大语言大模型",
      link: "/llm/wdndev/README.md",
      items: [
        {
          text: "01.大语言模型基础",
          collapsed: true,
          link: "/llm/wdndev/01.大语言模型基础/README.md",
          items: [
            {
              text: "1.1 大模型发展历程",
              items: [{
                text: "1.语言模型",
                link: "/llm/wdndev/01.大语言模型基础/1.语言模型/1.语言模型.md",
              },]
            },
            {
              text: "1.2 分词与词向量",
              items: [
                { text: "1.分词", link: "/llm/wdndev/01.大语言模型基础/1.分词/1.分词.md" },
                {
                  text: "2.jieba分词用法及原理",
                  link: "/llm/wdndev/01.大语言模型基础/2.jieba分词用法及原理/2.jieba分词用法及原理.md",
                },
                {
                  text: "3.词性标注",
                  link: "/llm/wdndev/01.大语言模型基础/3.词性标注/3.词性标注.md",
                },
                {
                  text: "4.句法分析",
                  link: "/llm/wdndev/01.大语言模型基础/4.句法分析/4.句法分析.md",
                },
                {
                  text: "5.词向量",
                  link: "/llm/wdndev/01.大语言模型基础/5.词向量/5.词向量.md",
                },]
            },
            {
              text: "1.3 语言模型基础知识", items: [{
                text: "Word2Vec",
                link: "/llm/wdndev/01.大语言模型基础/Word2Vec/Word2Vec.md",
              },
              {
                text: "NLP三大特征抽取器（CNN/RNN/TF）",
                link: "/llm/wdndev/01.大语言模型基础/NLP三大特征抽取器（CNN-RNN-TF）/NLP三大特征抽取器（CNN-RNN-TF）.md",
              },
              {
                text: "NLP面试题",
                link: "/llm/wdndev/01.大语言模型基础/NLP面试题/NLP面试题.md",
              },
              {
                text: "LLM为什么Decoder only架构",
                link: "/llm/wdndev/01.大语言模型基础/LLM为什么Decoder only架构/LLM为什么Decoder only架构.md",
              },]
            },

            {
              text: "1.4 深度学习", items: [{
                text: "1.激活函数",
                link: "/llm/wdndev/01.大语言模型基础/1.激活函数/1.激活函数.md",
              },]
            },

            {
              text: "1.5 一些题目", items: [{
                text: "1.llm概念",
                link: "/llm/wdndev/01.大语言模型基础/1.llm概念/1.llm概念.md",
              },]
            },

          ],
        },

        {
          text: "02.大语言模型架构",
          collapsed: true,
          link: "/llm/wdndev/02.大语言模型架构/README.md",
          items: [
            {
              text: "2.1 Transformer模型", items: [{
                text: "1.attention",
                link: "/llm/wdndev/02.大语言模型架构/1.attention/1.attention.md",
              },
              {
                text: "2.layer_normalization",
                link: "/llm/wdndev/02.大语言模型架构/2.layer_normalization/2.layer_normalization.md",
              },
              {
                text: "3.位置编码",
                link: "/llm/wdndev/02.大语言模型架构/3.位置编码/3.位置编码.md",
              },
              {
                text: "4.tokenize分词",
                link: "/llm/wdndev/02.大语言模型架构/4.tokenize分词/4.tokenize分词.md",
              },
              {
                text: "5.token及模型参数",
                link: "/llm/wdndev/02.大语言模型架构/5.token及模型参数/5.token及模型参数.md",
              },
              {
                text: "6.激活函数",
                link: "/llm/wdndev/02.大语言模型架构/6.激活函数/6.激活函数.md",
              },]
            },

            {
              text: "2.2 注意力", items: [{
                text: "MHA_MQA_GQA",
                link: "/llm/wdndev/02.大语言模型架构/MHA_MQA_GQA/MHA_MQA_GQA.md",
              },]
            },

            {
              text: "2.3 解码部分", items: [{
                text: "解码策略",
                link: "/llm/wdndev/02.大语言模型架构/解码策略（Top-k & Top-p & Temperatu/解码策略（Top-k & Top-p & Temperature）.md",
              },]
            },

            {
              text: "2.4 BERT", items: [{
                text: "bert细节",
                link: "/llm/wdndev/02.大语言模型架构/bert细节/bert细节.md",
              },
              {
                text: "Transformer架构细节",
                link: "/llm/wdndev/02.大语言模型架构/Transformer架构细节/Transformer架构细节.md",
              },
              {
                text: "bert变种",
                link: "/llm/wdndev/02.大语言模型架构/bert变种/bert变种.md",
              },]
            },

            {
              text: "2.5 常见大模型", items: [{
                text: "llama系列模型",
                link: "/llm/wdndev/02.大语言模型架构/llama系列模型/llama系列模型.md",
              },
              {
                text: "chatglm系列模型",
                link: "/llm/wdndev/02.大语言模型架构/chatglm系列模型/chatglm系列模型.md",
              },
              {
                text: "llama 2代码详解",
                link: "/llm/wdndev/02.大语言模型架构/llama 2代码详解/llama 2代码详解.md",
              },
              {
                text: "llama 3",
                link: "/llm/wdndev/02.大语言模型架构/llama 3/llama 3.md",
              },]
            },

            {
              text: "2.6 MoE", items: [{
                text: "1.MoE论文",
                link: "/llm/wdndev/02.大语言模型架构/1.MoE论文/1.MoE论文.md",
              },
              {
                text: "2.MoE经典论文简牍",
                link: "/llm/wdndev/02.大语言模型架构/2.MoE经典论文简牍/2.MoE经典论文简牍.md",
              },
              {
                text: "3.LLM MoE ：Switch Transformers",
                link: "/llm/wdndev/02.大语言模型架构/3.LLM MoE ：Switch Transformers/3.LLM MoE ：Switch Transformers.md",
              },]
            },

          ],
        },

        {
          text: "03.训练数据集",
          collapsed: true,
          link: "/llm/wdndev/03.训练数据集/README.md",
          items: [
            {
              text: "3.1 数据集", 
              items: [
                {
                  text: "数据格式",
                  link: "/llm/wdndev/03.训练数据集/数据格式/数据格式.md",
                },
              ]
            },

          ],
        },

        {
          text: "04.分布式训练",
          collapsed: true,
          link: "/llm/wdndev/04.分布式训练/README.md",
          items: [
            { text: "4.1 基础知识",items: [{
              text: "1.概述",
              link: "/llm/wdndev/04.分布式训练/1.概述/1.概述.md",
            },
            {
              text: "2.数据并行",
              link: "/llm/wdndev/04.分布式训练/2.数据并行/2.数据并行.md",
            },
            {
              text: "3.流水线并行",
              link: "/llm/wdndev/04.分布式训练/3.流水线并行/3.流水线并行.md",
            },
            {
              text: "4.张量并行",
              link: "/llm/wdndev/04.分布式训练/4.张量并行/4.张量并行.md",
            },
            {
              text: "5.序列并行",
              link: "/llm/wdndev/04.分布式训练/5.序列并行/5.序列并行.md",
            },
            {
              text: "6.多维度混合并行",
              link: "/llm/wdndev/04.分布式训练/6.多维度混合并行/6.多维度混合并行.md",
            },
            {
              text: "7.自动并行",
              link: "/llm/wdndev/04.分布式训练/7.自动并行/7.自动并行.md",
            },
            {
              text: "8.moe并行",
              link: "/llm/wdndev/04.分布式训练/8.moe并行/8.moe并行.md",
            },
            {
              text: "9.总结",
              link: "/llm/wdndev/04.分布式训练/9.总结/9.总结.md",
            },] },
            
            { text: "4.2 DeepSpeed",items: [    {
              text: "deepspeed介绍",
              link: "/llm/wdndev/04.分布式训练/deepspeed介绍/deepspeed介绍.md",
            },] },
        
            { text: "4.3 Megatron" },
            { text: "4.4 训练加速" },
            { text: "4.5 一些有用的文章" },
            { text: "4.6 一些题目",items: [  {
              text: "1.分布式训练题目",
              link: "/llm/wdndev/04.分布式训练/分布式训练题目/分布式训练题目.md",
            },
            {
              text: "2.显存问题",
              link: "/llm/wdndev/04.分布式训练/1.显存问题/1.显存问题.md",
            },] },
          
          ],
        },

        {
          text: "05.有监督微调",
          collapsed: true,
          link: "/llm/wdndev/05.有监督微调/README.md",
          items: [
            { text: "5.1 理论",items:[{
              text: "1.基本概念",
              link: "/llm/wdndev/05.有监督微调/1.基本概念/1.基本概念.md",
            },
            {
              text: "2.prompting",
              link: "/llm/wdndev/05.有监督微调/2.prompting/2.prompting.md",
            },
            {
              text: "3.adapter-tuning",
              link: "/llm/wdndev/05.有监督微调/3.adapter-tuning/3.adapter-tuning.md",
            },
            {
              text: "4.lora",
              link: "/llm/wdndev/05.有监督微调/4.lora/4.lora.md",
            },
            {
              text: "5.总结",
              link: "/llm/wdndev/05.有监督微调/5.总结/5.总结.md",
            },] },
            
            { text: "5.2 微调实战",items:[{
              text: "llama2微调",
              link: "/llm/wdndev/05.有监督微调/llama2微调/llama2微调.md",
            },
            {
              text: "ChatGLM3微调",
              link: "/llm/wdndev/05.有监督微调/ChatGLM3微调/ChatGLM3微调.md",
            },] },
            
            { text: "5.3 一些题目",items:[{
              text: "1.微调",
              link: "/llm/wdndev/05.有监督微调/1.微调/1.微调.md",
            },
            {
              text: "2.预训练",
              link: "/llm/wdndev/05.有监督微调/2.预训练/2.预训练.md",
            },] },
            
          ],
        },

        {
          text: "06.推理",
          collapsed: true,
          link: "/llm/wdndev/06.推理/README.md",
          items: [
            { text: "6.1 推理框架",items:[ {
              text: "0.llm推理框架简单总结",
              link: "/llm/wdndev/06.推理/0.llm推理框架简单总结/0.llm推理框架简单总结.md",
            },
            { text: "1.vllm", link: "/llm/wdndev/06.推理/1.vllm/1.vllm.md" },
            {
              text: "2.text_generation_inference",
              link: "/llm/wdndev/06.推理/2.text_generation_inference/2.text_generation_inference.md",
            },
            {
              text: "3.faster_transformer",
              link: "/llm/wdndev/06.推理/3.faster_transformer/3.faster_transformer.md",
            },
            {
              text: "4.trt_llm",
              link: "/llm/wdndev/06.推理/4.trt_llm/4.trt_llm.md",
            },] },
           
            { text: "6.2 推理优化技术",items:[ {
              text: "llm推理优化技术",
              link: "/llm/wdndev/06.推理/llm推理优化技术/llm推理优化技术.md",
            },] },
            { text: "6.3 量化"},
            { text: "6.4 vLLM" },
            { text: "6.5 一些题目",items:[ { text: "1.推理", link: "/llm/wdndev/06.推理/1.推理/1.推理.md" },] },
           
          ],
        },
        {
          text: "07.强化学习",
          collapsed: true,
          link: "/llm/wdndev/07.强化学习/README.md",
          items: [
            { text: "7.1 强化学习原理",items:[{
              text: "策略梯度（pg）",
              link: "/llm/wdndev/07.强化学习/策略梯度（pg）/策略梯度（pg）.md",
            },
            {
              text: "近端策略优化(ppo)",
              link: "/llm/wdndev/07.强化学习/近端策略优化(ppo)/近端策略优化(ppo).md",
            },] },
            
            { text: "7.2 RLHF",items:[{
              text: "大模型RLHF：PPO原理与源码解读",
              link: "/llm/wdndev/07.强化学习/大模型RLHF：PPO原理与源码解读/大模型RLHF：PPO原理与源码解读.md",
            },
            { text: "DPO", link: "/llm/wdndev/07.强化学习/DPO/DPO.md" },] },
            
            { text: "7.3 一些题目",items:[{
              text: "1.rlhf相关",
              link: "/llm/wdndev/07.强化学习/1.rlhf相关/1.rlhf相关.md",
            },
            {
              text: "2.强化学习",
              link: "/llm/wdndev/07.强化学习/2.强化学习/2.强化学习.md",
            },] },
          ],
        },

        {
          text: "08.检索增强RAG",
          collapsed: true,
          link: "/llm/wdndev/08.检索增强rag/README.md",
          items: [
            { text: "8.1 RAG",items:[{
              text: "检索增强llm",
              link: "/llm/wdndev/08.检索增强rag/检索增强llm/检索增强llm.md",
            },
            {
              text: "rag（检索增强生成）技术",
              link: "/llm/wdndev/08.检索增强rag/rag（检索增强生成）技术/rag（检索增强生成）技术.md",
            },] },
            
            { text: "8.2 Agent",items:[{
              text: "大模型agent技术",
              link: "/llm/wdndev/08.检索增强rag/大模型agent技术/大模型agent技术.md",
            },] },
          ],
        },

        {
          text: "09.大语言模型评估",
          collapsed: true,
          link: "/llm/wdndev/09.大语言模型评估/README.md",
          items: [
            { text: "9.1 模型评估",items:[ {
              text: "1.评测",
              link: "/llm/wdndev/09.大语言模型评估/1.评测/1.评测.md",
            },] },
           
            { text: "9.2 LLM幻觉",items:[{
              text: "1.大模型幻觉",
              link: "/llm/wdndev/09.大语言模型评估/1.大模型幻觉/1.大模型幻觉.md",
            },
            {
              text: "2.幻觉来源与缓解",
              link: "/llm/wdndev/09.大语言模型评估/2.幻觉来源与缓解/2.幻觉来源与缓解.md",
            },] },
            
          ],
        },

        {
          text: "10.大语言模型应用",
          collapsed: true,
          link: "/llm/wdndev/10.大语言模型应用/README.md",
          items: [
            { text: "10.1 思维链提示",items:[{
              text: "1.思维链（cot）",
              link: "/llm/wdndev/10.大语言模型应用/1.思维链（cot）/1.思维链（cot）.md",
            },] },
            
            {
              text: "10.2 LangChain框架",items:[{
                text: "1.langchain",
                link: "/llm/wdndev/10.大语言模型应用/1.langchain/1.langchain.md",
              },] 
            },
            
          ],
        },

        {
          text: "98.相关课程",
          collapsed: true,
          link: "/llm/wdndev/98.相关课程/README.md",
          items: [
            {
              text: "98.1 清华大模型公开课",
              link: "/llm/wdndev/98.相关课程/清华大模型公开课/清华大模型公开课.md",
              items:[{
                text: "1.NLP&大模型基础",
                link: "/llm/wdndev/98.相关课程/清华大模型公开课/1.NLP&大模型基础/1.NLP&大模型基础.md",
              },
              {
                text: "2.神经网络基础",
                link: "/llm/wdndev/98.相关课程/清华大模型公开课/2.神经网络基础/2.神经网络基础.md",
              },
              {
                text: "3.Transformer基础",
                link: "/llm/wdndev/98.相关课程/清华大模型公开课/3.Transformer基础/3.Transformer基础.md",
              },
              {
                text: "4.Prompt Tuning & Delta Tuning",
                link: "/llm/wdndev/98.相关课程/清华大模型公开课/4.Prompt Tuning & Delta Tuning/4.Prompt Tuning & Delta Tuning.md",
              },
              {
                text: "5.高效训练&模型压缩",
                link: "/llm/wdndev/98.相关课程/清华大模型公开课/5.高效训练&模型压缩/5.高效训练&模型压缩.md",
              },
              {
                text: "6.文本理解和生成大模型",
                link: "/llm/wdndev/98.相关课程/清华大模型公开课/6.文本理解和生成大模型/6.文本理解和生成大模型.md",
              },]
            },
          ],
        },
        { text: "99.参考资料", link: "/llm/wdndev/99.参考资料/README.md" },
      ],
    },
  ];
}
