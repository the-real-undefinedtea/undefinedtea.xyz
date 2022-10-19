<script lang="ts">
  let className = ''
  export { className as class }

  import To from './to.svelte'
  export let to = ''
</script>

<h2 class="text-base font-medium tracking-tight text-zinc-900 dark:text-zinc-100 { className }">
  {#if to}
  <To { to }>
    <slot />
  </To>
  {:else}
  <slot />
  {/if}
</h2>
