<template>
  <div class="page search-list">
    <div class="lista">
      <p>
        时尚上衣————>
      </p>
    </div>
    <div class="listb">
      <ul>
        <li v-for="tab in recommend" :key="tab.gc_id" @click="gotoo('liebiao')">
          <div>
                <img :src="tab.gc_image">
          </div>
          <p>
            {{tab.gc_name}}
          </p>
        </li>
       
      </ul>
    </div>

    <div class="listc">
      <p>
        <span>
        商品推荐
        </span>
      </p>
    </div>

    <div class="listd">
        <ul>
          <li v-for="tab in goods" :key="tab.goods_id">
            <div>
              <img :src="tab.goods_image_url">
            </div>
            <p class="biaoti">
              {{tab.goods_name}}
            </p>
            <p class="jiage">$:
              {{tab.goods_price}}
            </p>
          </li>
         
        </ul>
        <div class="dixian">
          <p>
            <span>
            ————到底了————
            </span>
          </p>
        </div>
    </div>

 <v-goTop></v-goTop>
  </div>
</template>
<script>
import goTop from "../Goodgoods/Xiuixiu";
export default {
  data() {
    return {
       recommend: [],
       goods:[]
          };
  },
  methods: {
     gotoo(name){
          this.$router.push({path:'/'+name})
      }
  },
  mounted() {
   

      this.$axios.get("https://www.nanshig.com/mobile/index.php?act=goods_class&op=get_child_all",{
        params:{
          gc_id:'256'
        }
      }).then(res => {
       
        let data = res.data.datas.class_list[0].child;
        console.log(data);

        this.recommend = data;
       
       

       
      });

       this.$axios.get("https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=256",{
        params:{
          page:'20'
        }
      }).then(res => {
       
        let data = res.data.datas.goods_list;
        console.log(data);

        this.goods = data;
       
       

       
      });
    
    
  },
   components:{
      'v-goTop': goTop
    }

};
</script>
<style scoped>

.lista p{
  margin:.75rem;
  color:red;
}
.listb ul li{
  width:88px;
  height:108px;
  float:left;
  margin:6px;
}
.listb ul li img{
  width:88px;
  height:88px;
}
.listb ul li p{
  width:100%;
  height:20px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}

.listc p span{
  font-weight: bold;
  font-size: 18px;
  border-left:6px solid red;
  margin-left:8px;

}
.listd ul li{
  width:46%;
  height:238px;
  float:left;
  margin:7px;
}
.listd{
  width:100%;
  margin-top:8px;
  height:2622px;
}

.listd ul li img{
  width:100%;
  height:188px;
}
.listd ul li .jiage{
  color:red;
  font-weight: bold;
  margin-top:6px;
  border-top:1px solid #58bc58;
}
.listd ul li .biaoti{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size: 14px;
   margin-top:6px;
}

.dixian p span{
  color:green;
  margin-left:108px;
  margin-top:12px;
}
</style>
