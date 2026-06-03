// Web-shim til Simply.com/static hosting.
// Gør Electron-funktionerne tilgængelige i browseren via localStorage og download/upload.
(function () {
  const STORE_KEY = 'football-register-store-v12';
  function defaultStore() {
    return {
      version: '1.2.0',
      language: 'da',
      settings: {
        provider: 'thesportsdb',
        apiKey: '123',
        railwayApiUrl: 'https://DIN-RAILWAY-URL.up.railway.app',
        autoUpdateDesktop: true,
        autoUpdateMinutes: 60
      },
      leagues: [
        { id: '4480', name: 'UEFA Champions League', enabled: true, country: 'Europe', badge: '' },
        { id: '4328', name: 'English Premier League', enabled: false, country: 'England', badge: '' },
        { id: '4335', name: 'Spanish La Liga', enabled: false, country: 'Spain', badge: '' },
        { id: '4331', name: 'German Bundesliga', enabled: false, country: 'Germany', badge: '' },
        { id: '4332', name: 'Italian Serie A', enabled: false, country: 'Italy', badge: '' },
        { id: '4334', name: 'French Ligue 1', enabled: false, country: 'France', badge: '' }
      ],
      teams: [],
      matches: [],
      favoriteMatchIds: [],
      lastSyncAt: null,
      lastUpdatedAt: null
    };
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function importJsonFromBrowser() {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json,.json';
      input.onchange = () => {
        const file = input.files && input.files[0];
        if (!file) return resolve({ canceled: true });
        const reader = new FileReader();
        reader.onload = () => {
          try { resolve({ canceled: false, data: JSON.parse(String(reader.result || '{}')) }); }
          catch (err) { alert('Kunne ikke læse JSON: ' + err.message); resolve({ canceled: true }); }
        };
        reader.readAsText(file);
      };
      input.click();
    });
  }

  window.footballRegister = {
    loadStore: async () => {
      try {
        const saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
        return saved || defaultStore();
      } catch (_) {
        return defaultStore();
      }
    },
    saveStore: async (data) => {
      const merged = Object.assign(defaultStore(), data || {}, { version: '1.2.0' });
      localStorage.setItem(STORE_KEY, JSON.stringify(merged));
      return merged;
    },
    exportJson: async (data) => {
      downloadFile('football-register-v12.json', JSON.stringify(data, null, 2), 'application/json');
      return { canceled: false };
    },
    exportCsv: async (csv) => {
      downloadFile('football-register-v12.csv', csv, 'text/csv;charset=utf-8');
      return { canceled: false };
    },
    importJson: importJsonFromBrowser,
    openExternal: async (url) => { window.open(url, '_blank', 'noopener,noreferrer'); }
  };
})();