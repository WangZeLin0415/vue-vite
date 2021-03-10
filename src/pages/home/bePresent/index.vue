<template>
    <div class="box">
        <div class="content">
            <Carousel autoplay :dots='false' :beforeChange='beforeChange' >
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        </div>
    </div>
</template>
<script lang="ts">
import { Carousel } from 'ant-design-vue'
export default {
    name:'BePersent',
    components:{
        Carousel,
    },
    setup(){
        const beforeChange = (from ,to) => {
            console.log(from,to)
            
        }
        return {
            beforeChange
        }
    },
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
    }
    /* For demo */
    .ant-carousel :deep(.slick-slide) {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel :deep(.slick-slide h3) {
        color: #fff;
    }
</style>