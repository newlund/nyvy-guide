---
layout: default
title: Installér
lang: da
---

# Installér Nyvy

<p class="lead">Nyvy findes ikke i LG Content Store endnu. Indtil da installerer du den selv med tv’ets udviklertilstand fra en computer på samme netværk. Første gang tager det omkring 15 minutter.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Hent Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Nyheder</a></p>

## 1. Slå udviklertilstand til på tv’et

1. Opret en gratis LG-udviklerkonto på [webostv.developer.lge.com](https://webostv.developer.lge.com) fra en computer.
2. Installér appen **Developer Mode** fra LG Content Store på tv’et, og log ind med kontoen.
3. Slå **Dev Mode Status** til. Tv’et genstarter.
4. Åbn Developer Mode igen, slå **Key Server** til, og notér tv’ets IP-adresse og den viste adgangssætning.

## 2. Installér værktøjerne på computeren

Installér [Node.js](https://nodejs.org), og kør derefter dette i en terminal:

```
npm install -g @webos-tools/cli
```

## 3. Forbind computeren med tv’et

```
ares-setup-device --add tv --info "host=TV-IP port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Erstat TV-IP med tv’ets adresse. Skriv adgangssætningen fra Developer Mode-appen, når du bliver spurgt.

## 4. Installér Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Kør dette i mappen, hvor du gemte den hentede fil. Derefter findes Nyvy blandt tv’ets apps.

Foretrækker du et program med knapper? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) kan installere den samme fil.

## Opdatering

Hent den nye fil, og gentag trin 4. Konto, favoritter og indstillinger bevares.

## Hold udviklertilstanden i gang

Udviklertilstanden gælder i en begrænset tid, som vises i Developer Mode-appen. Åbn den en gang imellem, og forlæng sessionen. Hvis tiden løber ud, fjernes apps installeret på denne måde: slå udviklertilstand til igen, og gentag trin 4.
