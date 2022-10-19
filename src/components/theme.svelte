<script>
  function mode() {
    let isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }
</script>

<button on:click|preventDefault={mode} type="button" class="group flex rounded-full px-3 py-2 shadow shadow-zinc-900/5 text-zinc-900 dark:text-zinc-300 ring-1 ring-zinc-900/5 dark:ring-zinc-700/90 bg-zinc-50 dark:bg-black">
  <span class="sr-only">theme</span>
  <svg class="inline-flex dark:hidden h-6 w-6 fill-zinc-100 stroke-zinc-500 group-hover:fill-zinc-300 group-hover:stroke-zinc-700" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
  <svg class="hidden dark:inline-flex h-6 w-6 fill-zinc-700 stroke-zinc-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" />
  </svg>
</button>
