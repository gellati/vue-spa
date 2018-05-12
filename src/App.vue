<script src="../src/components/headerText.js"></script>

<template>
  <div class="hello">
  <header class="header">
    <div class="header__logo-box">
      <a href="index.html">
        <img src="../src/assets/imgs/lgo-vuemastery.svg" alt="Outdoors" class="header__logo">
      </a>
    </div>
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">
          {{title}}
        </span>
        <span class="heading-primary--sub">
          {{subTitle}}
        </span>
      </h1>
      <a href="#" class="btn btn--white btn--animated">Discover Vue</a>
    </div>
  </header>
  </div>
</template>
<style lang="scss" scoped>
  @import '../src/assets/Sass/style.sass'
</style>
