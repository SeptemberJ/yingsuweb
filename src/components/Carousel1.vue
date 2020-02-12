<template>
  <div class="wrap">
    <ul class="rslides" id="dowebok">
      <li><a href="http://www.dowebok.com/" target="_blank"><img src="../../static/images/img1.jpg" alt=""></a><p>第一张幻灯片的说明</p></li>
      <li><a href="http://www.dowebok.com/code" target="_blank"><img src="../../static/images/img2.jpg" alt=""><p>第一张幻灯片的说明</p></a></li>
      <li><a href="http://www.dowebok.com/material" target="_blank"><img src="../../static/images/img3.jpg" alt=""></a><p>第一张幻灯片的说明</p></li>
    </ul>
    <div class="abc"></div>
  </div>
</template>
<script src="static/js/jquery-1.12.3.min.js"></script>
<script>
$(function() {
  $('#dowebok').responsiveSlides({
    auto: false,
    pager: true,
    pause: true,
    namespace: 'centered-btns'
    // navContainer: 'img'
  })
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* { margin: 0; padding: 0;}
.wrap { position: relative; width: 100%; margin: 0 auto;}
.centered-btns_nav { position: absolute; top: 50%; z-index: 2; width: 38px; height: 61px; margin-top: -40px; line-height: 200px; background-image: url(../../static/images/arrow.gif); overflow: hidden; opacity: .7;}
.next { right: 0; background-position: right 0;}
.centered-btns_nav:active { opacity: 1;}
.centered-btns_tabs { margin-top: 15px; text-align: center; font-size: 0; list-style-type: none;position: relative;z-index:9;top: -60px;}
.centered-btns_tabs li { display: inline-block; margin: 0 3px; *display: inline; *zoom: 1;}
.rslides p { position: absolute; left: 0; bottom: 0; z-index: 2; width: 100%; margin: 0; padding: 0 10px; height: 32px; line-height: 32px;text-align:left; font-size: 14px; color: #fff; background-color: rgba(0, 0, 0, 0.5);}
.centered-btns_tabs a { display: inline-block; width: 9px; height: 9px; border-radius: 50%; line-height: 20px; background-color: rgba(0, 0, 0, .3);overflow: hidden; *display: inline; *zoom: 1;}
.centered-btns_tabs .centered-btns_here a { background-color: rgba(0, 0, 0, .8);}
</style>
