<script lang="ts">
  export let to:any
</script>

<div class="absolute -inset-y-6 -inset-x-4 md:-inset-x-6 md:rounded-xl z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-50 dark:bg-zinc-700/50"></div>
<a href="{ to }">
  <span class="absolute -inset-y-6 -inset-x-4 md:-inset-x-6 md:rounded-xl z-30"></span>
  <span class="relative z-10">
    <slot />
  </span>
</a>
