<template>
  <section id="blog">
    <div class="container" style="width: 95%;">
      <div class="row">
        <div class="col-md-12">
          <div class="latest_blog text-center">
            <h2>中运卡行产品</h2>
            <p>简单几步，轻松发货，实时掌控</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="outB col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/car1.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>文章标题</p>
              </div>
            </div>
          </div>
        </div>
        <div class="outB col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/car1.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>文章标题</p>
              </div>
            </div>
          </div>
        </div>
        <div class="outB col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/car1.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>文章标题</p>
              </div>
            </div>
          </div>
        </div>
        <div class="outB col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/car1.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>文章标题</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="../../static/js/jquery-1.12.3.min.js"></script>
<script>
</script>
<script>
export default {
  name: 'Production',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    enter ($event) {
      $event.currentTarget.className="Overlay OverlayOver";
    },
    leave ($event) {
      $event.currentTarget.className="Overlay OverlayOut";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.outB{
  overflow:hidden;
  padding: 0 !important;
}
.InnerWrap{
  width: 95%;
  height: 100%;
  margin: 10px auto;
}
.outB img{
  width: 100%;
  position: relative;
}
.OverText{
padding: 0 !important;
position: absolute;
top: 0;
left: -100%;
padding: 1.5em 2em 0;
text-align: center;
width:200%;
height: 100%;
-webkit-transition: .5s all;
transition: .5s all;
-moz-transition: .5s all;
}
.outB:hover div.OverText {
left: 0;
}
/* .outB:hover .RightTxt {
color: transparent;
} */
.LeftBlock{
width:50%;height:100%;background:rgba(39, 39, 39, 0.5);float:left;color:#fff;padding:20px;
}
.RightBlock{
width:50%;height:100%;background:transparent;float:left;text-align:left;color:#fff;padding:20px;
}
.TitLine{
  width: 60px;
  height:3px;
  background: #32bfc0;
  display: block;
  margin-top: 50%;
  margin-bottom: 2px;
}
.TopCont{
  width: 100%;
  height: 70%;
  display: block;
  text-align: left;
}
.SeeMore{
  width: 100px;
  height:30px;
  line-height: 30px;
  background: rgb(245, 154, 35);
  color: #fff;
  display: block;
}
</style>
