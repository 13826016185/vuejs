<template>
    <div class="page">
    <mt-header title="购物车" :fixed="true">
      <mt-button  slot="right">编辑</mt-button>
    </mt-header>
     
        <div id="lala">
                <ul>
                    <li v-for="goods in goodslist" :key="goods.id">
                              <div class="cart cartl">
                                <input type="checkbox">
                                </div>
                                <div class="cart cartc">
                                <img :src="goods.imgurl" >
                                </div>
                                <div class="cart cartr">
                                <h4>{{goods.title}}</h4>
                                <p class="price">价格：{{goods.price}} &times; {{goods.qty}}</p>
                                <p>库存：{{goods.kucun}}</p>
                                <input type="number" :value="goods.qty" @change="change($event,goods.id)">
                                <button @click="getKucun(goods.id)">更新库存</button>
                                </div>
                        
                    </li>
                    
                </ul>

                <div class="cartdi">
                    <p>
                        --以上是您的全部商品--
                    </p>
                </div>

            
        </div>

        <div id="jiesuan">
            <div class="jiesuanl jin">
                <input type="checkbox">
                <span>全选</span>
            </div>
            <div class="jiesuanc jin">
                <span>合计：</span>
                <span>￥0.00</span>
            </div>
            <div class="jiesuanr jin">
                <span>去结算（0）</span>

            </div>
        </div>

    </div>
</template>
<script>
// 为了简化代码而引入
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        //console.log('mapState:',mapState(['cartlist','step']))
        return {
            datalist:[{
                        id:parseInt(Math.random()*1000+1),
                        text:'今晚打老虎',
                        done:false,     
                        selected:false
                    }]
        }
    },
    // 把vuex中的state映射到computed属性
    // computed:mapState([
    //     'cart' //把this.cart映射为this.$store.state.cart
    // ]),
    computed:{
        ...mapState({
            // 映射this.goodslist为this.$store.state.cart.cartlist
            goodslist:(state)=>{
                return state.cart.cartlist
            }
        })
    },
    methods:{
        ...mapMutations({
            // 把this.change2(xx)映射为this.$store.commit('changeQty',xx)
            change2:'changeQty',
            // this.change3(xx)
            change3:(commit,payload)=>{
                commit('changeQty',payload)
            }
        }),
        ...mapActions({
            gKucun(dispatch,payload){
                dispatch('getKuncun',payload)
            }
        }),
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
        getKucun(id){
            // 在组件中调用actions: $store.dispatch()
            this.$store.dispatch('getKuncun',{id})
        }
    },
    mounted(){
        console.log(this.$store.state.cart)
        console.log('this.cart:',this.cart)
    }
}
</script>

<style scoped>
.mint-header{
    background:pink;
    font-size: 1.375rem;
    color:black;
}
.mint-header .mint-button{
    font-size: 1rem;
    color:black;
    margin-right: .5rem;
}
.page{
    margin-top:11%;
    border-top:1px solid black;
}
.cart img{
    width:80%;
    height:80%;
    border:1px solid #58bc58;
}
.cart{
    float:left;
}
#lala{
    margin-top:6%;
    margin-bottom:120px;
}

 #lala ul li{
    width:100%;
    height:8.375rem;
    border-top:1px solid red;
    border-bottom:1px solid red;
    margin-top:6%;
    
}
.cartl{
    width:10%;
    height:100%;
    text-align: center;
    line-height: 8.375rem;
}
.cartc{
    width:30%;
    height:100%;
    text-align: center;
    line-height: 8.375rem;
}
.cartr{
    width:56%;
    height:100%;
}

#jiesuan{
    width:100%;
    height:2.375rem;
    border-top:1px solid red;
    border-bottom:1px solid red;
    display:fixed;
    bottom:0px;
    position: fixed;
    bottom:3.875rem;
    background:white;
}

#jiesuan .jin{
    float:left;
    /* text-align: center; */
    line-height: 2.375rem;
}
.jiesuanl{
    width:28%;
    height:100%;
  
}
.jiesuanl input{
    margin-left:9%;
}
.jiesuanc{
    width:42%;
    height:100%;
    font-weight:bold;
}
.jiesuanr{
    width:30%;
    height:100%;
    background:red;
    color:white;
    text-align: center;
}

.cartdi p{
    margin-left:6.625rem;
    margin-top:.75rem;
    color:brown;
}
</style>
