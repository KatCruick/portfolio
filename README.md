# Kat's website

## Getting started

1. Download (clone) the repository to somewhere on your computer. The repository will be created in the location where you run the command, so put it somewhere sensible.

   ```
   git clone git@github.com:KatCruick/portfolio.git
   ```

   You only need to do this step the first time you set up the project. Any subsequent time you want to run the website on your machine, you can start at step 2 😄.

2. Make sure Podman is running on your machine.

   In the Podman desktop app navigate to the "Dashboard" tab, scroll down and you should see this if it's running.

   ![Image](/public/readme/podman.png)

3. Open Visual Studio Code (VS Code) and use the "Open Folder" option to open the folder where you cloned the repository.

4. Open the "source control" tab in VS Code by clicking on this button:

   ![Image](/public/readme/source-control-tab.png)

   This panel will allow you to save changes to your content and sync any changes with the code hosted in GitHub. It will also allow you to "pull" new changes that anyone else may have made to the website.

5. Pull the latest changes from the remote repository by clicking on the "..." button in the source control panel and selecting "Pull".

   ![Image](/public/readme/git-pull.png)

6. Press `Cmd + Shift + P` to open the "command palette" in VS Code. Start typing "Rebuild", then select the option for "Dev Containers: Rebuild and Reopen in Container".

   This will relaunch your VS Code window, but now it will be running your website inside of a "container". You might need to wait a minute or two as it sets up, but eventually it should launch the home page of the website in VS Code.

7. Open Chrome (or any other browser) and navigate to `http://localhost:4321` to see your website in action!

## Editing a project

To start off with, most changes you make to the website will be confined to the `src/content/projects/` folder. In this folder you will have a single `.mdx` file for each project. These will automatically be added to the website, so adding more `.mdx` files will add more project pages.

To make edits to a project:

1. Open the relevant `.mdx` file in the `src/content/projects/` folder.

2. Type away!
