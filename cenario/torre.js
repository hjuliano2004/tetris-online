import { tangiveis } from "../acoes/utilis.js";
import { bloco } from "./bloco.js";
import { ctx, tamanho } from "./Cenario.js";

export let torre = {
    //empilhados: [],
    empilhados: geraTorre(),

    add: function(pecas = []){

        for(let i=0;i<pecas.length;i++){
            this.empilhados[pecas[i].y / tamanho].push(pecas[i]);
        }
        return
    },

    render:function(){
    for(let i=0;i<this.empilhados.length;i++){
        for(let j=0;j<this.empilhados[i].length;j++){
            bloco(this.empilhados[i][j]);
        }
    }
    return
},
limpa: function(){
    this.empilhados = [];
}
}

export function getEmpilhados(){
    return torre.empilhados;
}

function proporcoes(){
    return ctx.canvas.height / tamanho;
}

function geraTorre(){
    let array = Array(ctx.canvas.height / tamanho);

    for(let i=0;i<array.length;i++){

        array[i] = [];
    }

    console.log(array)

    return array;
}