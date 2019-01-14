<template>
  <div class="page search-list">
  <div class="search">
        点击跳转到search,没时间，我就不细做了。
  </div>
    <div class="qiehuan">
        <ul>
            <div @click="reverse">
            <li class="jiage jiaa" v-if="cartStatuss === 'accounts'" @click="cartStatuss = 'edits'">价格升序</li>
            </div>
            <div @click="reverse">
             <li class="jiage jiab" v-if="cartStatuss === 'edits'" @click="cartStatuss = 'accounts'">价格降序</li>
            </div>

             <div @click="reverse">
            <li class="xiao xiaoa" v-if="cartStatusss === 'accountss'" @click="cartStatusss = 'editss'">销量升序</li>
            </div>
            <div @click="reverse">
             <li class="xiao xiaob" v-if="cartStatusss === 'editss'" @click="cartStatusss = 'accountss'">销量降序</li>
            </div>


            <li class="shitu" v-if="cartStatus === 'account'" @click="cartStatus = 'edit'">切换视图B</li>
            <li class="shit" v-if="cartStatus === 'edit'" @click="cartStatus = 'account'">切换视图A</li>
        </ul>
    </div>

    <div class="liea" v-if="cartStatus === 'edit'">

        <ul>
            <li v-for="tab in goods" :key="tab.goods_id">
                    <div class="img">
                            <img :src="tab.goods_image_url" >
                    </div>
                    <div class="wenzi">
                            <p>{{tab.goods_name}}</p>
                            <p class="pprice"> {{tab.goods_price}}</p>
                            <p>{{tab.store_name}}</p>
                    </div>

            </li>
           
        </ul>

    </div>
    <div class="lieb" v-if="cartStatus === 'account'">

        <ul>
            <li v-for="tab in goods" :key="tab.goods_id">
                <div class="imgg">
                    <img :src="tab.goods_image_url" >
                </div>
                <div class="wenzii">
                    <p class="sheng">
                        {{tab.goods_name}}
                    </p>
                    <p class="ppp">
                        {{tab.store_name}}
                    </p>
                </div>


            </li>
          
        </ul>

    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
       cartStatus:"account",
        cartStatuss:"accounts",
        cartStatusss:"accountss",
       goods:[]
    };
  },
  methods: {
   
        //反转数据：
        reverse(){
            this.goods.reverse();
        }
     },
  mounted(){
       this.$axios.get("https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&gc_id=268&page=10&curpage=1",{
        params:{
          gc_id:'268'
        }
      }).then(res => {
       
        let data = res.data.datas.goods_list;
        console.log(data);

        this.goods = data;
      });
      }
};
</script>
<style scoped>

.search{
    width:100%;
    height:38px;
    background:orangered;
    position:fixed;
    top:0;
    line-height: 38px;
    text-align: center;
    font-weight: bold;
}
.qiehuan{
    width:100%;
    height:38px;
    background:pink;
    position:fixed;
    top:38px;
}
.qiehuan ul li{
    float:left;
    width:32%;
    height:38px;
    border:1px solid red;
    line-height:38px;
    text-align: center;
    font-weight: bold;
    margin-right:3px;
}
.liea{
    width:100%;
    height:1522px;
    margin-top:98px;
}
.lieb{
    width:100%;
    height:1338px;
    margin-top:98px;
}
.shitu{
    background:paleturquoise;
}
.shit{
    background:purple;
}

.liea ul li{
    width:100%;
    height:138px;
    /* border-top:1px solid red; */
    /* border-bottom:1px solid red; */
    margin-top:8px;
}
.lieb ul li{
    float:left;
    width:45%;
    height:236px;
    /* border:1px solid red; */
    margin:8px;
}
.liea div{
    float:left;
}
.img{
    width:138px;
    height:138px;
}
.wenzi{
    width:58%;
    height:138px;
    line-height: 26px;
    padding-left:5%;
}

.pprice{
    color:red;
    font-size: 16px;
    font-weight: bold;
}
.liea .img img{
    width:138px;
    height:138px;
    border:1px solid #58bc58;
}
.liea .img p{
    font-size: 14px;

}

.lieb .imgg{
    width:100%;
    height: 188px;
}
.lieb img{
    width:100%;
    height:100%;
    border:1px solid #58bc58;
}
.wenzii{
    font-size: 14px;
    text-align:center;
}
.wenzii p{
    margin-top:5px;
}
.ppp{
    color:red;
    font-weight: bold;
}
.sheng{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.jiaa{
    background:blue;
    color:red;
}
.jiab{
    background:green;
}
.xiaob{
    background:#58bc58;
}
</style>