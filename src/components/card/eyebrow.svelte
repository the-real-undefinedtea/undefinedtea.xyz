<script lang="ts">
  let className = ''
  export { className as class }

  export let as = 'p'
  export let decorate = false
</script>

<svelte:element this={ as } class={ decorate ? `relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-700 pl-3.5 ${ className }` : `relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-700 ${ className }` }>
  {#if decorate}
  <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
    <span class="h-4 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-500" />
  </span>
  {/if}
  <slot />
</svelte:element>
