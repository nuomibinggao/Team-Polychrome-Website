<script lang='ts'>
  import { _ } from 'svelte-i18n';
  import { resolve } from '$app/paths';
  import { toggleLang } from '$lib/i18n/toggle';

  function getAliases(key: string): string[] {
    const val = $_(key);
    return Array.isArray(val) ? val : [];
  }
</script>

<svelte:head>
  <title>{$_('meta.title')} | {$_('pages.about.heading')}</title>
</svelte:head>

<h1>
  <!-- <img src='images/placeholder.png' alt={$_('h1.logo_alt')} class='team-logo'> -->
  Team Polychrome
  <p>{$_('pages.about.heading')}</p>
</h1>

<nav>
  <ul>
    <li><a href={resolve('/levels')} class='pages'>{$_('nav.levels')}</a></li>
    <li><a href={resolve('/')} class='pages'>{$_('nav.back_home')}</a></li>
    <li><a href={null} onclick={(e) => { e.preventDefault(); toggleLang(); }} class='i18n'>简中 / EN</a></li>
  </ul>
</nav>

<section class='intro'>
  <div class='content'>
    <p>{$_('pages.about.text')}</p>
    <h3>{$_('pages.about.useful_links')}</h3>
    <ul>
      <li>
        <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
        <a href='https://space.bilibili.com/3546710827600010' rel='noopener noreferrer' target='_blank'>{$_('pages.about.channel_link')}</a>
      </li>
      <li>
        <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
        <a href='https://tuforums.com' rel='noopener noreferrer' target='_blank'>{$_('pages.about.tuf_link')}</a>
      </li>
      <li>
        <a href={null}>{$_('pages.about.join_link')}</a>
      </li>
    </ul>
  </div>
</section>

<section class='about'>
  <div class='content'>
    <h2>{$_('pages.about.brief_heading')}</h2>
    <p>{$_('pages.about.brief_text')}</p>
  </div>
</section>

<section class='members'>
  <h2>{$_('pages.about.members_heading')}</h2>
  <div class='members-grid'>

    <div class='member-card'>
      <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
      <a href='https://space.bilibili.com/1223643343' rel='noopener noreferrer' target='_blank' class='card-link' aria-label={$_('pages.about.member_profile', { values: { name: 'nuomibinggao' } })}></a>
      <img src='images/member-avatars/nuomibinggao.png' alt='nuomibinggao' class='member-avatar'>
      <h3>nuomibinggao</h3>
      <p class='roles'>{$_('pages.about.members.nuomibinggao.roles')}</p>
      {#if getAliases('pages.about.members.nuomibinggao.aliases').length}
        <p class='aliases'>{getAliases('pages.about.members.nuomibinggao.aliases').join(' · ')}</p>
      {/if}
    </div>

    <div class='member-card'>
      <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
      <a href='https://space.bilibili.com/1125672122' rel='noopener noreferrer' target='_blank' class='card-link' aria-label={$_('pages.about.member_profile', { values: { name: 'MLob_302' } })}></a>
      <img src='images/member-avatars/MLob_302.png' alt='MLob_302' class='member-avatar'>
      <h3>MLob_302</h3>
      <p class='roles'>{$_('pages.about.members.MLob_302.roles')}</p>
      {#if getAliases('pages.about.members.MLob_302.aliases').length}
        <p class='aliases'>{getAliases('pages.about.members.MLob_302.aliases').join(' · ')}</p>
      {/if}
    </div>

    <div class='member-card'>
      <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
      <a href='https://space.bilibili.com/1335919954' rel='noopener noreferrer' target='_blank' class='card-link' aria-label={$_('pages.about.member_profile', { values: { name: 'BrAme' } })}></a>
      <img src='images/member-avatars/BrAme.png' alt='BrAme' class='member-avatar'>
      <h3>BrAme</h3>
      <p class='roles'>{$_('pages.about.members.BrAme.roles')}</p>
      {#if getAliases('pages.about.members.BrAme.aliases').length}
        <p class='aliases'>{getAliases('pages.about.members.BrAme.aliases').join(' · ')}</p>
      {/if}
    </div>

    <div class='member-card'>
      <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
      <a href='https://space.bilibili.com/480281552' rel='noopener noreferrer' target='_blank' class='card-link' aria-label={$_('pages.about.member_profile', { values: { name: 'MingZi' } })}></a>
      <img src='images/member-avatars/MingZi.png' alt='MingZi' class='member-avatar'>
      <h3>MingZi</h3>
      <p class='roles'>{$_('pages.about.members.MingZi.roles')}</p>
      {#if getAliases('pages.about.members.MingZi.aliases').length}
        <p class='aliases'>{getAliases('pages.about.members.MingZi.aliases').join(' · ')}</p>
      {/if}
    </div>

    <div class='member-card'>
      <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
      <a href='https://space.bilibili.com/3546624443812737' rel='noopener noreferrer' target='_blank' class='card-link' aria-label={$_('pages.about.member_profile', { values: { name: 'llllaio' } })}></a>
      <img src='images/member-avatars/llllaio.png' alt='llllaio' class='member-avatar'>
      <h3>llllaio</h3>
      <p class='roles'>{$_('pages.about.members.llllaio.roles')}</p>
      {#if getAliases('pages.about.members.llllaio.aliases').length}
        <p class='aliases'>{getAliases('pages.about.members.llllaio.aliases').join(' · ')}</p>
      {/if}
    </div>

    <div class='member-card'>
      <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
      <a href='https://space.bilibili.com/1176118653' rel='noopener noreferrer' target='_blank' class='card-link' aria-label={$_('pages.about.member_profile', { values: { name: 'Larus_' } })}></a>
      <img src='images/member-avatars/Larus_.png' alt='Larus_' class='member-avatar'>
      <h3>Larus_</h3>
      <p class='roles'>{$_('pages.about.members.Larus_.roles')}</p>
      {#if getAliases('pages.about.members.Larus_.aliases').length}
        <p class='aliases'>{getAliases('pages.about.members.Larus_.aliases').join(' · ')}</p>
      {/if}
    </div>

    <div class='member-card'>
      <!-- eslint-disable-next-line svelte/no-href-without-resolve -->
      <a href='https://space.bilibili.com/640530603' rel='noopener noreferrer' target='_blank' class='card-link' aria-label={$_('pages.about.member_profile', { values: { name: 'PoFic' } })}></a>
      <img src='images/member-avatars/PoFic.png' alt='PoFic' class='member-avatar'>
      <h3>PoFic</h3>
      <p class='roles'>{$_('pages.about.members.PoFic.roles')}</p>
      {#if getAliases('pages.about.members.PoFic.aliases').length}
        <p class='aliases'>{getAliases('pages.about.members.PoFic.aliases').join(' · ')}</p>
      {/if}
    </div>

  </div>
</section>

<footer>
  {$_('footer.copyright')}
  <div class='footer-splash'>{$_('footer.splash')}</div>
</footer>
