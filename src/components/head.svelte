<script lang="ts">
  import { onMount } from 'svelte'
  let path:any
  onMount(() => {
    path = window.location.pathname
  })

  let navigation = false
  function setNavigation() {
    navigation = !navigation
  }

  import Container from './container.svelte'
  import Theme from './theme.svelte'

  const data = [
    { uuid: 'Article', to: '/article' },
    { uuid: 'Project', to: '/project' },
    { uuid: 'Uses', to: '/uses' }
  ]
</script>

<header class="pointer-events-none relative z-50 flex flex-col">
  <section class="flex h-16 pt-6 gap-3">
    <Container class="w-full">
      <section class="relative flex gap-3">
        <section class="flex flex-1">
          <div class="h-10 w-10 rounded-full">
            <a href="/" class="pointer-events-auto">
              <img src="/image/self.png" alt="undefinedtea" class="rounded-full" height="512" width="512" />
            </a>
          </div>
        </section>
        <section class="flex md:hidden flex-1 justify-end pointer-events-auto">
          <button on:click|preventDefault={setNavigation} type="button" class="group flex items-center rounded-full px-3 py-2 shadow shadow-zinc-900/5 text-zinc-900 dark:text-zinc-300 ring-1 ring-zinc-900/5 dark:ring-zinc-700/90 bg-zinc-50 dark:bg-black">
            Navigation
            <svg class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-300" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 8 6" aria-hidden="true">
              <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 1.75 4 4.25l2.25-2.5" />
            </svg>
          </button>
          <section class:hidden={!navigation} class="fixed inset-0 z-50 bg-zinc-700/30 dark:bg-black/70  backdrop-blur-sm opacity-100"></section>
          <section class:hidden={!navigation} class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white dark:bg-zinc-900 p-8 ring-1 ring-zinc-900/5  dark:ring-zinc-700 opacity-100 scale-100">
            <section class="flex flex-row-reverse items-center justify-between">
              <button on:click|preventDefault={setNavigation} class="-m-1 p-1">
                <svg class="h-6 w-6 text-zinc-500 dark:text-zinc-300" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" />
                </svg>
              </button>
              <h3 class="text-sm font-medium text-zinc-700 dark:text-zinc-500">Navigation</h3>
            </section>
            <nav class="mt-6">
              <ul class="-my-2 divide-y divide-zinc-100 dark:divide-zinc-100/5 text-base text-zinc-900 dark:text-zinc-300">
                <li>
                  {#each data as item}
                  <a href={ item.to } class="flex py-2">{ item.uuid }</a>
                  {/each}
                </li>
              </ul>
            </nav>
          </section>
        </section>
        <section class="hidden md:flex flex-1 justify-center">
          <nav class="pointer-events-auto">
            <ul class="flex rounded-full px-3 text-sm font-medium shadow shadow-zinc-900/5 text-zinc-900 dark:text-zinc-300 ring-1 ring-zinc-900/5 dark:ring-zinc-700/90 bg-zinc-50 dark:bg-black">
              <li>
                {#each data as item}
                <a href={ item.to } class={ path === item.to ? "relative inline-flex px-3 py-2 transition text-teal-500 dark:text-teal-300" : "relative inline-flex px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-300" }>
                  { item.uuid }
                  {#if path === item.to}
                    <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 dark:from-teal-300/0 dark:via-teal-300/50 dark:to-teal-300/0" />
                  {/if}
                </a>
                {/each}
              </li>
            </ul>
          </nav>
        </section>
        <section class="flex md:flex-1 justify-end pointer-events-auto">
          <Theme />
        </section>
      </section>
    </Container>
  </section>
</header>
