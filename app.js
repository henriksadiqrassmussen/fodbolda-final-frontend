const api = window.footballRegister;

const LANGS = [
  { code: 'da', name: 'Dansk' }, { code: 'en', name: 'English' }, { code: 'zh', name: '中文' },
  { code: 'hi', name: 'हिन्दी' }, { code: 'es', name: 'Español' }, { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' }, { code: 'bn', name: 'বাংলা' }, { code: 'pt', name: 'Português' }, { code: 'ru', name: 'Русский' }

];

const FALLBACK_AVAILABLE_LEAGUES = [
  { id:'4480', name:'UEFA Champions League', country:'Europe' },
  { id:'4481', name:'UEFA Europa League', country:'Europe' },
  { id:'4482', name:'UEFA Europa Conference League', country:'Europe' },
  { id:'4328', name:'English Premier League', country:'England' },
  { id:'4329', name:'English League Championship', country:'England' },
  { id:'4330', name:'Scottish Premier League', country:'Scotland' },
  { id:'4331', name:'German Bundesliga', country:'Germany' },
  { id:'4332', name:'Italian Serie A', country:'Italy' },
  { id:'4334', name:'French Ligue 1', country:'France' },
  { id:'4335', name:'Spanish La Liga', country:'Spain' },
  { id:'4337', name:'Dutch Eredivisie', country:'Netherlands' },
  { id:'4338', name:'Belgian Pro League', country:'Belgium' },
  { id:'4344', name:'Portuguese Primeira Liga', country:'Portugal' },
  { id:'4351', name:'Danish Superliga', country:'Denmark' },
  { id:'4355', name:'Swedish Allsvenskan', country:'Sweden' },
  { id:'4356', name:'Norwegian Eliteserien', country:'Norway' },
  { id:'4359', name:'Turkish Super Lig', country:'Turkey' },
  { id:'4391', name:'Major League Soccer', country:'USA' }
];

const DA = {
  eyebrow:'Railway-ready desktop sports register', title:'Football Result Register v1.2', subtitle:'Railway sync, PostgreSQL, 5 års historik, arkiv-lister, kommende kampe, indbyrdes 1-X-2 statistik, oddssætter, dynamisk kamp-dropdown, favoritkampe og kampdetaljer.', help:'Hjælp', settings:'Indstillinger', provider:'Datakilde', apiKey:'TheSportsDB API-nøgle', railwayUrl:'Railway API URL', autoUpdate:'Auto-opdatering', fetchAll:'Hent/opdater alle ligaer', syncToRailway:'Sync til Railway', syncFromRailway:'Hent fra Railway', adminUpdate:'Admin: opdater alt nu', saveSettings:'Gem', overview:'Overblik', leagues:'Ligaer', teams:'Hold', matches:'Kampe', finished:'Afsluttede', upcoming:'Kommende', exportJson:'Eksportér JSON', exportCsv:'Eksportér CSV', importJson:'Importér JSON', clear:'Ryd register', lastUpdated:'Sidst opdateret', leagueManager:'Ligaer', addLeague:'Tilføj liga', leagueIdLabel:'Liga ID', leagueNameLabel:'Liga navn', addLeagueHint:'Vælg en liga fra dropdown-listen. Listen kan hentes fra TheSportsDB og har også en indbygget fallback-liste.', fetchAvailableLeagues:'Hent tilgængelige ligaer', searchLeague:'Søg liga', chooseLeague:'Vælg liga', addSelectedLeague:'Tilføj valgt liga', availableLeaguesLoaded:'Tilgængelige ligaer hentet:', noAvailableLeague:'Vælg en liga først.', leagueAdded:'Liga tilføjet:', leagueUpdated:'Liga opdateret:', missingLeagueId:'Skriv et liga-ID først.', register:'Resultat-register', searchPlaceholder:'Søg hold, runde, liga, status...', allLeagues:'Alle ligaer', all:'Alle', date:'Dato', league:'Liga', home:'Hjemme', score:'Resultat', away:'Ude', round:'Runde', statusCol:'Status', details:'Detaljer', view:'Se', helpTitle:'Sådan bruges appen', help1:'Start med liga ID 4480 til UEFA Champions League.', help2:'Tilføj flere ligaer og markér dem som aktive.', help3:'Tryk “Hent/opdater alle ligaer” for lokal import fra TheSportsDB.', help4:'Kør serveren med npm run backend, tilføj PostgreSQL på Railway og brug sync-knapperne.', help5:'Backend har cron-job hver time og admin-endpoint til “opdater alt nu”.', apiDocs:'Åbn TheSportsDB docs', ready:'Klar.', saved:'Gemt.', fetching:'Henter data...', fetchingLeague:'Henter liga', noData:'Ingen data fundet fra API.', merged:'Kampe gemt/opdateret:', teamsMerged:'Hold gemt/opdateret:', cleared:'Register ryddet.', imported:'Import færdig.', exported:'Eksport færdig.', confirmClear:'Vil du rydde hele registeret?', noMatches:'Ingen kampe i registeret endnu.', synced:'Synkronisering færdig.', syncFailed:'Sync fejlede', updatedAll:'Alle aktive ligaer opdateret.', addLeaguePrompt:'Skriv liga ID fra TheSportsDB', addLeagueNamePrompt:'Skriv liga navn', enabled:'Aktiv', remove:'Fjern', country:'Land', name:'Navn', id:'ID', detailTitle:'Kampdetaljer', venue:'Stadion', season:'Sæson', time:'Tid', status:'Status', homeTeam:'Hjemmehold', awayTeam:'Udehold', eventId:'Event ID', badges:'Logoer', draw:'Uafgjort', historyUpdate:'Hent 5 års historik', h2hTitle:'Indbyrdes statistik 1-X-2', fiveYears:'5 år tilbage', h2hIntro:'Vælg to hold og se hvem der har vundet mest indbyrdes i registeret.', teamA:'Hold A', teamB:'Hold B', historyYears:'Historik', calculateH2h:'Beregn indbyrdes', topPairs:'Vis hyppigste opgør', totalGames:'Kampe', teamAWins:'Hold A sejre', teamBWins:'Hold B sejre', h2hEmpty:'Ingen indbyrdes kampe fundet. Hent 5 års historik først.', mostWins:'Flest sejre', help6:'Brug “Hent 5 års historik” før indbyrdes statistik, så databasen får hele sæsoner.', help7:'Oddssætteren bruger historiske 1-X-2 resultater med smoothing og bookmaker-margin.', oddsTitle:'Oddssætter', oddsIntro:'Vælg liga, søg kampnavn og lad dropdown-listen opdatere sig dynamisk. Favoritkampe kan markeres med kryds/stjerne.', bookMargin:'Bookmaker-margin', minSample:'Min. kampe for god sikkerhed', calculateOdds:'Sæt odds', copyFromH2h:'Kopiér hold fra H2H', fairOdds:'Fair odds', bookOdds:'Bookmaker-odds', probability:'Sandsynlighed', confidence:'Sikkerhed', suggestedPick:'Forslag', low:'Lav', medium:'Middel', good:'God', oddsEmpty:'Ingen indbyrdes data nok. Hent 5 års historik først.', oddsDisclaimer:'Statistisk estimat baseret på historik. Ikke betting-rådgivning.', archiveTitle:'Arkiv-søgning', archiveListPill:'Kamp-liste', archiveIntro:'Søg i historikken og få kampene som en nem liste i stedet for kun tabel.', searchText:'Søg', searchArchive:'Søg i arkiv', clearArchive:'Ryd arkivsøgning', upcomingTitle:'Kommende kampe', nextMatches:'Næste kampe', upcomingIntro:'Vis kommende kampe fra registeret/Railway-data som en overskuelig liste.', limit:'Antal', refreshUpcoming:'Vis kommende', showAllUpcoming:'Vis alle kommende i tabellen', archiveNoResults:'Ingen arkivkampe fundet.', upcomingNoResults:'Ingen kommende kampe fundet. Tryk Hent/opdater alle ligaer eller Admin: opdater alt nu.', archiveResultsCount:'Arkivkampe fundet:', upcomingResultsCount:'Kommende kampe vist:', matchSearch:'Søg kamp', chooseMatch:'Vælg kamp', favoriteMatch:'Favoritkamp', markFavorite:'Sæt kryds', refreshMatchDropdown:'Opdater kamp-dropdown', matchingMatches:'Matchende kampe', favoriteMatches:'Favoritkampe', noMatchingMatches:'Ingen kampe matcher søgningen.', noFavoriteMatches:'Ingen favoritkampe markeret endnu.', favoriteSaved:'Favorit gemt.', favoriteRemoved:'Favorit fjernet.', matchSelected:'Kamp valgt til oddssætter.'
};
const EN = { ...DA, title:'Football Result Register v1.2', subtitle:'Railway sync, PostgreSQL database, 5-year history, archive lists, upcoming matches, head-to-head 1-X-2 stats, odds setter and match details.', help:'Help', settings:'Settings', provider:'Data source', railwayUrl:'Railway API URL', autoUpdate:'Auto update', fetchAll:'Fetch/update all leagues', syncToRailway:'Sync to Railway', syncFromRailway:'Fetch from Railway', adminUpdate:'Admin: update all now', saveSettings:'Save', overview:'Overview', leagues:'Leagues', teams:'Teams', matches:'Matches', finished:'Finished', upcoming:'Upcoming', register:'Results register', searchPlaceholder:'Search teams, round, league, status...', allLeagues:'All leagues', fetchAvailableLeagues:'Fetch available leagues', searchLeague:'Search league', chooseLeague:'Choose league', addSelectedLeague:'Add selected league', availableLeaguesLoaded:'Available leagues loaded:', noAvailableLeague:'Choose a league first.', date:'Date', league:'League', home:'Home', score:'Score', away:'Away', details:'Details', view:'View', ready:'Ready.', saved:'Saved.', fetching:'Fetching data...', noMatches:'No matches in the register yet.', synced:'Sync complete.', updatedAll:'All active leagues updated.', oddsTitle:'Odds setter', oddsIntro:'Calculate fair odds and bookmaker odds from head-to-head history. Statistical tool only — not a guaranteed tip.', bookMargin:'Bookmaker margin', minSample:'Minimum games for good confidence', calculateOdds:'Set odds', copyFromH2h:'Copy teams from H2H', fairOdds:'Fair odds', bookOdds:'Bookmaker odds', probability:'Probability', confidence:'Confidence', suggestedPick:'Suggested pick', low:'Low', medium:'Medium', good:'Good', oddsEmpty:'Not enough head-to-head data. Fetch 5-year history first.', oddsDisclaimer:'Statistical estimate based on history. Not betting advice.', archiveTitle:'Archive search', archiveListPill:'Match list', archiveIntro:'Search the history and show matches as an easy list.', searchText:'Search', searchArchive:'Search archive', clearArchive:'Clear archive search', upcomingTitle:'Upcoming matches', nextMatches:'Next matches', upcomingIntro:'Show upcoming matches from local/Railway data as a clear list.', limit:'Limit', refreshUpcoming:'Show upcoming', showAllUpcoming:'Show all upcoming in table', archiveNoResults:'No archive matches found.', upcomingNoResults:'No upcoming matches found. Fetch/update leagues or run Admin update.', archiveResultsCount:'Archive matches found:', upcomingResultsCount:'Upcoming matches shown:', matchSearch:'Search match', chooseMatch:'Choose match', favoriteMatch:'Favorite match', markFavorite:'Check favorite', refreshMatchDropdown:'Refresh match dropdown', matchingMatches:'Matching matches', favoriteMatches:'Favorite matches', noMatchingMatches:'No matches match the search.', noFavoriteMatches:'No favorite matches yet.', favoriteSaved:'Favorite saved.', favoriteRemoved:'Favorite removed.', matchSelected:'Match selected for odds setter.' };
const I18N = { da: DA, en: EN, zh: EN, hi: EN, es: EN, fr: EN, ar: EN, bn: EN, pt: EN, ru: EN };

let store;
let autoTimer = null;
const $ = (id) => document.getElementById(id);
const t = (key) => (I18N[store?.language || 'da']?.[key] || DA[key] || key);

function populateLanguages() {
  $('languageSelect').innerHTML = LANGS.map(l => `<option value="${l.code}">${l.name}</option>`).join('');
}
function applyLanguage() {
  document.documentElement.lang = store.language || 'da';
  $('languageSelect').value = store.language || 'da';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
}
function syncInputsFromStore() {
  $('providerSelect').value = store.settings.provider || 'thesportsdb';
  $('apiKeyInput').value = store.settings.apiKey || '123';
  $('railwayUrlInput').value = store.settings.railwayApiUrl || 'http://localhost:8080';
  $('autoUpdateSelect').value = String(store.settings.autoUpdateDesktop !== false);
}
function syncStoreFromInputs() {
  store.language = $('languageSelect').value;
  store.settings.provider = $('providerSelect').value;
  store.settings.apiKey = $('apiKeyInput').value.trim() || '123';
  store.settings.railwayApiUrl = $('railwayUrlInput').value.trim().replace(/\/$/, '') || 'http://localhost:8080';
  store.settings.autoUpdateDesktop = $('autoUpdateSelect').value === 'true';
}
async function saveStore() { syncStoreFromInputs(); store = await api.saveStore(store); }
function calcResult1x2(homeScore, awayScore) { const h = Number(homeScore); const a = Number(awayScore); if (homeScore === '' || awayScore === '' || Number.isNaN(h) || Number.isNaN(a)) return ''; if (h > a) return '1'; if (h === a) return 'X'; return '2'; }

function normalizeEvent(e, league) {
  const homeScore = (e.intHomeScore !== null && e.intHomeScore !== undefined) ? String(e.intHomeScore) : '';
  const awayScore = (e.intAwayScore !== null && e.intAwayScore !== undefined) ? String(e.intAwayScore) : '';
  return {
    id: String(e.idEvent), eventId: String(e.idEvent), provider: 'thesportsdb', leagueId: String(league.id), leagueName: league.name || e.strLeague || '', season: e.strSeason || '', round: e.intRound || e.strRound || '', dateEvent: e.dateEvent || '', timeEvent: e.strTime || '', timestamp: e.strTimestamp || '', status: e.strStatus || e.strProgress || '', venue: e.strVenue || '', homeTeamId: e.idHomeTeam || '', awayTeamId: e.idAwayTeam || '', homeTeam: e.strHomeTeam || '', awayTeam: e.strAwayTeam || '', homeScore, awayScore, thumb: e.strThumb || '', video: e.strVideo || '', raw: e, result1x2: calcResult1x2(homeScore, awayScore)
  };
}
function normalizeTeam(team, league) {
  return { id: String(team.idTeam), provider:'thesportsdb', leagueId:String(league.id), leagueName:league.name, name:team.strTeam || '', shortName:team.strTeamShort || '', country:team.strCountry || league.country || '', badge:team.strBadge || '', logo:team.strLogo || '', jersey:team.strJersey || '', stadium:team.strStadium || '', website:team.strWebsite || '', raw:team };
}
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}
async function fetchLeagueData(league) {
  const key = encodeURIComponent(store.settings.apiKey || '123');
  const base = `https://www.thesportsdb.com/api/v1/json/${key}`;
  setStatus(`${t('fetchingLeague')} ${league.name}...`);
  const [next, past, teams] = await Promise.allSettled([
    fetchJson(`${base}/eventsnextleague.php?id=${encodeURIComponent(league.id)}`),
    fetchJson(`${base}/eventspastleague.php?id=${encodeURIComponent(league.id)}`),
    fetchJson(`${base}/lookup_all_teams.php?id=${encodeURIComponent(league.id)}`)
  ]);
  const events = [];
  if (next.status === 'fulfilled' && Array.isArray(next.value.events)) events.push(...next.value.events);
  if (past.status === 'fulfilled' && Array.isArray(past.value.events)) events.push(...past.value.events);
  const normalizedMatches = events.map(e => normalizeEvent(e, league));
  const normalizedTeams = teams.status === 'fulfilled' && Array.isArray(teams.value.teams) ? teams.value.teams.map(tm => normalizeTeam(tm, league)) : [];
  return { matches: normalizedMatches, teams: normalizedTeams };
}

function recentSeasons(years = 5) {
  const now = new Date();
  const start = now.getUTCMonth() >= 6 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
  return Array.from({ length: years }, (_, i) => `${start - i}-${start - i + 1}`);
}
async function fetchLeagueHistoryData(league, years = 5) {
  const key = encodeURIComponent(store.settings.apiKey || '123');
  const base = `https://www.thesportsdb.com/api/v1/json/${key}`;
  const seasons = recentSeasons(years);
  let allMatches = [];
  let allTeams = [];
  setStatus(`Historik: ${league.name} (${seasons.join(', ')})`);
  const teams = await fetchJson(`${base}/lookup_all_teams.php?id=${encodeURIComponent(league.id)}`).catch(() => ({ teams: [] }));
  if (Array.isArray(teams.teams)) allTeams = teams.teams.map(tm => normalizeTeam(tm, league));
  for (const season of seasons) {
    const data = await fetchJson(`${base}/eventsseason.php?id=${encodeURIComponent(league.id)}&s=${encodeURIComponent(season)}`).catch(() => ({ events: [] }));
    if (Array.isArray(data.events)) allMatches.push(...data.events.map(e => normalizeEvent({ ...e, strSeason:e.strSeason || season }, league)));
  }
  return { matches: allMatches, teams: allTeams, seasons };
}
async function fetchHistoryAllActiveLeagues() {
  syncStoreFromInputs();
  const active = store.leagues.filter(l => l.enabled);
  if (!active.length) return setStatus('Ingen aktive ligaer.');
  let allMatches = [], allTeams = [];
  for (const league of active) {
    const data = await fetchLeagueHistoryData(league, 5);
    allMatches.push(...data.matches);
    allTeams.push(...data.teams);
  }
  store.matches = upsertById(store.matches, allMatches).sort((a,b) => String(b.dateEvent).localeCompare(String(a.dateEvent)));
  store.teams = upsertById(store.teams || [], allTeams).sort((a,b) => String(a.name).localeCompare(String(b.name)));
  store.lastUpdatedAt = new Date().toISOString();
  await api.saveStore(store);
  render();
  setStatus(`5 års historik hentet: ${allMatches.length} kampe, ${allTeams.length} hold.`);
}
function upsertById(items, incoming) {
  const map = new Map(items.map(x => [String(x.id), x]));
  for (const item of incoming) map.set(String(item.id), { ...(map.get(String(item.id)) || {}), ...item });
  return Array.from(map.values());
}
async function fetchAllActiveLeagues() {
  syncStoreFromInputs();
  const active = store.leagues.filter(l => l.enabled);
  if (!active.length) return setStatus('Ingen aktive ligaer.');
  let allMatches = [], allTeams = [];
  setStatus(t('fetching'));
  for (const league of active) {
    try {
      const data = await fetchLeagueData(league);
      allMatches.push(...data.matches);
      allTeams.push(...data.teams);
    } catch (err) {
      console.warn('League fetch failed', league, err);
      setStatus(`${league.name}: ${err.message}`);
    }
  }
  store.matches = upsertById(store.matches, allMatches).sort((a,b) => String(b.dateEvent).localeCompare(String(a.dateEvent)));
  store.teams = upsertById(store.teams || [], allTeams).sort((a,b) => String(a.name).localeCompare(String(b.name)));
  store.lastUpdatedAt = new Date().toISOString();
  await api.saveStore(store);
  render();
  setStatus(`${t('updatedAll')} ${t('merged')} ${allMatches.length}. ${t('teamsMerged')} ${allTeams.length}.`);
}
async function syncToRailway() {
  syncStoreFromInputs();
  const url = store.settings.railwayApiUrl;
  setStatus('Sender data til Railway...');
  const res = await fetch(`${url}/api/sync/push`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ leagues:store.leagues, teams:store.teams, matches:store.matches }) });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  store.lastSyncAt = new Date().toISOString();
  await api.saveStore(store);
  setStatus(`${t('synced')} ${data.matches || 0} kampe, ${data.teams || 0} hold.`);
}
async function syncFromRailway() {
  syncStoreFromInputs();
  const url = store.settings.railwayApiUrl;
  setStatus('Henter data fra Railway...');
  const res = await fetch(`${url}/api/register`);
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  store.leagues = data.leagues?.length ? data.leagues : store.leagues;
  store.teams = data.teams || [];
  store.matches = data.matches || [];
  store.lastSyncAt = new Date().toISOString();
  await api.saveStore(store);
  render();
  setStatus(t('synced'));
}
async function adminUpdateAll() {
  syncStoreFromInputs();
  const url = store.settings.railwayApiUrl;
  setStatus('Kalder Railway admin-opdatering...');
  const res = await fetch(`${url}/api/admin/update-all`, { method:'POST' });
  if (!res.ok) throw new Error(await res.text());
  await syncFromRailway();
}
async function adminUpdateHistory() {
  syncStoreFromInputs();
  const url = store.settings.railwayApiUrl;
  setStatus('Kalder Railway historik-opdatering...');
  if (url && !url.includes('localhost')) {
    const res = await fetch(`${url}/api/admin/update-history?years=5`, { method:'POST' });
    if (!res.ok) throw new Error(await res.text());
    await syncFromRailway();
  } else {
    await fetchHistoryAllActiveLeagues();
  }
}
function teamLogo(teamName, teamId) {
  const team = (store.teams || []).find(tm => String(tm.id) === String(teamId)) || (store.teams || []).find(tm => tm.name === teamName);
  const src = team?.badge || team?.logo || '';
  return src ? `<img class="team-logo" src="${escapeHtml(src)}" alt="">` : `<span class="team-logo"></span>`;
}
function scoreText(m) {
  if (m.homeScore !== '' && m.awayScore !== '') return `${m.homeScore} - ${m.awayScore}`;
  return 'vs';
}
function isFinished(m) {
  const status = String(m.status || '').toLowerCase();
  return status.includes('match finished') || status === 'ft' || status.includes('finished') || (m.homeScore !== '' && m.awayScore !== '');
}
function formatDate(m) {
  if (!m.dateEvent) return '';
  const iso = `${m.dateEvent}${m.timeEvent ? 'T' + m.timeEvent.replace('Z','') : ''}`;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return m.dateEvent;
  try { return new Intl.DateTimeFormat(store.language || 'da', { dateStyle:'medium', timeStyle: m.timeEvent ? 'short' : undefined }).format(d); }
  catch { return m.dateEvent; }
}

function matchTimeValue(m) {
  if (!m.dateEvent) return 0;
  const iso = `${m.dateEvent}${m.timeEvent ? 'T' + m.timeEvent.replace('Z','') : 'T00:00:00'}`;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? 0 : d.getTime();
}
function matchListItem(m) {
  return `<div class="match-list-item">
    <div class="match-main-line">
      <span class="match-date">${escapeHtml(formatDate(m) || '-')}</span>
      <strong>${teamLogo(m.homeTeam, m.homeTeamId)} ${escapeHtml(m.homeTeam)} <span class="score-inline">${escapeHtml(scoreText(m))}</span> ${teamLogo(m.awayTeam, m.awayTeamId)} ${escapeHtml(m.awayTeam)}</strong>
      <button class="ghost" data-detail-id="${escapeHtml(m.id)}">${t('view')}</button>
    </div>
    <div class="match-meta-line">
      <span>${escapeHtml(m.leagueName || '')}</span><span>${escapeHtml(m.season || '')}</span><span>${escapeHtml(m.round || '')}</span><span class="badge">${escapeHtml(isFinished(m) ? t('finished') : t('upcoming'))}</span>
    </div>
  </div>`;
}

function matchOptionLabel(m) {
  const status = isFinished(m) ? t('finished') : t('upcoming');
  return `${formatDate(m) || '-'} · ${m.leagueName || ''} · ${m.homeTeam} ${scoreText(m)} ${m.awayTeam} · ${status}`;
}
function getFavoriteIds() {
  store.favoriteMatchIds = Array.isArray(store.favoriteMatchIds) ? store.favoriteMatchIds : [];
  return store.favoriteMatchIds.map(String);
}
function isFavoriteMatch(id) { return getFavoriteIds().includes(String(id)); }
async function setFavoriteMatch(id, checked) {
  store.favoriteMatchIds = getFavoriteIds();
  const sid = String(id);
  if (checked && !store.favoriteMatchIds.includes(sid)) store.favoriteMatchIds.push(sid);
  if (!checked) store.favoriteMatchIds = store.favoriteMatchIds.filter(x => String(x) !== sid);
  await api.saveStore(store);
  renderOddsMatchTools();
  setStatus(checked ? t('favoriteSaved') : t('favoriteRemoved'));
}
function getOddsCandidateMatches() {
  const leagueId = $('oddsLeague')?.value || 'all';
  const q = ($('oddsMatchSearch')?.value || '').trim().toLowerCase();
  return (store.matches || []).filter(m => {
    if (leagueId !== 'all' && String(m.leagueId) !== String(leagueId)) return false;
    if (!q) return true;
    return [m.homeTeam, m.awayTeam, m.leagueName, m.round, m.season, m.venue, m.status].join(' ').toLowerCase().includes(q);
  }).sort((a,b) => {
    const af = isFinished(a), bf = isFinished(b);
    if (af !== bf) return af ? 1 : -1;
    return af ? matchTimeValue(b) - matchTimeValue(a) : matchTimeValue(a) - matchTimeValue(b);
  }).slice(0, 120);
}
function selectOddsMatch(id) {
  const m = (store.matches || []).find(x => String(x.id) === String(id));
  if (!m) return;
  $('oddsMatchSelect').value = String(m.id);
  $('oddsTeamA').value = m.homeTeam || '';
  $('oddsTeamB').value = m.awayTeam || '';
  if ($('oddsFavoriteCheckbox')) $('oddsFavoriteCheckbox').checked = isFavoriteMatch(m.id);
  renderOddsMatchTools(false);
  setStatus(t('matchSelected'));
}
function oddsMatchListItem(m, compact=false) {
  const fav = isFavoriteMatch(m.id);
  return `<div class="match-list-item odds-selectable ${fav ? 'is-favorite' : ''}">
    <div class="match-main-line odds-match-main">
      <label class="favorite-box" title="${escapeHtml(t('favoriteMatch'))}"><input type="checkbox" data-fav-id="${escapeHtml(m.id)}" ${fav ? 'checked' : ''}> ★</label>
      <span class="match-date">${escapeHtml(formatDate(m) || '-')}</span>
      <strong>${teamLogo(m.homeTeam, m.homeTeamId)} ${escapeHtml(m.homeTeam)} <span class="score-inline">${escapeHtml(scoreText(m))}</span> ${teamLogo(m.awayTeam, m.awayTeamId)} ${escapeHtml(m.awayTeam)}</strong>
      <button class="secondary" data-select-odds-match="${escapeHtml(m.id)}">Vælg</button>
      <button class="ghost" data-detail-id="${escapeHtml(m.id)}">${t('view')}</button>
    </div>
    ${compact ? '' : `<div class="match-meta-line"><span>${escapeHtml(m.leagueName || '')}</span><span>${escapeHtml(m.season || '')}</span><span>${escapeHtml(m.round || '')}</span><span class="badge">${escapeHtml(isFinished(m) ? t('finished') : t('upcoming'))}</span></div>`}
  </div>`;
}
function renderOddsMatchTools(syncSelectValue=true) {
  if (!$('oddsMatchSelect')) return;
  const current = $('oddsMatchSelect').value;
  const rows = getOddsCandidateMatches();
  $('oddsMatchSelect').innerHTML = `<option value="">${escapeHtml(t('chooseMatch'))}...</option>` + rows.map(m => `<option value="${escapeHtml(m.id)}">${escapeHtml(matchOptionLabel(m))}</option>`).join('');
  if (syncSelectValue && current && rows.some(m => String(m.id) === String(current))) $('oddsMatchSelect').value = current;
  const selected = (store.matches || []).find(m => String(m.id) === String($('oddsMatchSelect').value));
  if ($('oddsFavoriteCheckbox')) $('oddsFavoriteCheckbox').checked = selected ? isFavoriteMatch(selected.id) : false;
  if ($('oddsMatchList')) $('oddsMatchList').innerHTML = rows.length ? rows.slice(0, 40).map(m => oddsMatchListItem(m)).join('') : `<p class="empty-list">${t('noMatchingMatches')}</p>`;
  const favIds = getFavoriteIds();
  const favorites = (store.matches || []).filter(m => favIds.includes(String(m.id))).sort((a,b) => matchTimeValue(a) - matchTimeValue(b));
  if ($('favoriteMatchList')) $('favoriteMatchList').innerHTML = favorites.length ? favorites.map(m => oddsMatchListItem(m, true)).join('') : `<p class="empty-list">${t('noFavoriteMatches')}</p>`;
}
function getArchiveRows() {
  const q = ($('archiveSearchInput')?.value || '').trim().toLowerCase();
  const leagueId = $('archiveLeague')?.value || 'all';
  const status = $('archiveStatus')?.value || 'finished';
  const years = Number($('archiveYears')?.value || 5);
  const cutoff = new Date(); cutoff.setFullYear(cutoff.getFullYear() - years);
  return (store.matches || []).filter(m => {
    const finished = isFinished(m);
    if (status === 'finished' && !finished) return false;
    if (status === 'upcoming' && finished) return false;
    if (leagueId !== 'all' && String(m.leagueId) !== String(leagueId)) return false;
    const d = m.dateEvent ? new Date(m.dateEvent) : null;
    if (d && !Number.isNaN(d.getTime()) && d < cutoff) return false;
    if (!q) return true;
    return [m.homeTeam, m.awayTeam, m.round, m.status, m.leagueName, m.season, m.venue].join(' ').toLowerCase().includes(q);
  }).sort((a,b) => matchTimeValue(b) - matchTimeValue(a));
}
function renderArchiveResults() {
  const el = $('archiveResults');
  if (!el) return;
  const rows = getArchiveRows().slice(0, 200);
  el.innerHTML = rows.length ? `<p class="list-count">${t('archiveResultsCount')} <strong>${rows.length}</strong></p>${rows.map(matchListItem).join('')}` : `<p class="empty-list">${t('archiveNoResults')}</p>`;
  setStatus(rows.length ? `${t('archiveResultsCount')} ${rows.length}` : t('archiveNoResults'));
}
function getUpcomingRows() {
  const leagueId = $('upcomingLeague')?.value || 'all';
  const limit = Math.max(5, Math.min(100, Number($('upcomingLimit')?.value || 20)));
  return (store.matches || []).filter(m => {
    if (isFinished(m)) return false;
    if (leagueId !== 'all' && String(m.leagueId) !== String(leagueId)) return false;
    return true;
  }).sort((a,b) => matchTimeValue(a) - matchTimeValue(b)).slice(0, limit);
}
async function fetchUpcomingFromRailwayIfPossible() {
  syncStoreFromInputs();
  const url = store.settings?.railwayApiUrl || '';
  if (!url) return [];
  const leagueId = $('upcomingLeague')?.value || 'all';
  const limit = Math.max(5, Math.min(100, Number($('upcomingLimit')?.value || 20)));
  const res = await fetch(`${url}/api/matches/upcoming?leagueId=${encodeURIComponent(leagueId)}&limit=${encodeURIComponent(limit)}`);
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  const rows = Array.isArray(data.matches) ? data.matches : [];
  if (rows.length) {
    store.matches = upsertById(store.matches || [], rows);
    store.lastSyncAt = new Date().toISOString();
    await api.saveStore(store);
    renderStats();
    renderLeagueList();
    renderTable();
    renderOddsMatchTools(false);
  }
  return rows;
}
async function renderUpcomingList() {
  const el = $('upcomingList');
  if (!el) return;
  el.innerHTML = `<p class="empty-list">Henter kommende kampe...</p>`;
  let rows = [];
  try {
    rows = await fetchUpcomingFromRailwayIfPossible();
  } catch (err) {
    console.warn('Railway upcoming fetch failed; using local data', err);
    setStatus(`Kunne ikke hente kommende fra Railway: ${err.message}`);
  }
  if (!rows.length) rows = getUpcomingRows();
  el.innerHTML = rows.length ? `<p class="list-count">${t('upcomingResultsCount')} <strong>${rows.length}</strong></p>${rows.map(matchListItem).join('')}` : `<p class="empty-list">${t('upcomingNoResults')}</p><p class="hint">Tip: Gå til Admin og tryk “Opdater alt nu”, eller tryk “Hent/opdater alle ligaer”. Derefter: “Hent fra Railway”.</p>`;
}
function filteredMatches() {
  const q = $('searchInput').value.trim().toLowerCase();
  const status = $('statusFilter').value;
  const league = $('leagueFilter').value;
  return (store.matches || []).filter(m => {
    const finished = isFinished(m);
    if (status === 'finished' && !finished) return false;
    if (status === 'upcoming' && finished) return false;
    if (league !== 'all' && String(m.leagueId) !== String(league)) return false;
    if (!q) return true;
    return [m.homeTeam, m.awayTeam, m.round, m.status, m.leagueName, m.season, m.venue].join(' ').toLowerCase().includes(q);
  });
}
function renderStats() {
  $('statLeagues').textContent = (store.leagues || []).filter(l => l.enabled).length;
  $('statTeams').textContent = (store.teams || []).length;
  $('statTotal').textContent = (store.matches || []).length;
  $('statFinished').textContent = (store.matches || []).filter(isFinished).length;
  $('statUpcoming').textContent = (store.matches || []).length - (store.matches || []).filter(isFinished).length;
  $('lastUpdatedText').textContent = store.lastUpdatedAt ? new Date(store.lastUpdatedAt).toLocaleString() : '-';
}
function renderLeagueFilter() {
  const value = $('leagueFilter').value || 'all';
  const h2hValue = $('h2hLeague')?.value || 'all';
  const oddsValue = $('oddsLeague')?.value || 'all';
  const archiveValue = $('archiveLeague')?.value || 'all';
  const upcomingValue = $('upcomingLeague')?.value || 'all';
  const options = `<option value="all">${t('allLeagues')}</option>` + (store.leagues || []).map(l => `<option value="${escapeHtml(l.id)}">${escapeHtml(l.name)}</option>`).join('');
  $('leagueFilter').innerHTML = options;
  $('leagueFilter').value = [...$('leagueFilter').options].some(o => o.value === value) ? value : 'all';
  if ($('h2hLeague')) {
    $('h2hLeague').innerHTML = options;
    $('h2hLeague').value = [...$('h2hLeague').options].some(o => o.value === h2hValue) ? h2hValue : 'all';
  }
  if ($('oddsLeague')) {
    $('oddsLeague').innerHTML = options;
    $('oddsLeague').value = [...$('oddsLeague').options].some(o => o.value === oddsValue) ? oddsValue : 'all';
  }
  if ($('archiveLeague')) {
    $('archiveLeague').innerHTML = options;
    $('archiveLeague').value = [...$('archiveLeague').options].some(o => o.value === archiveValue) ? archiveValue : 'all';
  }
  if ($('upcomingLeague')) {
    $('upcomingLeague').innerHTML = options;
    $('upcomingLeague').value = [...$('upcomingLeague').options].some(o => o.value === upcomingValue) ? upcomingValue : 'all';
  }
  if ($('teamNames')) $('teamNames').innerHTML = (store.teams || []).map(tm => `<option value="${escapeHtml(tm.name)}"></option>`).join('');
}
function getAvailableLeagues() {
  const stored = Array.isArray(store.availableLeagues) && store.availableLeagues.length ? store.availableLeagues : FALLBACK_AVAILABLE_LEAGUES;
  const map = new Map();
  for (const l of [...FALLBACK_AVAILABLE_LEAGUES, ...stored]) {
    if (!l?.id || !l?.name) continue;
    map.set(String(l.id), { id:String(l.id), name:String(l.name), country:String(l.country || ''), badge:l.badge || '', provider:'thesportsdb' });
  }
  return Array.from(map.values()).sort((a,b) => a.name.localeCompare(b.name));
}
function renderAvailableLeagueDropdown() {
  const select = $('availableLeagueSelect');
  if (!select) return;
  const q = ($('availableLeagueSearch')?.value || '').trim().toLowerCase();
  const current = select.value;
  const already = new Set((store.leagues || []).map(l => String(l.id)));
  const rows = getAvailableLeagues().filter(l => {
    const hay = [l.name, l.country, l.id].join(' ').toLowerCase();
    return !q || hay.includes(q);
  });
  select.innerHTML = `<option value="">${escapeHtml(t('chooseLeague'))}...</option>` + rows.map(l => {
    const exists = already.has(String(l.id)) ? ' ✓' : '';
    const label = `${l.name}${l.country ? ' — ' + l.country : ''} (#${l.id})${exists}`;
    return `<option value="${escapeHtml(l.id)}">${escapeHtml(label)}</option>`;
  }).join('');
  if ([...select.options].some(o => o.value === current)) select.value = current;
}
async function fetchAvailableLeagues() {
  syncStoreFromInputs();
  const key = encodeURIComponent(store.settings.apiKey || '123');
  const base = `https://www.thesportsdb.com/api/v1/json/${key}`;
  setStatus(t('fetching'));
  const data = await fetchJson(`${base}/all_leagues.php`);
  const rows = Array.isArray(data.leagues) ? data.leagues : [];
  const soccer = rows.filter(l => String(l.strSport || '').toLowerCase().includes('soccer'));
  store.availableLeagues = soccer.map(l => ({
    id: String(l.idLeague || '').trim(),
    name: String(l.strLeague || '').trim(),
    country: String(l.strCountry || l.strLeagueAlternate || '').trim(),
    provider: 'thesportsdb'
  })).filter(l => l.id && l.name);
  store = await api.saveStore(store);
  renderAvailableLeagueDropdown();
  setStatus(`${t('availableLeaguesLoaded')} ${store.availableLeagues.length}`);
}
function renderLeagues() {
  $('leagueList').innerHTML = (store.leagues || []).map((l, idx) => `
    <div class="league-item">
      <div class="league-top"><strong>${escapeHtml(l.name)}</strong><label><input type="checkbox" data-league-enabled="${idx}" ${l.enabled ? 'checked' : ''}> ${t('enabled')}</label></div>
      <div class="league-line"><input data-league-id="${idx}" value="${escapeHtml(l.id)}"><input data-league-name="${idx}" value="${escapeHtml(l.name)}"></div>
      <div class="league-line"><input data-league-country="${idx}" value="${escapeHtml(l.country || '')}" placeholder="${t('country')}"><button class="danger" data-league-remove="${idx}">${t('remove')}</button></div>
    </div>
  `).join('');
}
function renderTable() {
  const rows = filteredMatches();
  if (!rows.length) {
    $('matchesBody').innerHTML = `<tr><td colspan="8" class="empty">${t('noMatches')}</td></tr>`;
    return;
  }
  $('matchesBody').innerHTML = rows.map(m => `
    <tr>
      <td>${escapeHtml(formatDate(m))}</td>
      <td>${escapeHtml(m.leagueName || '')}</td>
      <td><div class="team-cell">${teamLogo(m.homeTeam, m.homeTeamId)}<span>${escapeHtml(m.homeTeam)}</span></div></td>
      <td><strong>${escapeHtml(scoreText(m))}</strong></td>
      <td><div class="team-cell">${teamLogo(m.awayTeam, m.awayTeamId)}<span>${escapeHtml(m.awayTeam)}</span></div></td>
      <td>${escapeHtml(String(m.round || ''))}</td>
      <td><span class="badge">${escapeHtml(isFinished(m) ? t('finished') : t('upcoming'))}</span></td>
      <td><button class="ghost" data-detail-id="${escapeHtml(m.id)}">${t('view')}</button></td>
    </tr>
  `).join('');
}
function normalizeName(v) { return String(v || '').trim().toLowerCase(); }
function h2hRows(teamA, teamB, years, leagueId) {
  const cutoff = new Date(); cutoff.setFullYear(cutoff.getFullYear() - Number(years || 5));
  const a = normalizeName(teamA), b = normalizeName(teamB);
  return (store.matches || []).filter(m => {
    if (!isFinished(m)) return false;
    if (leagueId !== 'all' && String(m.leagueId) !== String(leagueId)) return false;
    const d = m.dateEvent ? new Date(m.dateEvent) : null;
    if (d && !Number.isNaN(d.getTime()) && d < cutoff) return false;
    const h = normalizeName(m.homeTeam), aw = normalizeName(m.awayTeam);
    return (h === a && aw === b) || (h === b && aw === a);
  }).sort((x,y) => String(y.dateEvent).localeCompare(String(x.dateEvent)));
}
function winnerFor(m, teamA) {
  const h = Number(m.homeScore), a = Number(m.awayScore);
  if (Number.isNaN(h) || Number.isNaN(a)) return 'X';
  if (h === a) return 'X';
  const homeIsA = normalizeName(m.homeTeam) === normalizeName(teamA);
  if (h > a) return homeIsA ? 'A' : 'B';
  return homeIsA ? 'B' : 'A';
}
function calculateH2HLocal() {
  const teamA = $('h2hTeamA').value.trim();
  const teamB = $('h2hTeamB').value.trim();
  const years = $('h2hYears').value;
  const leagueId = $('h2hLeague').value;
  if (!teamA || !teamB) return setStatus('Vælg to hold først.');
  const rows = h2hRows(teamA, teamB, years, leagueId);
  let aWins = 0, bWins = 0, draws = 0;
  for (const m of rows) { const w = winnerFor(m, teamA); if (w === 'A') aWins++; else if (w === 'B') bWins++; else draws++; }
  const most = aWins === bWins ? t('draw') : (aWins > bWins ? teamA : teamB);
  $('h2hResult').innerHTML = rows.length ? `
    <div class="h2h-summary">
      <div class="h2h-box"><span>${t('totalGames')}</span><strong>${rows.length}</strong></div>
      <div class="h2h-box"><span>${escapeHtml(teamA)}</span><strong>${aWins}</strong></div>
      <div class="h2h-box"><span>${t('draw')}</span><strong>${draws}</strong></div>
      <div class="h2h-box"><span>${escapeHtml(teamB)}</span><strong>${bWins}</strong></div>
    </div>
    <p class="h2h-note"><strong>${t('mostWins')}:</strong> ${escapeHtml(most)} · 1-X-2 set fra Hold A: ${aWins}-${draws}-${bWins}</p>
    <table class="mini-table"><thead><tr><th>${t('date')}</th><th>${t('league')}</th><th>${t('score')}</th><th>Vinder</th></tr></thead><tbody>
      ${rows.map(m => `<tr><td>${escapeHtml(formatDate(m))}</td><td>${escapeHtml(m.leagueName || '')}</td><td>${escapeHtml(m.homeTeam)} <strong>${escapeHtml(scoreText(m))}</strong> ${escapeHtml(m.awayTeam)}</td><td><span class="winner-${winnerFor(m, teamA).toLowerCase()}">${escapeHtml(winnerFor(m, teamA))}</span></td></tr>`).join('')}
    </tbody></table>` : `<p class="h2h-note">${t('h2hEmpty')}</p>`;
}

function clampNumber(value, min, max, fallback) {
  const n = Number(value);
  if (Number.isNaN(n)) return fallback;
  return Math.max(min, Math.min(max, n));
}
function decimalOdds(probability) {
  if (!probability || probability <= 0) return 0;
  return Number((1 / probability).toFixed(2));
}
function oddsFromCounts(total, aWins, draws, bWins, marginPercent, minSample) {
  const totalGames = Math.max(0, Number(total || 0));
  const margin = clampNumber(marginPercent, 0, 40, 7) / 100;
  const min = Math.max(1, Number(minSample || 6));
  const p1 = (Number(aWins || 0) + 1) / (totalGames + 3);
  const px = (Number(draws || 0) + 1) / (totalGames + 3);
  const p2 = (Number(bWins || 0) + 1) / (totalGames + 3);
  const confidence = totalGames >= min ? 'good' : (totalGames >= Math.ceil(min / 2) ? 'medium' : 'low');
  const suggested = [{k:'1',p:p1},{k:'X',p:px},{k:'2',p:p2}].sort((a,b)=>b.p-a.p)[0].k;
  return {
    probabilities:{ one:Number((p1*100).toFixed(1)), x:Number((px*100).toFixed(1)), two:Number((p2*100).toFixed(1)) },
    fairOdds:{ one:decimalOdds(p1), x:decimalOdds(px), two:decimalOdds(p2) },
    bookOdds:{ one:decimalOdds(p1*(1+margin)), x:decimalOdds(px*(1+margin)), two:decimalOdds(p2*(1+margin)) },
    confidence,
    suggested
  };
}
function calculateOddsLocal() {
  const teamA = $('oddsTeamA').value.trim();
  const teamB = $('oddsTeamB').value.trim();
  const years = $('oddsYears').value;
  const leagueId = $('oddsLeague').value;
  const margin = $('oddsMargin').value;
  const minSample = $('oddsMinSample').value;
  if (!teamA || !teamB) return setStatus('Vælg to hold først.');
  const rows = h2hRows(teamA, teamB, years, leagueId);
  let aWins = 0, bWins = 0, draws = 0;
  for (const m of rows) { const w = winnerFor(m, teamA); if (w === 'A') aWins++; else if (w === 'B') bWins++; else draws++; }
  if (!rows.length) {
    $('oddsResult').innerHTML = `<p class="h2h-note">${t('oddsEmpty')}</p>`;
    return;
  }
  const odds = oddsFromCounts(rows.length, aWins, draws, bWins, margin, minSample);
  const label = odds.suggested === '1' ? teamA : (odds.suggested === '2' ? teamB : t('draw'));
  const confidenceText = t(odds.confidence);
  $('oddsResult').innerHTML = `
    <div class="h2h-summary odds-summary">
      <div class="h2h-box"><span>${t('totalGames')}</span><strong>${rows.length}</strong></div>
      <div class="h2h-box"><span>${t('suggestedPick')}</span><strong>${escapeHtml(odds.suggested)} · ${escapeHtml(label)}</strong></div>
      <div class="h2h-box"><span>${t('confidence')}</span><strong>${escapeHtml(confidenceText)}</strong></div>
      <div class="h2h-box"><span>${t('bookMargin')}</span><strong>${escapeHtml(margin)}%</strong></div>
    </div>
    <table class="mini-table odds-table"><thead><tr><th>1-X-2</th><th>${escapeHtml(teamA)}</th><th>${t('draw')}</th><th>${escapeHtml(teamB)}</th></tr></thead><tbody>
      <tr><td>${t('probability')}</td><td>${odds.probabilities.one}%</td><td>${odds.probabilities.x}%</td><td>${odds.probabilities.two}%</td></tr>
      <tr><td>${t('fairOdds')}</td><td>${odds.fairOdds.one}</td><td>${odds.fairOdds.x}</td><td>${odds.fairOdds.two}</td></tr>
      <tr><td>${t('bookOdds')}</td><td><strong>${odds.bookOdds.one}</strong></td><td><strong>${odds.bookOdds.x}</strong></td><td><strong>${odds.bookOdds.two}</strong></td></tr>
      <tr><td>Historik</td><td>${aWins}</td><td>${draws}</td><td>${bWins}</td></tr>
    </tbody></table>
    <p class="h2h-note">${t('oddsDisclaimer')}</p>`;
}
function copyH2HToOdds() {
  $('oddsTeamA').value = $('h2hTeamA').value || $('oddsTeamA').value;
  $('oddsTeamB').value = $('h2hTeamB').value || $('oddsTeamB').value;
  $('oddsYears').value = $('h2hYears').value || $('oddsYears').value;
  $('oddsLeague').value = $('h2hLeague').value || $('oddsLeague').value;
  renderOddsMatchTools();
  setStatus('Hold kopieret til oddssætter.');
}

function showTopPairs() {
  const years = Number($('h2hYears').value || 5);
  const cutoff = new Date(); cutoff.setFullYear(cutoff.getFullYear() - years);
  const leagueId = $('h2hLeague').value;
  const map = new Map();
  for (const m of (store.matches || [])) {
    if (!isFinished(m)) continue;
    if (leagueId !== 'all' && String(m.leagueId) !== String(leagueId)) continue;
    const d = m.dateEvent ? new Date(m.dateEvent) : null;
    if (d && !Number.isNaN(d.getTime()) && d < cutoff) continue;
    const names = [m.homeTeam, m.awayTeam].sort((a,b) => a.localeCompare(b));
    const key = names.map(normalizeName).join('|');
    if (!map.has(key)) map.set(key, { teamA:names[0], teamB:names[1], games:0 });
    map.get(key).games++;
  }
  const pairs = [...map.values()].filter(x => x.games >= 2).sort((a,b) => b.games - a.games).slice(0, 25);
  $('h2hResult').innerHTML = pairs.length ? `<table class="mini-table"><thead><tr><th>Hold A</th><th>Hold B</th><th>${t('matches')}</th></tr></thead><tbody>${pairs.map(p => `<tr><td>${escapeHtml(p.teamA)}</td><td>${escapeHtml(p.teamB)}</td><td>${p.games}</td></tr>`).join('')}</tbody></table>` : `<p class="h2h-note">Ingen opgør fundet. Hent historik først.</p>`;
}

const PAGE_META = {
  dashboard: ['Dashboard', 'Rent overblik over ligaer, kampe, Railway og database.'],
  leagues: ['Ligaer', 'Tilføj, søg og administrér ligaer.'],
  upcoming: ['Kommende kampe', 'En ren liste med kommende kampe.'],
  archive: ['Arkiv', 'Søg historiske kampe som overskuelig liste.'],
  h2h: ['Indbyrdes', '1-X-2 statistik mellem to hold.'],
  odds: ['Oddssætter', 'Vælg kamp og beregn fair odds.'],
  favorites: ['Favoritter', 'Dine markerede favoritkampe.'],
  register: ['Register', 'Alle kampe i databasen.'],
  admin: ['Admin', 'Import, Railway-sync og databasehandlinger.'],
  settings: ['Indstillinger', 'API-nøgle, Railway URL og auto-opdatering.']
};
function showPage(page) {
  const selected = PAGE_META[page] ? page : 'dashboard';
  document.querySelectorAll('.page').forEach(el => el.classList.toggle('active', el.dataset.page === selected));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.pageTarget === selected));
  if ($('pageTitle')) $('pageTitle').textContent = PAGE_META[selected][0];
  if ($('pageSubtitle')) $('pageSubtitle').textContent = PAGE_META[selected][1];
  try { localStorage.setItem('frr_active_page', selected); } catch {}
  if (selected === 'archive') renderArchiveResults();
  if (selected === 'upcoming') renderUpcomingList();
  if (selected === 'odds') renderOddsMatchTools(false);
}
function bindPageNavigation() {
  document.querySelectorAll('[data-page-target]').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.pageTarget)));
  let initial = 'dashboard';
  try { initial = localStorage.getItem('frr_active_page') || 'dashboard'; } catch {}
  showPage(initial);
}

function render() { applyLanguage(); renderLeagueFilter(); renderAvailableLeagueDropdown(); renderLeagues(); renderStats(); renderTable(); renderUpcomingList(); renderOddsMatchTools(); setupAutoTimer(); }
function setStatus(msg) { $('status').textContent = msg; }
function escapeHtml(value) { return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function toCsv() {
  const headers = ['id','leagueId','leagueName','season','dateEvent','timeEvent','homeTeam','homeScore','awayScore','awayTeam','round','status','venue'];
  return [headers.join(','), ...(store.matches || []).map(m => headers.map(h => `"${String(m[h] ?? '').replace(/"/g,'""')}"`).join(','))].join('\n');
}
function showDetails(id) {
  const m = (store.matches || []).find(x => String(x.id) === String(id));
  if (!m) return;
  $('detailsTitle').textContent = `${m.homeTeam} ${scoreText(m)} ${m.awayTeam}`;
  $('detailsBody').innerHTML = `<div class="detail-grid">
    ${detailBox(t('league'), m.leagueName)}${detailBox(t('season'), m.season)}${detailBox(t('date'), formatDate(m))}${detailBox(t('time'), m.timeEvent)}${detailBox(t('round'), m.round)}${detailBox(t('status'), m.status || (isFinished(m) ? t('finished') : t('upcoming')))}${detailBox(t('venue'), m.venue)}${detailBox(t('eventId'), m.eventId)}${detailBox(t('homeTeam'), m.homeTeam)}${detailBox(t('awayTeam'), m.awayTeam)}
  </div>`;
  $('detailsDialog').showModal();
}
function detailBox(label, value) { return `<div class="detail-box"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || '-')}</strong></div>`; }
function bindLeagueEvents(e) {
  const target = e.target;
  const idx = target.dataset.leagueEnabled ?? target.dataset.leagueId ?? target.dataset.leagueName ?? target.dataset.leagueCountry ?? target.dataset.leagueRemove;
  if (idx === undefined) return;
  const league = store.leagues[Number(idx)];
  if (!league) return;
  if (target.dataset.leagueEnabled !== undefined) league.enabled = target.checked;
  if (target.dataset.leagueId !== undefined) league.id = target.value.trim();
  if (target.dataset.leagueName !== undefined) league.name = target.value.trim();
  if (target.dataset.leagueCountry !== undefined) league.country = target.value.trim();
  if (target.dataset.leagueRemove !== undefined) store.leagues.splice(Number(idx), 1);
  api.saveStore(store); render();
}
async function addLeagueFromInputs(usePromptFallback = false) {
  const select = $('availableLeagueSelect');
  let selected = null;
  if (select?.value) selected = getAvailableLeagues().find(l => String(l.id) === String(select.value));

  // Backwards-compatible prompt fallback if the top button is used and nothing is selected.
  if (!selected && usePromptFallback) {
    const id = (prompt(t('addLeaguePrompt')) || '').trim();
    if (!id) { setStatus(t('noAvailableLeague')); return; }
    const name = (prompt(t('addLeagueNamePrompt')) || '').trim() || `League ${id}`;
    selected = { id, name, country:'', provider:'thesportsdb' };
  }

  if (!selected) { setStatus(t('noAvailableLeague')); select?.focus(); return; }
  const id = String(selected.id).trim();
  const name = String(selected.name).trim();
  const country = String(selected.country || '').trim();

  store.leagues = Array.isArray(store.leagues) ? store.leagues : [];
  const existing = store.leagues.find(l => String(l.id).trim() === id);
  if (existing) {
    existing.name = name;
    existing.country = country || existing.country || '';
    existing.enabled = true;
    existing.provider = 'thesportsdb';
  } else {
    store.leagues.push({ id, name, enabled:true, country, badge:selected.badge || '', provider:'thesportsdb' });
  }

  if (select) select.value = '';
  if ($('availableLeagueSearch')) $('availableLeagueSearch').value = '';
  store = await api.saveStore(store);
  render();
  setStatus(`${existing ? t('leagueUpdated') : t('leagueAdded')} ${name} (${id})`);
}

function setupAutoTimer() {
  if (autoTimer) clearInterval(autoTimer);
  if (store?.settings?.autoUpdateDesktop !== false) {
    autoTimer = setInterval(() => fetchAllActiveLeagues().catch(err => setStatus(`Auto: ${err.message}`)), 60 * 60 * 1000);
  }
}
function bindEvents() {
  bindPageNavigation();
  $('languageSelect').addEventListener('change', async () => { syncStoreFromInputs(); await api.saveStore(store); render(); });
  $('saveSettingsBtn').addEventListener('click', async () => { await saveStore(); render(); setStatus(t('saved')); });
  $('fetchAllBtn').addEventListener('click', () => fetchAllActiveLeagues().catch(err => setStatus(`Error: ${err.message}`)));
  $('syncToRailwayBtn').addEventListener('click', () => syncToRailway().catch(err => setStatus(`${t('syncFailed')}: ${err.message}`)));
  $('syncFromRailwayBtn').addEventListener('click', () => syncFromRailway().catch(err => setStatus(`${t('syncFailed')}: ${err.message}`)));
  $('adminUpdateBtn').addEventListener('click', () => adminUpdateAll().catch(err => setStatus(`${t('syncFailed')}: ${err.message}`)));
  $('historyUpdateBtn').addEventListener('click', () => adminUpdateHistory().catch(err => setStatus(`${t('syncFailed')}: ${err.message}`)));
  $('h2hBtn').addEventListener('click', calculateH2HLocal);
  $('topPairsBtn').addEventListener('click', showTopPairs);
  $('oddsBtn').addEventListener('click', calculateOddsLocal);
  $('oddsCopyH2HBtn').addEventListener('click', copyH2HToOdds);
  $('oddsRefreshMatchesBtn').addEventListener('click', () => { renderOddsMatchTools(); setStatus(t('matchingMatches')); });
  $('oddsLeague').addEventListener('change', () => { $('oddsMatchSelect').value = ''; renderOddsMatchTools(); });
  $('oddsMatchSearch').addEventListener('input', renderOddsMatchTools);
  $('oddsMatchSearch').addEventListener('keydown', e => { if (e.key === 'Enter') { const rows = getOddsCandidateMatches(); if (rows[0]) selectOddsMatch(rows[0].id); } });
  $('oddsMatchSelect').addEventListener('change', e => { if (e.target.value) selectOddsMatch(e.target.value); else renderOddsMatchTools(); });
  $('oddsFavoriteCheckbox').addEventListener('change', e => { const id = $('oddsMatchSelect').value; if (id) setFavoriteMatch(id, e.target.checked); });
  $('oddsMatchList').addEventListener('click', e => { if (e.target.dataset.selectOddsMatch) selectOddsMatch(e.target.dataset.selectOddsMatch); if (e.target.dataset.detailId) showDetails(e.target.dataset.detailId); });
  $('oddsMatchList').addEventListener('change', e => { if (e.target.dataset.favId) setFavoriteMatch(e.target.dataset.favId, e.target.checked); });
  $('favoriteMatchList').addEventListener('click', e => { if (e.target.dataset.selectOddsMatch) selectOddsMatch(e.target.dataset.selectOddsMatch); if (e.target.dataset.detailId) showDetails(e.target.dataset.detailId); });
  $('favoriteMatchList').addEventListener('change', e => { if (e.target.dataset.favId) setFavoriteMatch(e.target.dataset.favId, e.target.checked); });
  $('archiveSearchBtn').addEventListener('click', renderArchiveResults);
  $('archiveClearBtn').addEventListener('click', () => { $('archiveSearchInput').value = ''; renderArchiveResults(); });
  $('archiveSearchInput').addEventListener('keydown', e => { if (e.key === 'Enter') renderArchiveResults(); });
  $('archiveLeague').addEventListener('change', renderArchiveResults);
  $('archiveYears').addEventListener('change', renderArchiveResults);
  $('archiveStatus').addEventListener('change', renderArchiveResults);
  $('archiveResults').addEventListener('click', e => { if (e.target.dataset.detailId) showDetails(e.target.dataset.detailId); });
  $('upcomingRefreshBtn').addEventListener('click', async () => { await renderUpcomingList(); setStatus(`${t('upcomingResultsCount')} ${getUpcomingRows().length}`); });
  $('upcomingAllBtn').addEventListener('click', () => { $('statusFilter').value = 'upcoming'; $('leagueFilter').value = $('upcomingLeague').value || 'all'; renderTable(); setStatus(t('upcomingTitle')); });
  $('upcomingLeague').addEventListener('change', () => renderUpcomingList());
  $('upcomingLimit').addEventListener('change', () => renderUpcomingList());
  $('upcomingList').addEventListener('click', e => { if (e.target.dataset.detailId) showDetails(e.target.dataset.detailId); });
  $('searchInput').addEventListener('input', renderTable);
  $('statusFilter').addEventListener('change', renderTable);
  $('leagueFilter').addEventListener('change', renderTable);
  $('leagueList').addEventListener('change', bindLeagueEvents);
  $('leagueList').addEventListener('click', bindLeagueEvents);
  $('matchesBody').addEventListener('click', e => { if (e.target.dataset.detailId) showDetails(e.target.dataset.detailId); });
  $('fetchAvailableLeaguesBtn').addEventListener('click', () => fetchAvailableLeagues().catch(err => setStatus(`Error: ${err.message}`)));
  $('addLeagueInlineBtn').addEventListener('click', () => addLeagueFromInputs(false).catch(err => setStatus(`Error: ${err.message}`)));
  $('availableLeagueSearch').addEventListener('input', renderAvailableLeagueDropdown);
  $('availableLeagueSearch').addEventListener('keydown', e => { if (e.key === 'Enter') addLeagueFromInputs(false).catch(err => setStatus(`Error: ${err.message}`)); });
  $('exportJsonBtn').addEventListener('click', async () => { const r = await api.exportJson(store); if (!r.canceled) setStatus(t('exported')); });
  $('exportCsvBtn').addEventListener('click', async () => { const r = await api.exportCsv(toCsv()); if (!r.canceled) setStatus(t('exported')); });
  $('importJsonBtn').addEventListener('click', async () => { const r = await api.importJson(); if (!r.canceled && r.data) { store = { ...store, ...r.data }; syncInputsFromStore(); await api.saveStore(store); render(); setStatus(t('imported')); } });
  $('clearBtn').addEventListener('click', async () => { if (confirm(t('confirmClear'))) { store.matches = []; store.teams = []; await api.saveStore(store); render(); setStatus(t('cleared')); } });
  $('helpBtn').addEventListener('click', () => $('helpDialog').showModal());
  $('closeHelpBtn').addEventListener('click', () => $('helpDialog').close());
  $('closeDetailsBtn').addEventListener('click', () => $('detailsDialog').close());
  $('openApiDocsBtn').addEventListener('click', () => api.openExternal('https://www.thesportsdb.com/documentation'));
}
(async function init() {
  populateLanguages();
  store = await api.loadStore();
  store.teams = store.teams || [];
  store.leagues = store.leagues || [];
  store.matches = store.matches || [];
  store.favoriteMatchIds = Array.isArray(store.favoriteMatchIds) ? store.favoriteMatchIds : [];
  syncInputsFromStore();
  applyLanguage();
  bindEvents();
  render();
  setStatus(t('ready'));
})();
