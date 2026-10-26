+++
title = "Arduino Uno Q Review"
date = "2026-03-12T19:21:43Z"
#dateFormat = "2006-01-02" # This value can be configured for per-post date formatting
author = "RSA"
tags = ["Arduino", "Review"]
keywords = ["Arduino", "Review"]
description = "How does Qualcomm's acquisition of Arduino affect the Arduino Uno Q, their first release since the acquisition?"
showFullContent = false
readingTime = false
hideComments = false
+++

Ok so full disclosure, I don't have much experience with Arduino boards and microcontrollers overall besides some hobby experience in setting up stuff for Home Assistant and some small projects like a car parking assistant. My knowledge of embedded development is borderline non-existent. That being said, these are my first impressions of the Arduino Uno Q.

The Arduino Uno Q is Qualcomm’s first new board after its acquisition of Arduino. I got the Arduino Uno Q 2GB model so I could run a few automations and python-based web services for my workflows without needing to run them on power-hungry and expensive full-featured server. It’s basically a microcontroller and single board computer (SBC) in one and seems to be a good competitor to the raspberry pi. Pis have a much more mature ecosystem, but their costs have ballooned to quite a ridiculous cost for the projects they’re used for and my tastes. So already, my use-case for this board aligns better with a raspberry pi than a microcontroller.

My first impressions of it are quite positive. The whole device is smaller than the palm of my hand, seems to work right out of the box, and has a cool little LED matrix display flashing the Arduino logo or a little heart once it’s running. The box did not come with a USB-C cable to power it, but I have plenty of my own which isn't an issue for me.
{{< img src="/images/unoqboard.webp" width="500" alt="Arduino Uno Q Board" >}}

The first-time setup is straightforward and simple. I found the first-time update to be very slow, about 10 – 15 minutes to complete. I am impatient, but what can you expect from a device that uses barely *2 – 3 watts* on average. The low power draw is due to their ARM CPU architecture. The only problem I had was that after checking for board updates, you have to *completely power down the Uno Q (wait for updates to finish obviously)*, then power it back up as the 'Linux Credentials' page in the Arduino App Lab would not show up and I'd be stuck in a constant loop of 'Checking for updates' and then returning to the board selection.
{{< img src="/images/Arduino-App-Lab-Home.webp" width="500" alt="Arduino App Lab" >}}

After getting things set up, you’re placed into the Arduino App Lab. There’s options for a bunch of different example projects to try out, many of which look pretty cool, but I’m only here to set up some of my python services on here.
I then run `sudo apt update` and `sudo apt upgrade` which puts me into another 15-minute update. It looks like this thing is gonna be much slower than I’d like. Write-intensive tasks seem to be very slow, but you can get around this by using a USB hub with storage attached. The system runs Debian of which I am fairly familiar.
{{< img src="/images/Arduino-Linux-Creds.webp" width="500" alt="App Lab Linux Creds" >}}

Once I've gotten the board set up, I go ahead and install Tailscale so I can remotely manage the Uno Q securely. Once that’s done, I move onto setting up my web services. It looks like the Uno Q comes with Python 3.13 pre-installed which is great as that’s what I needed for my tools.
{{< img src="/images/Arduino-Board-CLI-Update.webp" width="600" alt="Updating via CLI" >}}

I have a reminder system that syncs with an instance of NTFY I have hosted on a VPS and a clipboard manager I made to share text across devices all on my tailscale mesh network. Both python tools run flawlessly on the Uno Q.

If you're interested in pushing the board to its limits, check out Bringus Studio's [video](https://www.youtube.com/watch?v=YrrqF2y-dlM). He gets Half Life to be *functional* on the board while using it in desktop mode which is quite impressive for such a small device.

**Some resources to check out:**
- Arduino Uno Q [Official Manual](https://docs.arduino.cc/tutorials/uno-q/user-manual/)
- Arduino App Lab [Download Page](https://docs.arduino.cc/software/app-lab/)
- [Board Pinout](https://docs.arduino.cc/static/c4c115ced208022ab43299bda7ea661e/eb6b8/Simple-pinout-ABX00162.png)
- Options for [powering the board](https://docs.arduino.cc/static/72456f6873252eb705cfd28538166e8a/29114/power-options-3.png)
