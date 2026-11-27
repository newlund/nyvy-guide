---
layout: default
title: Install
lang: en
---

# Install Nyvy

<p class="lead">Nyvy isn't in the LG Content Store yet. Until then you install it yourself with the TV's Developer Mode, from a computer on the same network. The first time takes about 15 minutes.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Download Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">What's new</a></p>

## 1. Turn on Developer Mode on the TV

1. On a computer, create a free LG developer account at [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. On the TV, install the **Developer Mode** app from the LG Content Store and sign in with that account.
3. Turn on **Dev Mode Status**. The TV restarts.
4. Open Developer Mode again, turn on **Key Server** and note the TV's IP address and the passphrase shown.

## 2. Install the tools on the computer

Install [Node.js](https://nodejs.org), then run this in a terminal:

```
npm install -g @webos-tools/cli
```

## 3. Connect the computer to the TV

```
ares-setup-device --add tv --info "host=TV-IP port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Replace TV-IP with the TV's address. When asked, type the passphrase from the Developer Mode app.

## 4. Install Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Run this in the folder where you saved the downloaded file. Nyvy then appears among the TV's apps.

Prefer a program with buttons? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) can install the same file.

## Updating

Download the new file and repeat step 4. Your account, favorites and settings are kept.

## Keep Developer Mode on

Developer Mode runs for a limited time, shown in the Developer Mode app. Open it now and then and extend the session. If it runs out, apps installed this way are removed: turn Developer Mode on again and repeat step 4.
