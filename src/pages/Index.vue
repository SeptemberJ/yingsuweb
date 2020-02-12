<template>
  <div class="Index">
    <Carousel/>
    <FourBlock/>
    <Production/>
    <Strength/>
    <Partner/>
    <Download/>
    <AboutUs/>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import FourBlock from '../components/FourBlock.vue'
import Production from '../components/Production.vue'
import Strength from '../components/Strength.vue'
import Partner from '../components/Partner.vue'
import Download from '../components/Download.vue'
import AboutUs from '../components/AboutUs.vue'
export default {
  name: 'Index',
  components: {
    Carousel,
    FourBlock,
    Production,
    Strength,
    Partner,
    Download,
    AboutUs
  }
}
</script>

<style>
</style>
