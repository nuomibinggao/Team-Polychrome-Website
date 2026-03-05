<script>
  import { _ } from 'svelte-i18n';
  import { resolve } from '$app/paths';
  import { toggleLang } from '$lib/i18n/toggle';
</script>

<svelte:head>
  <title>{$_('meta.title')} | {$_('pages.levels.heading')}</title>
</svelte:head>

<h1>
  <img src='images/placeholder.png' alt={$_('h1.logo_alt')} class='team-logo'>
  {$_('pages.levels.heading')}
</h1>

<nav>
  <ul>
    <li><a href={resolve('/')} class='pages'>{$_('nav.back_home')}</a></li>

    <li><a href={null} onclick={(e) => { e.preventDefault(); toggleLang(); }} class='i18n'>简中 / EN</a></li>
  </ul>
</nav>

<section class='intro'>
  <div class='content'>
    <h2>{$_('pages.levels.heading')}</h2>
    <p>{$_('pages.levels.intro')}</p>
    <h3>{$_('pages.about.useful_links')}</h3>
    <ul>
      <li>
        <a href='https://space.bilibili.com/3546710827600010' rel='noopener noreferrer' target='_blank'>{$_('pages.about.channel_link')}</a>
      </li>
      <li>
        <a href='https://tuforums.com' rel='noopener noreferrer' target='_blank'>{$_('pages.about.tuf_link')}</a>
      </li>
      <li>
        <a href={null}>{$_('pages.about.join_link')}</a>
      </li>
    </ul>
  </div>
</section>

<section class='levels'>
  
</section>