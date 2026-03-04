<script lang='ts'>
	import favicon from '$lib/assets/favicon.svg';
  import '$lib/i18n.ts';

	let { children } = $props();
</script>

<svelte:head>
	<link rel='icon' href={favicon} />
	<link href='https://api.fontshare.com/css?f[]=chillax@400,700&display=swap' rel='stylesheet'>
	<link rel='stylesheet' href='/stylesheet.css'>
</svelte:head>

{@render children()}
