<template>
    <div class="box">
        <div class="content">
              <div class="jg">
            <h3 class="title" >
              监管时长报警
              <span><AlertOutlined /></span>5个
            </h3>
            <MyBar :data='data' @callback='changeCallback' ></MyBar>
        </div>
        <div class="list" >
            <div class="iconChange" v-if='!visiable' >
                <div @click="changMore"  class="more">
                    <UnorderedListOutlined /> <span>查看列表</span>
                </div>
            </div>
             <div v-else class="listBox" >
                 <span class="itemIcon" @click='changMore' ><DoubleLeftOutlined /></span>
                 <div class="item">
                     <h3 >监理未在场</h3>
                 </div>
            </div> 
         
        </div>
        <div style="marginTop:5px" class="jg">
            <h3 class="title" >
              不安全行为
              <span><AlertOutlined /></span>5个
            </h3>
            <MyLine :data='data' @callback='changeCallback' ></MyLine>
        </div>
        <div class="list" >
            <div class="iconChange" v-if='!visiable' >
                <div @click="changMore"  class="more">
                    <UnorderedListOutlined /> <span>查看列表</span>
                </div>
            </div>
             <div v-else class="listBox" >
                 <span class="itemIcon" @click='changMore' ><DoubleLeftOutlined /></span>
                 <div class="item">
                     <h3 >监理未在场</h3>
                 </div>
            </div> 
        </div>
        <div style="marginTop:5px" class="jg">
            <h3 class="title" >
              大数据面积图
              <span><AlertOutlined /></span>5个
            </h3>
            <MyPie :data='data' @callback='changeCallback' ></MyPie>
        </div>
        <div class="list" >
            <div class="iconChange" v-if='!visiable' >
                <div @click="changMore"  class="more">
                    <UnorderedListOutlined /> <span>查看列表</span>
                </div>
            </div>
             <div v-else class="listBox" >
                 <span class="itemIcon" @click='changMore' ><DoubleLeftOutlined /></span>
                 <div class="item">
                     <h3 >监理未在场</h3>
                 </div>
            </div> 
        </div>
        </div>
      
    </div>
</template>
<script lang="ts">
import { Card } from 'ant-design-vue';
import { AlertOutlined,UnorderedListOutlined,DoubleLeftOutlined } from '@ant-design/icons-vue';
import MyBar from '../components/myBar.vue';
import MyLine from '../components/myLine.vue';
import MyPie from '../components/myPie.vue';
import { onMounted,ref,toRefs,reactive } from 'vue'

export type Data = {
    name:string;
    value:number;
    count?:number;
    color ?: string;
}

export default {
    name:"Warn",
    components:{
        Card,
        AlertOutlined,
        UnorderedListOutlined,
        MyBar,
        DoubleLeftOutlined,
        MyLine,
        MyPie
    },
    setup() {
       let data = reactive<Data[]>([
            {name:'衬衫',value:11,count:20,color:'red'},
            {name:'羊毛衫',value:43,count:43,color:'green'},
            {name:'雪纺衫',value:43,count:12,color:'orange'},
            {name:'裤子',value:43,count:67,color:'blue'},
            {name:'高跟鞋',value:43,count:43,color:'pink'},
            {name:'袜子',value:43,count:7,color:'yellow'},
        ])
        const changeCallback = (node:Data) => {
          data.splice(1,1,{name:'羊毛衫',value:Math.ceil(Math.random() * 100)},)
        }

      
       const visiable = ref(false);
       const changMore = () => {
           visiable.value = !visiable.value;
       }
       return {
           visiable,
           changMore,
           data,
           changeCallback,
       }
    }
}
</script>
<style lang="less" scoped>
    .box {
        // color:#fff;
        height: ~'calc(100vh - 140px)';
        overflow: hidden;
       .content {
           width:~'calc(100% + 17px)';
           overflow-x: hidden;
           overflow-y: scroll;
           height:100%;
       }
        .jg {
            width:100%;
            min-height:250px;
            background:#fff;
            padding: 10px;
            box-sizing: border-box;
            .title {
                span {
                    color:#ff0000;
                    padding: 0px 5px;
                    font-size: 18px;
                }
            }
           
            
        }
        .list {
           .iconChange {
               background:#fff;
               padding: 0 10px;
               .more {
                width:100%;
                height:45px;
                border-top: 1px solid #ccc;
                color:#3DB8FE;
                text-align: center;
                line-height: 45px;
                font-size: 16px;
                cursor: pointer;
                span:last-child {
                    padding-left:10px;
                    color:#000;
                }
            }
           }
            .listBox {
                margin-top:3px;
                background:#fff;
                position: relative;
                padding-top:20px;
                .itemIcon {
                    font-size: 20px;
                    color:#3DB7FE;
                    display: inline-block;
                    cursor: pointer;
                    transform: rotate(-90deg) translateX(-50%);
                     position: absolute;
                    top:-15px;
                    left:50%;
                    
                }
            }
            .item {
                padding: 10px;
            }
        }
    }
</style>