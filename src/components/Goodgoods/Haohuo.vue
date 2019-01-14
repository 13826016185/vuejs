<template>
  <div class="page search-list scroll" :class="{show:isActive}">
   <div id="haohuo">
     
     
     <ul>
       <li>

        <p> 拖动可以左右浮动.</p>
        <p> 往下拉有回到顶部功能！（做成了组件，就在隔壁的xiuixiu里）</p>
       </li>
      
     </ul>

   </div>

   <v-goTop></v-goTop>
  </div>
</template>
<script>
import goTop from "./Xiuixiu";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
    components:{
      'v-goTop': goTop
    }
};
</script>
<style scoped>
.page{
  height:1888px;
}
#haohuo{
  margin-top:166px;
}

#haohuo ul {
  display:flex;
  overflow-x:auto;
  width:100%;
  height:188px;
  flex-direction:column-reverse;
}
 li{
  width:688px;
  height:168px;
  border:1px solid red;
}

</style>