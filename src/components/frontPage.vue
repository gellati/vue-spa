<template>
<div class="container">
<h1><div class="front-header">Vue pages</div></h1>

  <div class="projects">
    <router-link to="/header">
      <div class="project">
        Header
      </div>
    </router-link>
    <router-link to="/split">
      <div class="project">
        Split screen
      </div>
    </router-link>
    <router-link to="/animation">
      <div class="project">
        Animation
      </div>
    </router-link>
    <router-link to="/image">
      <div class="project">
        Image changer
      </div>
    </router-link>
  </div>

</div>
</template>

export default{
  name: 'front',
  data () {
    return {}
  }
}

<style lang="scss" scoped>
  @import './src/assets/sass/front.sass'
</style>
