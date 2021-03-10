<template>
    <div class="head" >
       <div class="logo">
           <img src='favicon.ico' width='28' />
           <span>antd-design-pro</span>
       </div>
       <div :ref='node' class="routes">
           <div v-for='item in newRoutes' :key='item.id' :style='{display:item.status ? "block" : "none"}' :class="['item',id===item.id ? 'check' : '']" @click="chooseMune(item)">{{item.name}}</div>
           <div class="item more" :style="{display:navLength < routes.length ? 'block' : 'none'}">●●●
               <div class="downlaod">
                   <div class="topM"><div class="moreCheck" v-for="k in newRoutes.filter(p=>!p.status)" :key='k.id' @click="chooseMune(item)" >{{k.name}}</div></div>
                   
               </div>
           </div>
       </div>
    </div>
</template>
<script lang="ts">
import { Card } from 'ant-design-vue';
import { ref,reactive,computed,onMounted} from 'vue';
import {useRouter,useLink,RouterLink,useRoute} from 'vue-router';

interface Routes {
    name:string;
    id:number;
    status:boolean;
}

export default {
    name:'Head',
    components:{
        Card,
    },
     props: {
    //  @ts-ignore
    ...RouterLink.props,
  },

    setup(props){
        const router = useRouter();
        const routes = reactive<Routes[]>([
            {name:'项目总览',id:1,status:true},
            {name:'数字工地',id:2,status:true},
            {name:'安全质量',id:3,status:true},
            {name:'进度管理',id:4,status:true},
            {name:'劳务人员',id:5,status:true},
            {name:'机械监控',id:6,status:true},
            {name:'指挥调度',id:7,status:true},
            {name:'党建管理',id:8,status:true},
        ])
        const id = ref(1);
        const navLength = ref(routes.length)
        const chooseMune = (item:Routes) => {
            id.value = item.id;
            router.push({name:item.name})

        }
        let myRef:HTMLElement;
        const node = (target:HTMLElement) =>{
            myRef = target
        }
        onMounted(()=>{
            let oldBodyWidth =  document.body.offsetWidth-220;
            window.onresize = () => {
               size()
            }
            
             const childnode = [].slice.call(myRef.childNodes).filter((p:HTMLElement)=>p.nodeType === 1);
             let  flag:boolean = false;
             let totalLength:number = 0;
             childnode.forEach((item:HTMLElement,index:number)=>{
                 const computedStyle = getComputedStyle(item, null);
                 const {width,marginLeft,marginRight} = computedStyle;
                 const totalS = parseInt(width,10) + parseInt(marginLeft) + parseInt(marginRight);
                if(!flag ) {
                    if(totalLength > oldBodyWidth) {
                        navLength.value = index-1 > 0 ? index -1 : 1;
                        flag = true;
                    }else {
                        totalLength += totalS;
                    }
                }
                 
             })
             
            function size() {
                const width = document.body.offsetWidth-220;
                const targetWidth = myRef.offsetWidth;
                if(width <= oldBodyWidth && width < targetWidth) {
                    navLength.value -= 1;
                    oldBodyWidth = width;
                }else if(targetWidth - oldBodyWidth > 50 && navLength.value < routes.length) {
                        navLength.value += 1
                        oldBodyWidth = width;
                }
            }
        })
        return {
            newRoutes:computed(()=>routes.map(p=>{
                p.status = false;
                if(p.id<=navLength.value) {
                    p.status = true
                }
                return p;
            })),
            id,
            chooseMune,
            node,
            navLength,
            routes,
           
        }
    }

}
</script>
<style lang="less" scoped>
    .check{
        &::before {
                    width:100%;
                    height:0px;
                    border:1px solid #58AFFF;
                    content: '';
                    position: absolute;
                    left:0px;
                    bottom:-13px;
                }
    }
    .head {
        width:100%;
        background:#fff;
        height:50px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        .logo {
            font-size: 18px;
            min-width: 200px;
            >span {
                padding-left:12px;
            }
        }
        .routes {
            flex-grow: 1;
            display: flex;
            align-items: center;
            .item {
                display: inline-block;
                margin: 0 16px;
                cursor: pointer;
                position: relative;
                white-space: nowrap;
                &:hover  {
                    // color:#58AFFF;
                    .check
                }
                .downlaod {
                    display: none;
                    position:absolute;
                    left:0px;
                    
                    .topM {
                        background:#fff;
                        margin-top:20px;
                        .moreCheck {
                        margin:5px 16px;
                        &:hover {
                            color:#58AFFF;
                        }
                    }
                    }
                }
            }
            .more:hover .downlaod {
                display: block;
            }
        }
    }
</style>