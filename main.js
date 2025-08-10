import { grade } from  './cenario/Cenario.js';
import { ctx } from './cenario/Cenario.js';

import { torre } from './cenario/torre.js';
import { chao, colideTorre, teto } from './acoes/colisoes.js';
import { controle } from './acoes/controles.js';//apesar do controle não ser invocado, só funciona se estiver importado
import { aleatorias } from './acoes/utilis.js';

export let peca = aleatorias();

export function getPeca(){
    return peca;
}
export function setPeca(Peca){
    peca = Peca;
} 

let loop;

console.log("canvas heigth",ctx.canvas.height);

 function simulação(){
    teto();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    grade();

    peca.render();
    torre.render();

    colideTorre();
    chao();

    peca.gravidade();

}


loop = setInterval(()=>{simulação()}, 90);