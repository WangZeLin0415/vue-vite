<template>
    <div class="head" >
        <img src='favicon.ico' />
        <span class="title" >项目管理</span>
    </div>
    <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name:'UserLayout',
    setup(){
        console.log('aaa')
    }
})
</script>
<style lang="less" scoped>
    .head {
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top:240px;
        .title {
            font-size: 24px;
            padding-left:20px;
            font-weight: 900;
        }
    }
</style>