<template>
  <div>
     <div id="centainer">
        <!-- 导航栏 -->
       <div class="logo">
        <a href="">
            <img src="../../public/imgs/logo.png" alt="">
        </a>
        <ul class="nav-left">
            <li><a href="">首页</a></li>
            <li><a href="">蛋糕</a></li>
            <li><a href="">面包</a></li>
            <li><a href="">冰淇淋</a></li>
            <li><a href="">咖啡下午茶</a></li>
            <li><a href="">全国送</a></li>
            <li><a href="">企业专区</a></li>
        </ul>
        <ul class="nav-right">
            <li>
                <a class="nav-app" href="">APP下载
                    <div id="app-hover">
                        
                    </div>
                </a>
            </li>
            <li> <a class="nav-xl" href="">上海</a></li>
            <li><a class="message" href="">消息</a></li>
            <li><span class="nav-dl"><a href="">登录/注册</a></span></li>
        </ul>
        <!-- <div class="nav-right">
            <a class="nav-app" href="">APP下载</a>
            <div>
                <a class="nav-xl" href="">上海</a>
            </div>
            <a class="message" href="">消息</a>
            <span class="nav-dl"><a href="">登录/注册</a></span>
        </div> -->
       </div>
    </div>

  </div>
</template>
<script>
export default {
    name:'MyHeader'
}
</script>
<style lang="less">
/* 导航栏 */
@myfont: #684029;

.logo{
    width: 1200px;
    height: 80px;
    align-content: center;
    font-size: 14px;
    color:@myfont;
    margin: 0 auto;
    position: relative;
    a{
        color:@myfont;
        img{
            width:120px;
            height: 44px;
            margin-top: 18px;
            position: absolute;
            left: 0;
        }
    }
    .nav-left{
    position: relative;
    float: left;
    line-height: 80px;
    margin-left: 30px;
    left: 10%;
    li{
        float: left;
        margin-left: 15px;
    }
    }
    .nav-right{
        float: right;
        position: relative;
        right: 5%;
        li{
            float: left;
            line-height: 80px;
            margin-left: 15px;
        }
    }
}


#app-hover{
    background: url(../../public/imgs/footer-erweima.png) no-repeat 0px 0px;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index:22;
    display: none;
    background-size: 100%;
    top: 70%;
    left: -15%;
}
a:hover #app-hover{
    display:block;
    transform: scale(0.8);
    transition: all 5s;
}


</style>