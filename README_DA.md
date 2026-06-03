# Football Result Register v1.2

Windows desktop app + Railway backend til fodbold.eu.

Denne version har “øje guf” indsat direkte i UI’et øverst til venstre.

## Nyt i v1.2

- Fodboldspiller-billede øverst til venstre i sidebar
- Optimeret app-billede i src/assets/soccer-player-corner.jpg
- Ny minimalistisk sidebar-navigation
- En side pr. funktion
- Dashboard
- Ligaer
- Kommende kampe
- Arkiv
- Indbyrdes statistik
- Oddssætter
- Favoritter
- Register
- Admin
- Indstillinger
- Samme Railway/PostgreSQL backend som v0.9
- Mindre rod og mere app-fornemmelse

## Funktioner

- Railway sync
- PostgreSQL backend
- Auto-opdatering hver time
- Flere ligaer
- Klub-logoer
- Kampdetalje-side
- Admin-knap: opdater alt nu
- 5 års historik
- Indbyrdes statistik 1-X-2
- Arkiv-søgning som kamp-liste
- Kommende kampe som kamp-liste
- Oddssætter med dynamisk kamp-dropdown
- Favoritkampe

## Kør desktop app

```bash
npm install
npm start
```

## Kør backend lokalt

```bash
npm run backend
```

Test:

```txt
http://localhost:8080/health
```

## Railway variables

```txt
DATABASE_URL=${{Postgres.DATABASE_URL}}
THESPORTSDB_API_KEY=123
AUTO_UPDATE_ENABLED=true
HISTORY_YEARS=5
CORS_ORIGIN=*
```

## Fyld databasen

Seneste/kommende data:

```txt
https://DIN-RAILWAY-URL/api/admin/update-all
```

5 års historik:

```txt
https://DIN-RAILWAY-URL/api/admin/update-history?years=5
```

## Arkiv API

```txt
/api/matches/search?q=Real%20Madrid&leagueId=4480&status=finished&years=5&limit=200
```

## Kommende kampe API

```txt
/api/matches/upcoming?leagueId=4480&limit=50
```

## Odds API

```txt
/api/odds/h2h?teamA=Real%20Madrid&teamB=Manchester%20City&years=5&leagueId=4480&margin=7
```

## Vigtigt

TheSportsDB gratis data kan have huller i historikken. Appen er bygget, så vi senere kan sætte API-Football adapter på uden at lave registeret om fra bunden.
