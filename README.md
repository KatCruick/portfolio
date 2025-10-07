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

8. Open one of you project pages in the website, and open the corresponding `.mdx` file in the `src/content/projects/` folder. Make some changes to the text, save the file, and the page should automatically refresh in your browser!

## How do your project pages work?

Each project page on your website is generated automatically from the `.mdx` files in the `src/content/projects/` folder. Every time you add a new `.mdx` file to this folder, a new project page will be created on your website.

An `.mdx` file is otherwise known as a "Markdown" file. Markdown is a _plain text_ file type, meaning that it cannot itself display "markup", like images, different font styles, bold text, headings, etc, like you might be used to in a Word doc of Google doc. However, the Markdown syntax contains special characters/annotations that allow you to specify how you want the document to be rendered on your website. This is because the Markdown file will be _converted to HTML_ (a markup language) before it is displayed in the browser.

If you navigate to `localhost:4321/projects/_example` you will see an example project page that demonstrates some of the Markdown syntax you can use in your project pages. These include using `#` for headings, `**bold text**` for bold text, `_italic text_` for italic text and `![Image](/path/to/image.png)` for images.

This example project also demonstrates how you can use the special "project section" components to customise the layout of your project page. These components behave much like normal HTML elements, with the syntax:

```
<ComponentName>
    Content goes here
</ComponentName>
```

You can copy/paste these components to build out your project page. Just make sure that:

1. The component is imported at the top of your `.mdx` file, like in the example project.
2. You open and close the component tags properly (`<ComponentName>` to open, and `</ComponentName>` to close).

> 💡 Any `.mdx` files that start with an underscore (`_`) will be ignored from the project list, but will still be accessible directly at `localhost:4321/projects/_filename`.

If you want to learn more about Markdown syntax, check out this guide: [Markdown Guide](https://www.markdownguide.org/cheat-sheet/)

## How do I save and publish my changes?

This is probably the trickiest bit about managing your own website, especially when working on it with other people. But fear not, you will get the hang of it! And if you're ever in doubt, just ask me for help 👍.

First we need to nail down a couple of quick concepts.

Your website, the one that is accessible to the global internet via your domain name (e.g. `katcruick.com`), is hosted on a server in "the cloud". This means that all the files to run that website are sitting on a machine somewhere in a data center, miles away from where you are now.

You also have a copy of your website on your laptop. This may be an identical copy, or this may be a slightly updated copy of your website. These are the files that are being run when you follow the "getting started" instructions above.

When you make changes to your website in VS Code on your laptop, these changes are only being made to the files on your laptop. These changes have no effect on the public version of your website, so you are free to edit and break things as much as you like. Any changes you see at `localhost:4321` are only visible to you.

This begs the question: if I want to publish the changes I've made on my laptop to the public version of my website, how do I do that?

### Git and Github

On the face of it, "publishing" your changes means updating the remote copy of your website files (the ones in the cloud) with the local copy of your website files (the ones on your laptop).

NOTE - draw a diagram to explain how the remote repo (Github) sits between collaborators and the server when the website is deployed.
