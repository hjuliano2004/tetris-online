import { getEmpilhados, torre } from "../cenario/torre.js";
import { Stick } from "../models/stick.js";
import { ctx, tamanho } from "../cenario/Cenario.js";
import { getPeca, setPeca } from "../main.js";
import { aleatorias, rotacao, tangiveis } from "./utilis.js";

export function chao(){

    let visiveis = tangiveis(getPeca().getReferencia());

    for(let i=0;i<visiveis.length;i++){
        if(visiveis[i].y + tamanho == ctx.canvas.height){
         colisao(); 
         return null;
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
            setPeca(aleatorias());
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

export function colideLateral(posicao = 0){
    let visiveis = tangiveis(getPeca().getReferencia());
    let empilhados = getEmpilhados();

    for(let i=0;i<visiveis.length;i++){
        for(let j=0;j<empilhados.length;j++){
            const y = relativoY(empilhados[j], visiveis[i]);
            if((visiveis[i].x + posicao == empilhados[j].x) &&
               ((y < tamanho) && (y > -tamanho)) ){
                return true;
            }
        }
    }

    return false;
}


export function colideRotacao(){

    const visiveis = tangiveis(rotacao(getPeca().getReferencia()));
    const empilhados = getEmpilhados(); 

    for(let i=0;i<visiveis.length;i++){

        if(visiveis[i].x < 0 || visiveis[i].x > (ctx.canvas.width -tamanho)){
            console.log("colide na parede durante rotação");
        }


        for(let j=0;j<empilhados.length;j++){

            let y = relativoY(empilhados[j], visiveis[i]);

            if(visiveis[i].x == empilhados[j].x && (y > -tamanho) && (y < tamanho)){

                    console.log("colide na rotação");
                    return true;
                };   
        }
    }

    return false; 
}



function relativoY(torre, peca){
    return torre.y - peca.y;
}

