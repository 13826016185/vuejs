<template>
  <div class="page">
  <div class="xiang" v-modle="goods" :key="goods.comments_count">

    <img :src="goods.images.large" >
    <p class="biaoti">
      导演：{{goods.directors[0].name}}
    </p>
    <p class="jiage">
      <span class="spans">
       类型：
      </span>
      <span class="span">
         {{goods.title}}
      </span>
      </p>
      <p>
      <span class="span1">
       {{goods.casts.map(item=>item.name).join()}}
      </span>
    </p>
  </div>


<div class="con">


    <div class="kuaidi sss">
      <p class="kuaidis">
        送至 全国 有货
      </p>
      <p>
          免运费
      </p>
    </div>
    <div class="daxiao sss">
        已选：
       <span class="daxiaoa">
          红色
       </span>
       <span class="daxiaob">
          黑色
       </span>
        >
    </div>
    <div class="pingjia sss">
          <span>  商品评价：   </span>
          <span>  好评率100%   </span>
          <span>   (0)人评价   ></span>
    </div>
    <div class="dianpu sss">
      <p class="zhang">
      吾欢喜的衣柜 >
      </p>
      <p class="peizhi">
        送货速度>   商品描述>    商品评价>
      </p>
    </div>


</div>

  <div class="gouwuche">

      <div class="spanss div">
         <myicons type="cloud-upload"/>
             客服
      </div>
      <div class="spana div">
         <myicons type="bell"/>
            购物车
      </div>
      <div class="spanb div">
        立刻购买
      </div>
      <div class="spanc div">
        加入购物车
      </div>
  </div>

    <div id="heng">
      <div class="shouji">


      </div>

      </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      goods:[]
    };
  },
  mounted() {
    console.log(this.$route)

      this.$axios.get(`/dbapi/subject/${this.$route.params.id}`,{
        apikey:'0b2bdeda43b5688921839c8ecb20399b'
      }).then(res=>{
        let data = res.data;
        console.log(data)
        this.goods = data;
      })
      
  }
};
</script>
<style scoped>
.page{
  margin-bottom:200px;
}
.xiang{
  width:100%;
  height:506px;
  border-bottom:1px solid red;
}
.xiang img{
  width:100%;
  height:366px;
}
.xiang .biaoti{
  margin-top:10px;
  font-weight: bold;
}
.xiang .jiage{
  margin-top:12px;
}
.xiang .jiage .spans{
  color:red;
  font-weight: bold;
  margin-left:28px;
}
.xiang .jiage .span{
  color:red;
  font-size: 22px;
  font-weight: bold;
}
.xiang .jiage .span1{
  margin-left:198px;
}

.gouwuche{
  height:78px;
  border-top:1px solid red;
  border-bottom:1px solid red;
  position:fixed;
  bottom:62px;
  background:white;
  width:100%;
}

.gouwuche .div{
  float:left;
  text-align: center;
}
.gouwuche .spanss{
  width:20%;
  height:100%;
  line-height: 28px;
}
.gouwuche .spana{
  width:20%;
  height:100%;
  line-height: 28px;
}
.gouwuche .spanb{
  width:30%;
  height:100%;
  font-size: 20px;
  background:brown;
  color:white;
  line-height: 78px;
}
.gouwuche .spanc{
  width:30%;
  height:100%;
  font-size: 20px;
  background:crimson;
  color:white;
  line-height: 78px;
}



.con .kuaidi{
  height:48px;
  border-bottom:1px solid red;
  border-top:1px solid red;
  margin-top:10px;

}
.con .daxiao{
  height:68px;
  border-bottom:1px solid red;
  border-top:1px solid red;
  margin-top:10px;
  line-height: 68px;
}
.con .pingjia{
  height:48px;
  border-bottom:1px solid red;
  border-top:1px solid red;
  margin-top:10px;
  line-height: 48px;
}

.con .dianpu{
  height:68px;
  border-bottom:1px solid red;
  border-top:1px solid red;
  margin-top:10px;
  line-height: 28px;
}

.daxiaoa{
  display:inline-block;
  width:68px;
  height:28px;
  border:1px solid red;
  text-align: center;
  line-height: 28px;
}
.daxiaob{
  display:inline-block;
  width:68px;
  height:28px;
  border:1px solid black;
  margin-left:8px;
  text-align: center;
  line-height: 28px;
}

.zhang{
  font-size: 16px;
  font-weight: bold;
  color:red;
}
.sss{
  width:92%;
  padding-left:8%;

}
.kuaidis{
  font-weight: bold;
}
.span1{
  display:inline-block;
  width:100%;
  height:56px;
  line-height: 56px;
}


#heng{
  height:288px;
  border:1px solid red;
  display:flex;
}
.shouji{
overflow-x:auto;
height:288px;
}
</style>
