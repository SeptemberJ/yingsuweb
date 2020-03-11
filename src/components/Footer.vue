<template>
  <section id="footer">
    <div class="container">
      <div class="row text-center footerWrap">
        <div class="copyright col-md-9 col-xs-9">
          <p>客服热线：400-865-5156</p>
          <p>营业时间：9:00-21:00</p>
          <p>沪ICP备19031716号-2</p>
          <p>Copyright © 2003-2019 上海鹰速物流有限公司</p>
        </div>
        <div class="col-md-3 col-xs-3">
          <img class="footerLogo" src="../../static/img/footerLogo.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.footerWrap{
  padding: 20px 11px;
}
.footerLogo{
  width: 100px;
  float: right;
}
@media (max-width: 640px){
  .footerLogo{
    width: 100%;
  }
}
</style>
