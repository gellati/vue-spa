<template>

<div class="hello">
<header class="header">
  <div class="header__logo-box">
    <a href="/">
      <img src="../assets/imgs/lgo-vuemastery.svg" alt="Outdoors" class="header__logo">
    </a>
  </div>
  <router-link to="/"></router-link>

<div class="header__text-box">
  <h1 class="heading-primary">
    <span class="heading-primary--main">
      {{title}}
    </span>
    <span class="heading-primary--sub">
      {{subTitle}}
    </span>
  </h1>
  <router-link to="/split" class="btn btn--white btn--animated">Discover Vue</router-link>
</div>

</header>
</div>

</template>

<script>
export default {
  name: 'headerText',
  data () {
    return {
      title: 'The view outside',
      subTitle: 'Begin your journey'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './src/assets/sass/style.sass'
</style>
