<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '$lib/i18n/i18n.ts';
  import { initLocale } from '$lib/i18n/i18n';
  import { onMount } from 'svelte';

  let { children } = $props();
  let ready = $state(false);

  // Run after hydration to set the correct locale
  onMount(() => {
    initLocale();
    ready = true; // allow page to render
  });
</script>

<svelte:head>
  <link rel='icon' href={favicon} />
  <link href='https://api.fontshare.com/css?f[]=chillax@400,700&display=swap' rel='stylesheet'>
  <link rel='stylesheet' href='/stylesheet.css'>
</svelte:head>

{#if ready}
  {@render children()}
{/if}