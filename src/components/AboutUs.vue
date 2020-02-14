<template>
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
                <p>中国外运股份有限公司是招商局集团物流业务统一运营平台和统一品牌。2003年2月13日在香港上市，2019年1月在上交所上市， 成功实现“A+H”股（601598.SH，00598.HK）两地上市。截止2018年底，中国外运拥有总资产615亿元人民币，营业收入773亿元人民币。</p>
                <p>中国外运股份有限公司是招商局集团物流业务统一运营平台和统一品牌。2003年2月13日在香港上市，2019年1月在上交所上市， 成功实现“A+H”股（601598.SH，00598.HK）两地上市。截止2018年底，中国外运拥有总资产615亿元人民币，营业收入773亿元人民币。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
