---
layout: default
title: Instalacja
lang: pl
---

# Instalacja Nyvy

<p class="lead">Nyvy nie ma jeszcze w LG Content Store. Do tego czasu instalujesz aplikację samodzielnie w trybie dewelopera telewizora, z komputera w tej samej sieci. Za pierwszym razem zajmuje to około 15 minut.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Pobierz Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Co nowego</a></p>

## 1. Włącz tryb dewelopera w telewizorze

1. Na komputerze załóż bezpłatne konto dewelopera LG na [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. Na telewizorze zainstaluj aplikację **Developer Mode** z LG Content Store i zaloguj się tym kontem.
3. Włącz **Dev Mode Status**. Telewizor uruchomi się ponownie.
4. Otwórz ponownie Developer Mode, włącz **Key Server** i zanotuj adres IP telewizora oraz wyświetlone hasło.

## 2. Zainstaluj narzędzia na komputerze

Zainstaluj [Node.js](https://nodejs.org), a potem uruchom to w terminalu:

```
npm install -g @webos-tools/cli
```

## 3. Połącz komputer z telewizorem

```
ares-setup-device --add tv --info "host=IP-TV port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Zastąp IP-TV adresem telewizora. Gdy pojawi się prośba, wpisz hasło z aplikacji Developer Mode.

## 4. Zainstaluj Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Uruchom to w folderze, w którym zapisałeś pobrany plik. Potem Nyvy pojawi się wśród aplikacji telewizora.

Wolisz program z przyciskami? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) zainstaluje ten sam plik.

## Aktualizacja

Pobierz nowy plik i powtórz krok 4. Konto, ulubione i ustawienia zostają zachowane.

## Utrzymuj tryb dewelopera

Tryb dewelopera działa przez ograniczony czas, widoczny w aplikacji Developer Mode. Otwieraj ją od czasu do czasu i przedłużaj sesję. Gdy czas minie, aplikacje zainstalowane w ten sposób zostaną usunięte: włącz ponownie tryb dewelopera i powtórz krok 4.
