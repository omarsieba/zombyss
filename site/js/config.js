// Zombyss settings. This file is NOT obfuscated so you can edit it on your server.
window.HR_CONFIG = {
  // Where the game's API lives. '/api' = the included Node server (server/server.js).
  // Set to '' to run as a static site with no accounts (leaderboard then stays on each device).
  api: '/api',
  // Private matchmaking for online rooms, served by the same Node server at /peerjs.
  // Remove this block to fall back to the free public PeerJS server.
  peer: { path: '/peerjs' },
  // Store links for the buttons on the landing page. Leave empty until the apps are live.
  stores: { android: '', ios: '' },
  // Your social pages for the website footer (leave empty to hide an icon).
  socials: { tiktok: '', instagram: '', discord: '', youtube: '' }
};
