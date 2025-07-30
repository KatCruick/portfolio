# Tasks

**Decision: We will not use any additional frameworks for interactivity.**

The hope is that Kat will eventually be able to maintain this project solo. If we try to nest components from additional frameworks (other than Astro) in this project, it only increases complexity and the learning curve.

**Decision: We will use Typescript.**

Seemingly at odds with the statement above, we will use Typescript. While the learning curve is steep, the benefits of strong typing are too important to ignore.

**Decision: Can't use MDX for content blocks.**

I looked into using MDX to component-ise the content blocks in a single markdown file, but this was a no-go.
