---
layout: '../../layouts/article.astro'
topic: 'Umami Analytic in Astro'
description: 'Integrate umami analytic in astro to gain information on web traffic whilst maintaining user privacy.'
publish: 'Jun 11 2023'
draft: false
tag: ['simple']
author: 'undefinedtea'
image: ''
---

<a href="https://umami.is" target="_blank" rel="noreferrer">Umami Analytic</a> is the choice for anyone that is privacy conscious but would like to have some information about their web traffic.

Thankfully, integration with <a href="https://astro.build" target="_blank" rel="noreferrer">Astro</a> is simple as can be.

In the default `layout.astro` (or wherever you define your base), provide a reference to the umami script.

```astro
<html lang="en">
  <head>
    <script is:inline async src="https://analytics.umami.is/script.js" data-website-id="e3514793-f854-4784-95e9-ce141fc7f79a" data-do-not-track="true"></script>
  </head>
</html>
```

That is all. Thank you for coming to my TED Talk. For the curious, here is some noteworthy stuff:
- `is:inline` Is rather important and will inform astro to <a href="https://docs.astro.build/en/guides/client-side-scripts/#load-external-scripts" target="_blank" rel="noreferrer">not</a> bundle the external script.
- `async` Because of course we do not want this to impact performance.
- `data-do-not-track` Since we care about privacy, we should respect this attribute if the user has set it.
