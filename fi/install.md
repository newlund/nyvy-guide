---
layout: default
title: Asennus
lang: fi
---

# Asenna Nyvy

<p class="lead">Nyvy ei ole vielä LG Content Storessa. Siihen asti asennat sen itse television kehittäjätilan avulla samassa verkossa olevalta tietokoneelta. Ensimmäinen kerta kestää noin 15 minuuttia.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Lataa Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Uutta</a></p>

## 1. Ota kehittäjätila käyttöön televisiossa

1. Luo tietokoneella ilmainen LG-kehittäjätili osoitteessa [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. Asenna televisioon **Developer Mode** -sovellus LG Content Storesta ja kirjaudu sisään tilillä.
3. Ota **Dev Mode Status** käyttöön. Televisio käynnistyy uudelleen.
4. Avaa Developer Mode uudelleen, ota **Key Server** käyttöön ja kirjoita muistiin television IP-osoite ja näytetty tunnuslause.

## 2. Asenna työkalut tietokoneelle

Asenna [Node.js](https://nodejs.org) ja suorita sitten tämä päätteessä:

```
npm install -g @webos-tools/cli
```

## 3. Yhdistä tietokone televisioon

```
ares-setup-device --add tv --info "host=TV-IP port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Korvaa TV-IP television osoitteella. Kirjoita pyydettäessä Developer Mode -sovelluksen tunnuslause.

## 4. Asenna Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Suorita tämä kansiossa, johon tallensit ladatun tiedoston. Sen jälkeen Nyvy löytyy television sovelluksista.

Haluatko mieluummin ohjelman, jossa on painikkeet? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) osaa asentaa saman tiedoston.

## Päivittäminen

Lataa uusi tiedosto ja toista vaihe 4. Tili, suosikit ja asetukset säilyvät.

## Pidä kehittäjätila päällä

Kehittäjätila on voimassa rajoitetun ajan, joka näkyy Developer Mode -sovelluksessa. Avaa se aika ajoin ja jatka istuntoa. Jos aika loppuu, näin asennetut sovellukset poistetaan: ota kehittäjätila uudelleen käyttöön ja toista vaihe 4.
