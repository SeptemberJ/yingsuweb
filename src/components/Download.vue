<template>
  <section id="blog">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="latest_blog text-center">
            <h2>中运卡行产品</h2>
            <p>简单几步，轻松发货，实时掌控</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="market_area text-center">
            <div class="row">
              <div class="col-md-4 col-sm-4">
                <div class="blog_news">
                  <div class="single_blog_item">
                    <div class="blog_img">
                      <img src="../../static/img/qrcode1.png" alt="">
                    </div>
                    <div class="blog_content">
                      <div class="expert">
                        <div class="left-side text-center">
                          <p class="left_side">
                            <span><img style="width:30px;height:30px;" src="../../static/img/android.png" /></span>
                            <span>安卓端</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="blog_news">
                  <div class="single_blog_item">
                    <div class="blog_img">
                      <img src="../../static/img/qrcode2.png" alt="">
                    </div>
                    <div class="blog_content">
                      <div class="expert">
                        <div class="left-side text-center">
                          <p class="left_side">
                            <span><img style="width:30px;height:30px;" src="../../static/img/android.png" /></span>
                            <span>IOS端</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-4">
                <div class="blog_news">
                  <div class="single_blog_item">
                    <div class="blog_img">
                      <img src="../../static/img/qrcode3.png" alt="">
                    </div>
                    <div class="blog_content">
                      <div class="expert">
                        <div class="left-side text-center">
                          <p class="left_side">
                            <span><img style="width:30px;height:30px;" src="../../static/img/android.png" /></span>
                            <span>物流助手小程序</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="text-center BorderBlock">已投放主流安卓市场、苹果应用商店，通过认证，安全可靠、数据保障</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Download',
  data () {
    return {}
  }
}
</script>

<style scoped>
.blog_img img{
  width: 150px !important;
  height: auto !important;
}
.BorderBlock{
  width:45%;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid rgba(245, 154, 35, 1);
  color:rgba(245, 154, 35, 1);
}
@media (max-width: 640px){
  .BorderBlock{
    width: 60%;
  }
  .blog_img img{
    width: 120px !important;
    height: auto !important;
  }
}
@media (max-width: 480px){
  .BorderBlock{
    width: 70%;
  }
  .blog_img img{
    width: 110px !important;
    height: auto !important;
  }

}
@media (max-width: 320px){
  .BorderBlock{
    width: 80%;
  }
  .blog_img img{
    width: 100px !important;
    height: auto !important;
  }
}
</style>
