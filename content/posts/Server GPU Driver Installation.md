My personal notes for installing GPU drivers. AMD drivers were a lot simpler to install, but Nvidia drivers were their own kind of problem and docs didn't always give reproducible results. It's probably a me problem, but this saved me lots of problems with Nvidia drivers.

## **GPU Drivers**

Prerequisites for installing on Virtual Machines (**ESXI**):

`pciPassthru.use64bitMMIO = TRUE`

`pciPassthru.64bitMMIOSizeGB = 48`

(Rule of thumb: MMIO size must be a power of 2 and at least twice the value of the current total VRAM for the VM. EX: V100 16gb = 32. M40 24GB = 48.)

`pciPassthru.msiEnabled = FALSE`

`hypervisor.cpuid.v0 = FALSE`

General Prerequisites:

It's always good to run the following before doing any driver installations.

`sudo apt update`

`sudo apt upgrade -y`

`sudo apt install build-essential`

### NVIDIA Drivers:

Ubuntu Prerequisites:

1\. Disable Nouveau driver:

`sudo bash -c "echo blacklist nouveau > /etc/modprobe.d/blacklist-nvidia-nouveau.conf"`

`sudo bash -c "echo options nouveau modeset=0 >> /etc/modprobe.d/blacklist-nvidia-nouveau.conf"cat /etc/modprobe.d/blacklist-nvidia-nouveau.conf`

`sudo apt install pkg-config libgles-dev libglvnd-dev dkms build-essential libegl-dev libegl1 gcc libgl1 make libgles1 libglvnd-core-dev libglx-dev libopengl-dev libgl-dev`

`sudo update-initramfs -u`

`sudo reboot now`

2\. Now install NVIDIA GPU drives from their website.

Official site driver download - [https://www.nvidia.com/en-us/drivers/](https://www.nvidia.com/en-us/drivers/)  
Data Center cards driver docs - [https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html#ubuntu](https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html#ubuntu)  
The recommended way to install the drivers is through the package manager. I personally used the runtime (.run) file because the Tesla driver kept uninstalling itself randomly and I needed a backup to keep on-hand.  
CUDA install docs - [https://docs.nvidia.com/cuda/cuda-installation-guide-linux/](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/)

### AMD Drivers:

Following the documentation is the best way to handle the ROCm install. I sincerely recommend installing on a CLEAN install of Linux whenever possible.  
I've found that bare metal installations are the only way I can get ROCm to install properly and be able to use the GPUs. Otherwise, you'll get lots of errors with the GPU being unusable, but yet still detected, for stuff like PyTorch.

Update Kernel - (USE THE CORRECT KERNEL VERSION FOR YOUR LINUX DISTRO. THIS IS FOR **UBUNTU 22.04**)  
Be sure you get the CORRECT KERNEL VERSION supported by the ROCm driver, NOT JUST the latest...   
(Kernel 6.5 works for me as of 6/5/24 for ROCm 6.2)   
[Compatibility Matrix](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html)

(These commands are for Ubuntu 22.04)

`sudo add-apt-repository ppa:oibaf/graphics-drivers`

`sudo apt install linux-generic-hwe-22.04-edge`

`sudo reboot now`

Official Radeon (consumer cards) driver download - [https://www.amd.com/en/support/download/linux-drivers.html](https://www.amd.com/en/support/download/linux-drivers.html)  
ROCm driver setup (needed for data center cards) - [https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html)

`sudo apt install python3-setuptools python3-wheel`

`sudo apt install environment-modules`

There are two main ways to install ROCm. Through the package manager, the multi-version install, the offline installer creator, or the runfile installer.

I recommend the multi-version install.