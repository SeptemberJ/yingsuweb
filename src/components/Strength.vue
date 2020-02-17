<template>
<div id="strength">
  <section id="blog">
    <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="latest_blog text-center">
              <div class="latest_blog text-center">
              <h2>我们的优势</h2>
              <p>网络货运SaaS云平台，六大优势，为您护航</p>
            </div>
            </div>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icons/zz.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>OCR 自动识别，保障真实性</h4>
            <p class="blog_news_content">货主身份证识别，车主身份证、行驶证、道路运输许可证、从业资格证的OCR验证识别</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icons/qy.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>在线支付，权威第三方支付平台为资金保驾护航</h4>
            <p class="blog_news_content">与支付宝、微信、通联等三方支付平台，为用户提供便捷支付功能，司机运费可快速到账，支持全国主流银行卡支付</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icons/qc.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>电子合同在线签署</h4>
            <p class="blog_news_content">与权威第三方专业电子合同公司合作，提供车货交易双方的合同签署、合同存储与查询服务</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icons/fw.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>移动端(货主、司机)一体化管理</h4>
            <p class="blog_news_content">实时掌控货物运输过程，运输状态一目了然。司机端实现抢单、接单，不错失任何一个货源信息</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icons/fk.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>全程可视化监控，动态跟踪物流节点</h4>
            <p class="blog_news_content">通过车载GPS或手机APP，实时掌握运单状态。提供车辆离线、异常停车、线路便偏移、晚到预警等各类预警服务。对车辆出发、到达自动出发运单状态，无需人工操作</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icons/sj.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>引入保险机制</h4>
            <p class="blog_news_content">货主或车主可以按需求在线购买各种运输保险，为交易过程保驾护航</p>
          </div>
        </div>
      <div class="clear"></div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'Strength',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outWrap{
  margin-bottom: 40px;
}
.item{
  width:35px;
  height:150px;
}
.item-container {
  background: #32bfc0;
}
.item-container img{
  width:25px;
  height:25px !important;
  margin: 5px;
}
.item .item-container:before{
  width: 35px;
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 15px;
  right: 30px;
  bottom: 0;
  background: rgba(32, 152, 209, 1);
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.outWrap:hover .item-container:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}
.outWrap:hover .item-container{
  background: rgba(32, 152, 209, 1);
}
.RightCont{
  height:150px;
  border-left: 1px solid #32bfc0;
  background:#fff;
  position:absolute;
  z-index:99;
  float:right;
  left:50px;
  top:0;
}
.RightCont h4{
  padding: 10px 20px 0 20px;
}
.RightCont p{
  width: 80%;
  padding: 20px 20px 20px 20px;
}
@media (max-width: 768px){
  .RightCont p{
    width: 90%;
    padding: 20px;
  }
}
</style>
