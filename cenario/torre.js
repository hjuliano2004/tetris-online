import { bloco } from "./bloco.js";

export let torre = {
    empilhados: [],

    add: function(peca = []){
        for(let i=0;i<peca.length;i++){
            this.empilhados.push(peca[i]);
        }
    },
    render:function(){
    for(let i=0;i<this.empilhados.length;i++){
        bloco(this.empilhados[i]);
    }
},
limpa: function(){
    this.empilhados = [];
}
}

export function getEmpilhados(){
    return torre.empilhados;
}