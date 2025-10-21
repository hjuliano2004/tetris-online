import { getEmpilhados, torre } from "../cenario/torre.js";
import { ctx, tamanho } from "../cenario/Cenario.js";
import { getPeca, setPeca } from "../main.js";
import { aleatorias, rotacao, tangiveis } from "./utilis.js";

export function chao(){

    let visiveis = tangiveis(getPeca().getReferencia(), getPeca().getCorpo());

    for(let i=0;i<visiveis.length;i++){
        if(visiveis[i].y + tamanho == ctx.canvas.height){
         colisao(); 
         return null;
        }
    }
    
}

export function colideTorre(){
    let array = tangiveis(getPeca().getReferencia(), getPeca().getCorpo());
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
            torre.add(tangiveis(getPeca().getReferencia(), getPeca().getCorpo()));
            setPeca(aleatorias());
}


export function paredeDireita(){
    let visiveis = tangiveis(getPeca().getReferencia(), getPeca().getCorpo());
    for(let i=0; i<visiveis.length;i++){
        if(visiveis[i].x >= 390){    
            return true;
        }
    }
    return false;
}

export function paredeEsquerda(){
    let visiveis = tangiveis(getPeca().getReferencia(), getPeca().getCorpo());
    for(let i=0; i<visiveis.length;i++){
        if(visiveis[i].x <= 0){
            return true;
        }
    }
    return false;
}
//TODO  existem funções distintas para verificar colisoes com a parede ou colisão lateral com blocos

export function colideLateral(posicao = 0){
    let visiveis = tangiveis(getPeca().getReferencia(), getPeca().getCorpo());
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


export function colideRotacao(visiveis, empilhados){

    for(let i=0;i<visiveis.length;i++){

        if(visiveis[i].x < 0 || visiveis[i].x > (ctx.canvas.width -tamanho)){
            console.log("colide na parede durante rotação");
            return true;
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

export function compensaRotacao(){

    const variacoes = [{x: tamanho, y: 0},
                       {x: 0, y: tamanho},
                       {x: -tamanho, y:0},
                       {x: 0, y: -tamanho},
                       {x: tamanho, y:tamanho},
                       {x: -tamanho, y:-tamanho},
                       {x: tamanho, y: -tamanho},
                       {x: -tamanho, y: tamanho},
                        { x: 2 * tamanho, y: 0 },
                        { x: 0,           y: 2 * tamanho },
                        { x: -2 * tamanho, y: 0 },
                        { x: 0, y: -2 * tamanho },
                        { x: 2 * tamanho, y: 2 * tamanho },
                        { x: -2 * tamanho, y: -2 * tamanho },
                        { x: 2 * tamanho, y: -2 * tamanho },
                        { x: -2 * tamanho, y: 2 * tamanho }];


    let atual = getPeca();
    const empilhados = getEmpilhados();

    for(let i=0;i<variacoes.length;i++){

        let novo = getPeca().clone();

        for(let j=0;j<novo.corpo.length;j++){
            for(let y=0;y<novo.corpo.length;y++){
                novo.corpo[j][y] = somaCorpo(novo.corpo[j][y], variacoes[i])
            }
        }

        let visiveis = tangiveis(novo.referencia, novo.corpo);

        if(!colideRotacao(visiveis, empilhados)){
            console.log("sucesso rodar")
            getPeca().setCorpo(novo.corpo);
            return
        }else{
            console.log("fracasso rodar")
        }
    }
}

function somaCorpo(cp, cp2) {
    return {
        x: cp.x + cp2.x,
        y: cp.y + cp2.y
    };
}