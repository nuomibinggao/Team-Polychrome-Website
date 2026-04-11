<svelte:head>
  <title>{$_('meta.title')}</title>
</svelte:head>

<script>
  import { _ } from 'svelte-i18n';
  import { resolve } from '$app/paths';
  import { toggleLang } from '$lib/i18n/toggle';
</script>

<h1>
  <!-- <img src='images/placeholder.png' alt={$_('h1.logo_alt')} class='team-logo'> -->
  Team Polychrome
  <p>{$_('h1.subtitle')}</p>
</h1>

<nav>
  <ul>
    <li><a href={resolve('/about')} class='pages'>{$_('nav.about')}</a></li>
    <li><a href={resolve('/levels')} class='pages'>{$_('nav.levels')}</a></li>
    <li><a href={resolve('/resources')} class='pages'>{$_('nav.resources')}</a></li>

    <li><a href={null} onclick={(e) => { e.preventDefault(); toggleLang(); }} class='i18n'>简中 / EN</a></li>
  </ul>
</nav>

<section class='about'>
  <div class='content'>
    <h2>{$_('pages.home.about.heading')}</h2>
    <p>{$_('pages.home.about.text')}</p>
  </div>
  <div class='links'>
    <a href={resolve('/about')}>{$_('pages.home.about.view_link')}</a>
    <a href='https://space.bilibili.com/3546710827600010' rel='noopener noreferrer' target='_blank'>{$_('pages.home.about.channel_link')}</a>
  </div>
</section>

<section class='projects'>
  <div class='content'>
    <h2>{$_('pages.home.projects.levels_heading')}</h2>
    <p>{$_('pages.home.projects.levels_text')}</p>
  </div>
  <div class='links'>
    <a href={resolve('/levels')}>{$_('pages.home.projects.levels_link')}</a>
  </div>

  <div class='content'>
    <h2>{$_('pages.home.projects.tools_heading')}</h2>
    <p>{$_('pages.home.projects.tools_text')}</p>
  </div>
  <div class='links'>
    <a href={resolve('/resources')}>{$_('pages.home.projects.tools_link')}</a>
  </div>
</section>

<section class='website-info'>
  <div class='content'>
    <h2>{$_('pages.home.website.heading')}</h2>
    <p>
      {$_('pages.home.website.created_by')} <strong>nuomibinggao</strong> {$_('pages.home.website.framework')}<a href='https://svelte.dev' rel='noopener noreferrer' target='_blank' class='inline-link'>SvelteKit</a>{$_('pages.home.website.source_code')}
      <a href='https://github.com/nuomibinggao/Team-Polychrome-Website' rel='noopener noreferrer' target='_blank' class='inline-link'>GitHub</a>{$_('pages.home.website.license')}
      <a href='https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en' rel='noopener noreferrer' target='_blank' class='inline-link'>CC BY-NC-ND 4.0</a>{$_('pages.home.website.license_end')}
    </p>
  </div>
</section>

<footer>
  {$_('footer.copyright')}
  <div class='footer-splash'>{$_('footer.splash')}</div>
</footer>
