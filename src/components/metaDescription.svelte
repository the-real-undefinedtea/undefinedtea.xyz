<script lang="ts">
  import '../asset/global.css'

  export let route = ''
  export let description = ''
</script>

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>{route}</title>
<meta name="title" content={route} />
<meta name="description" content={description} />

<link rel="icon" type="image/png" href="/self.png" />

<!-- twitter -->
<meta property="twitter:card" content="summary" />
<meta property="twitter:url" content="https://undefinedtea.dev" />
<meta property="twitter:title" content={route} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content="/image/hero.png" />
