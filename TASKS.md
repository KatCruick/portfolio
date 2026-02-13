# Tasks

- [ ] Download button

- [ ] Icons in project summary section

- [ ] Demo a mobile-view

- [ ] Get the mobile navbar working

- [ ] Get deploy workflow working

  We can't use Vercel's deploy hooks to deploy the website, as Vercel will not automatically deploy commits from a git author who is not the owner of the Vercel project. Instead we need to set up a GitHub Action that will trigger a new deploy on Vercel whenever a commit is pushed to the `main` branch.

  I think I'll need admin access to Kat's repo to set this up, as we need to add env vars. I'll need her env vars too.

  Links:

  - [Blog post outlining workarounds for deploy hooks](https://blog.saif71.com/fix-vercel-git-error/)
  - [Vercel docs on deploying with GitHub Actions](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel)

---

- [x] Get resizing working on the arrow on the homepage

- [x] Build the tooltip for the project list component

- [x] Work out how to style and auto-populating references. This might require a custom remark plugin.

- [x] Fix the fact that you can't currently have more than one collapsible section working per page

- [x] Create components for each of the content block types

- [x] Work out how to store content

  Ideally each project will have a dedicated markdown file where we can drop the content. But given we had different content "blocks", we need some way of labelling this so Astro knows which component each block of content should render inside.

  The easiest way to do this is probably with a JSON file that allows you to config the shape of a project page, i.e.

  ```js
  const project = [
    {
      type: 'full-width',
      content: 'This is a full-width content block',
    },
    {
      type: 'image-right',
      content: 'This is an image-right content block',
      image: 'path/to/image.jpg',
    },
  ];
  ```

  However, this isn't particularly user friendly. An alternative might be to have a separate Markdown file for each block, and specify the block type and image in the frontmatter. Projects then could be a directory containing a number of content markdown files.

- [x] Typography

  Need to work out how I'm organising typography. Is it

  - Individual Astro components for each text style (e.g. HeadingOne, HeadingTwo, Body)
  - A single Text component that accepts a "variant" prop
  - Purely CSS based?

  CSS based might be nice. I got stuck with the former approach when trying to do list elements.

  Define individual type elements with Tailwinds @utility

  - Create a `.prose` selector and style each type element with @apply for the new utilities
  - Define a standalone <Typography /> component, where you pass in a key and it renders the correct typographic elements with the correct utility applied

- [x] Build a carousel component
