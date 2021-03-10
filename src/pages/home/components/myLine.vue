<template>
    <div class="cs" :ref='getNode' ></div>
</template>
<script lang="ts">
import { onMounted,watch } from 'vue';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import 'echarts/lib/component/dataset';
import {
    BarChart,
    BarSeriesOption,
    LineChart,
    LineSeriesOption
    
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
    LineSeriesOption | TitleComponentOption | GridComponentOption | TooltipComponentOption | BarSeriesOption 
>

// 注册必须的组件
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, CanvasRenderer,LineChart,BarChart]
);

let myChart:any;
export default {
    name:'MyLine',
    props:{
        data:{
            type:Array,
            default:()=>[],
        }
    },
    setup(props) {
        const { data } = props;
        console.log(props)
        let elNode:HTMLElement;
        const getNode = (el:HTMLElement) => elNode = el;
        const render = () => {
            const option:ECOption = {
                 xAxis: {
                    type: 'category',
                    // boundaryGap: false,
                },
                grid:{
                    top: '10%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel:true,
                },
                yAxis: {
                    type: 'value'
                },
                legend:{
                    data:['销量']
                },
                tooltip:{
                    trigger:'axis'
                },
                dataset:{
                    dimensions:['name','value','count'],
                    source:[
                        ...data,
                    ]
                },
                
                series: [{
                    name:'销量',
                    type: 'line',
                    // stack: '总量',
                    smooth:true,
                    // areaStyle:{}, 
                },
                {
                    name:'占比',
                    type: 'bar',
                    // stack: '总量',
                    itemStyle:{
                        color:function (node:any){
                            return node.data.color
                        },
                    }
                }
                ]
            }
            myChart.setOption(option)
        }
        onMounted(()=>{
             myChart = echarts.init(elNode);
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
        height:200px;
    }
</style>