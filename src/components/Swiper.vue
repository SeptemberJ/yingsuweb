<template>
  <swiper :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
      <img :src="item.img"/>
      <div class="carousel-caption">
        <p><span style="float:left;"><i class="fa fa-volume-up"></i>{{item.news}}</span><span style="float:right;">查看更多</span></p>
      </div>
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination"  slot="pagination"></div>
      <!-- 左右箭头 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      carouselArr: [
        {img: '../../../static/img/banner.jpg', news: '[2020-01-20]关于2020年春节假期平台放假通知'},
        {img: '../../../static/img/banner.jpg', news: '春节假期平台放假通知'}
      ],
      swiperOption: {
        height: '300px',
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        // 设置点击箭头
        // navigation: false,
        // 自动轮播
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        autoplay: false,
        // autoplay: {
        //   delay: 4000,
        //   // 当用户滑动图片后继续自动轮播
        //   disableOnInteraction: false
        // },
        // 开启循环模式
        loop: true
      }
    }
  },
  created () {
    let Wid = window.innerWidth
    if (Wid <= 991) {
      this.carouselArr = [
        {img: '../../../static/img/bannerY.jpg', news: '[2020-01-20]关于2020年春节假期平台放假通知'},
        {img: '../../../static/img/bannerY.jpg', news: '春节假期平台放假通知'}
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.swiper-container{
  /* max-height: 500px; */
}
</style>
