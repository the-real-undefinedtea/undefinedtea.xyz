<script lang="ts">
  let className = ''
  export { className as class }
</script>

<div class="prose dark:prose-invert text-justify { className }">
  <slot />
</div>
