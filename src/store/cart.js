export default {
    state:{
        cartlist:[{
            id:1,
            title:'iphoneXs2019年新款热卖产品啦啦啦',
            price:12998,
            color:'土豪金',
            qty:1,
            kucun:10,
            imgurl:'../img/xs.jpg'
        },{
            id:2,
            title:'Honor V20新款热卖国货之光啦啦啦',
            price:2999,
            color:'渐变蓝',
            qty:1,
            kucun:20,
            imgurl:'../img/v20.png'
        },
        {
          id:3,
          title:'mac air新款热卖啦啦啦',
          price:12999,
          color:'深空灰',
          qty:1,
          kucun:20,
          imgurl:'../img/mac1.jpg'
      },
      {
        id:4,
        title:'ipad air新款热卖美货之光啦啦啦',
        price:9999,
        color:'深空灰',
        qty:1,
        kucun:202,
        imgurl:'../img/ipad1.jpg'
    }
    ],
    step:2,
    total:2000
  },
  getters:{
    salelist(state){
      return state.cartlist.map(item=>({...item,price:item.price*0.5}));
    }
  },

  // 通过mutations修改state中的数据
  mutations:{
    changeQty(state,payload){
      //state：store中的state数据
      // payload: 调用changeQty时传入的参数（可以是任意类型，建议使用对象）
      // console.log('payload:',payload)
      state.cartlist.forEach(item=>{
        if(item.id === payload.id){
          item.qty = payload.qty;
        }
      })
    },

    // 添加到购物车列表
    add(state,payload){
        state.cartlist.push(payload);
    },

    remove(state,payload){//{id:xxx}
      let index;
      state.cartlist.forEach((item,idx)=>{
        if(item.id===payload.id){
          index = idx;
        }
      })
      state.cartlist.split(index,1)
    },

    // 清空
    clear(state){
      state.cartlist = [];
    },

    changeQty(state,payload){
      //state：store中的state数据
      // payload: 调用changeQty时传入的参数（可以是任意类型，建议使用对象）
      // console.log('payload:',payload)
      state.cartlist.forEach(item=>{
        if(item.id === payload.id){
          item.qty = payload.qty;
        }
      })
    },

    // 修改库存
    changeKucun(state,payload){
      state.cartlist.forEach(item=>{
        if(item.id === payload.id){
          item.kucun = payload.kucun;
        }
      })
    }
  },

  // 负责操作mutations
  actions:{
    getKuncun(context,payload){
      // 请求服务器，获取库存信息
      setTimeout(()=>{
        // kucun是从服务器获取的信息
        let kucun = parseInt(Math.random()*100);
        context.commit('changeKucun',{...payload,kucun})
      },2000);
    }
  }
}