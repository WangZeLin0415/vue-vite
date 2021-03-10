// 单例实现
const amap = () => {}
amap.flag = false;
amap.init = (id?:string) => {
    if(!amap.flag) {
        amap.flag = new window.AMap.Map(id)
    }
    return amap.flag;
}

export default amap