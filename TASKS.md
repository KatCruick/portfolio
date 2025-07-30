# Tasks

- [x] Create components for each of the content block types

- [ ] Work out how to store content

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

- [ ] Typography

  Need to work out how I'm organising typography. Is it

  - Individual Astro components for each text style (e.g. HeadingOne, HeadingTwo, Body)
  - A single Text component that accepts a "variant" prop
  - Purely CSS based?

  CSS based might be nice. I got stuck with the former approach when trying to do list elements.

- [ ] Build the tooltip for the project list component
