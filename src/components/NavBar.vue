<template>
  <section id="header">
    <div class="header-area">
      <!--End of top header-->
      <div class="header_menu text-center" data-spy="affix" data-offset-top="50" id="nav">
        <div class="container">
          <nav class="navbar navbar-default zero_mp ">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand custom_navbar-brand" href="#"><img src="../../static/img/logo.png" alt=""></a>
            </div>
            <!--End of navbar-header-->

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse zero_mp" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right main_menu">
                <li class="active"><a href="#header">栏目名称1 <span class="sr-only">(current)</span></a></li>
                <li><a href="#welcome">栏目名称2</a></li>
                <li><a href="#portfolio">栏目名称3</a></li>
                <li><a href="#counter">栏目名称4</a></li>
                <li><a href="#event">栏目名称5</a></li>
                <li><a href="#testimonial">关于我们</a></li>
                <li><a href="#blog">客户服务</a></li>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
          </nav>
          <!--End of nav-->
        </div>
        <!--End of container-->
      </div>
      <!--End of header menu-->
    </div>
    <!--end of header area-->
  </section>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
