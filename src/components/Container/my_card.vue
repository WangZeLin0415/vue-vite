<template>
    <div class="box" >
        <slot></slot>
    </div>
</template>
<script lang="ts">

export default{
    name:'Container'
}
</script>
<style lang="less" scoped>
    .box {
        width:500px;
        height:~'calc(100% - 20px)';
        position: absolute;
        top:10px;
        right:10px;
        background:rgba(0,0,0,0.5);
        border: 1px solid rgba(0, 0, 0,0.6);
        box-shadow: 3px 3px 10px 3px rgba(0, 0, 0,0.3) inset,
                    -3px -3px 10px 3px rgba(0, 0, 0,0.3) inset;
        border-radius: 3px;
    }
</style>