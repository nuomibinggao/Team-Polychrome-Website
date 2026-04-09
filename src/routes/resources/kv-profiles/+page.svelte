<script>
  import { _ } from 'svelte-i18n';
  import { resolve, asset } from '$app/paths';
  import { toggleLang } from '$lib/i18n/toggle';
</script>

<svelte:head>
  <title>{$_('meta.title')} | {$_('pages.resources.keyviewer.heading')}</title>
</svelte:head>

<h1>
  <!-- <img src='images/placeholder.png' alt={$_('h1.logo_alt')} class='team-logo'> -->
  Team Polychrome
  <p>{$_('pages.resources.keyviewer.heading')}</p>
</h1>

<nav>
  <ul>
    <li>
      <a href={resolve('/resources')} class='pages'>{$_('pages.resources.keyviewer.back')}</a>
    </li>
    <li>
      <a href={resolve('/')} class='pages'>{$_('nav.back_home')}</a>
    </li>

    <li>
      <a href={null} onclick={(e) => { e.preventDefault(); toggleLang(); }} class='i18n'>简中 / EN</a>
    </li>
  </ul>
</nav>

<section class='intro'>
  <div class='content'>
    <h2>{$_('pages.resources.keyviewer.heading')}</h2>
    <p>{$_('pages.resources.keyviewer.desc_1')}</p>
    <h3>{$_('pages.about.useful_links')}</h3>
    <ul>
      <li>
        <a href='https://github.com/modlist-org' rel='noopener noreferrer' target='_blank'>{$_('pages.resources.modlist_link')}</a>
      </li>
      <li>
        <a href='https://github.com/DmNote-App/DmNote' rel='noopener noreferrer' target='_blank'>{$_('pages.resources.keyviewer.dmnote_link')}</a>
      </li>
    </ul>
  </div>
</section>

<section class='basic-info'>
  <div class='content'>
    <h2>{$_('pages.resources.keyviewer.basic_info_title')}</h2>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <p>{@html $_('pages.resources.keyviewer.basic_info_desc')}</p>
  </div>
</section>

<section class='for-dmn'>
  <div class='content'>
    <h2>{$_('pages.resources.keyviewer.for_dmn')}</h2>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <p>{@html $_('pages.resources.keyviewer.for_dmn_desc')}</p>
  </div>

  <div class='links'>
    <a href={asset('/data-storage/kv-files/dmn-files.zip')} download='dmn-files.zip'>{$_('pages.resources.keyviewer.details')}</a>
  </div>
</section>

<section class='for-kv-mod'>
  <div class='content'>
    <h2>{$_('pages.resources.keyviewer.for_kv_mod')}</h2>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <p>{@html $_('pages.resources.keyviewer.for_kv_mod_desc')}</p>
  </div>

  <div class='links'>
    <a href='https://www.bilibili.com/video/BV1xRHZz7Eeq' rel='noopener noreferrer' target='_blank'>{$_('pages.resources.keyviewer.demo_video')}</a>
    <a href={asset('/data-storage/kv-files/kv-files.zip')} download='kv-files.zip'>{$_('pages.resources.keyviewer.details')}</a>
  </div>
</section>

<footer>
  {$_('footer.copyright')}
  <div class='footer-splash'>
    {$_('footer.splash')}
  </div>
</footer>
