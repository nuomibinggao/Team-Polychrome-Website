<svelte:head>
  <title>Team Polychrome | Error 404 - Page Not Found</title>
</svelte:head>

<div class="track">
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile missed"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile missed"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
  <div class="tile"></div>
</div>

<div class="card">
  <span class="badge">Miss ✕</span>

  <div class="error-number">404</div>

  <div class="divider"></div>

  <h1>You missed a beat.</h1>
  <p>This page doesn't exist — looks like it got off-track somewhere.<br>Let's get you back in rhythm.</p>

  <div class="buttons">
    <a href="/" class="btn">Back to Home</a>
  </div>

  <div class="foot-note">Even errors can look good.</div>
</div>

<style>
  /* ── Page layout ── */
  :global(body) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  :global(body::before), :global(body::after) {
    content: '';
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  :global(body::before) {
    width: 600px; height: 600px;
    top: -200px; right: -150px;
    background: radial-gradient(circle, rgba(196,168,232,0.22) 0%, transparent 70%);
    animation: blobDrift 8s ease-in-out infinite alternate;
  }
  :global(body::after) {
    width: 400px; height: 400px;
    bottom: -100px; left: -100px;
    background: radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%);
    animation: blobDrift 10s ease-in-out infinite alternate-reverse;
  }

  @keyframes blobDrift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(30px, 20px) scale(1.05); }
  }

  /* ── Beat track ── */
  .track {
    position: fixed;
    bottom: 48px;
    left: 0; right: 0;
    display: flex;
    justify-content: center;
    gap: 14px;
    z-index: 0;
  }

  .tile {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: var(--border);
    opacity: 0.5;
    animation: tilePulse 1.2s ease-in-out infinite;
  }
  .tile:nth-child(odd)  { animation-delay: 0s; }
  .tile:nth-child(even) { animation-delay: 0.6s; }
  .tile.missed {
    background: var(--purple-mid);
    opacity: 1;
    animation: missedPulse 2s ease-in-out infinite;
  }

  @keyframes tilePulse {
    0%, 100% { transform: scaleY(1);   opacity: 0.3; }
    50%       { transform: scaleY(1.6); opacity: 0.55; }
  }
  @keyframes missedPulse {
    0%   { transform: scale(1);    box-shadow: 0 0 0 0 rgba(124,58,237,0.4); }
    50%  { transform: scale(1.15); box-shadow: 0 0 0 12px rgba(124,58,237,0); }
    100% { transform: scale(1);    box-shadow: 0 0 0 0 rgba(124,58,237,0); }
  }

  /* ── Card ── */
  .card {
    position: relative;
    z-index: 1;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 28px;
    padding: 64px 80px 56px;
    text-align: center;
    max-width: 560px;
    width: calc(100% - 48px);
    box-shadow: 0 8px 48px rgba(107,33,168,0.1);
    animation: cardIn 0.7s cubic-bezier(0.22,1,0.36,1) both;
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(32px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* ── 404 glitch ── */
  .error-number {
    font-size: clamp(5rem, 18vw, 9rem);
    font-weight: 700;
    color: var(--purple-deep);
    line-height: 1;
    letter-spacing: -0.04em;
    position: relative;
    display: inline-block;
    animation: glitch 4s infinite;
  }
  .error-number::before,
  .error-number::after {
    content: '404';
    position: absolute;
    inset: 0;
    font-weight: 700;
  }
  .error-number::before {
    color: var(--purple-mid);
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
    animation: glitchTop 4s infinite;
  }
  .error-number::after {
    color: var(--purple-light);
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    animation: glitchBot 4s infinite;
  }

  @keyframes glitch {
    0%, 90%, 100% { transform: translate(0); }
    92%            { transform: translate(-3px, 1px); }
    94%            { transform: translate(3px, -1px); }
    96%            { transform: translate(-2px, 2px); }
    98%            { transform: translate(2px, -2px); }
  }
  @keyframes glitchTop {
    0%, 90%, 100% { transform: translate(0); opacity: 0; }
    92%            { transform: translate(-4px, -2px); opacity: 0.8; }
    94%            { transform: translate(4px, 1px); opacity: 0.6; }
    96%            { transform: translate(0); opacity: 0; }
  }
  @keyframes glitchBot {
    0%, 90%, 100% { transform: translate(0); opacity: 0; }
    93%            { transform: translate(4px, 2px); opacity: 0.7; }
    95%            { transform: translate(-4px, -1px); opacity: 0.5; }
    97%            { transform: translate(0); opacity: 0; }
  }

  /* ── Badge ── */
  .badge {
    display: inline-block;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--purple);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 999px;
    margin-bottom: 20px;
    animation: cardIn 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both;
  }

  /* ── Text ── */
  h1 {
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 700;
    color: var(--purple-deep);
    margin: 16px 0 12px;
    line-height: 1.2;
    animation: cardIn 0.7s 0.15s cubic-bezier(0.22,1,0.36,1) both;
  }

  p {
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 36px;
    animation: cardIn 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both;
  }

  /* ── Divider ── */
  .divider {
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, var(--purple), transparent);
    border-radius: 2px;
    margin: 0 auto 20px;
    animation: cardIn 0.7s 0.12s both;
  }

  /* ── Buttons ── */
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    animation: cardIn 0.7s 0.28s cubic-bezier(0.22,1,0.36,1) both;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 28px;
    border-radius: 999px;
    font-family: 'Chillax', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    background: var(--purple);
    color: var(--white);
    border: none;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(107,33,168,0.3);
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  }
  .btn:hover {
    background: var(--purple-deep);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(107,33,168,0.35);
  }
  .btn:active { transform: translateY(0); }

  /* ── Footer note ── */
  .foot-note {
    margin-top: 32px;
    font-size: 0.78rem;
    color: var(--purple-light);
    letter-spacing: 0.04em;
    animation: cardIn 0.7s 0.38s both;
  }

  /* ── Responsive ── */
  @media (max-width: 480px) {
    .card { padding: 48px 28px 40px; }
    .buttons { flex-direction: column; }
  }
</style>