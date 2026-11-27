---
layout: default
title: Installa
lang: it
---

# Installare Nyvy

<p class="lead">Nyvy non è ancora nel LG Content Store. Nel frattempo la installi tu con la modalità sviluppatore del televisore, da un computer sulla stessa rete. La prima volta richiede circa 15 minuti.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Scarica Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Novità</a></p>

## 1. Attiva la modalità sviluppatore sul televisore

1. Da un computer, crea un account sviluppatore LG gratuito su [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. Sul televisore, installa l’app **Developer Mode** dal LG Content Store e accedi con quell’account.
3. Attiva **Dev Mode Status**. Il televisore si riavvia.
4. Riapri Developer Mode, attiva **Key Server** e annota l’indirizzo IP del televisore e la passphrase mostrata.

## 2. Installa gli strumenti sul computer

Installa [Node.js](https://nodejs.org), poi esegui questo in un terminale:

```
npm install -g @webos-tools/cli
```

## 3. Collega il computer al televisore

```
ares-setup-device --add tv --info "host=IP-TV port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Sostituisci IP-TV con l’indirizzo del televisore. Quando richiesto, digita la passphrase dell’app Developer Mode.

## 4. Installa Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Esegui questo nella cartella in cui hai salvato il file scaricato. Poi Nyvy compare tra le app del televisore.

Preferisci un programma con i pulsanti? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) può installare lo stesso file.

## Aggiornare

Scarica il nuovo file e ripeti il passo 4. Account, preferiti e impostazioni restano.

## Mantieni attiva la modalità sviluppatore

La modalità sviluppatore dura un tempo limitato, indicato nell’app Developer Mode. Aprila ogni tanto e prolunga la sessione. Se scade, le app installate in questo modo vengono rimosse: riattiva la modalità sviluppatore e ripeti il passo 4.
