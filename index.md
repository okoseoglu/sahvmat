---
layout: default
title: Ana Sayfa
---

<div class="header-container">
  <a href="/" class="site-logo">
    <span class="icon-box"></span>
    <span class="logo-text">Şah<span class="accent">ve</span>Mat</span>
  </a>
</div>
<style>
  /* Ana Logo Konteynırı */
.site-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  transition: all 0.3s ease;
}

/* Sol Taraftaki Kare İkon Tasarımı */
.icon-box {
  width: 32px;
  height: 32px;
  background-color: #2d3436; /* Ana renk */
  border-radius: 8px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* İkonun İçindeki Küçük Detay (Beyaz Nokta/Çizgi) */
.icon-box::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Metin Stilleri */
.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: #2d3436;
  letter-spacing: -0.5px;
}

.accent {
  color: #0984e3; /* Sitedeki vurgu rengi */
}

/* --- HOVER EFEKTİ (ASIL BÜYÜ BURADA) --- */

.site-logo:hover .icon-box {
  background-color: #0984e3; /* Kutu maviye döner */
  transform: rotate(45deg); /* Kare elmas şekline döner */
}

.site-logo:hover .icon-box::before {
  background-color: #ffffff;
  transform: translate(-50%, -50%) rotate(-45deg) scale(1.5); /* İçteki nokta ters döner ve büyür */
}

.site-logo:hover .logo-text {
  color: #0984e3;
  transform: translateX(2px);
}
</style>

Merhaba, dünya!
