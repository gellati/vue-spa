<template>

<div class="container">
  <div class="main--img">
    <img src="https://image.ibb.co/cTfhsy/galaxy.jpg" alt="" class="active">
  </div>

  <div class="images">
    <img src="https://image.ibb.co/cTfhsy/galaxy.jpg" alt="">
    <img src="https://image.ibb.co/d0rizd/galaxy_arc.jpg" alt="">
    <img src="https://image.ibb.co/iP1BkJ/spaceman.jpg" alt="">
  </div>

</div>

</template>

<script>
export default{
  name: 'imageChanger',
  data () {
    return {}
  },
  mounted () {
  const doc = document;
const currentImg = doc.querySelector('.active');
const imgs = doc.querySelectorAll('.images img');
const imgOpacity = .5;

// Set the first image opacity
imgs[0].style.opacity = imgOpacity;

// A pointer to last selected thumbnail image
let thumbPointer = imgs[0];

// Loop through the images and add a click event
imgs.forEach(img => img.addEventListener("click", clickImage));

function clickImage(e) {

  // In case the same picture is selected again.
  if(e.target === thumbPointer) return;

  // Change current image to src of clicked image
  currentImg.src = e.target.src;

  // Add fade in class
  currentImg.classList.add("image-fade");

  // Remove fade-in class after .5 seconds
  setTimeout(() => currentImg.classList.remove("image-fade"), 500);

  // Change the opacity
  e.target.style.opacity = imgOpacity;

  // Reset the opacity of last thumbnail
  thumbPointer.style.opacity = 1;

  // Update thumb Pointer
  thumbPointer = e.target;
}



  }
}
</script>

<style lang="scss" scoped>
  @import './src/assets/sass/imagechanger.sass'
</style>
