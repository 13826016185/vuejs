<template>
<div class="list-container" >
        <div class="top-ops">
                <div class="namee biaotou">
                 <span>
                     购物车
                 </span>
                </div>
                <div class="ops biaotou">
                    <span v-if="cartStatus === 'account'" @click="cartStatus = 'edit'" class="aaa">编辑</span>
                    <span v-if="cartStatus === 'edit'" @click="cartStatus = 'account'" class="bbb">完成</span>
                </div>
        </div>
        <div class="paddingB200">
    
                <div class="goods-list" v-for="(goods,goodsIndex) in goodslist" :key="goodsIndex">
                   <div class="input cart cartl">
                        <input type="checkbox"
                            name="goodRadio"
                            :price="goods.price"
                            :num="goods.qty" 
                            :dataId="goods.id"
                            :value="goods.qty"
                            @click="goodsCkeck($event,goodslist,goods.id)"
                           
                        class="disN">
                        <b></b>
                    </div>
                    <div class="middle cart cartc">
                        <img :src="goods.imgurl" alt="">
                        <div>
                            <p class="name">{{goods.title}}</p>
                            <p class="spec">{{goods.color}}</p>
                        </div>
                    </div>
                    <div class="right cart cartr">
                        <p class="price">价格：￥{{goods.price}}</p>
                        <!-- <p class="num">数量：X{{goods.qty}}</p> -->
                        <p class="caculate">
                            <span class="mark markb" @click="numDecrease(goods.qty)" :num="goods.qty"  @change="change($event,goods.id)">-</span>
                            <span class="cacul" :num="goods.qty">{{goods.qty}}</span>
                            <span class="mark marka" @click="numAdd(goods.qty)" :num="goods.qty"  @change="change($event,goods.id)">+</span>
                        </p>
                    </div>
                </div>
            </div>

            <div id="jiesuan">
            <div class="edit jiesuana" v-if="cartStatus === 'edit'">
                <label>
                    <input type="checkbox" name="allRadio" class="disN" @click="allCheck($event)">
                    <b></b>
                    <span>全选</span>
                </label>
                <span class="delet dell">删除({{totalNum}})</span>
            </div>
            <div class="gotopay jiesuanb" v-if="cartStatus === 'account'">
                <label>
                    <span class="jiea">
                    <input type="checkbox" name="allRadio" class="disN" @click="allCheck($event)">
                    <b></b>
                    <span class="marginR40">全选</span>
                    </span>
                    <span class="jieb jie">
                    <span >合计：</span>
                    <span class="sum ">￥{{sumPrice.toFixed(2)}}</span>
                    </span>
                </label>
                <span class="delet jie jiec" @click="cauSum">去结算({{totalNum}})</span>
            </div>
            </div>
        </div>
  
</template>
<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

export default {
    components: {
         
    },
    name: "life",
    data() {
        return {
            cartStatus:"account",  //购物车状态，account结算，edit删除编辑状态
            sumPrice:0,  //合计金额
            totalNumber: 0, //总数
            shopList:[],
            totalNum:0,//店铺列表
        };
    },
    watch: {
         
    },
    mounted() {
     
      
        console.log(this.$store.state.cart.cartlist)
        console.log('this.cart:',this.cart)
                      
    },
 computed:{
        ...mapState({
            goodslist:(state)=>{
                return state.cart.cartlist

            }
        })
    },

    methods: {
       
        change(e,id){
            // 通过e.target.value获取输入框的值
            // 然后修改vuex中的值
            console.log(e)
            // 在组件中调用mutations：$store.commit()
            this.$store.commit('changeQty',{
                id,
                qty:e.target.value
            });
        },
        //商品选择
        goodsCkeck: function(event,goodsList,goodId){                                 
            //商品列表+-，全选是否checked
            var input = document.getElementsByTagName('input')
            if(event.currentTarget.checked){
                // this.goodsList.push(String(event.currentTarget.value));
                var newArr = this.goodsList;
                var tt = goodsList.every(function(itemValue){
                    return (newArr.indexOf(String(itemValue.cartDetailId)) != -1)
                })
                if(tt){
                    for(var i = 0;i<input.length;i++){
                        if(input[i].value == goodId){
                            input[i].checked = true;
                        }
                    }
                }


                console.log('ss',goodsList);
                console.log('hhh',goodsList.length);
              
            }else{
                //商品列表--
                // this.goodsList.splice(this.goodsList.indexOf(event.currentTarget.value),1)
                for(var i = 0;i<input.length;i++){
                    if(input[i].value == goodId){
                        if(input[i].checked){
                            input[i].checked = false;
                        }
                    }
                    // 任意一个不选，全选取消
                    // if(input[i].name == 'allRadio'){
                    //     input[i].checked = false;
                    // }
                }
            }
            

            this.caculate();
        },

       
        //全选
        allCheck: function(event){
            var input = document.getElementsByTagName('input')
            if(event.currentTarget.checked){
                //全选checked,所有店铺checked,店铺列表++,所有商品checked,商品列表++
                for(var i = 0;i<input.length;i++){
                    //去重
                    if(!input[i].checked){
                        input[i].checked = true;
                        // if(input[i].name == 'goodRadio'){
                        //     this.goodslist.push(String(input[i].value))
                        // }
                    }
                }
            }else{
                //全不选取消checked,店铺全部取消checked,店铺列表清空，所有商品取消checked,商品列表清空
                for(var i = 0;i<input.length;i++){
                    input[i].checked = false;
                    // this.shopList = [];
                    this.goodsList = [];
                }
            }
            //计算总价和数量
            this.caculate();
        },
        //计算总金额总数量
        caculate: function(){
            var input = document.getElementsByTagName('input');
            var newArr = [];
            for(var i = 0;i<input.length;i++){
                if(input[i].name == 'goodRadio' && input[i].checked){
                    var num = input[i].parentNode.parentNode.children[2].children[1].children[1].innerHTML;
                    newArr.push(
                        {
                            'price': input[i].getAttribute('price'),
                            'num': num
                        }
                    )
                }
            }
            this.totalNumber = newArr.length;
            //归零
            this.sumPrice = 0;
            for(var j = 0,len = newArr.length;j<len;j++){
                this.sumPrice += newArr[j].price * newArr[j].num;
            }
            this.totalNum=0;
             for(var j = 0,len = newArr.length;j<len;j++){
                this.totalNum += Number(newArr[j].num);
            }
        },
        //数量减小
        numDecrease: function(num){
            //如果当前input选中，则修改数量计算价格，如果当前input没有选中，则修改数量不计算价格
            var spanList = event.currentTarget.parentNode.children;
            for(var i = 0,len = spanList.length;i<len;i++){
                if(spanList[i].getAttribute("class") == 'beeforCacul'){
                    spanList[i].style.display = 'none';
                }
                if(spanList[i].getAttribute("class") == 'cacul'){
                    spanList[i].style.display = 'block';
                    var caculNum = spanList[i].innerHTML;
                    if(caculNum < 2){
                        Toast('宝贝不能再少了哦');
                    }else{
                        caculNum --
                        spanList[i].innerHTML = caculNum;
                    }
                }
            }
            if(event.currentTarget.parentNode.parentNode.parentNode.children[0].children[0].checked){
                this.caculate();
            }
        },
        //数量增加
        numAdd: function(num){
            var spanList = event.currentTarget.parentNode.children;
            for(var i = 0,len = spanList.length;i<len;i++){
                if(spanList[i].getAttribute("class") == 'beeforCacul'){
                    spanList[i].style.display = 'none';
                }
                if(spanList[i].getAttribute("class") == 'cacul'){
                    spanList[i].style.display = 'block';
                    var caculNum = spanList[i].innerHTML;
                    caculNum ++;
                    spanList[i].innerHTML = caculNum;
                }
            }
            if(event.currentTarget.parentNode.parentNode.parentNode.children[0].children[0].checked){
                this.caculate();
            }
        },
        //去结算
        cauSum:function(){
            if(this.sumPrice === 0){
                alert(' 亲 您还没有选择宝贝哦~');
            }else{
                this.$router.push('/pay')
            }
        },
    },

    // 删除

            remove(idx){
                    this.datalist.splice(idx,1);
                }
        

};
</script>
<style scoped>
.list-container{
    margin-top:58px;
}

.top-ops{
 width:100%;
 height:48px;
 position:fixed;
 top:0;
 background:pink;
 line-height: 48px;
}

.biaotou{
    float:left;
}
.namee{
    margin-left:176px;
    font-size: 20px;
    font-weight: bold;
}
.ops{
    margin-left:96px;
}
.middle img{
    width:108px;
    height:72px;
    border:1px solid #58bc58;
}
.list-container{
    width:100%;
    height:888px;
}
#jiesuan{
    width:100%;
    height:2.375rem;
    /* border-top:1px solid red;
    border-bottom:1px solid red; */
    display:fixed;
    bottom:0px;
    position: fixed;
    bottom:3.875rem;
    background:white;
    line-height: 2.375rem;
}
.jiesuanb .jie{
    font-size: 18px;

}
.jiesuanb{
    position:relative;
}

.jiea{
    display:inline-block;
    width:20%;
    height:40px;
    position: absolute;
    left:0;
}
.jieb{
    display:inline-block;
    width:46%;
    height:40px;
    position:absolute;
    left:20%;
}
.jiec{
    display:inline-block;
    width:36%;
    height:40px;
    text-align: center;
    background:red;
    color:white;
    position:absolute;
    right:0;
}

.dell{
    display:inline-block;
    width:38%;
    height:40px;
    background:pink;
    text-align: center;
    font-weight: bold;
    margin-left:38%;
}



.cart{
    float:left;
}
.cartl{
    width:10%;
    height:100%;
    text-align: center;
    line-height: 8.375rem;
}
.cartc{
    width:56%;
    height:100%;
    text-align: center;
}
.cartr{
    width:32%;
    height:100%;
    line-height: 42px;
    text-align: center;
}
 .goods-list{
    width:100%;
    height:8.375rem;
    /* border-top:1px solid red;
    border-bottom:1px solid red; */
    margin-top:6%;
    
}

.caculate{
    position: relative;
}
.marka{
    position:absolute;
    right:9px;
}
.cacul{
    position:absolute;
    right: 38px;
    width:46px;
    height: 28px;
    border:1px solid black;
    line-height: 28px;
}
.markb{
    position:absolute;
    left:18px;
}
.mark{
    width:28px;
    height:28px;
    border:1px solid black;
    line-height: 28px;
}
.aaa{
    font-weight: bold;
    color:blue;
}
.bbb{
    font-weight: bold;
    color:green;
}
</style>