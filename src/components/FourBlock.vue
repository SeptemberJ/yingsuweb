<template>
<section id="welcome">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="item">
            <div class="single_item">
              <div class="item_list">
                <div class="row">
                  <div class="col-md-3 col-sm-3 col-xs-3" style="padding: 0;">
                    <div class="welcome_icon">
                      <img style="width:90%;" src="../../static/img/android.png" />
                    </div>
                  </div>
                  <div class="col-md-9 col-sm-9 col-xs-9">
                    <h5>海量货源</h5>
                    <p>最近的空车、透明的报价,一键找车，真正做到方便,快捷,又省钱</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End of col-md-3-->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="item">
            <div class="single_item">
              <div class="item_list">
                <div class="row">
                  <div class="col-md-3 col-sm-3 col-xs-3"  style="padding: 0;">
                    <div class="welcome_icon">
                      <img style="width:90%;" src="../../static/img/android.png" />
                    </div>
                  </div>
                  <div class="col-md-9 col-sm-9 col-xs-9">
                    <h5>海量车源</h5>
                    <p>网罗海量真实货源，无论您的车子在哪个城市，划划手机钱包鼓起来</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End of col-md-3-->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="item">
            <div class="single_item">
              <div class="item_list">
                <div class="row">
                  <div class="col-md-3 col-sm-3 col-xs-3"  style="padding: 0;">
                    <div class="welcome_icon">
                      <img style="width:90%;" src="../../static/img/android.png" />
                    </div>
                  </div>
                  <div class="col-md-9 col-sm-9 col-xs-9">
                    <h5>行业资讯</h5>
                    <p>中运卡行网络货运平台蓬勃发展，为物流行业提供一站式的信息发布、线上交易、全程监控、金融支付、咨询投诉、在线评价、查询统计等全方位服务</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End of col-md-3-->
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="item">
            <div class="single_item">
              <div class="item_list">
                <div class="row">
                  <div class="col-md-3 col-sm-3 col-xs-3"  style="padding: 0;">
                    <div class="welcome_icon">
                      <img style="width:90%;" src="../../static/img/android.png" />
                    </div>
                  </div>
                  <div class="col-md-9 col-sm-9 col-xs-9">
                    <h5>公司愿景</h5>
                    <p>用我们的“中运卡行“平台改变传统货运交易模式，用移动互联推动物流业发展</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--End of col-md-3-->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Carousel',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#welcome .item_list h4{
  text-align: left;
}
#welcome .item_list h5{
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
}
#welcome .item_list p{
  text-align: left;
  font-size: 14px;
}
</style>
