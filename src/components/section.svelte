<script lang="ts">
  export let topic:any
  export let description:any
</script>

<section class="mt-16 md:mt-32">
  <div class="max-w-xl">
    <h1 class="text-zinc-900 dark:text-zinc-100 text-3xl md:text-5xl font-bold tracking-tight">{ topic }</h1>
    <h2 class="mt-6 text-zinc-700 dark:text-zinc-300 text-base">{ description }</h2>
  </div>
  <div class="mt-16 md:mt-32">
    <slot />
  </div>
</section>
