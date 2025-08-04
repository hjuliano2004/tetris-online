import { getEmpilhados, torre } from "../cenario/torre.js";
import { Stick } from "../models/stick.js";
import { ctx, tamanho } from "../cenario/Cenario.js";
import { getPeca, setPeca } from "../main.js";
import { rotacao, tangiveis } from "./utilis.js";

export function chao(){

    let visiveis = tangiveis(getPeca().getReferencia());

    for(let i=0;i<tangiveis.length;i++){
        if(visiveis[i].y + 30 == ctx.canvas.height){
            colisao();
        }
    }
    
}

export function colideTorre(){
    let array = tangiveis(getPeca().getReferencia());
    let empilhados = getEmpilhados();

    for(let i=0;i<array.length;i++){
        for(let j=0;j<empilhados.length;j++){
            if(((array[i].y + tamanho) == empilhados[j].y) &&
                 array[i].x == empilhados[j].x){
                colisao();
                return null;
            }
        }
    }
}

export function teto(){
    let empilhados = getEmpilhados();
    for(let i=0;i<empilhados.length;i++){
        if(empilhados[i].y == 0){
            torre.limpa();
        }
    }
} 

function colisao(){
            torre.add(tangiveis(getPeca().getReferencia()));
            setPeca(Stick());
}


export function paredeDireita(){
    let visiveis = tangiveis(getPeca().getReferencia());
    for(let i=0; i<visiveis.length;i++){
        if(visiveis[i].x >= 390){    
            return true;
        }
    }
    return false;
}

export function paredeEsquerda(){
    let visiveis = tangiveis(getPeca().getReferencia());
    for(let i=0; i<visiveis.length;i++){
        if(visiveis[i].x <= 0){
            return true;
        }
    }
    return false;
}
//TODO  existem funções distintas para verificar colisoes com a parede ou colisão lateral com blocos

export function colideDireita(){
    let visiveis = tangiveis(getPeca().getReferencia());
    let empilhados = getEmpilhados();

    for(let i=0;i<visiveis.length;i++){
        for(let j=0;j<empilhados.length;j++){
            const y = empilhados[j].y - visiveis[i].y;
            if((visiveis[i].x + tamanho == empilhados[j].x) &&
               ((y < tamanho) && (y > -tamanho)) ){
                return true;
            }
        }
    }

    return false;
}

export function colideEsquerda(){
    let visiveis = tangiveis(getPeca().getReferencia());
    let empilhados = getEmpilhados();

    for(let i=0;i<visiveis.length;i++){
        for(let j=0;j<empilhados.length;j++){
            const y = empilhados[j].y - visiveis[i].y;
            if((visiveis[i].x - tamanho == empilhados[j].x) &&
               ((y < tamanho) && (y > -tamanho)) ){
                return true;
            }
        }
    }

    return false;
}

export function colideRotação(){
    const visiveis = tangiveis(rotacao(getPeca().getReferencia()));
    const empilhados = getEmpilhados();

    for(let i=0;i<visiveis.length;i++){
        for(let j=0;j<empilhados.length;j++){
            if(visiveis[i].x == empilhados[j].x &&
               visiveis[i].y == empilhados[j].y){
                    return true;
                };
        }
    }

    return false; 
}