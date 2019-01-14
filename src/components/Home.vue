<template>
  <div class="page">
    <mt-header title="奥莱购影城" fixed>
      <mt-button slot="left" @click="goto('CityList')">[{{currentCity}}]</mt-button>
      <mt-button icon="search" slot="right" @click="goto('Search')"></mt-button>
    </mt-header>

    <mt-button type="default" icon="search" @click="gotoo('search')" size="large" class="homesea listbtn">搜索 商品 品牌</mt-button>

            <mt-navbar v-model="selected" class="homenav">
    <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="gotoh(tab.name)" class="haha">
               <myicons :type="tab.icon"/>
              {{tab.title}}</mt-tab-item>

           </mt-navbar>
     <v-goTop></v-goTop>
    <router-view/>
  </div>
</template>
<script>
import goTop from "./Goodgoods/Xiuixiu";
export default {
  data() {
    return {
      recommend: [],
      hotmovie: "大黄蜂",
      currentCity: "广州",
       tabs: [
        {
          title: "推荐",
          name: "homea",
          icon:""
          
        },
        {
          title: "奢侈品",
          name: "homeb",
           icon: "zap"
        },
        {
          title: "新百伦",
          name: "homec",
            icon:""
          
        },
          {
          title: "优衣库",
          name: "homed",
            icon:""
          
        }
        ],

         selected:'homea'
    };
  },
  methods: {
    goto(name, id) {
   

      // 路由传参
      let obj = { name };
      if (name === "Search") {
        obj.params = { keyword: this.hotmovie, a: 100, name: "tiantian" };
      } else if (id) {
        obj.params = { id };
      }
      this.$router.push(obj);
    },
    getMovie(){

      this.$axios.get("/dbapi/in_theaters",{
        params:{
          city:this.currentCity
        }
      }).then(res => {
        // 热映电影
        let data = res.data;
        console.log(data);

        // 获取热映top5
        this.recommend = data.subjects
          .sort((a, b) => b.collect_count - a.collect_count)
          .slice(0, 5);
      });
    },
     gotoo(name){
          this.$router.push({path:'/'+name})
      },
     gotoh(name){
          this.$router.push({path:'/home/'+name})
      }
      
  },
  created() {
    

   
  },
  mounted() {
  
  },
   components:{
      'v-goTop': goTop
    }
};
</script>
<style scoped>
.mint-swipe img {
  width: 100%;
}
.carousel {
  height: 18.75rem;
}
#bdmap {
  height: 12.5rem;
}
haha{
  line-height: 4.125rem;
}
.mint-button--default{
  font-size: .875rem;
}
.homes{
  margin-top:2.5rem;
}
.homenav{
  margin-top:0%;
}
.homesea{
  margin-top:10%;
}




</style>
