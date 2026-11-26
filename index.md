---
layout: default
title: Nyvy
---

# Nyvy

<p class="lead">IPTV player for LG webOS TVs · Choose your language</p>

<div class="cards">
{% for pair in site.data.i18n %}  <a class="card" href="{{ pair[0] }}/"><strong>{{ pair[1].name }}</strong><span>{{ pair[1].manual }} · {{ pair[1].support }} · {{ pair[1].privacy }}</span></a>
{% endfor %}</div>
