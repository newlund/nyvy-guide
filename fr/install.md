---
layout: default
title: Installer
lang: fr
---

# Installer Nyvy

<p class="lead">Nyvy n’est pas encore sur le LG Content Store. En attendant, tu l’installes toi-même grâce au mode développeur du téléviseur, depuis un ordinateur sur le même réseau. La première fois prend environ 15 minutes.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Télécharger Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Nouveautés</a></p>

## 1. Activer le mode développeur sur le téléviseur

1. Sur un ordinateur, crée un compte développeur LG gratuit sur [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. Sur le téléviseur, installe l’app **Developer Mode** depuis le LG Content Store et connecte-toi avec ce compte.
3. Active **Dev Mode Status**. Le téléviseur redémarre.
4. Rouvre Developer Mode, active **Key Server** et note l’adresse IP du téléviseur et la phrase secrète affichée.

## 2. Installer les outils sur l’ordinateur

Installe [Node.js](https://nodejs.org), puis lance ceci dans un terminal :

```
npm install -g @webos-tools/cli
```

## 3. Relier l’ordinateur au téléviseur

```
ares-setup-device --add tv --info "host=IP-TV port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Remplace IP-TV par l’adresse du téléviseur. Quand on te le demande, tape la phrase secrète de l’app Developer Mode.

## 4. Installer Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Lance ceci dans le dossier où tu as enregistré le fichier téléchargé. Nyvy apparaît ensuite parmi les apps du téléviseur.

Tu préfères un programme avec des boutons ? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) peut installer le même fichier.

## Mettre à jour

Télécharge le nouveau fichier et refais l’étape 4. Ton compte, tes favoris et tes réglages sont conservés.

## Garder le mode développeur actif

Le mode développeur dure un temps limité, affiché dans l’app Developer Mode. Ouvre-la de temps en temps et prolonge la session. Si le temps expire, les apps installées de cette façon sont supprimées : réactive le mode développeur et refais l’étape 4.
