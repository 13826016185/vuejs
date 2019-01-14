<template>
    <div class="page">
    <mt-button type="default" icon="search" @click="gotoo('search')" size="large" class="listbtn">搜索你喜欢的商品</mt-button>
    <!-- <mt-header title="搜索你喜欢的商品" :fixed="true"  @click="gotoo('search')">
      <mt-button slot="left" icon="search"></mt-button>
    </mt-header> -->
  <div class="listll">
        <mt-navbar v-model="selected"  class="listnav">
            
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">
               <myicons :type="tab.icon"/>
              {{tab.title}}</mt-tab-item>
           
        </mt-navbar>
  </div>
       
        <router-view/>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "推荐",
          name: "in_theaters",
          icon: "thumbsup"
        },
        {
          title: "奢侈品",
          name: "coming_soon",
           icon: "zap"
        },
        {
          title: "名牌",
          name: "new_movies",
           icon: "watch"
        },
       
        {
          title: "内衣",
          name: "top250",
          icon: "jersey"
         
        },
          {
          title: "扫洋货",
          name: "yanghuo",
          icon: "rocket"
         
        }
      ],
      selected:'in_theaters'
    };
  },
  methods:{
      goto(name){
          this.$router.push({path:'/list/'+name})
      },
       gotoo(name){
          this.$router.push({path:'/'+name})
      }

  },

//   监听数据：数据有修改自动执行
  watch:{
    //   selected(newValue,oldValue){
    //       console.log(newValue,oldValue)
    //   },
      $route(newValue,oldValue){
          console.log(newValue,oldValue)
      }
  },
  mounted(){
      console.log(this.$route.params.type)
  }
};
</script>

<style scoped>
.mint-navbar .mint-tab-item.is-selected{
  color:red;
  font-size: 1rem;
}
.listbtn{
  position: fixed;
  top: 0;
  left: 0;
}
.listnav{
  
  margin-top:10%;

}
.listll{

 overflow-x: auto;

}
</style>

