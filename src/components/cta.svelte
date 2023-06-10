<script lang="ts">
  let className = ''
  export { className as class }

  export let type = ''

  export let inverse = false
  export let disabled = false

  export let umami:any = null
</script>

<button type={ type } class="inline-flex items-center justify-center gap-1 rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-900 hover:bg-zinc-700 active:bg-zinc-900 font-medium text-zinc-100 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-500 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 { className }" class:inverse {disabled} data-umami-event={ umami }>
  <slot />
</button>
