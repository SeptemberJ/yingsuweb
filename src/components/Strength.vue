<template>
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
              <img src="../../static/img/icon.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>资质认证</h4>
            <p class="blog_news_content">内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icon.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>在线签约</h4>
            <p class="blog_news_content">内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icon.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>全程可视</h4>
            <p class="blog_news_content">内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icon.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>服务保障</h4>
            <p class="blog_news_content">内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icon.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>风控体系</h4>
            <p class="blog_news_content">内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字</p>
          </div>
        </div>
        <div class="outWrap col-md-4 col-sm-6 col-xs-12">
          <div class="item t-center">
            <div class="item-container">
              <img src="../../static/img/icon.png" />
            </div>
          </div>
          <div class="RightCont">
            <h4>数据安全</h4>
            <p class="blog_news_content">内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字</p>
          </div>
        </div>
      <div class="clear"></div>
    </div>
  </section>
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
/* .outWrap:hover .item{box-shadow: 2px 2px 5px 0px rgba(0,0,0,1);} */
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
  width: 70%;
  padding: 20px 40px 20px 20px;
}
</style>
