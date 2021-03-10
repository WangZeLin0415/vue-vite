<template>
    <div class="cs" :ref='getNode' ></div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts/core';
import 'echarts/lib/component/dataset';
import { 
    LineChart,
    PieChart,
    PieSeriesOption,
    LineSeriesOption,
} from 'echarts/charts';
import {
    TitleComponent,
    TitleComponentOption,
    GridComponent,
    GridComponentOption,
    TooltipComponent,
    TooltipComponentOption,
} from 'echarts/components';

type ECOption = echarts.ComposeOption<
    LineSeriesOption | TitleComponentOption | GridComponentOption | TooltipComponentOption |PieSeriesOption
>

echarts.use([
    LineChart,
    TitleComponent,
    GridComponent,
    TooltipComponent,
    PieChart,
])

let myEchart:any;
export default {
    name:'MyPie',
    setup() {
        let elNode:HTMLElement;
        const getNode = (el:HTMLElement) => elNode = el;
        const render = () => {
            const option:ECOption = {
               
                 legend: {
                    top: '5%',
                    left: 'center'
                },
                tooltip:{
                        trigger:'item',
                    },
                grid:{
                    
                },
                dataset:{
                    dimensions:['name','value'],
                    source:[
                        {value: 1048, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ]
                },
                series:[{
                    name:'销量',
                    type:'pie',
                    radius: ['40%', '70%'],
                    // data:[
                    //     {value: 1048, name: '搜索引擎'},
                    //     {value: 735, name: '直接访问'},
                    //     {value: 580, name: '邮件营销'},
                    //     {value: 484, name: '联盟广告'},
                    //     {value: 300, name: '视频广告'}
                    // ],
                    label:{
                        formatter:(params)=>{
                            return params.data.name + " " +params.data.value;
                        }
                    },
                    
                    emphasis:{
                        itemStyle:{
                            shadowBlur:10,
                            shadowOffsetX:0,
                            shadowColor:'rgba(0,0,0,0.5)'
                        }
                    }
                },
                {
                    name:'销量',
                    type:'pie',
                    radius: ['0%', '0%'],
                    data:[
                        {value: 1048, name: '统计'},
                    ],
                    tooltip:{
                        show:false,
                    },
                    itemStyle:{
                        color:'rgba(0,0,0,0)'
                    },
                   
                    label: {
                        show:true,
                        position: 'center',
                        formatter:()=>{
                            return '统计\n1080'
                        },
                        color:'#000',
                        fontSize:20
                    },
                    
                    emphasis:{
                        itemStyle:{
                            shadowBlur:10,
                            shadowOffsetX:0,
                            shadowColor:'rgba(0,0,0,0.5)'
                        }
                    }
                }
                ]

            }
            myEchart.setOption(option)
        }
        onMounted(()=>{
            myEchart = echarts.init(elNode);
            render()
        }) 
        return {
            getNode,
        }
    }
}
</script>
<style lang="less" scoped>
    .cs {
        width:100%;
        height:300px;
    }
</style>