<template>
  <div class="container">
    <router-view/>
    <mt-tabbar v-model="selected" :fixed="true">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.path)">
        <myicons :type="tab.icon"/>
        {{tab.text}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Vue from "vue";

// 引入并使用插件
import myicons from "@/plugins/icons";
Vue.use(myicons);

// 引入并使用MintUI
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

import "./sass/common.scss";

import axios from 'axios';


Vue.prototype.$axios = axios;


import { Indicator } from 'mint-ui';
axios.interceptors.request.use(config => {
    Indicator.open();
    console.log('config:',config);
    // config.params.token = '10086';
    return config
}, error => {
    Indicator.close();
     
    return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
    // 响应成功关闭loading
    Indicator.close();
    return data
}, error => {
    Indicator.close();
    return Promise.reject(error)
})



export default {
    data(){
        return {
            tabs:[
                {
                    text:'首页',
                    icon:'home',
                    path:'/home',
                    name:'Home'
                },{
                    text:'列表',
                    icon:'list-unordered',
                    path:'/list',
                    name:'List'
                },{
                    text:'好货',
                    icon:'heart',
                    path:'/goodgoods',
                    name:'Goodgoods'
                },{
                    text:'购物车',
                    icon:'diff',
                    path:'/carts',
                    name:'Carts'
                },{
                    text:'我的',
                    icon:'person',
                    path:'/mine',
                    name:'Mine'
                }
            ],
            selected:'Home'
        }
    },
    methods:{
        goto(path){
           
            this.$router.push({path});
        }
    }
};
</script>
<style lang="scss">
.current {
  color: #f00;
  font-weight: bold;
}
.mint-tabbar{

    .is-selected{
        color:#58bc58;
        svg{color:#58bc58;fill:#58bc58}
        .mint-tab-item-label{color:#58bc58}
    }
}

html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img,input{ margin:0; padding:0; }
fieldset, img,button { border:0 none; padding:0;margin:0;outline-style:none; } /*去掉input等聚焦时的蓝色边框*/
ul,li,ol{ list-style:none; }
select, input { vertical-align:middle;}
textarea { resize:none; } 
img {border:0; vertical-align:middle; }
table { border-collapse:collapse; }
a {text-decoration:none; }
html,body{ height: 100%; }
</style>
