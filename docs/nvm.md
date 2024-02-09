# Node Version Manager (NVM)

## How to install NVM

1. Uninstall Node.js to avoid conflict;
2. Get the latest version from [releases](https://github.com/coreybutler/nvm-windows/releases) OR `winget install CoreyButler.NVMforWindows` in your powershell;
3. Open a new powersell and use `nvm install <version>`;
4. Type nvm use <version>.

## Useful informations

- In order to change version, type `nvm use <version>`;
- To see all node versions installed type `nvm ls`;
- To see your current node version type `node -v`;
- To uninstall a node version type `nvm uninstall <version>`.

> NB: Uninstalling a version of Node will also remove the corresponding packages installed globally.
For more information, type nvm in your console.