<template>
  <!--Start of footer-->
  <section id="footer">
    <div class="container">
      <div class="row text-center footerWrap">
        <div class="copyright col-md-9 col-xs-9">
          <p>客服热线：400-xxx-xxxx</p>
          <p>营业时间：9:00-21:00</p>
          <p>沪ICP备xxxxxx号</p>
          <p>Copyright © 2003-2019 上海鹰速物流有限公司</p>
        </div>
        <div class="col-md-3 col-xs-3">
          <img class="footerLogo" src="../../static/img/logo.png" alt="">
        </div>
        <!-- <div class="col-md-12">
          <div class="copyright">
            <p style="text-align:center;">Copyright © 2003-2019 上海鹰速物流有限公司 沪ICP备xxxxxx号</p>
          </div>
        </div> -->
      </div>
      <!--End of row-->
    </div>
    <!--End of container-->
  </section>
  <!--End of footer-->
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerWrap{
  padding: 20px;
}
.footerLogo{
  width: 152px;
  float: right;
}
@media (max-width: 640px){
  .footerLogo{
    width: 100%;
  }
}
</style>
