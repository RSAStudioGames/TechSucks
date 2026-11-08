+++
title = "Guide To Debloating Windows"
date = "2025-12-23T15:07:24Z"
author = "RSA"
tags = ["Software", "Windows"]
keywords = ["Software", "Debloating", "Windows"]
description = "How to de-crappify Windows 10 or 11 enough to make it useable while blocking a fair bit of their spyware."
showFullContent = false
readingTime = false
hideComments = false
+++

<style>
.windows-debloat :is(p, ul, ol, img) {
  margin-block: 0.55rem;
}
.windows-debloat h2 {
  margin-block: 1.2rem 0.4rem;
}
.windows-debloat h3 {
  margin-block: 0.95rem 0.35rem;
}
.windows-debloat h4 {
  margin-block: 0.65rem 0.2rem;
}
.windows-debloat h4 + ul {
  margin-top: 0.2rem;
}
.windows-debloat ul > li {
  line-height: 1.4;
}
.windows-debloat ul > li + li {
  margin-top: 0.25rem;
}
.windows-debloat img {
  border-width: 2px;
  padding: 0;
}
.windows-debloat pre {
  margin-block: 0.5rem;
  padding: 0.5rem 0.65rem;
}
.windows-debloat .tweak-action {
  font-weight: 700;
}
.windows-debloat .tweak-enable {
  color: #8ee8a1;
}
.windows-debloat .tweak-disable {
  color: #ffb486;
}
.windows-debloat .tweak-note {
  display: block;
}
</style>

<div class="windows-debloat">

**A Simple Guide to Debloating Windows**

Windows comes with with a bunch of extra apps, background tracking that is effectively [spyware](https://www.youtube.com/watch?v=j2TyrLZT0r0), and features nobody wants or asked for (like copilot). I'll show you how to remove a majority of the junk Windows comes with to reduce data collection, remove clutter, and very likely speed up your computer.

I always run this on any new installation of Windows 10/11, but that isn't required for this process to work. If you want to stay on Windows 10, you can use [0Patch](https://0patch.com/) to stay up to date with security updates even after Microsoft kills off W10 on [October 14th, 2025.](https://support.microsoft.com/en-us/windows/windows-10-support-ends-on-october-14-2025-2ca8b313-1946-43d3-b55c-2b95b107f281)

**WinUtil quick start**

## Step 1 - Opening WinUtil

We'll start by using a free, trusted tool called [WinUtil](https://github.com/ChrisTitusTech/winutil) by Chris Titus Tech. This safely automates most of the cleanup.\
Here's the [documentation](https://winutil.christitus.com/dev/) if you want to read further.

1. Press the **Windows** key, type `powershell`.
2. Right-click **Windows PowerShell** and select **Run as administrator**.

   {{< img src="images/launchpowershell.png" width="345" >}}

   Any of these three options (should you have them) will launch PowerShell.

3. Copy and paste the command below

   ```powershell
   irm "https://christitus.com/win" | iex
   ```

   {{< img src="images/powershellchrisutildebloatcommand.png" width="450" >}}

   It may take a moment to load the application.

## Step 2 - Applying Tweaks

Once WinUtil opens, select the 'Tweaks' tab at the top.

{{< img src="images/tweaks-tab-dark_hu_75e31561a8cfb84.webp" width="520" >}}

If you're new to this tool and don't know what most of the options mean, select 'Standard' from the recommended selections at the top and then click 'Run Tweaks'\
Once it's done processing, restart your computer for the changes to take effect.

### Advanced Configuration

If you want to be more detailed, here are the options I'd recommend for the average user:

#### Restore point

- <span class="tweak-action tweak-enable">Enable:</span> **Create Restore Point** <span class="tweak-note">*Note:* This creates a restore point in case something ever goes wrong on your PC, you have a good point to restore.</span>

#### Privacy and tracking

- <span class="tweak-action tweak-enable">Enable:</span> **Disable Telemetry** <span class="tweak-note">*Note:* Blocks a lot of the built-in features microsoft has to spy on its users.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Activity History** <span class="tweak-note">*Note:* It's my personal preference to keep this off.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Location Tracking** <span class="tweak-note">*Note:* Self-explanatory. Recommended option.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Recall** <span class="tweak-note">*Note:* Highly recommended option. Major safety concern created by microsoft.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Microsoft Copilot** <span class="tweak-note">*Note:* My opinion is that Copilot is garbage. Do what you wish.</span>

#### Apps and disk cleanup

- <span class="tweak-action tweak-enable">Enable:</span> **Delete Temporary Files** <span class="tweak-note">*Note:* Usually doesn't hurt to run this and possibly free up some space.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Run Disk Cleanup** <span class="tweak-note">*Note:* Usually doesn't hurt to run this and possibly free up some space. Will also remove old unneeded windows update files.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Storage Sense** <span class="tweak-note">*Note:* Personal preference to leave off</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable ConsumerFeatures** <span class="tweak-note">*Note:* Disables the automatic installation of random games and third-party apps that microsoft forces on it's users after installation or updates. It could potentially disable the Phone Link feature.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Background Apps**
- <span class="tweak-action tweak-disable">Disable:</span> **Remove ALL MS Store Apps** <span class="tweak-note">*Note:* This will remove ALL microsoft store apps besides the essentials required to make WinGet work.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Remove OneDrive** <span class="tweak-note">*Note:* Moves OneDrive files to Default Home Folders and Uninstalls it. Do not select if you use OneDrive.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Block Razer Software Installs** <span class="tweak-note">*Note:* If you have a Razer device (my condolences to your wallet), don't use this option.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Debloat Brave** <span class="tweak-note">*Note:* I recommend if you use Brave browser.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Debloat Edge** <span class="tweak-note">*Note:* I recommend if you use MS Edge.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Adobe Debloat**

#### Desktop and File Explorer

- <span class="tweak-action tweak-enable">Enable:</span> **Disable Explorer Automatic Folder Discovery** <span class="tweak-note">*Note:* It's my personal preference to keep this off. Stops Windows Explorer from automatically changing the folder settings based on the content inside, such as, changing a folder to be optimized for music if music files are detected in the folder.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Enable End Task With Right Click** <span class="tweak-note">*Note:* Allows you to end the task when right-clicking an application from the taskbar.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Disable Notification Tray/Calendar**
- <span class="tweak-action tweak-enable">Enable:</span> **Set Classic Right-Click Menu** <span class="tweak-note">*Note:* Windows 11 only option. I prefer this as it gives you the full-featured context menu back instead of the half-useless version microsoft pushes on you.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Remove Home from explorer** <span class="tweak-note">*Note:* Personal preference</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Remove Gallery from explorer** <span class="tweak-note">*Note:* Personal preference</span>

#### Power and gaming

- <span class="tweak-action tweak-enable">Enable:</span> **Disable GameDVR** <span class="tweak-note">*Note:* Disables the Xbox app screen recording function and some other game features. Not needed whatsoever and can even lower your performance in games.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Disable Fullscreen Optimizations** <span class="tweak-note">*Note:* [Fullscreen optimizations](https://devblogs.microsoft.com/directx/demystifying-full-screen-optimizations/) run games in an optimized borderless windowed mode. I usually leave this option deselected.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Hibernation** <span class="tweak-note">*Note:* Disables hibernation. I recommend leaving this on if you're on a laptop.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Set Hibernation as default** <span class="tweak-note">*Note:* Select if you are using a laptop.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Set Display to Performance**

#### Networking

- <span class="tweak-action tweak-enable">Enable:</span> **Disable Homegroup** <span class="tweak-note">*Note:* Not really needed on the average user's computer. Leave on if you know you need it.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Wifi-Sense** <span class="tweak-note">*Note:* Used to spy on you and all the wifi networks around your device.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Adobe Network Block**
- <span class="tweak-action tweak-disable">Disable:</span> **Disable IPv6**
- <span class="tweak-action tweak-disable">Disable:</span> **Prefer IPv4 over IPv6**
- <span class="tweak-action tweak-disable">Disable:</span> **Disable Teredo**

#### System settings

- <span class="tweak-action tweak-disable">Disable:</span> **Change Windows Terminal default: PowerShell 5 → PowerShell 7** <span class="tweak-note">*Note:* Personal preference. If you don't know what it is, don't worry about it.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Disable PowerShell 7 Telemetry** <span class="tweak-note">*Note:* Only if you used the above option. Stops microsoft from spying on your usage of PowerShell.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Set Services to Manual** <span class="tweak-note">*Note:* Sets a lot of useless, bloat, and telemetry services to manual that don't need to be running all the time.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Intel MM (vPro LMS)** <span class="tweak-note">*Note:* Recommended unless you know what this is and need it for something.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Disable Windows Platform Binary Table (WPBT)**
- <span class="tweak-action tweak-disable">Disable:</span> **Set Time to UTC**

### Customize Preferences

Then, under “Customize Preferences” (the right bar of WinUtil in the tweaks tab), I usually change the following:

#### Appearance, Start menu, and taskbar

- <span class="tweak-action tweak-enable">Enable:</span> **Dark Theme for Windows** <span class="tweak-note">*Note:* Personal preference. Enables Dark Mode system-wide</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Bing Search in Start Menu** <span class="tweak-note">*Note:* Personal preference. I don't like my start menu to send all my search results to bing's servers.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Recommendations In Start Menu** <span class="tweak-note">*Note:* Personal preference. Be aware disabling this will disable Windows Spotlight in the lock screen.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Remove Settings Home Page**
- <span class="tweak-action tweak-disable">Disable:</span> **Search Button in Taskbar** <span class="tweak-note">*Note:* Personal preference.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Task View Button in Taskbar** <span class="tweak-note">*Note:* Personal preference.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Center Taskbar Items** <span class="tweak-note">*Note:* Windows 11 only. Personal preference.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Widgets Button in Taskbar** <span class="tweak-note">*Note:* Personal preference.</span>

#### Window snapping and File Explorer

- <span class="tweak-action tweak-enable">Enable:</span> **Snap Window**
- <span class="tweak-action tweak-enable">Enable:</span> **Snap Assist Flyout**
- <span class="tweak-action tweak-enable">Enable:</span> **Snap Assist Suggestion**
- <span class="tweak-action tweak-enable">Enable:</span> **Show Hidden Files**
- <span class="tweak-action tweak-enable">Enable:</span> **Show File Extensions**

#### Keyboard and mouse

- <span class="tweak-action tweak-disable">Disable:</span> **NumLock on Startup** <span class="tweak-note">*Note:* Personal preference.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Mouse Acceleration** <span class="tweak-note">*Note:* Disables [mouse acceleration](https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=608%2Cq=95%2Cw=1080/wp-content/uploads/mouse-accel-article.png) so your mouse cursor will move around the screen at a consistent speed based on your settings. Recommended if you game on that device.</span>
- <span class="tweak-action tweak-disable">Disable:</span> **Sticky Keys** <span class="tweak-note">*Note:* Disables Sticky Keys so it will no longer activate upon pressing the “Shift” key 5 times rapidly. Recommended if you game on that device.</span>

#### Startup, diagnostics, and power

- <span class="tweak-action tweak-disable">Disable:</span> **Verbose Messages During Logon** <span class="tweak-note">*Note:* Personal preference. Not really needed for the average user.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Detailed BSoD** <span class="tweak-note">*Note:* Gives you more detailed crash reports should you encounter a Blue Screen of Death which is helpful for debugging.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **S3 Sleep** <span class="tweak-note">*Note:* Recommended if you use a laptop. S3 Sleep prevents unwanted wake-ups and battery drain, unlike Modern Standby which wakes your device more often.</span>
- <span class="tweak-action tweak-enable">Enable:</span> **Add and Activate Ultimate Performance Profile** <span class="tweak-note">*Note:* Not recommended if you are on a **laptop** as it will use more power and drain your battery life significantly faster.\
  I believe this also changes the execution policy to `Restricted`. You can check this using `Get-ExecutionPolicy`</span>

## O&O ShutUp10++

I then like to run **OO Shutup 10**. Go to “Actions” in the top bar then select “Apply only recommended settings” you'll be good. This will block a lot of background spying/telemetry by microsoft and some general annoyances. Read the descriptions of what the other options do if you're unfamiliar with them as they can lead to some significant changes.

---

## Useful Tools:

Here are some helpful tools I've found in my time managing Windows systems. They have their own strengths and weaknesses, but they will let you take control over your OS, improve your system privacy, optimize performance in some areas, and remove some annoyances beyond what is easily accessible in the system settings menus.

- [WinUtil](https://winutil.christitus.com/)\
  Mostly covered in the debloating guide. TO DO: Go over the other options in detail.
- [O&O ShutUp10++](https://www.oo-software.com/en/shutup10)
- [WinAeroTweaker](https://winaerotweaker.com/)\
  Love this tool, super helpful way to debloat some parts of windows, and also allows you to do a LOT of customization options and tweaks to Windows 10 or 11.
- [DisableWinTracking](https://github.com/10se1ucgo/DisableWinTracking)
- [Windows Spy Blocker](https://github.com/crazy-max/WindowsSpyBlocker)
- [Windows 10 Debloater Script](https://github.com/Sycnex/Windows10Debloater)
- [Bloatbox](https://github.com/builtbybel/bloatbox)
- [ContextMenuManager](https://github.com/BluePointLilac/ContextMenuManager/blob/master/README-en.md)
- [Ultimate Windows Tweaker](https://www.thewindowsclub.com/downloads/UWT5.zip)
</div>
