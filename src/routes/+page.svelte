<svelte:head>
  <title>{$_('meta.title')}</title>
</svelte:head>

<script>
  import { _, locale } from 'svelte-i18n';
  import { resolve } from '$app/paths';
</script>

<h1>
  <img src='images/placeholder.png' alt='{$_('h1.logo_alt')}' class='team-logo'>
  {$_('h1.subtitle')}
</h1>

<nav>
  <ul>
    <li><a href={resolve('/about')} class='pages'>{$_('nav.about')}</a></li>
    <li><a href={resolve('/levels')} class='pages'>{$_('nav.levels')}</a></li>
    <li><a href={resolve('/resources')} class='pages'>{$_('nav.resources')}</a></li>
    <li><a href={resolve('/newsletter')} class='pages'>{$_('nav.newsletter')}</a></li>

    <li><a href={null} on:click|preventDefault={() => locale.set('en-us')} class='i18n'>English (US)</a></li>
    <li><a href={null} on:click|preventDefault={() => locale.set('zh-cn')} class='i18n'>简体中文</a></li>
  </ul>
</nav>

<section class='warning'>
  <div class='content'>
    <h2>{$_('warning.title')}</h2>
    <p><strong>{$_('warning.message')}</strong></p>

    <h3>{$_('warning.unfinished_pages_title')}</h3>
    <ul>
      {#each $_('warning.unfinished_pages') as page (page)}
        <li>{page}</li>
      {/each}
    </ul>

    <h3>{$_('warning.todo_title')}</h3>
    <ul>
      {#each $_('warning.todo') as task (task)}
        <li>{task}</li>
      {/each}
    </ul>
  </div>
</section>

<section class='about'>
  <div class='content'>
    <h2>{$_('about.heading')}</h2>
    <p>{$_('about.text')}</p>
  </div>
  <div class='links'>
    <a href={resolve('/about')}>{$_('about.view_link')}</a>
    <a href='https://space.bilibili.com/3546710827600010' rel='noopener noreferrer' target='_blank'>{$_('about.channel_link')}</a>
    <a href={resolve('/')}>{$_('about.join_link')}</a>
  </div>
</section>

<section class='projects'>
  <div class='content'>
    <h2>{$_('projects.levels_heading')}</h2>
    <p>{$_('projects.levels_text')}</p>
  </div>
  <div class='links'>
    <a href={resolve('/levels')}>{$_('projects.levels_link')}</a>
  </div>

  <div class='content'>
    <h2>{$_('projects.tools_heading')}</h2>
    <p>{$_('projects.tools_text')}</p>
  </div>
  <div class='links'>
    <a href={resolve('/resources')}>{$_('projects.tools_link')}</a>
  </div>
</section>

<section class='newsletter'>
  <div class='content'>
    <h2>{$_('newsletter.heading')}</h2>
    <p>{$_('newsletter.text')}</p>
  </div>
  <div class='links'>
    <a href={resolve('/newsletter')}>{$_('newsletter.link')}</a>
  </div>
</section>

<section class='website-info'>
  <div class='content'>
    <h2>{$_('website.heading')}</h2>
    <p>
      {$_('website.created_by')} <strong>nuomibinggao</strong> {$_('website.framework')}<a href='https://svelte.dev' rel='noopener noreferrer' target='_blank' class='inline-link'>SvelteKit</a>{$_('website.source_code')}
      <a href='https://github.com/nuomibinggao/Team-Polychrome-Website' rel='noopener noreferrer' target='_blank' class='inline-link'>GitHub</a>{$_('website.license')}
      <a href='https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en' rel='noopener noreferrer' target='_blank' class='inline-link'>CC BY-NC-ND 4.0</a>{$_('website.license_end')}
    </p>
  </div>
</section>

<footer>
  {$_('footer.copyright')}
  <div class='footer-splash'>{$_('footer.splash')}</div>
</footer>
