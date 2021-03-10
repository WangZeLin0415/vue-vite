<template>
     <div class="cs" :ref="node"></div>
</template>
<script lang="ts">
import { ref,onMounted,onUpdated,toRefs,watchEffect,onBeforeUpdate ,watch} from 'vue';
import * as echarts from 'echarts/core';
import 'echarts/lib/component/dataset'
import {
    CanvasRenderer
} from 'echarts/renderers';
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption,
    LineChart,
    LineSeriesOption
} from 'echarts/charts';
import {
    TitleComponent,
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponentOption,
    GridComponent,
    TooltipComponent,
    GridComponentOption
} from 'echarts/components';
import { Data } from '../warn/index.vue'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  BarSeriesOption | LineSeriesOption | TitleComponentOption | GridComponentOption
>;

// 注册必须的组件
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer,LineChart]
);

let myChart:any;

export default {
    name:'MYBar',
    props:{
        data:{
            type:Array,
            default:[],
        },
    },
    setup(props,{emit}) {
       const {data} = props;
       console.log(data);
        let eleNode:HTMLElement
        const node = (el:HTMLElement)=>{
            eleNode = el;
        }
        const showList = ref();
        const render = () => {
              const option: ECOption= {
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    type:'category',
                    // data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
                },
                grid: {
                    top: '10%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                dataset:{
                    dimensions:['name','value'],
                    source:[
                        ...data
                    ]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'top'
                    },
                    itemStyle: {
                        color: '#a90000'
                    },
                }]
            };
            myChart.setOption(option);
            myChart.on('click',(params:ECOption)=>{
            
                emit('callback',params.data)
            })
        }
        onMounted(()=>{
            myChart = echarts.init(eleNode);
            render()
        })
        watch(
            [data],
            ([newData,oldData])=>{
                if(myChart) {
                    render()
                }
        }
        )
     
       
        return {
            node,
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