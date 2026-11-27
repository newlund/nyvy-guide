---
layout: default
title: Installeren
lang: nl
---

# Nyvy installeren

<p class="lead">Nyvy staat nog niet in de LG Content Store. Tot die tijd installeer je de app zelf via de ontwikkelaarsmodus van de tv, vanaf een computer in hetzelfde netwerk. De eerste keer duurt dat ongeveer 15 minuten.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Nyvy {{ site.app_version }} downloaden</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Wat is er nieuw</a></p>

## 1. Zet de ontwikkelaarsmodus aan op de tv

1. Maak op een computer een gratis LG-ontwikkelaarsaccount aan op [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. Installeer op de tv de app **Developer Mode** uit de LG Content Store en log in met dat account.
3. Zet **Dev Mode Status** aan. De tv start opnieuw op.
4. Open Developer Mode opnieuw, zet **Key Server** aan en noteer het IP-adres van de tv en de getoonde wachtzin.

## 2. Installeer de hulpmiddelen op de computer

Installeer [Node.js](https://nodejs.org) en voer dan dit uit in een terminal:

```
npm install -g @webos-tools/cli
```

## 3. Verbind de computer met de tv

```
ares-setup-device --add tv --info "host=TV-IP port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Vervang TV-IP door het adres van de tv. Typ de wachtzin uit de Developer Mode-app als daarom wordt gevraagd.

## 4. Installeer Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Voer dit uit in de map waar je het gedownloade bestand hebt opgeslagen. Daarna staat Nyvy tussen de apps van de tv.

Liever een programma met knoppen? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) kan hetzelfde bestand installeren.

## Bijwerken

Download het nieuwe bestand en herhaal stap 4. Je account, favorieten en instellingen blijven bewaard.

## Houd de ontwikkelaarsmodus aan

De ontwikkelaarsmodus geldt een beperkte tijd, die in de Developer Mode-app staat. Open die af en toe en verleng de sessie. Loopt de tijd af, dan worden apps die zo zijn geïnstalleerd verwijderd: zet de ontwikkelaarsmodus weer aan en herhaal stap 4.
