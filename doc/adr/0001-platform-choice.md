# ADR 1: Platformvalg

## Status

Accepted

## Context

Vi skal vælge en teknisk platform til vores progressive webapp.  
Vi har brug for en løsning, der passer til vores team, som primært arbejder med React og JavaScript.  
Vi har begrænset tid, så vi skal vælge noget, der er hurtigt at sætte op og nemt at vedligeholde.  
Vi har brug for routing, en database og backend-funktioner uden at bygge alt fra bunden.

## Decision

Vi bruger React Router til navigation i frontend.  
Vi bruger Supabase som backend og database.

React Router passer godt til vores React-setup og gør navigation enkel og skalerbar.  
Supabase giver os autentifikation, database og API i én løsning, hvilket sparer tid og reducerer behovet for en kompleks backend.

## Consequences

### Positive

- Hurtig opsætning uden egen backend
- Alt i ét system (database, auth, API)
- God integration med React
- Mindre kompleksitet i projektet

### Negative / trade-offs

- Mindre kontrol over backend-arkitektur
- Afhængighed af en ekstern service
- Begrænsninger i avanceret backend-logik
- Kan blive dyrt ved skalering
