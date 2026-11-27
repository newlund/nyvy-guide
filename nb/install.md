---
layout: default
title: Installer
lang: nb
---

# Installer Nyvy

<p class="lead">Nyvy finnes ikke i LG Content Store ennå. Inntil videre installerer du den selv med TV-ens utviklermodus, fra en datamaskin på samme nettverk. Første gang tar det omtrent 15 minutter.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Last ned Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Nyheter</a></p>

## 1. Slå på utviklermodus på TV-en

1. Opprett en gratis LG-utviklerkonto på [webostv.developer.lge.com](https://webostv.developer.lge.com) fra en datamaskin.
2. Installer appen **Developer Mode** fra LG Content Store på TV-en, og logg inn med kontoen.
3. Slå på **Dev Mode Status**. TV-en starter på nytt.
4. Åpne Developer Mode igjen, slå på **Key Server**, og noter TV-ens IP-adresse og passordfrasen som vises.

## 2. Installer verktøyene på datamaskinen

Installer [Node.js](https://nodejs.org), og kjør deretter dette i en terminal:

```
npm install -g @webos-tools/cli
```

## 3. Koble datamaskinen til TV-en

```
ares-setup-device --add tv --info "host=TV-IP port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Bytt ut TV-IP med TV-ens adresse. Skriv passordfrasen fra Developer Mode-appen når du blir spurt.

## 4. Installer Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Kjør dette i mappen der du lagret den nedlastede filen. Deretter finnes Nyvy blant TV-ens apper.

Foretrekker du et program med knapper? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) kan installere den samme filen.

## Oppdatering

Last ned den nye filen, og gjenta trinn 4. Konto, favoritter og innstillinger beholdes.

## Hold utviklermodus i gang

Utviklermodus varer en begrenset tid, som vises i Developer Mode-appen. Åpne den av og til, og forleng økten. Hvis tiden går ut, fjernes apper som er installert på denne måten: slå på utviklermodus igjen, og gjenta trinn 4.
