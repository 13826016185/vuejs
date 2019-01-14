<template>
    <div>
    <mt-header title="我的奥莱购" :fixed="true">
      <mt-button  slot="left">
           <myicons type="gear"/>
              
              </mt-button>
      <mt-button  slot="right" >
              <myicons type="note" width="36" height="36"/>
              <span class="span">
                  信息
              </span>

      </mt-button>
    </mt-header>

    <mt-button type="primary" size="large">
            <div class="touxiang">
                    <img src="../img/touxiang.jpg" width="56px" height="56px" >
            </div>
             陈年老醋

    </mt-button>

    <div id="dingdan">
        <div id="dingt">
            <span>
                我的订单
            </span>
            <span>
                查看全部订单>
            </span>
        </div>
        <div id="dingb">
        <mt-navbar v-model="selected">
            
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)" class="xiahua">
               <myicons :type="tab.icon"/>
              {{tab.title}}</mt-tab-item>
           
        </mt-navbar>


        </div>
       

    </div>

     <div id="huodong">
             <mt-navbar v-model="selected">
            
            <mt-tab-item :id="tab.name" v-for="tab in tabss" :key="tab.name" @click.native="goto(tab.name)" class="xiahuaa">
               <myicons :type="tab.icon" />
              {{tab.title}}</mt-tab-item>
           
        </mt-navbar>

        </div>

   <div id="huaxian">
       <dd>
          
            <myicons type="clippy"/>
            <span>为你推荐</span> 
           
        </dd>
   </div>

   <div id="tuijian">
        <ul>
            <li  v-for="item in recommend"  :key="item.id"  @click="goto('Detail',item.id)">
                <div class="tuit">
                         <img :src="item.images.large">
                </div>
                <div class="tuib">
                         <h4>{{item.title}}</h4>
                         <p>年份：{{item.year}}</p>
                         <p>导演：{{item.directors.map(item=>item.name).join()}}</p>
                </div>
            </li>
            <!-- <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li> -->
        </ul>

     <p class="dixian">--我是有底线的--</p>
   </div>
      <p class="dixian">--我是有底线的--</p>

    </div>
</template>
<script>
export default {
data() {
    return {
      recommend: [],
      hotmovie: "大黄蜂",
      currentCity: "广州",
      tabs: [
        {
          title: "待付款",
          name: "",
          icon: "history"
        },
        {
          title: "待发货",
          name: "",
           icon: "bug"
        },
        {
          title: "待收货",
          name: "",
           icon: "megaphone"
        },
       
        {
          title: "评价",
          name: "",
          icon: "keyboard"
         
        },
          {
          title: "退换/售后",
          name: "",
          icon: "tools"
         
        }
      ],

      tabss: [
        {
          title: "优惠券",
          name: "",
          icon: "octoface"
        },
        {
          title: "奥莱购赚赚",
          name: "",
           icon: "git-pull-request"
        },
        {
          title: "足迹",
          name: "",
           icon: "eye"
        },
       
        {
          title: "客服与帮助",
          name: "",
          icon: "bell"
         
        },
          {
          title: "收藏",
          name: "",
          icon: "file-symlink-file"
         
        }
      ],
    selected: ''
    
    }
  },
  methods: {
     goto(name, id) {
   
      let obj = { name };
      if (name === "Search") {
        obj.params = { keyword: this.hotmovie };
      } else if (id) {
        obj.params = { id };
      }
   
      this.$router.push(obj);
    }


  },
 mounted () {
     this.$axios
          .get("/dbapi/in_theaters", {
            params: {
              q: this.currentCity
            }
          })
          .then(res => {
            let data = res.data;
            console.log(data.subjects);

     
        this.recommend = data.subjects
          .sort((a, b) => b.collect_count - a.collect_count)
          .slice(0, 6);
      }).catch(err=>{
          console.log(err)
      });
 }

}
</script>

<style>

.span{
    font-size:.75rem;
}
.mint-button--primary{
    height: 10.375rem;
    margin-top:.375rem;
}
.mint-button .touxiang{
    width: 3.5rem;
    height: 3.5rem;
    border-radius:50%;
    background:white;
    margin-left:43%;
    margin-bottom:3%;
}

.mint-button .touxiang img{
    border-radius:50%;
}
#dingdan{
    width:100%;
    height:7.625rem;
    /* border:1px solid black; */
    border-radius:.375rem;
    margin-top:3%;
    background:#26a2ff;
    margin-bottom:1.875rem;
    margin-top:1%;
}
#dingdan #dingt{
    width:100%;
    height: 2.375rem;
    border-bottom:.0625rem solid black;
    line-height: 2.375rem;
}
#dingdan #dingt span:nth-child(1){
    margin-left:2%;
}
#dingdan #dingt span:nth-child(2){
    margin-left:48%;
}

#dingdan #dingb{
    width:100%;
    height: 5.1875rem;
}

.mint-tab-item-label{
    font-size: 1rem;
    line-height: 1.5;

}
.mint-navbar{
 background:#d1dad1;
}

#huodong .mint-navbar{
    border-radius:.375rem;
    margin-top:-6%;

}
 #huodong .mint-tab-item {
    border-right:.0625rem solid black;
}
 #huodong .mint-tab-item:nth-child(5){
     border-right:0 none;
 }

.octicon-clippy{
    float:left;
}

#huaxian span{
    float:left;
    background:white;
}
.octicon-clippy{
    margin-top:.25rem;
    margin-left:38%;
    background:white;
}


#huaxian dd{
    margin-top:.5rem;
    width: 22.125rem;
    height: 2.375rem;
    background:url(../img/heng.png) no-repeat 0px -4px;
    margin-left:.75rem;
}

#tuijian{
    width:100%;
    height:39.25rem;
    margin-bottom:4.75rem;
}

#tuijian .dixian{
    margin-left:36%;
}

#tuijian ul{
    list-style:none;
    width:100%;
    height:100%;
   
}

#tuijian ul li{
    width:46%;
    height: 11.75rem;
    /* border:.0625rem solid black; */
    float:left;
    margin:.375rem;
    overflow:hidden;
}

#tuijian .tuit img{
    width:100%;
    height: 7.75rem;
}
#tuijian .tuib{
    width:100%;
    height: 22%;
}

p {
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

h4 {
    display: block;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.xiahua{
    background:#26a2ff;
    color:black;
}
.xiahuaa{
    background:#26a2ff;
     color:black;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #26a2ff;
    color: black;
    margin-bottom: -3px;
}

 


</style>

