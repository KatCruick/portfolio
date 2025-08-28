# Kat's website

## Getting started

1. Download (clone) the repository to somewhere on your computer. The repository will be created in the location where you run the command, so put it somewhere sensible.

   ```
   git clone git@github.com:KatCruick/portfolio.git
   ```

   You only need to do this step the first time you set up the project. Any subsequent time you want to run the website on your machine, you can start at step 2 😄.

2. Make sure Podman is running on your machine.

   In the Podman desktop app, you should see this if it's running.

   ![Image](/public/readme/podman.png)

3. Open Visual Studio Code (VS Code) and use the "Open Folder" option to open the folder where you cloned the repository.

4. Press `Cmd + Shift + P` to open the "command palette" in VS Code. Start typing "Dev Containers", then select the option for "Dev Containers: Rebuild and Reopen in Container".

   This will relaunch your VS Code window, but now it will be running your website inside of a "container". You might need to wait a minute or two as it sets up, but eventually it should launch the home page of the website in VS Code.

5. Open Chrome (or any other browser) and navigate to `http://localhost:4321` to see your website in action!

## Editing the Website
