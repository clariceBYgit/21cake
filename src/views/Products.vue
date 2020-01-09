<template>
  <div>
    <my-header />
    <div class="main">
      <div class="nav">
        <ul>
          <li>分类：</li>
          <li><a href="">全部分类</a></li>
          <li v-for="(item,index) of names" :key="index"><a href="">{{item}}</a></li>
        </ul>
         <br>
         <br>
         <br>
        <ul>
          <li>口味：</li>
          <li><a href="">全部口味</a></li>
          <li v-for="(item,index) of taste" :key="index"><a href="">{{item}}</a></li>
        </ul>
        
      </div>
      <div class="detail" v-for="(item,index) of tags" :key="index">
        <!-- 商品板块标识 -->
        <div class="pro_brands">
          <h2>{{item.title1}}
            <span>{{item.title2}}</span>
          </h2>
        </div>
        <br>
        <div class="pro" v-for='(item,index) of item.pros' :key='index'>
          <img :src="item.url1" alt="">
          <img :src="item.url2" alt="">
          <p>{{item.name}}</p>
          <p>{{item.pri}}</p>
          <span v-for="(item,index) of item.labels" :key="index" v-html="item"></span>
          <p><i></i>{{item.add}}</p>
        </div>
      </div>
    </div>
    
    <my-footer />
  </div>
</template>
<script>
// import Header from '../components/Header'
// import Footer from '../components/Footer'
export default {
  name:'Products',
  data(){
    return{
      // 商品板块标识
      // 分类
      names:['蛋糕','冰淇淋','咖啡下午茶','常温蛋糕','设计师礼品','面包'],
      // 口味
      taste:['乳脂奶油','慕斯','乳酪','巧克力','坚果','含酒','咖啡','咖啡','冰淇淋'],
      tags:[{title1:'蛋糕',title2:'新鲜乳脂奶油蛋糕',
        pros:[
        {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
        url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
        name:'深爱',
        pri:'¥268.00/454g(1.0磅)',
        labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
              '<a href="javascript:;">人气&nbsp;&gt;</a>',
              '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
        url3:require('../../public/imgs/index/icons.png'),
        add:'加入购物车'
        },
            {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
        url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
        name:'深爱',
        pri:'¥268.00/454g(1.0磅)',
        labels:['<a href="javascript:;">人气&nbsp;&gt;</a>',
              '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
        add:'加入购物车'
        },
            {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
        url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
        name:'深爱',
        pri:'¥268.00/454g(1.0磅)',
        add:'加入购物车'
        },
              {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
        url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
        name:'深爱',
        pri:'¥268.00/454g(1.0磅)',
        labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
              '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
        add:'加入购物车'
        }

      ]},
          {title1:'＋Gelato10',title2:'10天生命的意式杰拉朵冰淇淋',pros:[
      {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      url3:require('../../public/imgs/index/icons.png'),
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      add:'加入购物车'
      },
             {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
       labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      }

    ]},
          {title1:'配饮',title2:'挂耳咖啡小切块',pros:[
      {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      url3:require('../../public/imgs/index/icons.png'),
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      add:'加入购物车'
      },
             {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
       labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      }

    ]},
          {title1:'常温蛋糕',title2:'方便携带，恰到好处的满足',pros:[
      {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      url3:require('../../public/imgs/index/icons.png'),
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      add:'加入购物车'
      },
             {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
       labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      }

    ]},
          {title1:'礼品',title2:'设计师礼品专区',pros:[
      {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      url3:require('../../public/imgs/index/icons.png'),
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      add:'加入购物车'
      },
             {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
       labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      }

    ]},
          {title1:'面包',title2:'面包',pros:[
      {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      url3:require('../../public/imgs/index/icons.png'),
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      add:'加入购物车'
      },
             {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
       labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      }

    ]},
          {title1:'季节性下线',title2:'在合适的季节，吃恰当的食物',pros:[
      {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      url3:require('../../public/imgs/index/icons.png'),
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      labels:['<a href="javascript:;">人气&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      },
           {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
      add:'加入购物车'
      },
             {url1:require('../../public/imgs/9fe02014aa9df45b5ba79c3d7c9d6c45.png'),
      url2:require('../../public/imgs/887535ff37a336eb09fe99170c9b3f6b.jpg'),
      name:'深爱',
      pri:'¥268.00/454g(1.0磅)',
       labels:['<a href="javascript:;">情侣&nbsp;&gt;</a>',
            '<a href="javascript:;">聚会&nbsp;&gt;</a>'],
      add:'加入购物车'
      }

    ]}

        ]
       // 遍历生成商品
    

    }
   
  }
  
}
</script>
<style lang="less">
.main{
  display:block;
  margin: 0 auto;
  background: url(../../public/imgs/index/bj.png);
  width: 1200px;
}
// 商品导航部分
.nav{
  border-top: 1px dotted @btnfont;
  border-bottom: 1px dotted @btnfont;
  width: 1200px;
  height: 118px;
  ul{
    margin-top: 15px;
    li{
      margin: 10px 20px 0 0;
      float: left;
      a{
        color: @font;
        }

    }
    li:first-child{
      margin-left:20px;
    }
    li:nth-child(2){
      margin-left:40px; 
    }
  }
  ul:last-child{
    margin-top: 0;
  }
}
// 宝贝展示页
.detail{
    width: 1200px;
    margin: 50px auto;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    line-height: 25px;
    .pro_brands{
      text-align: center;
      padding: 45px 0;
      h2{
        padding: 0 15px;
        display: inline-block;
        text-align: left;
        font-size: 20px;
        line-height: 20px;
        border-left:2px solid @font; 
        color:@font;
        span{
            line-height: 20px;
            display: block;
            font-size: 12px;
        }
      }
    
    }
    .pro{
      width:228px;
      height: 364px;
      float: left;
      margin: 0 36px 0 36px;
      img{
        width:228px; 
      }
      img:first-child{
      position: absolute;
        width: 65px;
        z-index: 12;
        margin-top:12px;
      }
      i{
        display: inline-block;
        vertical-align: middle;
        background: url(../../public/imgs/index/icons.png) no-repeat;
        background-position: -216px -40px;
        background-size: 310px 120px;
        height: 28px;
        width: 28px;
        margin-right: 2px;
      }
      span a{
        display: inline-block;
        color: @btnfont;
        border:1px solid @btnfont;
        border-radius:100px;
        font-size: 12px;
        padding: 0 6px 0 6px;
        line-height: 16px;
        margin-right:2px;
      }
  }
    &:after{
      display: block;
      content:'';
      clear: both;
    }
}

</style>