+++
title = "LLM Inference Benchmarks"
date = "2026-01-19T14:24:34Z"
#dateFormat = "2006-01-02" # This value can be configured for per-post date formatting
author = "RSA"
tags = ["LLM", "AI", "Benchmarks"]
keywords = ["AI", "Benchmarks", "LLM"]
description = "Basic LLM inference benchmarks I've collected over time."
showFullContent = false
readingTime = false
hideComments = false
+++
Work in progress page... {{< linebreak >}}
LLM inference benchmarks I've done myself or collected from the community and other online resources.
{{< linebreak >}}

A quick way to calculate your max theoritical output speed for a dense model is with `bandwidth / size_of_llm_in_gb = max_tok_per_sec` {{< linebreak >}}
For example, Llama 3.3 iQ5KM is 50 GB in size. A V100 16GB (SXM2) has 900GB/s of memory bandwidth. 900 / 50 = 18. Now of course, there is always going to be some overhead which is why my results are ~14 tokens per second which is about 80% of the theoritical max. As low as 70% will be commonplace. If you are getting less than 70% performance, try different quantization methods, inference backends, or operating systems. Typically, headless Linux (I prefer Ubuntu server) will get you better results than using Windows OS.

{{< llm-benchmark-grid "llm-benchmarks.csv" >}}
