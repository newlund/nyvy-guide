---
layout: default
title: Kurulum
lang: tr
---

# Nyvy’yi kurun

<p class="lead">Nyvy henüz LG Content Store’da yok. O zamana kadar uygulamayı aynı ağdaki bir bilgisayardan, televizyonun geliştirici modunu kullanarak kendiniz kurarsınız. İlk seferde yaklaşık 15 dakika sürer.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Nyvy {{ site.app_version }} indir</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Yenilikler</a></p>

## 1. Televizyonda geliştirici modunu açın

1. Bir bilgisayardan [webostv.developer.lge.com](https://webostv.developer.lge.com) adresinde ücretsiz bir LG geliştirici hesabı oluşturun.
2. Televizyona LG Content Store’dan **Developer Mode** uygulamasını kurun ve bu hesapla oturum açın.
3. **Dev Mode Status** seçeneğini açın. Televizyon yeniden başlar.
4. Developer Mode’u yeniden açın, **Key Server** seçeneğini açın ve televizyonun IP adresini ve gösterilen parolayı not edin.

## 2. Araçları bilgisayara kurun

[Node.js](https://nodejs.org) kurun, ardından bir terminalde şunu çalıştırın:

```
npm install -g @webos-tools/cli
```

## 3. Bilgisayarı televizyona bağlayın

```
ares-setup-device --add tv --info "host=TV-IP port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

TV-IP yerine televizyonun adresini yazın. İstendiğinde Developer Mode uygulamasındaki parolayı girin.

## 4. Nyvy’yi kurun

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Bunu indirilen dosyayı kaydettiğiniz klasörde çalıştırın. Ardından Nyvy televizyonun uygulamaları arasında görünür.

Düğmeli bir program mı tercih edersiniz? [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) aynı dosyayı kurabilir.

## Güncelleme

Yeni dosyayı indirin ve 4. adımı tekrarlayın. Hesabınız, favorileriniz ve ayarlarınız korunur.

## Geliştirici modunu açık tutun

Geliştirici modu, Developer Mode uygulamasında gösterilen sınırlı bir süre boyunca açık kalır. Uygulamayı ara sıra açıp oturumu uzatın. Süre dolarsa bu şekilde kurulan uygulamalar kaldırılır: geliştirici modunu yeniden açın ve 4. adımı tekrarlayın.
