<template>
  <section id="header">
    <div class="header-area">
      <div class="header_menu text-center" data-spy="affix" data-offset-top="50" id="nav">
        <div class="container">
          <nav class="navbar navbar-default zero_mp">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand custom_navbar-brand" href="#"><img src="../../static/img/footerLogo.png" alt=""></a>
              <span class="ZT">中运卡行</span>
            </div>
            <div class="collapse navbar-collapse zero_mp" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right main_menu">
                <li class="active" id="topLi"><a href="#header">首页<span class="sr-only">(current)</span></a></li>
                <li><a href="#production">中运卡行产品</a></li>
                <li><a href="#strength">我们的优势</a></li>
                <li><a href="#partner">战略合作客户</a></li>
                <li><a href="#download">移动端下载</a></li>
                <li><a href="#aboutUs">关于我们</a></li>
                <li class="SplitLine" @click="showLoginBox"><a href="#">登陆</a></li>
                <li @click="showSignBox"><a href="#">注册</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-question-sign" style="padding-right:4px;"></span>客户服务 <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#"><i class="fa fa-envelope"></i>support@hawksu.com</a></li>
                    <li><a href="#"><i class="fa fa-phone"></i>400-865-5156</a></li>
                    <li><a href="#"><i class="fa fa-user"></i>查看所有联络方式</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <el-dialog class="LoginBox"
      title="登录中运卡行系统"
      width="26%"
      :visible.sync="dialogLoginVisible"
      :close-on-click-modal="false"
      :close="closeLogin">
      <div class="InfoBlock">
        <div class="LeftInfo">
          <el-input placeholder="请输入您的手机号码" prefix-icon="el-icon-user-solid" v-model="account"></el-input>
          <el-input placeholder="请输入您的密码" prefix-icon="el-icon-lock" v-model="password" type="password"></el-input>
        </div>
        <div class="RightCode">
          <img src="../../static/img/qrcode3.png" />
          <p>APP扫码登陆</p>
        </div>
      </div>
      <div class="OptionBlock">
        <span>
          <el-checkbox v-model="ifRemember">记住密码</el-checkbox>
        </span>
        <span>忘记密码?</span>
      </div>
      <el-button type="primary" :loading="false" style="width:100%;border-radius:0;">登 陆</el-button>
      <p class="ToSign">还没有账号，立即注册</p>
    </el-dialog>
    <el-dialog class="SignBox"
      title="注册中运卡行账号"
      :visible.sync="dialogSignVisible"
      :close-on-click-modal="false"
      width="24%"
      :close="closeLogin">
      <div class="TabBlock">
        <span :class="{activeTab: activeRole == 0}" @click="changeRole(0)">企业货主</span>
        <span :class="{activeTab: activeRole == 1}" @click="changeRole(1)">物流车队</span>
      </div>
      <div class="InfoBlock" style="overflow:hidden;">
        <el-input placeholder="请输入您的手机号码" prefix-icon="el-icon-user-solid" v-model="account"></el-input>
        <div class="verify-wrap" id="verify-wrap" style="margin-top:10px;"></div>
        <el-input placeholder="请输入图形验证码" prefix-icon="el-icon-postcard" v-model="account" style="width:68%;border-right:0;display:inlie-block;"></el-input><el-button type="primary" class="CodeBlock" style="">获取验证码</el-button>
        <el-input placeholder="请输入您的密码 (6-12位数字或 字母)" prefix-icon="el-icon-lock" v-model="password" type="password"></el-input>
        <el-input placeholder="请重复输入您的密码" prefix-icon="el-icon-lock" v-model="password" type="password"></el-input>
      </div>
      <div class="Agreement">
        <el-checkbox v-model="ifRemember"><b>阅读并同意</b></el-checkbox>
        <span v-if="activeRole == 0" @click="showAgreement">《XXXXXX货主服务协议》</span>
        <span v-if="activeRole == 1" @click="showAgreement">《XXXXXX物流车队服务协议》</span>
      </div>
      <el-button type="primary" :loading="false" style="width:100%;margin-bottom:20px;border-radius:0;">注册账号</el-button>
    </el-dialog>
  </section>
</template>
<script src="../../static/js/jquery-1.12.3.min.js"></script>
<script>
$(function(){
  $('.nav > li > a').click(function () {
    // alert('hhh')
    $('#collapse').addClass('collapsed')
    $('#collapse').attr('aria-expanded', false)
    $('#bs-example-navbar-collapse-1').removeClass('in')
    $('#bs-example-navbar-collapse-1').attr('aria-expanded', false)
  })
  $('#topLi').click(function () {
    $('#topLi').className = ''
    $('#topLi').className = 'active'
    $('html, body').animate({scrollTop:"0px"}, 500)
  })
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      menuIdx: 0,
      dialogLoginVisible: false,
      dialogSignVisible: false,
      // dialoglWidth: '320px',
      // dialogSWidth: '340px',
      Wid: '',
      account: '',
      password: '',
      ifRemember: false,
      activeRole: '0'
    }
  },
  created () {
    this.Wid = window.innerWidth
  },
  watch: {
    Wid() {
      this.resize()
    }
  },
  mounted () {
    window.onresize = ()=>{
      return(()=>{
        this.Wid = window.innerWidth
      })()
    }
  },
  methods: {
    resize () {
      setTimeout(() => {
        let PadWid = $('.SignBox .el-dialog__body').width()
        let SignBoxWidth = $('.SignBox .el-dialog__body').width()
        console.log(PadWid)
        var SlideVerifyPlug = window.slideVerifyPlug
        var slideVerify2 = new SlideVerifyPlug('#verify-wrap', {
          wrapWidth: PadWid - 0,
          initText: '请按住滑块，拖动到最右边',
          sucessText: '验证通过',
          getSucessState: (res) => {
            this.ifSlideChecked = res
          }
        })
        slideVerify2.resetVerify()
      }, 300)
    },
    changeMenu (idx) {
      this.menuIdx = idx
    },
    showLoginBox () {
      this.dialogLoginVisible = true
    },
    showSignBox () {
      this.dialogSignVisible = true
      this.resize()
    },
    closeLogin () {
      this.dialogLoginVisible = true
    },
    changeRole (role) {
      this.activeRole = role
    },
    showAgreement () {}
  }
}
</script>
<style scoped>
#header{
  width: 100%;
  position: absolute;
  top: -66px;
  z-index: 100;
  background: #fff;
}
.dropdown-menu i{
  margin-right: 5px;
}
.Tit{
  margin-bottom: 20px;
}
.LoginBox .InfoBlock{
  width: 100%;
  float: left;
}
.LoginBox, .SignBox{
  background: rgba(39, 39, 39, 0.5);
}
.LeftInfo .el-input{
  margin-top: 10px;
}
.RightCode p{
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  text-align: center;
  color: #22AC38;
}
.OptionBlock{
  width: 100%;
  height: 30px;
  float: left;
}
.OptionBlock span{
  width: 50%;
  float: left;
  display: inline-block;
  cursor: pointer;
}
.OptionBlock span:last-of-type{
  text-align: right;
  padding-right: 15px;
}
.ToSign{
  height: 30px;
  line-height: 30px;
  text-align: right;
}
/* sign */
.TabBlock{
  width: 100%;
  height: 50px;
}
.TabBlock span{
  width: 50%;
  height: 40px;
  line-height: 40px;
  float: left;
  text-align: center;
  cursor: pointer;
}
.activeTab{
  color: #22AC38;
  font-weight: bold;
}
.activeTab:after{
  content: '';
  display: block;
  margin: auto;
  height: 2px;
  width: 50%;
  background: #22AC38;
  transition: width .5s ease, background-color .5s ease;
}
.SignBox .InfoBlock{
  width: 100%;
}
.SignBox .InfoBlock .el-input:not(:first-of-type){
  margin-top: 10px;
}
.CodeBlock {
  width:32%;
  border-radius:0;
  margin-left:-2px;
  margin-top: -1px;
  position:relative;
  z-index:99;
  border: 0px solid #dddddd;
  background: #22AC38;
}
.Agreement{
  font-size: 12px;
  margin-bottom:10px;
  color: #22AC38;
  font-weight: bold;
  cursor: pointer;
}
.verify-wrap .drag-btn{
  height: 35px;
}
@media (min-width: 999px){
  .SplitLine:before{
    content: '|';
    color: #393939;
    display: inline-block;
  }
}
</style>
