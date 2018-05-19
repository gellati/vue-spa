<template>
<div ref="container" class="container">
  <section ref="left" class="screen left">
    <h1>Mens Fashion</h1>
      <a href="/" class="button">Learn More</a>
  </section>

  <section ref="right" class="screen right">
    <h1>Womens Fashion</h1>
      <a href="/" class="button">Learn More</a>
  </section>
</div>
</template>

<script>

export default{
  name: 'splitScreen',
  data () {
    return {}
  },
  mounted () {
    const right = this.$refs.right
    console.log(right)
    const left = this.$refs.left
    const container = this.$refs.container

    right.addEventListener('mouseenter', () => {
      container.classList.add('hover-right')
    })

    right.addEventListener('mouseleave', () => {
      container.classList.remove('hover-right')
    })

    // adds a class to the container element on hover
    left.addEventListener('mouseenter', () => {
      container.classList.add('hover-left')
    })

    // removes the class that was added on hover
    left.addEventListener('mouseleave', () => {
      container.classList.remove('hover-left')
    })
  }
}

</script>

<style lang="scss" scoped>
  @import './src/assets/sass/splitstyle.sass'
</style>
