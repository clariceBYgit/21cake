<template>
  <div>
    <my-header />
    <div id='nav' class="tag-nav">
      <h2>Bailey's Love Triangle 百利甜情人</h2>
      <h2>¥298.00/908g(2.0磅)
        <a class="add-cart">
          <p></p>
          <i></i>
        </a>  
      </h2>
    </div>
    <!-- 点击小图显示大图 -->
    <div class="des">
      <div class="des-img">
        <!-- 这是大图 -->
        <div>
          <div>
            <img id="big" :src="bigImg" alt />
          </div>
          <ul>
            <!-- 小图 -->
            <li
              id="small"
              v-for="(item,index) of smImgs"
              :class="{imgactive:index==i}"
              :key="index"
              @mouseover="change(index)"
            >
              <img :src="item.src" />
            </li>
          </ul>
        </div>
      </div>
      <!-- 商品的具体描述 -->
      <div class="content">
        <!-- 左边 -->
        <div class="left">
          <h1>Bailey's Love Triangle 百利甜情人</h1>
          <P>/爱尔兰百利甜酒/新西兰奶油/云南玫瑰甘露/ &lt;br/></P>
          <span v-for="(item,index) of labels" :key="index" v-html="item"></span>
          <ul>
            <li v-for="(item,index) of accs" :key="index">
              <img :src="item.src" :alt="item.texts" />
              <span>{{item.texts}}</span>
            </li>
          </ul>
          <div>
            /爱尔兰百利甜酒/新西兰奶油/云南玫瑰甘露/
            <br />Just Bailey's, light cream and you. The flavours may be velvetty subtle, but the chemistry is as electric as a first kiss.
            <br />*玫瑰花瓣经过消毒处理，仅用作装饰，不可食用。
            <br />
            <font>* 1月1日起夹心为草莓。。</font>
            <br />
            <font>*玫瑰花瓣经过消毒处理，仅用作装饰使用（使用围边纸与蛋糕隔开），不可食用。</font>
          </div>
          <ul>
            <li>
              <i></i>
              <span>保鲜条件：0-4℃保藏10小时，5℃食用为佳</span>
            </li>
            <li>
              <i id="sweet_active"></i>
              <span>参考甜度：</span>
              <span class="sweets">
                <i id="sweet_active"></i>
                <i id="sweet_active"></i>
                <i id="sweet_active"></i>
                <i id="sweet_active"></i>
                <i id="sweet"></i>
              </span>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="right">
          <!-- 盒子的详情 -->
          <div class="box">
            <div class="box_des">
              <!-- 盒子图片 -->
              <img :src='boximg' alt />
              <!-- 盒子文字的描述 -->
              <p v-html="size"></p>
              <!-- 具体的人数等描述 -->
              <ul>
                <li>
                  <i></i>
                  <p>约13.5x13.5</p>
                </li>
                <li>
                  <i></i>
                  <p>适合3-4人分享</p>
                </li>
                <li>
                  <i></i>
                  <p>含5套餐具（蜡烛需单独订购）</p>
                </li>
                <li>
                  <i></i>
                  <p>最早明天 09:30配送</p>
                </li>
              </ul>
            </div>
            <!--  选择蛋糕尺寸-->
            <dl>
              <dt>商品规格</dt>
              <dd>
                <ul>
                  <li>
                    <a href="javascript:;">
                      <i></i>
                      <span>454g</span>
                      <span>(1.0磅)</span>
                    </a>
                  </li>
                </ul>
              </dd>
            </dl>
            <!-- 换购商品 -->
            <dl>
              <dt>换购商品</dt>
              <dd></dd>
            </dl>
              <span></span>
          </div>
          <button>立即购买</button>
          <button>加入购物车</button>
        </div>
      </div>
      <!-- 下面的详情图片 -->
      <div class="imgall">
        <ul>
          <li v-for="(item,index) of imgall" :key="index">
            <img :src="item.src" alt="">
          </li>
        </ul>

      </div>
    </div>
    <my-footer />
  </div>
</template>
<script>
export default {
  name: "Details",
  data() {
    return {
      bigImg: require("../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg"),
      smImgs: [
        {
          src: require("../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg")
        },
        { src: require("../../public/imgs/1.jpg") },
        {
          src: require("../../public/imgs/99792cad3369084defaf947b8c3d5fb6.jpg")
        }
      ],
      labels: [
        '<a href="javascript:;">情侣&nbsp;&gt;</a>',
        '<a href="javascript:;">人气&nbsp;&gt;</a>',
        '<a href="javascript:;">结婚&nbsp;&gt;</a>',
        '<a href="javascript:;">相识&nbsp;&gt;</a>',
        '<a href="javascript:;">生日&nbsp;&gt;</a>'
      ],
      accs: [
        {
          src: require("../../public/imgs/pcicon-03.png"),
          texts: "爱尔兰百利甜酒"
        },
        {
          src: require("../../public/imgs/pcicon-19.png"),
          texts: "当日空运云南玫瑰"
        }
      ],
      i: 0,
      // 购买详情  盒子
      // 盒子的图片
      boximg:require('../../public/imgs/box1.jpg'),
      // 盒子尺寸
      size:'¥198.00<span>/454g(1.0磅)</span>',   
      pros:{
        box:{
          src2:require('../../public/imgs/box2.jpg'),
          src3:require('../../public/imgs/box3.jpg'),
          src4:require('../../public/imgs/box4.jpg'),
          src5:require('../../public/imgs/box5.jpg'),
          src6:require('../../public/imgs/more.jpg')
        },
        sizes:{
          size1:'¥198.00<span>/454g(1.0磅)</span>',
          size2:'¥258.00/<span>/681g(1.5磅)</span>',
          size3:'¥298.00<span>/908g(2.0磅)</span>',
          size4:'¥458.00/<span>/1362g(3.0磅)</span>',
          size5:'¥750.00/<span>/2270g(5.0磅)</span>',
          size6:'更多磅数',
        },
        desc:['<i></i>约13.5x13.5','<i></i>适合3-4人分享','<i></i>含5套餐具（蜡烛需单独订购）','<i></i>最早明天 09:30配送']
          
      },
      // 下面的详情图片
      imgall:[
         {
          src: require("../../public/imgs/5ab0e585dfa549c1b5a0fa6f9ecb440a.jpg")
        },
        { src: require("../../public/imgs/23a9719f315baa72580a8c1c2f3aaebc.jpg") 
        },
        {
          src: require("../../public/imgs/5d292115d534488020a2463046aa7c7e.jpg")
        },
         {
          src: require("../../public/imgs/348eddda685142e3313b4c85375ffbe6.jpg")
        }, {
          src: require("../../public/imgs/f34cad4c11344e13215ca8a0c68e191c.jpg")
        },
         {
          src: require("../../public/imgs/97994ddb484b6c9d23071e41d5d0394e.jpg")
        },
        {
          src: require("../../public/imgs/b5f78fde4d988929887c0aa894f9257a.jpg")
        }
      ]
    };
  },
  methods: {
    change(index) {
      // console.log(index);
      var src1 = this.smImgs[0].src;
      var src2 = this.smImgs[1].src;
      var src3 = this.smImgs[2].src;
      if (index == 0) {
        this.bigImg = src1;
        big.style = "margin:0 auto;";
        this.i = index;
      } else if (index == 1) {
        this.bigImg = src2;
        big.style = "width:924px;";
        this.i = index;
      } else {
        this.bigImg = src3;
        big.style = "width:924px;";
        this.i = index;
      }
    },
    handleScorll(){
      var scorllTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scorllTop > 1100 ){
        nav.style='display:block'
      }else{
        
        nav.style='display:none'
      }
      // console.log(scorllTop)
    }

  },
  mounted(){
    window.addEventListener('scroll',this.handleScorll)
  }
  
};
</script>
<style lang="less">
.imgactive {
  border: 1px solid @actfont;
}
#sweet_active {
  background: url(../../public/imgs/sweet.png) no-repeat;
    width: 24px;
    height: 21px;
    background-size: 20px 20px;
}
#sweet {
  background: url(../../public/imgs/sweet_01.png) no-repeat;
  width: 27px;
  height: 28px;
  background-size: 20px 20px;
  margin-bottom: -8px;
}

.tag-nav {
  width: 100%;
  height: 70px;
  overflow: hidden;
  color:@font;
  display: none;
  position: fixed;
  top:0;
  background: #ffffff;
  height: 70px;
  box-shadow: 0px 2px 4px 0px rgba(196,196,196,0.50);
   h2:first-child{
     float: left;
     margin-top: 1.5%;
     font-weight: 500;
   }
   h2{
     float: right;
     font-weight: 500;
     margin-top: 1.5%;
     font-weight: 500;
     a {
    float: right;
    i {
        display: inline-block;
        vertical-align: middle;
        background: url(/img/icons.213b6b61.png) no-repeat;
        background-position: -175px -33px;
        background-size: 348px 102px;
        height: 26px;
        width: 30px;
        margin-right: 5px;
    }
   }
    
  }
}
.des {
  width: 1050px;
  margin: 0 auto;
  box-sizing: border-box;
  // 图片  大图与小图
  .des-img {
    margin-bottom: 10px;
    div {
      display: flex;
      div {
        width: 924px;
        height: 520px;
        img {
          display: inline-block;
          margin: 0 auto;
        }
       
      }
      ul {
        display: inline-block;
        height: 150px;
        margin: 343px 0 0 15px;

        li {
          margin-bottom: 14px;
          img {
            width: 88px;
            display: block;
            cursor: pointer;
          }
        }
        li:first-child {
          width: 88px;
          height: 49.5px;
          margin-bottom: 14px;
          img {
            width: 40px;
            display: block;
            margin: 0 auto;
          }
        }
      }
    }
  }
  // 具体的文字描述
  .content {
    color: @font;
    display: flex;
    justify-content: space-between;
    margin-top:40px;
    border-bottom: #D8D8D8 solid 1px;
    font-size: @font-size/2;
    // 左边
    .left {
      width: 484px;
      p {
        color: #f00;
      }
      span {
        display: inline-block;
        margin: 15px 0 15px 0;
        a {
          display: inline-block;
          color: @btnfont;
          border: 1px solid @btnfont;
          border-radius: 100px;
          font-size: 12px;
          padding: 0 6px 0 6px;
          line-height: 16px;
          margin-right: 2px;
        }
      }
      ul {
        overflow: hidden;
        margin-bottom: 14px;
        padding-bottom: 11px;
        li {
          float: left;
          height: 50px;
          line-height: 50px;
          color: @font;
          img {
            display: inline-block;
            height: 50px;
            width: 50px;
            vertical-align: middle;
          }
        }
      }
      div {
        line-height: 27px;
        color: @font;
        font {
          color: #f00;
        }
      }
      ul li {
        i {
          display: inline-block;
          vertical-align: middle;
          height: 27px;
          width: 22px;
          background-image: url(../../public/imgs/index/icons.png);
          background-repeat: no-repeat;
          background-size: 240px auto;
          margin: 0 10px;
          background-position-x: -116px;
        }
        .active {
          display: inline-block;
          vertical-align: middle;
          height: 27px;
          width: 22px;
          background-image: url(../../public/imgs/sweet.png);
          background-repeat: no-repeat;
        }
        .sweets {
          margin: -38px 0 0 0;
        }
      }
    }
    // 右边
    .right { 
      width: 500px;
      .box{
        .box_des{
          img{
            width: 59%;
          }
          p{
          display: inline;
          font-size:@font-size;
          color: #C69C6D;
          span{
            font-size: @font-size - 8px;
          }
         }  

         ul {
           li{
             i{
                display: inline-block;
                vertical-align: text-bottom;
                width: 28px;
                height: 28px;
                margin: 0 11px 0 0;
             }
             p{
               font-size: @font-size/2;
              color: @font;
              line-height: 15px;
             }
           
          }
          li:first-child{
            i{
              background:url(/img/icons.213b6b61.png) no-repeat -206px 3px;
              background-size: 310px 120px;
            }
            }
            li:nth-child(2){
              i{ 
                background:url(/img/icons.213b6b61.png) no-repeat -233px 3px;
                background-size: 310px 120px;
              }
              
            }
              li:nth-child(3){
              i{ 
                background:url(/img/icons.213b6b61.png) no-repeat -259px 2px;
                background-size: 310px 120px;
              }
            }
            li:last-child{
              i{
                background:url(/img/icons.213b6b61.png) no-repeat -284px 2px;
                background-size: 310px 120px;
              }
            }
          
         }


        }
      

      }

    }
  }
  // 下面的图片详情
  .imgall{
    text-align: center;
    margin: 30px 0 0 0;
    ul li img{
      width:1050px;
    }
  }

}
</style>