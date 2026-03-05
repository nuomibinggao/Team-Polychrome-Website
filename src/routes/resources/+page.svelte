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
    <h2>{$_('pages.resources.prettier_tags.heading')}</h2>
    <p>{$_('pages.resources.prettier_tags.desc_1')}<a href='https://github.com/modlist-org/Overlayer' class='inline-link'>Overlayer</a>{$_('pages.resources.prettier_tags.desc_2')}<a href='https://github.com/modlist-org/Overlayer.Scripting' class='inline-link'>Overlayer.Scripting</a>{$_('pages.resources.prettier_tags.desc_3')}
    </p>
    <p>
      {$_('pages.resources.prettier_tags.desc_4')}
      <strong>nuomibinggao</strong>{$_('pages.resources.prettier_tags.desc_5')}
      <strong>MLob_302</strong>{$_('pages.resources.prettier_tags.desc_6')}
    </p>
  </div>
  <div class='links'>
    <a href='https://github.com/nuomibinggao/Prettier-Tags' rel='noopener noreferrer' target='_blank'>{$_('pages.resources.github_link')}</a>
  </div>
</section>

<section class='keyviewer'>
  <div class='content'>
    <h2>{$_('pages.resources.keyviewer.heading')}</h2>
    <p>{$_('pages.resources.keyviewer.desc_1')}</p>
    <p>{$_('pages.resources.keyviewer.desc_2')}<strong>nuomibinggao</strong>{$_('pages.resources.keyviewer.desc_3')}
    </p>
  </div>

  <div class='links'>
    <a href='https://www.bilibili.com/video/BV1xRHZz7Eeq' rel='noopener noreferrer' target='_blank'>{$_('pages.resources.keyviewer.demo_video')}</a>
    <a href={null}>{$_('pages.resources.keyviewer.download')}</a>
  </div>
</section>

<footer>
  {$_('footer.copyright')}
  <div class='footer-splash'>
    {$_('footer.splash')}
  </div>
</footer>
