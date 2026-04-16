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
  <link href='https://chinese-fonts-cdn.deno.dev/packages/xiaolai/dist/Xiaolai/result.css' rel='stylesheet'>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
  <link rel='stylesheet' href='/stylesheet.css'>
</svelte:head>

{#if ready}
  {@render children()}
{/if}