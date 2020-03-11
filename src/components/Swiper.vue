<template>
<section id="Carousel" class="CarouselBlock" @mouseenter="on_top_enter" @mouseleave="on_top_leave">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
      <img :src="item.img"/>
      <div class="ContentTxt">
        <div class="slider_text">
          <h2>正标题内容</h2>
          <p>副标题副标题副标题副标题</p>
          <a class="custom_btn">查看更多</a>
        </div>
      </div>
      <div class="carousel-caption">
        <p><span><i class="fa fa-volume-up"></i>{{item.news}}</span><span>查看更多 ></span></p>
      </div>
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination"  slot="pagination"></div>
      <!-- 左右箭头 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</section>
</template>

<script>
export default {
  data () {
    return {
      carouselArr: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        autoplay: true,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false
        // },
        loop: false
      },
      screenWidth: document.documentElement.clientWidth
    }
  },
  watch: {
    'screenWidth': (val) => {
    }
  },
  computed: {
    mySwiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    window.onresize = this.changeBanner
  },
  created () {
    this.changeBanner()
  },
  methods: {
    on_top_enter () {
      this.mySwiper.autoplay.stop()
    },
    on_top_leave () {
      this.mySwiper.autoplay.start()
    },
    changeBanner () {
      let clientWidth = document.documentElement.clientWidth
      this.screenWidth = clientWidth
      if (clientWidth > 768) {
        this.carouselArr = [
          {img: '../../../static/img/banner1.jpg', news: '[2020-01-20]关于2020年春节假期平台放假通知'},
          {img: '../../../static/img/banner2.jpg', news: '春节假期平台放假通知'},
          {img: '../../../static/img/banner3.jpg', news: '放假通知'}
        ]
      } else {
        this.carouselArr = [
          {img: '../../../static/img/partnerBg.jpg', news: '[2020-01-20]关于2020年春节假期平台放假通知'},
          {img: '../../../static/img/partnerBg.jpg', news: '春节假期平台放假通知'},
          {img: '../../../static/img/partnerBg.jpg', news: '春节假期平台放假通知'}
        ]
      }
      // else if (clientWidth > 768 && clientWidth <= 1024) {
      //   this.carouselArr = [
      //     {img: '../../../static/img/banner_2_1024.jpg', news: '[2020-01-20]关于2020年春节假期平台放假通知'}
      //   ]
      // }
    }
  }
}
</script>
<style scoped>
.CarouselBlock{
  /* width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0; */
}
.swiper-container{
  /* max-height: 500px; */
}
</style>
