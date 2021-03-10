<template>
    <div class="box" >
        <div class="header" >
            <MyHead></MyHead>
        </div>
        <div class="content" >
            <div class="map"><Amap></Amap></div>
            <div class="switch" >
                <router-view></router-view>
            </div>
        </div>
    </div>
    
</template>
<script>
import MyHead from '../components/Head.vue';
import Amap from '../components/Amap.vue'
export default {
    name:'CustomerLayout',
    components:{
        MyHead,
        Amap,
    }
}
</script>
<style lang="less" scoped>
   .content {
       position: relative;
       .map {
           width:100%;
           height:~'calc(100vh - 50px)';
           
       }
        .switch {
            position: absolute;
            // width:100%;
            height:~'calc(100vh - 50px)';
            right:0px;
            top:0px;
            z-index: 10;
        }
   }
</style>