<template>
  <div class="page">
   
    <mt-header title="好货好语" :fixed="true">
      <mt-button slot="left" icon="search"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

   <mt-navbar v-model="selected" :fixed="true" class="goodss">
  <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">{{tab.title}}</mt-tab-item>  
   </mt-navbar>
 
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "发现好货",
          name: "haohuo",
          icon:"person"
        },
        {
          title: "好货秀秀",
          name: "xiuixiu",
          icon:"zap"
        }
      ],

       selected:'haohuo'
      
    };
  },
   methods:{
      goto(name){
          this.$router.push({path:'/goodgoods/'+name})
      }
  },
  mounted() {
    

      
  }
};
</script>
<style scoped>
.goodss{
  margin-top:9%;
}
</style>
