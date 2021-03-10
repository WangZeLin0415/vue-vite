 export type PanleArg = {
    
    angleStart ?: number; // 初始角度
    angleEnd ?: number; // 终止角度
    lineWidth ?: number; // 线宽
    colors ?: string[]; // 渐变色
    width ?: number; // 宽
    height ?: number; // 高
    precent ?: number; // 百分比
    spotColor ?: string; // 中心点原色
    pointerColor ?: string; // 指针颜色
    spotRadius ?: number; // 中心原点半径
}

type P<T> = {
    [p in keyof T] : T[p];
}




import { ref } from 'vue';
let ctx:any;
let arg:PanleArg;

const drag = (ctx:any,obj:any ) => {
        const angleStart =  -Math.PI / 9 + Math.PI ;
        const angleEnd = Math.PI * 2 + Math.PI / 9;
        // 计算画布中心点
        ctx.save();
        ctx.clearRect(0,0,obj.width,obj.height);
       
        ctx.beginPath();
        ctx.translate(obj.width / 2, obj.height / 2);
        // 画圆狐
       
        const r = obj.width > obj.height ? obj.height / 2 - obj.lineWidth : obj.width / 2 - 10;
        ctx.lineWidth = obj.lineWidth;
        var grd=ctx.createLinearGradient(r * Math.cos(angleStart),r * Math.sin(angleStart),r * Math.cos(angleEnd),r * Math.sin(angleEnd));
        const { length } = obj.colors
        for(let i = 0; i < length; i++) {
            grd.addColorStop(i/length,obj.colors[i]);
        }
        ctx.strokeStyle = grd;
        ctx.lineCap="round";
        ctx.arc(0,0,r,angleStart,angleEnd);
        ctx.stroke();
        ctx.closePath();

        // 画刻度
        // 刻度半径
        const mark = r - obj.lineWidth;
        // 每个刻度的步长，总计20个刻度
        const markTotal = 20;
        const speedMark = (angleEnd - angleStart) / markTotal;
        for(let i = 0; i <= 20; i++) {
            ctx.beginPath();
            if(i % 2) {
                ctx.moveTo((mark -obj.spotRadius)*Math.cos(i * speedMark + angleStart),(mark-obj.spotRadius)*Math.sin(i * speedMark + angleStart));
            }else {
                ctx.moveTo((mark -2*obj.spotRadius)*Math.cos(i * speedMark + angleStart),(mark-2*obj.spotRadius)*Math.sin(i * speedMark + angleStart));
            }
          
            ctx.lineTo(mark*Math.cos(i * speedMark + angleStart),mark*Math.sin(i * speedMark + angleStart));
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'green';
            ctx.stroke()
            ctx.closePath()
        }

        // 指针
        obj.precent = obj.precent > 100 ? 100 : obj.precent < 0 ? 0 : obj.precent;
       
        ctx.beginPath();
        ctx.moveTo(obj.spotRadius* Math.cos(speedMark * markTotal * obj.precent / 100 + angleStart-Math.PI/2),obj.spotRadius*Math.sin(speedMark * markTotal * obj.precent / 100 + angleStart-Math.PI/2));
        ctx.lineTo((mark-2*obj.spotRadius-5) * Math.cos(speedMark * markTotal * obj.precent / 100 + angleStart),(mark-2*obj.spotRadius-5) * Math.sin(speedMark * markTotal * obj.precent / 100 + angleStart));
        ctx.lineTo(obj.spotRadius* Math.cos(speedMark * markTotal * obj.precent / 100 + angleStart+Math.PI/2),obj.spotRadius*Math.sin(speedMark * markTotal * obj.precent / 100 + angleStart+Math.PI/2));
        
        ctx.fillStyle = 'green';
        ctx.fill()
        ctx.closePath()
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(0,0,obj.spotRadius,0,Math.PI *2);
        ctx.fill()
        ctx.restore()
}

 const panel = {
    
    mounted(el:HTMLElement,{value}:{value:PanleArg}) {
       
         arg = {
            width:value.width || 600,
            height:value.height || 300,
            colors:value.colors || ['red','orange','green'],
            precent:value.precent || 20,
            lineWidth:value.lineWidth || 10,
            spotRadius:value.spotRadius || 10,
            spotColor:value.spotColor || value.pointerColor || 'red',
            pointerColor:value.pointerColor || value.spotColor || 'green',
        };
        const canvas = document.createElement('canvas');
        canvas.width = arg.width as number;
        canvas.height = arg.height as number;
        el.appendChild(canvas)
        ctx = canvas.getContext('2d');
        drag(ctx,arg)
        
    },
    beforeUpdate(el:HTMLElement,{value}:{value:PanleArg}) {
        if(ctx) {
            arg = {
                width:value.width || 600,
                height:value.height || 300,
                colors:value.colors || ['red','orange','green'],
                precent:value.precent || 20,
                lineWidth:value.lineWidth || 10,
                spotRadius:value.spotRadius || 10,
                spotColor:value.spotColor || value.pointerColor || 'red',
                pointerColor:value.pointerColor || value.spotColor || 'green',
            };
            drag(ctx,arg)
        }
    },
   
}

export default panel