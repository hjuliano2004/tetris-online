import { ctx } from "./Cenario.js";
import { tamanho } from "./Cenario.js";

export function bloco(posicao){
    let x = posicao.x;
    let y = posicao.y;
    let z = posicao.z;
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, tamanho, tamanho);// o 120 deverá ser um valor inserido no z
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, tamanho, tamanho);
    ctx.closePath();
    ctx.restore();
}