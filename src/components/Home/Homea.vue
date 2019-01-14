<template>
  <div class="page">
    
      <mt-swipe :auto="4000">
        <mt-swipe-item
          v-for="item in lunbo"
          :key="item.image"
          @click.native="goto('Detail',item.id)"
        >
          <img :src="item.image">
        </mt-swipe-item>
      </mt-swipe>

      <p class="rexiao">热销上衣——></p>

    <div class="tuigoods">

      <ul>
        <li v-for="tab in goods" :key="tab.goods_id" @click="goto('Detail',tab.goods_id)">
            <div class="tupian">
              <img :src="tab.goods_image" >
            </div>
            <p>{{tab.goods_name}}</p>
            <p class="price">
              $:{{tab.goods_price}}
              <span>
                <myicons type="thumbsup"/>
              </span>
              </p>

        </li>
       
      </ul>
    </div>

      <p class="rexiao">热销裤子——></p>

    <div class="jingdian">
         <ul>
        <li v-for="tab in goodss" :key="tab.goods_id" @click="goto('Detail',tab.goods_id)">
            <div class="tupian">
              <img :src="tab.goods_image" >
            </div>
            <p>{{tab.goods_name}}</p>
            <p class="price">
              $:{{tab.goods_price}}
              <span>
                <myicons type="git-merge"/>
              </span>
              </p>

        </li>
       
      </ul>
    </div>

     <p class="rexiao">潮流鞋子——></p>

    <div class="xiezi">
         <ul>
        <li v-for="tab in goodsss" :key="tab.goods_id" @click="goto('Detail',tab.goods_id)">
            <div class="tupian">
              <img :src="tab.goods_image" >
            </div>
            <p>{{tab.goods_name}}</p>
            <p class="price">
              $:{{tab.goods_price}}
              <span>
                <myicons type="bold"/>
              </span>
              </p>

        </li>
       
      </ul>

<p class="rexiaoa">————底线在此————</p>

    </div>

     
  
  </div>
</template>
<script>
export default {
  data() {
    return {
       recommend: [],
       lunbo:[],
       goods:[],
       goodss:[],
       goodsss:[]
      
      
    };
  },
  methods:{
    goto(name, id) {
   

          // 路由传参
          let obj = { name };
          if (name === "Search") {
            obj.params = { keyword: this.hotmovie, a: 100, name: "tiantian" };
          } else if (id) {
            obj.params = { id };
          }
          this.$router.push(obj);
        }
  },
  mounted() {
   

      this.$axios.get("https://www.nanshig.com/mobile/index.php",{
        params:{
          act:'index'
        }
      }).then(res => {
       
        let data = res.data.datas;
        console.log(data);

        this.recommend = data;
        this.lunbo=data[0].adv_list.item;
        this.goods=data[1].goods.item;
        this.goodss=data[2].goods.item;
        this.goodsss=data[4].goods.item;
        console.log(data[0].adv_list.item[0].image);

       
      });
    
    
  }
};
</script>
<style scoped>

page img{
  height: 11.25rem;
}
.page{
  margin-top:.1875rem;
}
.tuigoods ul li{
  width:46%;
  height: 13.375rem;
  /* border:1px solid black; */
  float:left;
  margin:.375rem;
}
.jingdian ul li{
  width:46%;
  height: 13.375rem;
  float:left;
  margin:.375rem;
}
.xiezi ul li{
  width:46%;
  height: 13.375rem;
  float:left;
  margin:.375rem;
}
.tupian{
  width:100%;
  height:66%;
}
.tupian img{
  width:100%;
  height:100%;
}
.tuigoods ul li p{
  font-size:.75rem;
}
.jingdian ul li p{
  font-size:.75rem;
}
.xiezi ul li p{
  font-size:.75rem;
}
.price{
  color:red;
}
.price span div{
  display:inline-block;
  margin-left:56%;
}


 .mint-swipe {
    overflow: hidden;
    position: relative;
    height: 23%;
}
.rexiao{
  color:red;
  margin-left:.5rem;
  margin-bottom:.5rem;
}

.xiezi{
  width:100%;
  height:88rem;
  margin-bottom:2.375rem;
}
.rexiaoa{
  margin-left:22%;
}
.mint-swipe[data-v-93a0617c] {
    overflow: hidden;
    position: relative;
    height: 25%;

}
.mint-swipe img{
  width:100%;
}

</style>