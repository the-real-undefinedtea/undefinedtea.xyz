<script lang="ts">
  let className = ''
  export { className as class }
</script>

<section class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 { className }" aria-hidden="true">
  <slot />
  <svg class="ml-1 h-4 w-4 stroke-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" aria-hidden="true" fill="none">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 5.75 9.25 8l-2.5 2.25" />
  </svg>
</section>
