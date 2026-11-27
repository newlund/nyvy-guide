---
layout: default
title: Installieren
lang: de
---

# Nyvy installieren

<p class="lead">Nyvy ist noch nicht im LG Content Store. Bis dahin installierst du die App selbst über den Entwicklermodus des Fernsehers, von einem Computer im selben Netzwerk. Beim ersten Mal dauert das etwa 15 Minuten.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Nyvy {{ site.app_version }} herunterladen</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Neuerungen</a></p>

## 1. Entwicklermodus am Fernseher einschalten

1. Erstelle am Computer ein kostenloses LG-Entwicklerkonto auf [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. Installiere am Fernseher die App **Developer Mode** aus dem LG Content Store und melde dich mit dem Konto an.
3. Schalte **Dev Mode Status** ein. Der Fernseher startet neu.
4. Öffne Developer Mode erneut, schalte **Key Server** ein und notiere die IP-Adresse des Fernsehers und die angezeigte Passphrase.

## 2. Werkzeuge auf dem Computer installieren

Installiere [Node.js](https://nodejs.org) und führe dann dies in einem Terminal aus:

```
npm install -g @webos-tools/cli
```

## 3. Computer mit dem Fernseher verbinden

```
ares-setup-device --add tv --info "host=TV-IP port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Ersetze TV-IP durch die Adresse des Fernsehers. Gib auf Nachfrage die Passphrase aus der Developer-Mode-App ein.

## 4. Nyvy installieren

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Führe dies in dem Ordner aus, in dem die heruntergeladene Datei liegt. Danach findest du Nyvy bei den Apps des Fernsehers.

Lieber ein Programm mit Knöpfen? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) kann dieselbe Datei installieren.

## Aktualisieren

Lade die neue Datei herunter und wiederhole Schritt 4. Konto, Favoriten und Einstellungen bleiben erhalten.

## Entwicklermodus aktiv halten

Der Entwicklermodus gilt für eine begrenzte Zeit, die in der Developer-Mode-App angezeigt wird. Öffne sie ab und zu und verlängere die Sitzung. Läuft die Zeit ab, werden so installierte Apps entfernt: Schalte den Entwicklermodus wieder ein und wiederhole Schritt 4.
