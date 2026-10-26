+++
title = "Personal Sovereign Cloud"
date = "2025-12-23T15:07:24Z"
author = "RSA"
tags = ["Server", "Cloud"]
keywords = ["Server", "Cloud"]
description = "Building your own personal cloud. Get away from the corpos stealing your data and exorbitant monthly charges. "
showFullContent = false
readingTime = false
hideComments = false
+++

> Work in progress ¯\\\_(ツ)\_/¯

# Guide: Running Your Own Sovereign Cloud

Want to be free of Google Drive/OneDrive/Mega/iCloud/Dropbox/etc? Hate the big corpos invading your privacy and looking at all of your photos, files, whatever? Well you deserve to have privacy and security for your files, this is your way to take back your data and stop letting big corporations drain your wallet so you can store your important documents/family photos/Linux ISOs safely. 

I will try to make this guide keep things as simple as possible with convenient and simple to use features. This guide will help you to save quite a bit of money in the long run while keeping your data safe. You will have to manage your own backups, or lack thereof.

Docker is going to be your friend, and mine, because it simplifies the heck out of the install process on a bunch of stuff. There are some cases where it can be a minor headache to manage the settings inside the container, but that's future-you's problem. ;)

NAS / Cheap server / Mini PC / Raspberry PI with SSDs / etc

Tailscale or some VPN service or port forwarding for online access

services to run to keep your personal cloud good. - immich/photoprism, storage tools, etc
</br>

Outline:
Intro - What is a sovereign cloud / briefly outline scope (hardware, secure access, needed services) / brief long-term cost analysis vs cloud providers / brief data privacy concerns
- Personal cloud hosted at home
- Data control and ownership
- Freedom from cloud storage providers

- Mini PCs, NASs, used computers, purpose built computers, JBODs
- Network equipment (router, switches)
- UPS for power protection

- VPN setup for remote access

- File storage and sync
- Media streaming (Jellyfin, not plex)
- Password management (not recommended because there is so much at stake if something goes wrong. Proton Pass... Listed anyway just in case)
- Backup options & tools
- Email hosting (not recommended, but some basics listed anyway)

- Initial hardware investment vs monthly cloud fees

Choosing your hardware - NAS / Mini PC / Raspberry Pi / secondhand server / custom-built

Core services - File storage / photo management / document management / & alternatives tools I'd also recommend / mobile apps available (if any) for services / anything extra I think of 

Secure remote access - (tailscale / zerotier / hamachi :( / wireguard / openvpn / pangolin / cloudflare tunnel) / port forwarding / security best practices / basic hardening

Backup policies - 3-2-1 rule / ways to create backups / RAID / RAID isnt a backup!!!

Extras - basic automation (if I find anything useful or decide to get this far into it)
</br>

Recommended Tools:

-   [AdGuard](https://adguard.com/en/adguard-home/overview.html) (enhances your privacy by blocking trackers and more) (or [Pi-Hole](https://pi-hole.net/) as alternative)
-   [JellyFin](https://jellyfin.org/) (Personal in-house streaming platform (alternative to netflix)) (I recommend JellyFin much more over Plex if you are sourcing the movies yourself. And it's free)
-   [Immich](https://immich.app/) Photo manager for all of your photos. Has AI tools to detect duplicates. Super nice and simple to use. Also has an app for both IOS an Android to connect to your own Immich server. Nothing is shared with the internet.
-   [Tailscale](https://tailscale.com/) (for secure remote connection) (or [Pangolin](https://digpangolin.com/) as an alternative)

-   Basic parts/servers to buy on ebay. (more on servermaxxing page)
    -   Pros and cons based on little put-together “packages”
-   NAS systems, building your own or buying
-   Software and OSs to use
    -   Tailscale/VPN
    -   Immich
    -   Document Managers
-   Try to keep this solely about a personal sovereign cloud and not getting too far into homelabbing. (I'll cover homelabbing in more detail on its own page)

## Hardware
5 - 10 basic builds with varying price and form factors
Table with pricing, performance, form factor, etc for each build

### Build Name
Description of build. Performance rating, pros and cons, and other basic info about it. Pricing. Best usage applications
#### Components
Components needed, price range (along with recommended pricing), alternative components (within price range), any additional notes about component

## Services
Going over my personal recommended choice of what to install and how to install. Will also go over a number of other recommended alternatives for each main service I recommend.

### (Service Name)
(Description of SERVICE)

#### Installation Guide(s) for (Service)
