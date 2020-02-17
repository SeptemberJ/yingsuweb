<template>
<div id="aboutUs">
  <section id="event">
    <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="event_header text-center">
              <h2>关于中运卡行</h2>
              <p></p>
            </div>
          </div>
        </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-4 zero_mp">
            <div class="event_item">
              <div class="event_img">
                <img src="../../static/img/tree_cut_1.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="col-md-8 col-sm-8 zero_mp">
            <div class="event_item">
              <div class="event_text text-center">
                <p>“中运卡行”是上海鹰速物流有限公司运用雄厚的技术研发实力和对物流运作模式的深刻理解而研发的用于整合市场上车货资源的网络货运交易平台。平台主要为车主和货主之间搭建诚信便利的交易通道、促使货运交易达成、圆满完成运输任务。平台致力于为交易双方实现对订单、运输过程、结算等全程的可视化规范化管理，提升综合服务能力，推进物流供给侧结构性改革，相应国家绿色节能减排的号召，促进物流各方的降本增效。</p>
                <!-- <p>平台致力于为交易双方实现对订单、运输过程、结算等全程的可视化规范化管理，提升综合服务能力，推进物流供给侧结构性改革，相应国家绿色节能减排的号召，促进物流各方的降本增效。</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#event .event_text{
  background: #41A4F3;
}
@media (max-width: 768px){
  .event_img img{
    min-height: 160px;
  }
  #event .event_text{
    min-height: 160px;
  }
}
</style>
