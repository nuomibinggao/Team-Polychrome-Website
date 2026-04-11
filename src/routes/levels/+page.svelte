<script lang='ts'>
  import { _, locale } from 'svelte-i18n';
  import { resolve } from '$app/paths';
  import { toggleLang } from '$lib/i18n/toggle';
  import DOMPurify from 'dompurify';

  type Person = { name: string; link: string };

  const levels = fetch('/data-storage/levels/levels.json').then(r => r.json());

  function sanitize(html: string): string {
    return DOMPurify.sanitize(html, { ALLOWED_TAGS: ['strong', 'em', 'a', 'br'] });
  }

  function getCredits(list: Array<Person | null>): Person[] {
    return list.filter((p): p is Person => p !== null);
  }
</script>

<svelte:head>
  <title>{$_('meta.title')} | {$_('pages.levels.heading')}</title>
</svelte:head>

<h1>
  <!-- <img src='images/placeholder.png' alt={$_('h1.logo_alt')} class='team-logo'> -->
  Team Polychrome
  <p>{$_('pages.levels.heading')}</p>
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
        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
        <a href='https://space.bilibili.com/3546710827600010' rel='noopener noreferrer' target='_blank'>{$_('pages.about.channel_link')}</a>
      </li>
      <li>
        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
        <a href='https://tuforums.com' rel='noopener noreferrer' target='_blank'>{$_('pages.about.tuf_link')}</a>
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
              {#each level.artist as artist, i (artist.link ?? artist.name[0])}
                {#if artist.link}
                  <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                  <a href={artist.link} rel='noopener noreferrer' target='_blank' class='inline-link'>{artist.name[0]}</a>
                {:else}
                  <span>{artist.name[0]}</span>
                {/if}
                {#if artist.name[1]}
                  <span class='artist-alt'>({artist.name[1]})</span>
                {/if}
                {#if i < level.artist.length - 1}
                  <span class='artist-separator'>&</span>
                {/if}
              {/each}
            </p>
          </div>

          <div class='level-tags'>
            {#if level['special-tag'] && level['special-tag'][0][0]}
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
          {#if getCredits(level.charters).length}
            <div class='credit-group'>
              <span class='credit-label'>{$_('pages.levels.charters')}:</span>
              {#each getCredits(level.charters) as person, i (person.name)}
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                <a href={person.link} rel='noopener noreferrer' target='_blank' class='inline-link'>{person.name}</a>{#if i < getCredits(level.charters).length - 1},&nbsp;{/if}
              {/each}
            </div>
          {/if}
          {#if getCredits(level.guest_charters).length}
            <div class='credit-group'>
              <span class='credit-label'>{$_('pages.levels.guest_charters')}:</span>
              {#each getCredits(level.guest_charters) as person, i (person.name)}
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                <a href={person.link} rel='noopener noreferrer' target='_blank' class='inline-link'>{person.name}</a>{#if i < getCredits(level.guest_charters).length - 1},&nbsp;{/if}
              {/each}
            </div>
          {/if}
          {#if getCredits(level.vfxers).length}
            <div class='credit-group'>
              <span class='credit-label'>{$_('pages.levels.vfxers')}:</span>
              {#each getCredits(level.vfxers) as person, i (person.name)}
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                <a href={person.link} rel='noopener noreferrer' target='_blank' class='inline-link'>{person.name}</a>{#if i < getCredits(level.vfxers).length - 1},&nbsp;{/if}
              {/each}
            </div>
          {/if}
          {#if getCredits(level.guest_vfxers).length}
            <div class='credit-group'>
              <span class='credit-label'>{$_('pages.levels.guest_vfxers')}:</span>
              {#each getCredits(level.guest_vfxers) as person, i (person.name)}
                <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                <a href={person.link} rel='noopener noreferrer' target='_blank' class='inline-link'>{person.name}</a>{#if i < getCredits(level.guest_vfxers).length - 1},&nbsp;{/if}
              {/each}
            </div>
          {/if}
        </div>

        <div class='level-links'>
          {#if level['demo-video-id']}
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
            <a href={`https://bilibili.com/video/${level['demo-video-id'][1]}`} rel='noopener noreferrer' target='_blank'>
              {$_('pages.levels.watch_demo')}
            </a>
          {/if}
          {#if level['song-link']}
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
            <a href={level['song-link'][1]} rel='noopener noreferrer' target='_blank'>
              {level['song-link'][0]}{$_('pages.levels.song_on')}
            </a>
          {/if}
          {#if level['original_rhythm_game_level_link']?.[2]}
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
            <a href={level['original_rhythm_game_level_link'][2]} rel='noopener noreferrer' target='_blank'>
              {$locale === 'en-us' ? level['original_rhythm_game_level_link'][0] : level['original_rhythm_game_level_link'][1]}
            </a>
          {/if}
        </div>

      </div>
    {/each}
  {:catch}
    <p class='error'>{$_('pages.levels.load_error')}</p>
  {/await}
</section>