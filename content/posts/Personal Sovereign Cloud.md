+++
title = "Personal Sovereign Cloud"
date = "2025-12-23T15:07:24Z"
author = "RSA"
tags = ["Server", "Cloud"]
keywords = ["Server", "Cloud"]
description = "Building your own personal cloud. Get away from the corpos stealing your data and exorbitant monthly charges."
showFullContent = false
readingTime = false
hideComments = false
+++

> Work in progress ¯\\\_(ツ)\_/¯

# Guide: Running Your Own Sovereign Cloud

Want to be free of Google Drive/OneDrive/Mega/iCloud/Dropbox/etc? Hate the big corpos invading your privacy and looking at all of your photos, files, whatever? Well you deserve to have privacy and security for your files, this is your way to take back your data and stop letting big corporations drain your wallet so you can store your important documents/photos/whatever safely.

I will try to make this guide keep things as simple as possible with convenient and simple to use features. This guide will help you to save quite a bit of money in the long run while keeping your data safe. You will have to manage your own backups, or lack thereof.

# Hosting Options

## Hardware

NAS / Cheap server / Mini PC / Raspberry PI with SSDs / etc

## Services

[Docker](https://docs.docker.com/engine/install/) is going to be your friend, and mine, because it simplifies the heck out of the install process on a bunch of stuff so I don't have to explain as much. If you aren't used to the command line or would rather have a GUI to make your life simpler with Docker, [Portainer](https://docs.portainer.io/start/install-ce/server/docker) willl be your friend. </br>
`sudo apt update && sudo apt upgrade && sudo apt install -y docker-compose`

Some self hosted general storage options: </br>
[Syncthing](https://github.com/syncthing/syncthing/) </br>
Simple and easy way to sync files between 2+ devices. Not recommended for sharing with large amounts of users as each device has to be individually synced.

[Copyparty](https://github.com/9001/copyparty)
Great way to share files with lots of people with configured users. The best way, in my opinion, to share files with others without needing to set up a dedicated NAS OS.

Self hosted photo storage options:
[Immich](https://github.com/immich-app/immich/)
Privacy-respecting photo manager for all of your photos. Has AI tools to detect duplicates. Super nice and simple to use. Also has an app for both IOS an Android to connect to your own Immich server. Nothing is shared with the internet.

[PhotoPrism](https://github.com/photoprism/photoprism)
Havent tried it out myself, but another alternative to Immich.

Self hosted local streaming platforms... ditch netflix and amazon
[JellyFin](https://jellyfin.org/) Personal streaming platform with plugins to support audio books too. Entirely free.

[Plex](https://github.com/plexinc/) I do not recommend Plex but here it is. I'll do a write up on it soon enough as to why you shouldn't trust them or give them your hard-earned money.

## Accessing your stuff

Tailscale or some VPN service or port forwarding (I don't recommend port forwarding, but it is an option) for online access
-   [Tailscale](https://tailscale.com/) (for secure remote connection) (or [Pangolin](https://digpangolin.com/) as an alternative)
-   [Headscale](https://github.com/juanfont/headscale) Self-hosted alternative to Tailscale which lets you manage your security every step of the way.

---

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
