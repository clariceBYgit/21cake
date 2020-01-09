<template>
  <div>
    <div id="footer">
       <p><img class="footer-logo" src="../../public/imgs/footer-logo.png" alt=""></p>
       <div class="footer-nav">
            <a href="">联系我们</a>
            <span>|</span>
            <a href="">订购帮助</a>
            <span>|</span>
            <a href="">企业合作</a>
            <span>|</span>
            <a href="">生产经营资质</a>
             <span>|</span>
            <a href="">公告专区</a>
       </div>
       <div class="footer-icon">
            <a href="http://weibo.com/21cake" target="_blank">
                <img src="../../public/imgs/footericon-01.png">
            </a>
            <a class="footer-weixin">
                <img src="../../public/imgs/footericon-02.png">
            </a>
            <a class="footer-app">              
                    APP
            </a>
        </div>
        <div class="footer-text">
            <span>订购专线：400 650 2121（服务时间 08:00–22:00），企业团购热线：021-37768396</span>
            <span>客服电话：021-23099721（全国），kefu@21cake.com（邮箱）</span>
            <span>杭州/广州：提前5小时预订；北京：提前6小时预订；上海：提前5.5-6小时预订；天津/苏州/无锡/深圳：提前8小时预订（部分偏远地区除外，当日22点以后订单，于次日8点开始审核） </span>
            <span>当日蛋糕配送截止下单时间：北京/上海：16:30；杭州/广州：14:00；天津：10:30；苏州/无锡/深圳：11:00</span>
            <span>网站注册公司名称: 北京廿一客食品有限公司 地址: 北京市北京经济技术开发区兴海二街5号院3号楼 </span>
        </div>
        <div class="footer-copyright">
            <span>Copyright© 21Cake蛋糕官网商城 2007-2019, 版权所有 <a style="color: #9a9a9a" target="_blank" href="http://www.miitbeian.gov.cn/">京ICP备14006254号-1</a></span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'MyFooter'
}
</script>
<style lang="less">

#footer{
    width: 100%;
    height: 378px;
    background-color:#333;
    padding: 50px 0 0 0 ;
    position: relative;
    font-size: 12px;
}
.footer-logo{
    width: 96px;
    height: 36px;
    display: block;
    margin: 0 auto;
}
.footer-nav{
    text-align: center;
    color: #fff;
    margin: 25px 0;
}
.footer-nav a{
    color: #ffffff;
    margin: 0 50px;
    display: inline-block;
}
.footer-icon{
    text-align: center;
}
/* .footer-weixin:hover{
    background: url(../imgs/index/erweima.png)no-repeat 0px 0px;
    width: 150px;
    height: 150px;
    position: relative;
    top: 1px;
}
.footer-app:hover{
    background: url(../imgs/index/footer-erweima.png)no-repeat 0px 0px;
    width: 160px;
    height: 160px;
} */
.footer-icon a{
    display: inline-block;
    border-radius: 25px;
    height: 50px;
    width: 50px;
    background: #494949;
    margin: 0 25px;
    font-size: 16px;
    color: #fff;
    line-height: 50px;
    text-align: center;
    vertical-align: middle;
}
.footer-icon a>img{
    height: 30px;
    margin: 10px;
}
.footer-text{
    color: #9a9a9a;
    text-align: center;
    margin-top: 25px;
    line-height: 18px;
    font-size: 10px;
}
.footer-text span{
    display:block;
}
.footer-copyright {
    margin: 0 auto;
    border-top: 1px solid #616161;
    margin-top: 15px;
    text-align: center;
    padding-bottom: 15px;
    font-size: 10px;
    padding-top: 12px;
}
.footer-copyright span {
    color: #9a9a9a;
    line-height: 5.5em;
}
</style>