---
layout: default
title: Installera
lang: sv
---

# Installera Nyvy

<p class="lead">Nyvy finns inte i LG Content Store än. Tills vidare installerar du den själv med TV:ns utvecklarläge, från en dator i samma nätverk. Första gången tar det ungefär 15 minuter.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Ladda ner Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Nyheter</a></p>

## 1. Slå på utvecklarläget på TV:n

1. Skapa ett gratis LG-utvecklarkonto på [webostv.developer.lge.com](https://webostv.developer.lge.com) från en dator.
2. Installera appen **Developer Mode** från LG Content Store på TV:n och logga in med kontot.
3. Slå på **Dev Mode Status**. TV:n startar om.
4. Öppna Developer Mode igen, slå på **Key Server** och anteckna TV:ns IP-adress och lösenfrasen som visas.

## 2. Installera verktygen på datorn

Installera [Node.js](https://nodejs.org) och kör sedan detta i en terminal:

```
npm install -g @webos-tools/cli
```

## 3. Koppla datorn till TV:n

```
ares-setup-device --add tv --info "host=TV-IP port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Byt TV-IP mot TV:ns adress. Skriv lösenfrasen från Developer Mode-appen när du blir tillfrågad.

## 4. Installera Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Kör detta i mappen där du sparade den nedladdade filen. Sedan finns Nyvy bland TV:ns appar.

Vill du hellre ha ett program med knappar? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) kan installera samma fil.

## Uppdatera

Ladda ner den nya filen och gör steg 4 igen. Konto, favoriter och inställningar finns kvar.

## Håll utvecklarläget igång

Utvecklarläget gäller en begränsad tid, som visas i Developer Mode-appen. Öppna den då och då och förläng sessionen. Om tiden tar slut tas appar som installerats på det här sättet bort: slå på utvecklarläget igen och gör om steg 4.
