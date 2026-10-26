+++
title = "Server Building Guide"
date = "2025-12-23T14:07:24Z"
author = "RSA"
tags = ["Server"]
keywords = ["Server"]
description = "An in-depth server building guide."
showFullContent = false
readingTime = false
hideComments = false
+++

> Work in progress (just like the rest of the site) ¯\\\_(ツ)\_/¯

> I pulled a lot of this out from the [SERVERMAXXING](https://techsucks.org/posts/servermaxxing) page as it wasn't that relevant to running AI models so this will have a heavier focus on AI uses for the time being.

This will cover what kind of hardware you want to look for when building your own personal server and what you should focus on for specific use-cases.

# Server Hardware

--CPU /  RAM / Storage (SSD/HDD) / Mobo / Networking / PSU / Chassis (Rackmount/Tower)--

Every server you build is gonna be comprised of a few select components and, while there are general-purpose systems that can handle most things you throw at them, they'll never excel in any one area. Jack of all trades, master of none.

## Processors
At the heart of every system are your processors, handling the plethora of workloads you throw at them, ranging from HPC to AI/ML applications. There are a number of architectural differences in their core design that dictate where they excel in specific use-cases. In my experience, I haven't found many major differences between CPUs in how they handle most workloads, but with GPUs it's an entirely different story.
### CPUs
Desktop vs Server CPUs (Pros and cons, cost, used vs new)

CPU Age  
Socket (common CPU sockets, replacability)  
Core Count (P vs E cores)  
Thread Count  
SMP # of CPUs  
Integrated Graphics (Intel F CPUs)  
TDP  
Frequency  
Turbo  
Cache L1/L2/L3  
Memory Support  
Memory Channels  
Max Memory Speed(s)  
ECC Support  
PCI Express Version  
PCI Lanes

### GPUs
I'm going over the main points to look for in each of these general use-cases. I am generalizing a lot so you'll have to do your own research, but the idea is that this can be a starting point for what you need with some recommendations. It's a general overview so I'm not going too in-depth into the details.

Grouping into categories of different use-cases of GPUs and what to look for in those applications. Select hardware purpose-built for specific tasks. Like if you're wanting to render stuff, then VRAM and memory bandwidth wont be your top focus as much as it would be with AI or HPC.
For performance reasons, it isn't recommended to run a normal x16 lanes GPU below x8 lanes. There's a small drop at x8 from x16, but further than x8 will cause some fair performance drops with bandwidth-heavy workloads.

To do: Go over float-point calc and relation to GPUs
![hpcasia2022-8-fig1.jpg](images/hpcasia2022-8-fig1.jpg)

| Use-Case | Performance Focus | GPUs |
| - | - | - |
| HPC / Medical & Scientific Visualization | FP64, VRAM, Memory Bandwidth | P100, V100, MI100 |
| AI / ML | VRAM, Tensor/Matrix/XMX Cores, Memory Bandwidth, Floating-Point Performance | P40, V100, T40, MI50, MI100 |
| Professional Graphics / Real-Time Rendering & Animation | Clock speeds, Ray Tracing Cores, VRAM | RTX 8000, RTX 5090 |

#### HPC / Medical & Scientific Visualization
Generally HPC & Visualization tools need high amounts of VRAM to fit large amounts of data/datasets in the GPU to quickly simulate or process specific types of data. You'll generally need GPUs with high FP64 performance because they need to be as accurate as possible to contribute relevant data.
Memory bandwidth play a big part in this to quickly load and move data around in memory.
You'll want to look for cards with high VRAM and FP64 performance for this. P100 (Nvidia budget), V100 (Nvidia mid), MI100 (AMD mid), or A100 and up are the kinds of cards you'd want to look for. Depending on your use-case, you may need multiple cards with an NVLink/xGMI bridge.


- Floating-Point Performance (Double Precision)
- High VRAM capacity
- High Memory Bandwidth
  - Including high-speed interconnects (NVLink & NVSwitch/Infinity Fabric Links)

#### Artificial Intelligence & Machine Learning
If you're running AI models in your server, VRAM and memory bandwidth are gonna be your main focuses with floating-point performance shortly after that.
LLMs and video generation models will usually be quite VRAM hungry. Image generation models are more intensive on memory bandwidth and floating-point performance.
So if you want to serve the best LLMs possible, you're gonna want to look into getting something like P40s (budget Nvidia), MI50s (budget AMD), V100/T40/RTX6000 (Mid Nvidia), MI100 (Mid AMD), A100s
These are some cards to look into that have good performance for their respective price ranges. A100s and up are going to be quite expensive and not worth the price for the average user unless you have money burning a hole in your pocket. Midtier cards like the V100/T40/RTX 6000 (Turing) series of cards have a good Price to Performance to VRAM ratio, but are still relatively costly. P40s and MI50s are significantly cheaper and have quite a bit of VRAM but their performance is not the best so it really depends on how you plan to serve LLMs. How many users, use-cases, quantized models are probably needed, how large of a model are you using, etc. Depending on your use-case, you may need multiple cards with an NVLink/xGMI bridge.

- Tensor/Matrix/XMX cores for AI acceleration
- Floating-Point Performance (FP16/BF16/FP8)
- High VRAM Capacity
- High Memory Bandwidth
	- Including high-speed interconnects (NVLink & NVSwitch/Infinity Fabric Links)

#### Professional Graphics / Real-Time Rendering & Animation
For rendering & real-time graphics (like gaming), you want to look more for VRAM capacity with a good clock speed. Ray tracing cores are recommended as they may become required for modern gaming and good improvements in animation quality. VRAM needs to render a scene increase as they become larger and more complex.
If you're running a personal cloud gaming system...
If you're doing animation on your own...
If you're running a render farm for your own use...
If you're needing a good GPU for video processing or professional graphics...

- VRAM Capacity
- Ray-Tracing
- Cores & Clock speed

## Motherboards
What do you plan on doing with your server? You need to have a plan beforehand to pick the right parts. ML/AI? Web Server? Firewall/Router? Do you think you'll need multiple CPUs and tons of RAM? What about GPUs for AI/HPC/Cloud Gaming? What about storage?

**Multi-Socket Mobos**
- Dual vs quad socket
- NUMA (whatever I can figure out)
- TDP
- Cooling solutions

**Chipset**
- Server vs desktop
- SATA ports, USB, networking, etc

**Expansion Slots**
- PCIe slot types and speeds (x1, x4, x8, x16) (PCI, AGP (if you're old), PCIe)
- PCIe generations (1-8)
- Riser cards and slot extenders

| Generation | Year | Transfer Rate<br>(Per Lane) | x1 GB/s | x2 GB/s | x4 GB/s | x8 GB/s | x16 GB/s |
|-|-|-|-|-|-|-|-|
| 1.0 | 2003 | 2.5 GT/s | 0.25 | 0.5 | 1 | 2 | 4 |
| 2.0 | 2007 | 5.0 GT/s | 0.5 | 1 | 2 | 4 | 8 |
| 3.0 | 2010 | 8.0 GT/s | 0.985 | 1.97 | 3.94 | 7.88 | 15.75 |
| 4.0 | 2017 | 16.0 GT/s | 1.97 | 3.94 | 7.88 | 15.75 | 31.5 |
| 5.0 | 2019 | 32.0 GT/s | 3.94 | 7.88 | 15.75 | 31.5 | 63 |
| 6.0 | 2022 | 64.0 GT/s | 7.56 | 15.13 | 30.25 | 60.5 | 121 |
| 7.0 | 2025 | 128.0 GT/s | 15.13 | 30.25 | 60.5 | 121 | 242 |
| 8.0 | 2028 | 256.0 GT/s | 30.25 | 60.5 | 121 | 242 | 484|

**Extra Stuff**
- Form factors (E-ATX, ATX, Micro ATX, Mini ITX)
- Memory support (ECC, registered, max capacity)
- Onboard networking (1Gbe, 10Gbe, SFP, wifi)
- MCIO
- Oculink
- IPMI (remote mgmt)

- Recommended Brands/Models

## Storage
What to look for in HDDs/SSDs. Putting together different types of storage systems and their pros and cons.

**HDD**
- HDD vs SSD performance/cost trade-offs for bulk storage
- SATA vs SAS vs SCSI drives (yes I have some SCSI drives still so sue me)
- SMR vs CMR drives (pros and cons)
- Drive capacity considerations (pricing)
- Write speeds
- Power consumption
- Heat generation
- Noise levels & vibration
- Reliability
- Disk heads #
- disk platters #

Avoid SMR hard drives when possible, ESPECIALLY for important data! They are less reliable and due to how they are built it can be incredibly difficult, if not impossible to recover data from.

- Recommended Brands/Models

**SSD**
- SLC vs MLC vs TLC vs QLC NAND
- Endurance ratings (TBW/DWPD)
- Over-provisioning
- Cache types (SLC cache, DRAM cache)
- M.2 vs 2.5" vs U.2 vs mSATA vs E1.S vs E1.L vs E3.S vs E3.L form factors
- Sequential vs random I/O
- Thermal throttling and overheating (gen 5 m.2s...)
- Power states and efficiency (especially for always-on servers)

AVOID DRAM-LESS SSDs AT ALL COSTS FOR IMPORTANT DATA! They have lower lifespans and are generally slower.

- Recommended Brands/Models

I recommend looking up the data sheet for any SSD you plan on buying and look for the TBW value which tells you about how much data can be written to the drive before it is expected to fail. SSDs have a finite amount of data they can write before they no longer can write. You usually can still read the SSD at this point, but it will no longer be possible to write new data to it. The Samsung SSD 870 EVO 250GB model has a TBW of 150 terabytes. The 4TB version has a TBW of 2,400 TB. Used enterprise SSDs can also be a good choice, but always make sure to get their drive health before buying as you could potentially buy a dying drive. I don't recommend buying used consumer SSDs. Also, when looking for used enterprise SSDs, make sure they are compatible with your system. SATA is SATA, but some of these SSDs use a bunch of different interfaces like E1.S or U.3. U.3/U.2 look similar to SAS or SATA connectors, but they will not work with SATA at all or just any SAS-card. I'll be covering a lot more about this when I get some more time to finish this page. Eventually...

**RAID and Storage Arrays**
- RAID levels (0, 1, 5, 6, 10) pros/cons
- Hardware vs software RAID
- Hot swapping
- Rebuild times

- Tape Drives for storage
- JBODs, disk shelfs+, nas enclosures, disk enclosures, (basically go over as many different interfaces that let you connect storage to something)

## Power Supplies

- Form Factors
- Redundancy
- Hot-swappable
- Efficiency ratings
- Efficiency curves and load optimization

- Recommended Brands/Models

## Chassis
Different cases and what to look for in different builds. 

- Rack mount (1U, 2U, 3U, 4U) vs tower cases
- Rack depth (short vs full)
- Slots/Bays (hotswap/fixed drive bays, 2.5/3.5/5.25 bays)
- Airflow/fans
	- Positive vs negative pressure
- PCIe card clearance & length support
- Cable management and routing
- CPU cooler height limitations
- PSU mounting
- Front panel connectors
- Cable management
- Build quality (materials/design/QoL/etc)
- Rails
- Motherboard space (ATX/EATX/etc)
- Recommended Brands/Models

## Networking
What to look for in different use-cases...

NICs - Infiniband for RDMA, fiber optic, QSFP/SFP & beyond ($$$), etc
- Patch panels

**NICs (Network Interface Cards)**
- 1GbE, 10GbE, 25GbE, 40GbE, 100GbE, 200GbE, 400GbE cards (PCIe generation req'd, costs)
- RJ45, fiber, SFP/QSFP/OSFP/etc
- Recommended Brands/Models

**Switches**
- Managed vs unmanaged
- Layer 2 vs Layer 3
- \# of ports
- PoE
- Link aggregation
- Recommended Brands/Models

**Routers**
- QoS / Network throttling
- Recommended Brands/Models

**Firewalls**
- Hardware vs software
- Intrusion detection/prevention (IDS/IPS)
- Network filtering (adguard/pi hole)
- Recommended Brands/Models (or how to build a basic system - make separate page for this)

- Cable management and organization


## Extras

- KVMs
- USB/External Storage
- Racks
- UPS
- Disk Cloners
- Disc Cloners
- Disc Drives
- Fans
- PDUs
- 

2U and 4U servers are usually fairly quiet (excluding GPU servers) and have larger fans which means they can be quieter. 1U tends to be quite whiney and loud as they have to force air through the chassis with smaller fans which requires the fans to be louder and more powerful.

Server chassis fans (like in Dell and HP servers) cannot be replaced with quieter alternatives sadly as you need a fan with enough static pressure to keep the components cool. Something like a 40mm Noctua fan would not be able to push enough air into the system to keep it cool in the first place.

# Essential Software

Hypervisors - VMWare ESXi/Proxmox/Hyper-V/OmniOS/SmartOS

Operating Systems - Linux/Windows/Mac, & when to use them

Containerization - Docker

# Second-Hand Systems
You can find some good deals on decommisioned datacenter hardware and systems online. Here's what to look for and what to avoid.

## Dell Servers
### Rackmount Systems
Rackmounted servers. A server rack is not required, but is recommended and makes things easier to work with.

Server Generations:
<span style="color: red;">Red</span> = Avoid (Underperforming / Not Recommended)
<span style="color: yellow;">Yellow</span> = Acceptable
<span style="color: green;">Green</span> = Recommended

\*14th-gen servers are going to start being decommisioned en-masse soon so expect their prices to start dropping significantly around Q4 2026.
| Generation | Model Suffix | Models |
| :--------- | :----------- | :------------------------------------------- |
| 11th Gen | <span style="color: red;">Rx10</span> | `R410`, `R610`, `R710`, `R910` |
| 12th Gen | <span style="color: red;">Rx20</span> | `R320`, `R620`, `R720`, `R820` |
| 13th Gen | <span style="color: yellow;">Rx30</span> | `R230`, `R630`, `R730`, `R930` |
| 14th Gen | <span style="color: green;">Rx40</span> | `R340`, `R640`, `R740`, `R740xd` |
| 15th Gen | <span style="color: green;">Rx50</span> | `R650`, `R750`, `R6515`, `R7525` |
| 16th Gen | <span style="color: green;">Rx60</span> | `R660`, `R760`, `R6625`, `R7615` |


#### Dell R700 Series
The R700 series is a 2U system that you can tune the fans to be fairly quiet (for a server). If you put one or two GPUs in it, then yes, it will get close to jet engine loud, but otherwise, I'd even be comfortable with the noise if it were my own workstation.
The R730 has DDR4 and broadwell CPUs. Don't go for the R720 as is not worth the money whatsoever, uses DDR3 memory, uses a lot more power, is louder, and is only marginally cheaper than the R730. The R710 is just as out-of-date and also uses PCIe Gen 2... TWO! That's bloody old, borderline e-waste. If you can get an R740, get one as they use Skylake CPUs and are more efficient too. 
### Tower Systems
For the tower systems, I would still consider 12th-gen systems because I would not recommend these for anything that requires high performance. Instead, I'd use these as a home cloud or media server rather than doing anything hefty. 12th-gen dell tower systems still use DDR3, but still work fairly well. I wouldn't go for T100 systems as they don't have as many features as something like a T300.
Server Generations:
<span style="color: red;">Red</span> = Avoid (Underperforming / Not Recommended)
<span style="color: yellow;">Yellow</span> = Acceptable
<span style="color: green;">Green</span> = Recommended
| Generation | Model Suffix | Models |
| :--------- | :----------- | :------------------------------------------- |
| 11th Gen   | <span style="color: red;">Tx10</span> | `T110`, `T310`, `T410`, `T610`, `T710` |
| 12th Gen   | <span style="color: yellow;">Tx20</span> | `T120`, `T320`, `T420`, `T620` |
| 13th Gen   | <span style="color: yellow;">Tx30</span> | `T130`, `T330`, `T430`, `T630` |
| 14th Gen   | <span style="color: green;">Tx40</span> | `T40`, `T140`, `T340`, `T440`, `T640` |
| 15th Gen   | <span style="color: green;">Tx50</span> | `T150`, `T350`, `T550` |
| 16th Gen   | <span style="color: green;">Tx60</span> | `T160`, `T360`, `T560` |


# Homelabbing Systems
Priorities when building a server, software to use, remoting in, security, 
## Home Media Servers
Will briefly cover some hardware stuff here. The rest will be in covered in [running-your-own-home-media-server](/running-your-own-home-media-server) and [personal-sovereign-cloud](/personal-sovereign-cloud)
## Web Servers
Software details will be in [running-your-own-home-media-server](/running-your-own-home-media-server) and [personal-sovereign-cloud](/personal-sovereign-cloud)
Hardware-sided tips and tricks will be here.
## Storage Servers

# Getting started with your first server

-   Buying old servers and what to look for

[https://en.wikipedia.org/wiki/List\_of\_PowerEdge\_servers](https://en.wikipedia.org/wiki/List_of_PowerEdge_servers)

[https://itbible.org/homelabbing-for-beginners-break-things-learn-things-and-have-fun/](https://itbible.org/homelabbing-for-beginners-break-things-learn-things-and-have-fun/)

[https://wiki.hacksoc.co.uk/help-guides/home-lab](https://wiki.hacksoc.co.uk/help-guides/home-lab)

[https://geekscallout.com.au/how-to-set-up-a-server-at-home-a-beginners-guide/](https://geekscallout.com.au/how-to-set-up-a-server-at-home-a-beginners-guide/)

[https://linuxblog.io/home-lab-beginners-guide-hardware/](https://linuxblog.io/home-lab-beginners-guide-hardware/)

[https://kubecraft.substack.com/p/how-to-start-a-homelab-for-0](https://kubecraft.substack.com/p/how-to-start-a-homelab-for-0)

[https://hwp24.com/articles/short\_and\_sweet\_how\_to\_choose\_a\_raid\_hba\_controller\_for\_the\_server/](https://hwp24.com/articles/short_and_sweet_how_to_choose_a_raid_hba_controller_for_the_server/)

[https://hwp24.com/articles/managed\_pdu\_do\_you\_really\_need\_it/](https://hwp24.com/articles/managed_pdu_do_you_really_need_it/)

[https://www.davidculley.com/blog/home-server-buying-guide/](https://www.davidculley.com/blog/home-server-buying-guide/)
