<template>
    <MyCard>
     <Tabs :activeKey="tabsKey" @change="handleNav" >
         <TabPane key='1' tab='预警报警' ><Warn></Warn></TabPane>
         <TabPane key='2' tab='在场人员' ><BePersent></BePersent></TabPane>
         <TabPane key='3' tab='人员报表' >人员报表</TabPane>
     </Tabs>
    </MyCard>
    
    
</template>

<script lang="ts">
import { reactive,ref } from 'vue';
import { Tabs, } from 'ant-design-vue';
import MyCard from '../../components/Container/my_card.vue';
import Warn from './warn/index.vue'
import BePersent from './bePresent/index.vue'
const { TabPane } = Tabs;


export default {
    name:'Home',
    components:{
        MyCard,
        Tabs,
        Warn,
        BePersent
    },
    // "衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"
    setup() {
        const tabsKey = ref('2');
        
        const handleNav = (key:string) => {
            tabsKey.value = key;
        }
        return {
          tabsKey,
          TabPane,
          handleNav,
        };
    }
   
}
</script>
<style lang="less" scoped>
/deep/
.ant-tabs-nav-wrap {
    background:#fff;
}
    
</style>    