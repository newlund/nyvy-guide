---
layout: default
title: Instalar
lang: es
---

# Instalar Nyvy

<p class="lead">Nyvy aún no está en la LG Content Store. Mientras tanto, la instalas tú mismo con el modo desarrollador del televisor, desde un ordenador en la misma red. La primera vez lleva unos 15 minutos.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Descargar Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Novedades</a></p>

## 1. Activa el modo desarrollador en el televisor

1. En un ordenador, crea una cuenta gratuita de desarrollador de LG en [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. En el televisor, instala la app **Developer Mode** desde la LG Content Store e inicia sesión con esa cuenta.
3. Activa **Dev Mode Status**. El televisor se reinicia.
4. Abre Developer Mode de nuevo, activa **Key Server** y apunta la dirección IP del televisor y la frase de acceso que aparece.

## 2. Instala las herramientas en el ordenador

Instala [Node.js](https://nodejs.org) y luego ejecuta esto en un terminal:

```
npm install -g @webos-tools/cli
```

## 3. Conecta el ordenador al televisor

```
ares-setup-device --add tv --info "host=IP-TV port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Sustituye IP-TV por la dirección del televisor. Cuando te lo pida, escribe la frase de acceso de la app Developer Mode.

## 4. Instala Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Ejecuta esto en la carpeta donde guardaste el archivo descargado. Después, Nyvy aparece entre las apps del televisor.

¿Prefieres un programa con botones? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) puede instalar el mismo archivo.

## Actualizar

Descarga el archivo nuevo y repite el paso 4. Tu cuenta, favoritos y ajustes se conservan.

## Mantén activo el modo desarrollador

El modo desarrollador dura un tiempo limitado, que se muestra en la app Developer Mode. Ábrela de vez en cuando y amplía la sesión. Si se agota, las apps instaladas así se eliminan: vuelve a activar el modo desarrollador y repite el paso 4.
