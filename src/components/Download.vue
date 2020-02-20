<template>
<div id="download">
  <section id="blog" style="padding-bottom: 0;">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="latest_blog text-center">
            <h2><span class="ColumTit">移动端下载</span></h2>
            <p>多场景移动客户端，实现业务无缝衔接</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="market_area text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
            <div class="row">
              <div class="col-md-2 col-sm-2 col-sm-offset-1">
                <div class="blog_news">
                  <div class="single_blog_item">
                    <div class="blog_img">
                      <img src="../../static/img/qrcode1.png" alt="">
                    </div>
                    <div class="blog_content">
                      <div class="expert">
                        <div class="left-side text-center">
                          <p class="left_side">
                            <span><img style="width:30px;height:30px;" src="../../static/img/icons/android_hz.png" /></span>
                            <span>安卓货主端</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 col-sm-2">
                <div class="blog_news">
                  <div class="single_blog_item">
                    <div class="blog_img">
                      <img src="../../static/img/qrcode2.png" alt="">
                    </div>
                    <div class="blog_content">
                      <div class="expert">
                        <div class="left-side text-center">
                          <p class="left_side">
                            <span><img style="width:30px;height:30px;" src="../../static/img/icons/android_sj.png" /></span>
                            <span>安卓司机端</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 col-sm-2">
                <div class="blog_news">
                  <div class="single_blog_item">
                    <div class="blog_img">
                      <img src="../../static/img/qrcode1.png" alt="">
                    </div>
                    <div class="blog_content">
                      <div class="expert">
                        <div class="left-side text-center">
                          <p class="left_side">
                            <span><img style="width:30px;height:30px;" src="../../static/img/icons/ios_hz.png" /></span>
                            <span>苹果货主端</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 col-sm-2">
                <div class="blog_news">
                  <div class="single_blog_item">
                    <div class="blog_img">
                      <img src="../../static/img/qrcode1.png" alt="">
                    </div>
                    <div class="blog_content">
                      <div class="expert">
                        <div class="left-side text-center">
                          <p class="left_side">
                            <span><img style="width:30px;height:30px;" src="../../static/img/icons/ios_sj.png" /></span>
                            <span>苹果司机端</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 col-sm-2">
                <div class="blog_news">
                  <div class="single_blog_item">
                    <div class="blog_img">
                      <img src="../../static/img/qrcode3.png" alt="">
                    </div>
                    <div class="blog_content">
                      <div class="expert">
                        <div class="left-side text-center">
                          <p class="left_side">
                            <span><img style="width:30px;height:30px;" src="../../static/img/icons/wechat.png" /></span>
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
        <div class="text-center BorderBlock wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">已投放主流安卓市场、苹果应用商店，通过认证，安全可靠、数据保障</div>
      </div>
    </div>
  </section>
</div>
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
.left_side span:last-of-type {
  font-size: 12px;
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
