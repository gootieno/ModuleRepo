# WSL 2 Upgrades

* wsl --set-version Ubuntu 2

--------------------------------------------------------------------

* If they get the message:

    ```WSL 2 requires an update to its kernel component, Error: 0x1bc```

    * Goto this link:

        ```https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi```



    * Run the WSL Kernel installer

    *  ```wsl --set-version Ubuntu 2``` again and it should Convert

--------------------------------------------------------------------

* If they get the message:

    ```You need to enable virtualization in your windows features or BIOS```

    * Open **Turn Windows Features On or Off**
    * Make sure Hyper-V (Sometimes isn't on the list), Windows Subsystem For Linux, Windows Hypervisor Platform, and Virtual Machine Platform are all enabled.
    * Restart PC and try wsl --set-version Ubuntu 2 again
    * If still getting the message, they need to go into their BIOS settings and turn virtualization on in BIOS
