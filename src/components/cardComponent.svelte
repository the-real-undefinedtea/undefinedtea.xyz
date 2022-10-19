<script lang="ts">
  let className = ''
  export { className as class }

  export let as = 'article'
</script>

<svelte:element this={ as } class="relative group flex flex-col items-start { className }">
  <slot />
</svelte:element>
