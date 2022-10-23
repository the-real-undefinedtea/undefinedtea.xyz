<script lang="ts">
  import CTA from '../components/cta.svelte'
  import { putNewsletterData } from '../service/api'

  let load = false

  let email:any
  let message:any
  const authenticate = async () => {
    try {
      load = true
      const { error } = await putNewsletterData({
        email
      })
      if(error) throw error
      message = {
        content: 'Thank you kind stranger. Stay hydrated.'
      }
    } catch(error) {
      message = {
        content: 'This is akward... Something went wrong :/'
      }
    } finally {
      load = false
    }
  }
</script>

<form on:submit|preventDefault={ authenticate } class="rounded-3xl p-6 border border-zinc-100 dark:border-zinc-700/30">
  <h2 class="flex text-sm font-medium text-zinc-900 dark:text-zinc-100">
    <svg class="h-6 w-6 flex-none" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" aria-hidden="true">
      <path class="stroke-zinc-300 dark:stroke-zinc-500" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" />
      <path class="stroke-zinc-300 dark:stroke-zinc-500" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" />
    </svg>
    <span class="ml-3">Stay connected.</span>
  </h2>
  {#if message}
  <p class="mt-2 text-sm text-zinc-700 dark:text-zinc-500">{ message.content }</p>
  {/if}
  {#if !message}
  <p class="mt-2 text-sm text-zinc-700 dark:text-zinc-500">
    Get notified when I publish something, and unsubscribe at any time. No spam. Ever.
  </p>
  <div class="mt-6 flex">
    <input bind:value={ email } type="email" placeholder="email" aria-label="email" required class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-700/5 placeholder:text-zinc-500 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-300 dark:placeholder:text-zinc-500 dark:focus:border-teal-300 dark:focus:ring-teal-300/10 md:text-sm"
    />
    <CTA type="submit" class="ml-3 flex-none" disabled={ load }>
      Subscribe
    </CTA>
  </div>
  {/if}
</form>
