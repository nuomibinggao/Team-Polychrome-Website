<script>
  import { _ } from 'svelte-i18n';
	import { resolve } from '$app/paths';
  import { toggleLang } from '$lib/i18n/toggle';
</script>

<svelte:head>
  <title>{$_('meta.title')} | {$_('pages.resources.heading')}</title>
</svelte:head>

<h1>
  <img src='images/placeholder.png' alt={$_('h1.logo_alt')} class='team-logo'>
  {$_('pages.resources.heading')}
</h1>

<nav>
  <ul>
    <li><a href={resolve('/')} class='pages'>{$_('nav.back_home')}</a></li>

    <li><a href={null} onclick={(e) => { e.preventDefault(); toggleLang(); }} class='i18n'>简中 / EN</a></li>
  </ul>
</nav>

<section class='intro'>
  <div class='content'>
    <h2>{$_('pages.resources.heading')}</h2>
      <p>{$_('pages.resources.intro_text')}</p>
    <h3>{$_('pages.about.useful_links')}</h3>
    <ul>
      <li>
        <a href='https://tuforums.com' rel='noopener noreferrer' target='_blank'>{$_('pages.about.tuf_link')}</a>
      </li>
      <li>
        <a href='https://github.com/modlist-org' rel='noopener noreferrer' target='_blank'>{$_('pages.resources.modlist_link')}</a>
      </li>
    </ul>
  </div>
</section>

<section class='prettier-tags'>
  <div class='content'>
    <h2>Prettier Tags</h2>
    <p>Prettier Tags{$_('pages.resources.prettier_tags_desc_1')}<a href='https://github.com/modlist-org/Overlayer' class='inline-link'>Overlayer</a>{$_('pages.resources.prettier_tags_desc_2')}<a href='https://github.com/modlist-org/Overlayer.Scripting' class='inline-link'>Overlayer.Scripting</a>{$_('pages.resources.prettier_tags_desc_3')}</p>
    <p>{$_('pages.resources.prettier_tags_desc_4')}<strong>nuomibinggao</strong>{$_('pages.resources.prettier_tags_desc_5')}<strong>MLob_302</strong>{$_('pages.resources.prettier_tags_desc_6')}</p>
  </div>
  <div class='links'>
    <a href='https://github.com/nuomibinggao/Prettier-Tags' rel='noopener noreferrer' target='_blank'>{$_('pages.resources.github_link')}</a>
  </div>
</section>

<section class='nuomibinggao-kv'>
  <div class='content'>
    <h2>nuomibinggao's KeyViewer Files</h2>
    <p>A collection of modern minimal style KeyViewer profiles made for the KeyViewer mod.</p>
    <p>Made by team member <strong>nuomibinggao</strong>.</p>
  </div>
  <div class='links'>
    <a href='https://www.bilibili.com/video/BV1xRHZz7Eeq' rel='noopener noreferrer' target='_blank'>View Demo Video</a>
    <a href={null}>Download Files</a>
  </div>
</section>

<footer>
  &copy; 2026 nuomibinggao & Team Polychrome. Licensed Under CC BY-NC-ND 4.0.
  <div class='footer-splash'>Even errors can look good.</div>
</footer>
