<script lang='ts'>
  import { _, locale } from 'svelte-i18n';
  import { resolve } from '$app/paths';
  import { toggleLang } from '$lib/i18n/toggle';
  import DOMPurify from 'dompurify';

  const levels = fetch('/data-storage/levels.json').then(r => r.json());

  function sanitize(html: string): string {
    return DOMPurify.sanitize(html, { ALLOWED_TAGS: ['strong', 'em', 'a', 'br'] });
  }
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
  {#await levels}
    <p class='loading'>{$_('pages.levels.loading')}</p>
  {:then data}
    {#each [...data].sort((a, b) => b.id - a.id) as level (level.id)}
      <div class='level-card'>

        <div class='level-header'>
          <div class='level-title-block'>
            <h2 class='level-title'>{level.title}</h2>
            <p class='level-artist'>
              {#if level['artist-link']}
                <a href={resolve(level['artist-link'])} rel='noopener noreferrer' target='_blank' class='inline-link'>
                  {Array.isArray(level.artist) ? level.artist[0] : level.artist}
                </a>
                {#if Array.isArray(level.artist) && level.artist[1]}
                  <span class='artist-alt'>({level.artist[1]})</span>
                {/if}
              {:else}
                {Array.isArray(level.artist) ? level.artist[0] : level.artist}
                {#if Array.isArray(level.artist) && level.artist[1]}
                  <span class='artist-alt'>({level.artist[1]})</span>
                {/if}
              {/if}
            </p>
          </div>

          <div class='level-tags'>
            {#if level['special-tag']}
              <span class='tag tag-special'>
                {$locale === 'en-us' ? level['special-tag'][0][0] : level['special-tag'][1][0]}
              </span>
            {/if}
            {#if level['status-tag']}
              <span class='tag tag-status'>
                {$locale === 'en-us' ? level['status-tag'][0][0] : level['status-tag'][1][0]}
              </span>
            {/if}
            {#if level['demo-video-id']}
              <span class='tag tag-demo'>
                {$locale === 'en-us' ? level['demo-video-id'][0][0] : level['demo-video-id'][0][1]}
              </span>
            {/if}
            {#if level['tuf-displayed-diff']}
              <img
                src='https://api.tuforums.com/v2/media/image/icon/{level['tuf-displayed-diff']}.png'
                alt={level['tuf-displayed-diff']}
                class='tuf-diff-icon'
              />
              {#if level['tuf-manager-diff']}
                <span class='tuf-diff-slash'>/</span>
                <img
                  src='https://api.tuforums.com/v2/media/image/icon/{level['tuf-manager-diff']}.png'
                  alt={level['tuf-manager-diff']}
                  class='tuf-diff-icon'
                />
              {/if}
            {/if}
          </div>
        </div>

        {#if level['demo-video-id']}
          <div class='level-player'>
            <iframe
              src='https://player.bilibili.com/player.html?bvid={level['demo-video-id'][1]}&autoplay=0'
              scrolling='no'
              frameborder='0'
              allowfullscreen
              title='{level.title} demo'
            ></iframe>
          </div>
        {/if}

        <div class='level-meta'>
          <span>{$_('pages.levels.released')}: {level['release-date']}</span>
          {#if level.bpm}
            <span>{$_('pages.levels.bpm')}: {level.bpm}</span>
          {/if}
          {#if level['tile-count']}
            <span>{$_('pages.levels.tiles')}: {level['tile-count'].toLocaleString()}</span>
          {/if}
        </div>

        {#if level.level_desc && ($locale === 'en-us' ? level.level_desc[0] : level.level_desc[1])}
          <div class='level-description'>
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <p>{@html sanitize($locale === 'en-us' ? level.level_desc[0] : level.level_desc[1])}</p>
          </div>
        {/if}

        <div class='level-credits'>
          <div class='credit-group'>
            <span class='credit-label'>{$_('pages.levels.charters')}:</span>
            {#each level.charters as person, i (person.name)}
              <a href={resolve(person.link)} rel='noopener noreferrer' target='_blank' class='inline-link'>{person.name}</a>{#if i < level.charters.length - 1},&nbsp;{/if}
            {/each}
          </div>
          {#if level.vfxers?.length}
            <div class='credit-group'>
              <span class='credit-label'>{$_('pages.levels.vfxers')}:</span>
              {#each level.vfxers as person, i (person.name)}
                <a href={resolve(person.link)} rel='noopener noreferrer' target='_blank' class='inline-link'>{person.name}</a>{#if i < level.vfxers.length - 1},&nbsp;{/if}
              {/each}
            </div>
          {/if}
        </div>

        <div class='level-links'>
          {#if level['demo-video-id']}
            <a href={`https://bilibili.com/video/${level['demo-video-id'][1]}`} rel='noopener noreferrer' target='_blank'>
              {$_('pages.levels.watch_demo')}
            </a>
          {/if}
          {#if level['song-link']}
            <a href={resolve(level['song-link'][1])} rel='noopener noreferrer' target='_blank'>
              {level['song-link'][0]}{$_('pages.levels.song_on')}
            </a>
          {/if}
        </div>

      </div>
    {/each}
  {:catch}
    <p class='error'>{$_('pages.levels.load_error')}</p>
  {/await}
</section>