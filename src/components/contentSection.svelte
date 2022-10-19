<script lang="ts">
  export let topic:any
</script>

<section class="md:border-l md:pl-6 md:border-zinc-100 md:dark:border-zinc-700/30">
  <section class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
    <h2 class="text-sm font-medium text-zinc-900 dark:text-zinc-100">{ topic }</h2>
    <section class="md:col-span-3">
      <slot />
    </section>
  </section>
</section>
