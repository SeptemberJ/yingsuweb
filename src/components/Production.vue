<template>
<div id="production" style="background: rgba(242, 242, 242, 1);padding-bottom: 40px;padding-top: 40px;">
  <section id="blog"  style="padding-bottom: 0;">
    <div class="container" style="width: 95%;">
      <div class="row" style="padding-top: 15px;">
        <div class="col-md-12">
          <div class="latest_blog text-center">
            <h2><span class="ColumTit">中运卡行产品</span></h2>
            <p>简单几步，轻松发货，实时掌控</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/production1.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">箱式、飞翼、平板各式车型，智能化配送路径规划，配送容量的自动化管理，覆盖全国的服务范围，随时随地调度运力</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>普货运输</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/production2.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">专业的危险品操作团队，全流程的车队安全管理，在途实时风险预警，亿元的保险优质保障，有效提高危险品运输的安全性和效率，保证人身和财产的安全</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>危险品运输</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/production3.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">全程运输温湿度监控、温湿度，提供一站式冷链物流解决方案,打造冷链运输第一品牌</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>冷链运输</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="InnerWrap">
            <img src="../../static/img/production4.jpg" />
            <div class="OverText">
              <div class="LeftBlock">
                <span class="TopCont">车货箱匹配，甩挂降本增效</span>
                <span class="SeeMore">查看更多</span>
              </div>
              <div class="RightBlock">
                <span class="TitLine"></span>
                <p>集装箱运输</p>
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
  padding:20px 20px;
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
  background: #22AC38;
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
  background: #22AC38;
  color: #fff;
  display: block;
}
@media (max-width: 640px){
  .OverText{
    left: 0;
  }
}
</style>
