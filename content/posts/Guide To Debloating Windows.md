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


Work in progress (just like the rest of the site) ¯\\\_(ツ)\_/¯

# Guide To Debloating Windows:

The process of debloating Windows 10/11 is best done on a fresh installation of Windows. I hope you're using W10, and not W11. Use [0Patch](https://0patch.com/) to stay up to date with security updates even after Microsoft kills off W10 on [October 14th, 2025.](https://support.microsoft.com/en-us/windows/windows-10-support-ends-on-october-14-2025-2ca8b313-1946-43d3-b55c-2b95b107f281)

## The Easier Way

To start debloating Windows 10 or 11, I usually start with [WinUtil](https://github.com/ChrisTitusTech/winutil) by [ChrisTitusTech](https://github.com/ChrisTitusTech/). [Documentation](https://winutil.christitus.com/dev/).

1\. Run WinUtil

**_PowerShell_**: Run `irm "https://christitus.com/win" | iex` {{< linebreak >}}
**_Command Prompt_**: `powershell -command "irm "https://christitus.com/win" | iex"` 

![](images/launchpowershell.png)

Any of those three options (should you have them) will launch PowerShell

![](images/powershellchrisutildebloatcommand.png)

My terminal may look different than yours, but the command is still the same. Make sure you're using PowerShell and NOT Command Prompt.

2\. Navigate to the “Tweaks” tab

![](images/tweaks-tab-dark_hu_75e31561a8cfb84.webp)

If you're new to using this tool and don't know what most of the options mean, I'd just select “Standard” from the recommended selections at the top and then click “Run Tweaks"  
Here are the tweaks in WinUtil and what I'd recommend for the average user to choose:

-   Select: **Create Restore Point** {{< linebreak >}}
    Note: This creates a restore point in case something ever goes wrong on your PC, you have a good point to restore.
-   Select: **Delete Temporary Files** {{< linebreak >}}
    Note: Usually doesn't hurt to run this and possibly free up some space.
-   Select: **Disable ConsumerFeatures** {{< linebreak >}}
    Note: Disables the automatic installation of random games and third-party apps that microsoft forces on it's users after installation or updates. It could potentially disable the Phone Link feature.
-   Select: **Disable Telemetry** {{< linebreak >}}
    Note: Blocks a lot of the built-in features microsoft has to spy on its users.
-   Select: **Disable Activity History** {{< linebreak >}}
    Note: It's my personal preference to keep this off.
-   Select: **Disable Explorer Automatic Folder Discovery** {{< linebreak >}}
    Note: It's my personal preference to keep this off. Stops Windows Explorer from automatically changing the folder settings based on the content inside, such as, changing a folder to be optimized for music if music files are detected in the folder.
-   Select: **Disable GameDVR** {{< linebreak >}}
    Note: Disables the Xbox app screen recording function and some other game features. Not needed whatsoever and can even lower your performance in games.
-   Select: **Disable Hibernation** {{< linebreak >}}
    Note: Disables hibernation. I recommend leaving this on if you're on a laptop.
-   Select: **Disable Homegroup** {{< linebreak >}}
    Note: Not really needed on the average user's computer. Leave on if you know you need it.
-   Select: **Disable Location Tracking** {{< linebreak >}}
    Note: Self-explanatory. Recommended option.
-   Select: **Disable Storage Sense** {{< linebreak >}}
    Note: Personal preference to leave off
-   Select: **Disable Wifi-Sense** {{< linebreak >}}
    Note: Used to spy on you and all the wifi networks around your device.
-   Select: **Select: Enable End Task With Right Click** {{< linebreak >}}
    Note: Allows you to end the task when right-clicking an application from the taskbar.
-   Select: **Run Disk Cleanup** {{< linebreak >}}
    Note: Usually doesn't hurt to run this and possibly free up some space. Will also remove old unneeded windows update files.
-   Deselect: **Change Windows Terminal default: PowerShell 5 → PowerShell 7** {{< linebreak >}}
    Note: Personal preference. If you don't know what it is, don't worry about it.
-   Deselect: **Disable PowerShell 7 Telemetry** {{< linebreak >}}
    Note: Only if you used the above option. Stops microsoft from spying on your usage of PowerShell.
-   Select: **Disable Recall** {{< linebreak >}}
    Note: Highly recommended option. Major safety concern created by microsoft.
-   Deselect: **Set Hibernation as default** {{< linebreak >}}
    Note: Select if you are using a laptop.
-   Select: **Set Services to Manual** {{< linebreak >}}
    Note: Sets a lot of useless, bloat, and telemetry services to manual that don't need to be running all the time.
-   Select: **Debloat Brave** {{< linebreak >}}
    Note: I recommend if you use Brave browser.
-   Select: **Debloat Edge** {{< linebreak >}}
    Note: I recommend if you use MS Edge.

-   Deselect: **Adobe Network Block**
-   Deselect: **Adobe Debloat**
-   Deselect: **Disable IPv6**
-   Deselect: **Prefer IPv4 over IPv6**
-   Deselect: **Disable Teredo**
-   Select: **Disable Background Apps**
-   Select: **Disable Microsoft Copilot** {{< linebreak >}}
    Note: My opinion is that Copilot is garbage. Do what you wish.
-   Deselect: **Disable Fullscreen Optimizations** {{< linebreak >}}
    Note: [Fullscreen optimizations](https://devblogs.microsoft.com/directx/demystifying-full-screen-optimizations/) run games in an optimized borderless windowed mode. I usually leave this option deselected.
-   Select: **Disable Intel MM (vPro LMS)** {{< linebreak >}}
    Note: Recommended unless you know what this is and need it for something.
-   Deselect: **Disable Notification Tray/Calendar**
-   Select: **Disable Windows Platform Binary Table (WPBT)**
-   Deselect: **Set Display to Performance**
-   Select: **Set Classic Right-Click Menu** {{< linebreak >}}
    Note: Windows 11 only option. I prefer this as it gives you the full-featured context menu back instead of the half-useless version microsoft pushes on you.
-   Deselect: **Set Time to UTC**
-   Deselect: **Remove ALL MS Store Apps** {{< linebreak >}}
    Note: This will remove ALL microsoft store apps besides the essentials required to make WinGet work.
-   Select: **Remove Home from explorer** {{< linebreak >}}
    Note: Personal preference
-   Select: **Remove Gallery from explorer** {{< linebreak >}}
    Note: Personal preference
-   Select: **Remove OneDrive** {{< linebreak >}}
    Note: Moves OneDrive files to Default Home Folders and Uninstalls it. Do not select if you use OneDrive.
-   Select: **Block Razer Software Installs** {{< linebreak >}}
    Note: If you have a Razer device (my condolences to your wallet), don't use this option.

I then like to run **OO Shutup 10**. Go to “Actions” in the top bar then select “Apply only recommended settings” you'll be good. This will block a lot of background spying/telemetry by microsoft and some general annoyances. Read the descriptions of what the other options do if you're unfamiliar with them as they can lead to some significant changes.

Then, under “Customize Preferences” (the right bar of WinUtil in the tweaks tab), I usually change the following:

-   Enable **Dark Theme for Windows** {{< linebreak >}}
    Note: Personal preference. Enables Dark Mode system-wide
-   Disable **Bing Search in Start Menu** {{< linebreak >}}
    Note: Personal preference. I don't like my start menu to send all my search results to bing's servers.
-   Disable **NumLock on Startup** {{< linebreak >}}
    Note: Personal preference.
-   Disable **Verbose Messages During Logon** {{< linebreak >}}
    Note: Personal preference. Not really needed for the average user.
-   Disable **Recommendations In Start Menu** {{< linebreak >}}
    Note: Personal preference. Be aware disabling this will disable Windows Spotlight in the lock screen.
-   Disable **Remove Settings Home Page**
-   Enable **Snap Window**
-   Enable **Snap Assist Flyout**
-   Enable **Snap Assist Suggestion**
-   Disable **Mouse Acceleration** {{< linebreak >}}
    Note: Disables [mouse acceleration](https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=608%2Cq=95%2Cw=1080/wp-content/uploads/mouse-accel-article.png) so your mouse cursor will move around the screen at a consistent speed based on your settings. Recommended if you game on that device.
-   Disable **Sticky Keys** {{< linebreak >}}
    Note: Disables Sticky Keys so it will no longer activate upon pressing the “Shift” key 5 times rapidly. Recommended if you game on that device.
-   Enable **Show Hidden Files**
-   Enable **Show File Extensions**
-   Disable **Search Button in Taskbar** {{< linebreak >}}
    Note: Personal preference.
-   Disable **Task View Button in Taskbar** {{< linebreak >}}
    Note: Personal preference.
-   Disable **Center Taskbar Items** {{< linebreak >}}
    Note: Windows 11 only. Personal preference.
-   Disable **Widgets Button in Taskbar** {{< linebreak >}}
    Note: Personal preference.
-   Enable **Detailed BSoD** {{< linebreak >}}
    Note: Gives you more detailed crash reports should you encounter a Blue Screen of Death which is helpful for debugging.
-   Enable **S3 Sleep** {{< linebreak >}}
    Note: Recommended if you use a laptop. S3 Sleep prevents unwanted wake-ups and battery drain, unlike Modern Standby which wakes your device more often.

-   Enable: **Add and Activate Ultimate Performance Profile** {{< linebreak >}}
    Note: Not recommended if you are on a **laptop** as it will use more power and drain your battery life significantly faster.  
    I believe this also changes the execution policy to `Restricted`. You can check this using `Get-ExecutionPolicy`

## Why Windows gets bloated

### Specific examples of bloatware/telemetry

### Impact on gaming/productivity

### Privacy implications in more detail

### Long-term maintenance tips

# Useful Tools:
Here are some helpful tools I've found in my time managing Windows systems. They have their own strengths and weaknesses, but they will let you take control over your OS, improve your system privacy, optimize performance in some areas, and remove some annoyances beyond what is easily accessible in the system settings menus.

- [WinUtil](https://winutil.christitus.com/dev/)  
Mostly covered in the debloating guide. TO DO: Go over the other options in detail.

- [O&O ShutUp10++](https://www.oo-software.com/en/shutup10)

- [WinAeroTweaker](https://winaerotweaker.com/)  
Love this tool, super helpful way to debloat some parts of windows, and also allows you to do a LOT of customization options and tweaks to Windows 10 or 11.

- [DisableWinTracking](https://github.com/10se1ucgo/DisableWinTracking)

- [Windows Spy Blocker](https://github.com/crazy-max/WindowsSpyBlocker)

- [Windows 10 Debloater Script](https://github.com/Sycnex/Windows10Debloater)

- [Bloatbox](https://github.com/builtbybel/bloatbox)

- [ContextMenuManager](https://github.com/BluePointLilac/ContextMenuManager/blob/master/README-en.md)

- [Ultimate Windows Tweaker](https://www.thewindowsclub.com/downloads/UWT5.zip)
