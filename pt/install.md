---
layout: default
title: Instalar
lang: pt
---

# Instalar o Nyvy

<p class="lead">O Nyvy ainda não está na LG Content Store. Até lá, você mesmo o instala com o modo de desenvolvedor da TV, a partir de um computador na mesma rede. Na primeira vez leva cerca de 15 minutos.</p>

<p><a class="button" href="https://github.com/newlund/nyvy-guide/releases/download/v{{ site.app_version }}/com.nyvy.tv_{{ site.app_version }}_all.ipk">Baixar o Nyvy {{ site.app_version }}</a> <a class="button secondary" href="https://github.com/newlund/nyvy-guide/releases/tag/v{{ site.app_version }}">Novidades</a></p>

## 1. Ative o modo de desenvolvedor na TV

1. Em um computador, crie uma conta gratuita de desenvolvedor LG em [webostv.developer.lge.com](https://webostv.developer.lge.com).
2. Na TV, instale o app **Developer Mode** pela LG Content Store e entre com essa conta.
3. Ative **Dev Mode Status**. A TV reinicia.
4. Abra o Developer Mode de novo, ative **Key Server** e anote o endereço IP da TV e a frase-senha exibida.

## 2. Instale as ferramentas no computador

Instale o [Node.js](https://nodejs.org) e depois execute isto em um terminal:

```
npm install -g @webos-tools/cli
```

## 3. Conecte o computador à TV

```
ares-setup-device --add tv --info "host=IP-TV port=9922 username=prisoner"
ares-novacom --device tv --getkey
```

Troque IP-TV pelo endereço da TV. Quando for pedido, digite a frase-senha do app Developer Mode.

## 4. Instale o Nyvy

```
ares-install --device tv com.nyvy.tv_{{ site.app_version }}_all.ipk
```

Execute isto na pasta onde você salvou o arquivo baixado. Depois, o Nyvy aparece entre os apps da TV.

Prefere um programa com botões? O [webOS Dev Manager](https://github.com/webosbrew/dev-manager-desktop) instala o mesmo arquivo.

## Atualizar

Baixe o novo arquivo e repita o passo 4. Sua conta, favoritos e configurações são mantidos.

## Mantenha o modo de desenvolvedor ativo

O modo de desenvolvedor dura um tempo limitado, mostrado no app Developer Mode. Abra-o de vez em quando e estenda a sessão. Se o tempo acabar, os apps instalados assim são removidos: ative o modo de desenvolvedor de novo e repita o passo 4.
