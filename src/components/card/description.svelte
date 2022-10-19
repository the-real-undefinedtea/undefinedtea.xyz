<script lang="ts">
  let className = ''
  export { className as class }
</script>

<p class="relative z-10 mt-2 text-sm text-zinc-700 dark:text-zinc-500 { className }">
  <slot />
</p>
