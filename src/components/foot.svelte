<script lang="ts">
  import Container from './container.svelte'
</script>

<footer class="mt-32">
  <Container>
    <section class="border-t border-zinc-100 dark:border-zinc-700/30 pt-8 pb-16">
      <section class="flex flex-col md:flex-row items-center justify-between gap-5">
        <ul class="flex gap-5 text-sm font-medium text-zinc-700 dark:text-zinc-100">
          <li><a href="/article" class="transition hover:text-teal-500 dark:hover:text-teal-300">Article</a></li>
          <li><a href="/project" class="transition hover:text-teal-500 dark:hover:text-teal-300">Project</a></li>
          <li><a href="/uses" class="transition hover:text-teal-500 dark:hover:text-teal-300">Uses</a></li>
        </ul>
        <p class="text-sm text-zinc-500 dark:text-zinc-300">No cookies or tracking of any kind. Privacy belongs to all.</p>
      </section>
    </section>
  </Container>
</footer>
