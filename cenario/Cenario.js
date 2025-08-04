export const tamanho = 30;

let display = document.getElementsByTagName("canvas")[0];
export let ctx = display.getContext("2d");

function vertical(x1, y1, x2, y2){//x=vertical y=orizontal
    ctx.beginPath();
    ctx.moveTo(x1, y1);//a linha inicia aqui
    ctx.lineTo(x2, y2);//a linha termina aqui
    ctx.strokeStyle = "white";
    ctx.lineWidth = "1px";
    ctx.stroke();
}

function orizontal(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);//a linha inicia aqui
    ctx.lineTo(x2, y2);//a linha termina aqui
    ctx.strokeStyle = "white";
    ctx.lineWidth = "1px";
    ctx.stroke();
}

export function grade(){

for(let i=tamanho;i < display.height; i = i+tamanho){
    vertical(i, 0, i, 600);
    orizontal(0, i, 600, i);
}

}