---
layout: '../../layouts/article.astro'
topic: 'Astro & Svelte: an introduction'
description: 'content'
publish: 'Oct 15 2022'
draft: true
tag: ['']
author: 'undefinedtea'
image: ''
---

I have been an avid user of static site generators for a long time. When [jekyll](https://jekyllrb.com/) was released in 2013 I built a version of this page (a personal page) and was in awe. Performance, security and ease of use have always been what I most closely associate with the term 'static site generator'. Seeing that these topics are relevant when it comes to a personal page project for me, having another look at the `SSG` (Static Site Generator) landscape again seemed like a good place to begin.

When it comes to `SSG`/`SSR` (Server Side Render) options today, there are a lot of them. I only seriously looked at [jekyll](https://jekyllrb.com/), [gohugo](https://gohugo.com/) and [astro](https://astro.build/). Having previously worked with both jekyll and gohugo, astro was a recent discovery for me, and the option I was most curious about as well as it offers features out of the box that the other two do not. Being able to use `svelte` - yes please, `tailwind` as a core maintaned component - yes please, and then a `SSG` or `SSR` adapter for `vercel` - yes please. In addition to these wonderful nicities, it is also a pleasure to be able to work in a ecosystem I know well. I can work with `ruby` and `go` fine, but being able to work in `typescript` throughout the entire project (not only within the native `.astro` components, but also in the `.svelte` components within the project) is neat. There is no special syntax to learn.

Before we look closer at the parts of `astro` I like, we should spend a minute to talk about the requirements for this project and also look at how the framework addresses these.

* Allow me to get stuff done

Yep, that is all. I do not want to spend 3 days to provision a development environment, 5 days to learn a framework, 3 days to orcestrate a build pipeline and be left with a structure that requires significant work to publish an article. Instead I want something that gets out of my way and is there when I need it.

Of course, the 3 traits of a `SSG` I touched on earlier are also relevant and deserve a bit of an explenation.

### Performance
Performance is more than load time on the device you are viewing this page on. Well of coure we are all familiar with the concept of a lighthouse score, so perhaps we begin with some statistics.

### Security
With powerful frameworks come a lot of dependencies and often a large codebase to maintain.

### Ease of use
At the end of the day, all a `SSG` should need is a file (ideally markdown) in a folder. Naturally, astro fulfills this requirement. However, as we are building a real project, things often become more involved. Things that need to be interactive for instance can become somewhat of a problem when the tool used does not allow for simple integrations but rather requires you to either bering a whole framework or to learn special ways to achieve some compromise between what you really want and what is somewhat simple to implement. With astro this is a non-issue.

## Developer experience in Astro

## Deploy to Vercel
Astro on Vercel offer two options - static and server.

`astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config'

import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  output: 'static',
  integrations: [svelte(), tailwind()],
  site: 'https://undefinedtea.dev',
  outDir: './build'
})
```

`astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/serverless'

import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [svelte(), tailwind()],
  site: 'https://undefinedtea.dev',
  outDir: './build'
})
```

Performance wise the difference between these is not significant in my case, but I think it is worth to note that if there is no need to render a page during runtime, then why do it? So `SSG` is what the confirugation has currently.

## Conclusion
