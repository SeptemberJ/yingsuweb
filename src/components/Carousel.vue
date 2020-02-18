<template>
  <div class="Carousel">
    <!--Start of slider section-->
    <section id="slider">
      <div id="carousel-example-generic" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div class="slider_overlay">
              <img src="../../static/img/banner.jpg" alt="...">
              <div class="carousel-caption">
                <p><span style="float:left;"><i class="fa fa-volume-up"></i>[2020-01-20 ]关于2020年春节假期平台放假通知</span><span style="float:right;">查看更多</span></p>
              </div>
            </div>
          </div>
          <!--End of item With Active-->
          <div class="item">
            <div class="slider_overlay">
              <img src="../../static/img/banner.jpg" alt="...">
              <div class="carousel-caption">
                <div class="carousel-caption">
                  <p><span style="float:left;"><i class="fa fa-volume-up"></i>[2020-01-20 ]关于2020年春节假期平台放假通知</span><span style="float:right;">查看更多</span></p>
                </div>
              </div>
            </div>
          </div>
          <!--End of Item-->
          <div class="item">
            <div class="slider_overlay">
              <img src="../../static/img/banner.jpg" alt="...">
              <div class="carousel-caption">
                <p><span style="float:left;"><i class="fa fa-volume-up"></i>[2020-01-20 ]关于2020年春节假期平台放假通知</span><span style="float:right;">查看更多</span></p>
              </div>
            </div>
          </div>
          <!--End of item-->
        </div>
        <!--End of Carousel Inner-->
      </div>
    </section>
    <!--end of slider section-->
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
export default {
  name: 'Carousel',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
