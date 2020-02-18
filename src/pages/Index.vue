<template>
  <div class="Index">
    <!-- <Carousel/> -->
    <Swiper/>
    <FourBlock/>
    <Production/>
    <Strength/>
    <Partner/>
    <Download/>
    <AboutUs/>
    <div class="SideCodeBlcok">
      <img src="../../static/img/qrcode1.png" />
      <p>APP下载</p>
      <img src="../../static/img/gray.png" />
      <p>小程序</p>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Swiper from '../components/Swiper.vue'
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
    Swiper,
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
.SideCodeBlcok{
  width: 80px;
  height: 220px;
  background:rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 150px;
  right: 10px;
  z-index: 999;
  text-align: center;
}
.SideCodeBlcok img{
  width:60px;
  height: 60px;
  display: block;
  margin:20px 10px 0 10px;
}
.SideCodeBlcok p{
  width: 100%;
  height:20px;
  line-height: 20px;
}
@media (max-width: 640px){
  .SideCodeBlcok{
    display: none;
  }
}
</style>
