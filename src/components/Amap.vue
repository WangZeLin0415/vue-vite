<template>
    <div id='container'>
    </div>
    
</template>

<script lang="ts">

import { ref,onMounted } from 'vue';
import amap  from './Amap/api'

export default {
    name:'Amap',
    components:{
       
    },
    setup() {
       
        onMounted(()=>{
              const map = amap.init('container')
        })
        
    }
}
</script>
<style lang="less">
    #container {
        width:100%;
        height:100%;
    }
    .marker-route {
        background:red;
        display: inline-block;
    }
</style>