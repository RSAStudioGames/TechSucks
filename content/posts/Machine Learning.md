+++
title = "Machine Learning"
date = "2025-12-23T15:07:24Z"
author = "RSA"
tags = ["AI", "Machine Learning"]
keywords = ["Machine Learning", "AI"]
description = "AI/ML related tools and info."
showFullContent = false
readingTime = false
hideComments = false
+++

> Work in progress ¯\\\_(ツ)\_/¯

Find info about AI hardware in [servermaxxing](https://techsucks.org/posts/servermaxxing)

# AI Models

Resources for rating of models & their uses...

Here are some places you can download AI models from:
- [Hugging Face](https://huggingface.co/)
  - Recommended users to download from:
    - [bartowski](https://huggingface.co/bartowski)
    - [mradermacher](https://huggingface.co/mradermacher)
    - [Dracones](https://huggingface.co/Dracones)
    - [TheBloke](https://huggingface.co/TheBloke)
- [Kaggle](https://www.kaggle.com/)

Handy tool to estimate the VRAM needed to run a model: [VRAM Calculator](https://huggingface.co/spaces/NyxKrage/LLM-Model-VRAM-Calculator)

Text Gen / Image Gen / STT / TTS / Classication / Multi-Modal / Sentiment Analysis / Embedding
## Text Generation Models

## Image Generation Models 

# Quantization
Model quantization is a method of reducing the size of an existing AI model (LLM, diffusion, video gen, etc) while maintaining accuracy. It works by reducing the precision of the weights and activations with a loss in quality proportional to the quantization level and method. Quantizing a model allows for larger models to be used with less of a computing requirment. For example, Llama 3.3 70B FP16 is about 140GB in size and would require a similar amount of memory to run. Quantizing it to 4 bit precision would only require about 40GB of memory to run. The preicision size is directly proportional to the memory required to run a model.
To measure the change in quality from a quantized model compared to its unquantized form, you can measure its perplexity (PPL). {{< linebreak >}}

Below is a table comparing the different Llama.cpp quantization levels of Llama 3 70B to its unquantized F16 form. [Source](https://github.com/ggml-org/llama.cpp/pull/6745#issuecomment-2093892514)
| Quantization | Size (GiB) | Perplexity (wiki.test) | Delta (FP16) |
|:---|:---|:---|:---|
| IQ1_S | 14.29 | 9.8655 +/- 0.0625 | 248.51% |
| IQ1_M | 15.60 | 8.5193 +/- 0.0530 | 200.95% |
| IQ2_XXS | 17.79 | 6.6705 +/- 0.0405 | 135.64% |
| IQ2_XS | 19.69 | 5.7486 +/- 0.0334 | 103.07% |
| IQ2_S | 20.71 | 5.5215 +/- 0.0318 | 95.05% |
| Q2_K_S | 22.79 | 5.4334 +/- 0.0325 | 91.94% |
| IQ2_M | 22.46 | 4.8959 +/- 0.0276 | 72.95% |
| Q2_K | 24.56 | 4.7763 +/- 0.0274 | 68.73% |
| IQ3_XXS | 25.58 | 3.9671 +/- 0.0211 | 40.14% |
| IQ3_XS | 27.29 | 3.7210 +/- 0.0191 | 31.45% |
| Q3_K_S | 28.79 | 3.6502 +/- 0.0192 | 28.95% |
| IQ3_S | 28.79 | 3.4698 +/- 0.0174 | 22.57% |
| IQ3_M | 29.74 | 3.4402 +/- 0.0171 | 21.53% |
| Q3_K_M | 31.91 | 3.3617 +/- 0.0172 | 18.75% |
| Q3_K_L | 34.59 | 3.3016 +/- 0.0168 | 16.63% |
| IQ4_XS | 35.30 | 3.0310 +/- 0.0149 | 7.07% |
| IQ4_NL | 37.30 | 3.0261 +/- 0.0149 | 6.90% |
| Q4_K_S | 37.58 | 3.0050 +/- 0.0148 | 6.15% |
| Q4_K_M | 39.60 | 2.9674 +/- 0.0146 | 4.83% |
| Q5_K_S | 45.32 | 2.8843 +/- 0.0141 | 1.89% |
| Q5_K_M | 46.52 | 2.8656 +/- 0.0139 | 1.23% |
| Q6_K | 53.91 | 2.8441 +/- 0.0138 | 0.47% |
| Q8_0 | 69.83 | 2.8316 +/- 0.0138 | 0.03% |
| F16 | 131.43 | 2.8308 +/- 0.0138 | 0.00% |

In the table, the lower the precision is, the higher the perplexity. Perplexity values can be different depending on the model, its architecture, quantization method used, etc. I personally would not go lower than 4 bits per weight (about Q4 or Q4_K_M within Llama.cpp quantization).
I prefer using ExLlama quantization as it tends to be more performant and accurate than Llama.cpp. The trade-off is that llama.cpp allows you to use both your VRAM and RAM together whereas ExLlama is fixed to the VRAM. EXL3 is the latest version of the Exllama quantization method and has fairly good quality even at low precision.

# Tools

Here are a few different AI tools I've found that are (relatively) simple to use and have lots of strong features.

## GPT4ALL

[https://www.nomic.ai/gpt4all](https://www.nomic.ai/gpt4all)

GPT4ALL is an easy to use application with minimal setup required to hop right into using LLMs personally. It also offers text embedding, to read documents you give it, and the ability to use an on-device AI model or connect to an API provider (ChatGPT/Claude/Vertex/etc).

Supports Nvidia, AMD, and Intel GPUs as well as CPU.

## Ollama

[https://ollama.com/](https://ollama.com/)

Ollama is another easy way of serving LLMs. You can download the install package for Windows, Mac OS, or Linux, install it, and quickly download LLMs on your device with a single command. Ollama is based on [llama.cpp](https://github.com/ggml-org/llama.cpp) which allows you to offload the AI model onto your CPU/RAM to fit larger models, or if you dont have a GPU, run solely on a CPU/RAM.

To do: COVER HOW TO ADD AND LOAD MODELS AND THE BASIC PREREQUISITES NEEDED FOR A FIRST TIME SETUP AND MAYBE A LITTLE BIT ABOUT EXTENSIONS AND API (Hardware support?) (OS Support?)

## Text Generation Web UI

[https://github.com/oobabooga/text-generation-webui/](https://github.com/oobabooga/text-generation-webui/)

Text Generation Web UI, often referred to as *Oobabooga* or *Text Gen Web UI* is a relatively simple and straightforward way to run LLMs.

Supports Nvidia, AMD, and Intel GPUs as well as CPUs.

COVER HOW TO ADD AND LOAD MODELS AND THE BASIC PREREQUISITES NEEDED FOR A FIRST TIME SETUP AND MAYBE A LITTLE BIT ABOUT EXTENSIONS AND API (Hardware support?) (OS Support?)

## Aphrodite Engine

[https://aphrodite.pygmalion.chat/](https://aphrodite.pygmalion.chat/)

Aphrodite Engine (AE) supports a bunch of different quantization methods and is great for advanced users with beefier hardware who want to serve LLMs efficiently for their own uses. While AE supports GGUF quantizations, it cannot offload models to CPU & RAM because of its paged attention system. It has relatively higher generation speeds than its counterparts, but the paged attention system isn't *as* memory efficient for the GPU-poor.

Supports most popular quantization methods.

To do: MODELS AND THE BASIC PREREQUISITES NEEDED FOR A FIRST TIME SETUP AND MAYBE A LITTLE BIT ABOUT EXTENSIONS AND API (Hardware support?)

## vLLM

[https://docs.vllm.ai/en/latest/](https://docs.vllm.ai/en/latest/)

Very robust and memory-efficient inference engine.

Supports most popular quantization methods.

To do: MODELS AND THE BASIC PREREQUISITES NEEDED FOR A FIRST TIME SETUP AND MAYBE A LITTLE BIT ABOUT EXTENSIONS AND API (Hardware support?) (OS Support?)

## Whisper Web UI

[https://github.com/jhj0517/Whisper-WebUI](https://github.com/jhj0517/Whisper-WebUI)

Super useful speech to text transcription tool. Let's you transcribe audio files, video files, and YouTube links of videos. Can transcribe into SRT, WebVTT, TXT, and LRC files.  
Has a simple to use and (mostly) self-explanatory user interface. Also has features for [diarization](https://symbl.ai/developers/blog/what-is-speaker-diarization/) (detect different speakers), background music removal (to split music track from spoken voice), text to text translation, and can even directly transcribe from your microphone whatever you're saying. Supports a large variety of Speech to Text models. I personally use Large-V3-Turbo on INT8, with that, I can transcribe an hour of audio in less than 5 minutes on a 1080Ti, ~30-45 seconds on a V100, or ~10-15 seconds on a 4090, all with diarization enabled (not including model load times, just inference).

Whisper Web UI works well on Nvidia GPUs and, albeit slower, on CPU. I am pretty sure you could get it working on AMD GPUs with [ZLUDA](https://github.com/vosen/ZLUDA), but I haven't personally done that yet.

# Benchmarks
Some benchmarks are on [SERVERMAXXING](/posts/servermaxxing) already. I plan on putting a table with all the different cards & models I'll test here. {{< linebreak >}}
You can also find some more basic LLM inference speed benchmarks on [LLM Inference Benchmarks](https://techsucks.org/posts/llm-benchmarks/). I've spent a lot of time testing models and adding existing benchmarks to a single list.  
[Arena.ai](https://arena.ai/leaderboard) is my go-to for finding the best models overall.  
[UGI Leaderboard](https://huggingface.co/spaces/DontPlanToEnd/UGI-Leaderboard)

# TO DO/SORT:

 (My preferred place to download AI models and datasets and access pre-existing project "spaces")  
 (Another good site to download AI models and datasets)  

[https://github.com/XueyanZhang/awesome-ai-mode-api](https://github.com/XueyanZhang/awesome-ai-mode-api) - Missing quite a few providers but its outdated so ¯\\\_(ツ)\_/¯

[https://mail.bycloud.ai/](https://mail.bycloud.ai/) - AI papers explained

[https://lastweekin.ai/](https://lastweekin.ai/)

[https://rentry.org/IsolatedLinuxWebService](https://rentry.org/IsolatedLinuxWebService)

[https://aijobs.net/insights/glossary/all/](https://aijobs.net/insights/glossary/all/)

-   Cover:
    -   LLMs, what tensors are, and how AI is basically just a ton of algebra done by the GPU
    -   GPUs and which might be better for AI (pros and cons of AMD/Intel/Nvidia)
    -   Cloud hosting AI
    -   basics of transformers
    -   some basic info on AI papers
    -   Quantizations both methods and types
    -   Front-end options
    -   SillyTavern
    -   creating your own basic AI tools using AI as your developer (for the average non-programmer, non-IT savvy to be able to program a basic tool)

* What are tokens
* How does AI understand language (more or less)
* What are loras
* Finetuning vs full training vs loras vs merges etc
* MoE vs Dense models
* List of services you can rent GPUs or inference from...
* LLM samplers and basics of how they work
