<script lang="ts">
  let className = ''
  export { className as class }
</script>

<section class="md:px-5 { className }">
  <section class="mx-auto max-w-7xl md:px-5">
    <section class="relative px-4 md:px-12 { className }">
      <section class="mx-auto max-w-3xl md:max-w-5xl">
        <slot />
      </section>
    </section>
  </section>
</section>
