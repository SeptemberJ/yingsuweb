<template>
<div id="production">
  <section id="blog"  style="padding-bottom: 0;padding-top:40px;">
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
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/中运卡行产品1.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>文章标题文章标题</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/中运卡行产品2.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>文章标题文章标题</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/中运卡行产品3.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>文章标题文章标题</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/中运卡行产品4.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">内容简介内容简介内容简介内容简介内容简介内容简介</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>文章标题文章标题</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script src="../../static/js/jquery-1.12.3.min.js"></script>
<script>
</script>
<script>
export default {
  name: 'Production',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.InnerWrap{
  overflow:hidden;
  padding: 0 !important;
}
.InnerWrap{
  position:relative;
  width: 95%;
  height: 100%;
  margin:0 auto 20px auto;
}
.InnerWrap img{
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
.InnerWrap:hover div.OverText {
  left: 0px;
}
.LeftBlock{
  width:50%;
  height:100%;
  background:rgba(39, 39, 39, 0.5);
  float:left;
  color:#fff;
  padding:40px;
}
.RightBlock{
  width:50%;
  height:100%;
  background:transparent;
  float:left;
  text-align:left;
  color:#fff;
  padding:20px;
}
.TitLine{
  width: 60px;
  height:3px;
  background: #32bfc0;
  display: block;
  margin-top: 50%;
  margin-bottom: 4px;
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
@media (max-width: 640px){
  .OverText{
    left: 0;
  }
}
</style>
