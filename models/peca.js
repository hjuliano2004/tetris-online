import { bloco } from "../cenario/bloco.js";
import { tamanho } from "../cenario/Cenario.js";

export function Peca() {
  let corpo = [];
  let referencia = [];

  return {
    gravidade: function (g = 10) {
      for (let i = 0; i < corpo.length; i++) {
        for (let j = 0; j < corpo.length; j++) {
          corpo[i][j].y += g;
        }
      }
    },

    setCorpo: function (novoCorpo = []) {
      corpo = novoCorpo;
    },

    getCorpo: function () {
      return corpo;
    },

    setReferencia: function (nReferencia) {
      referencia = nReferencia;
    },

    getReferencia: function () {
      return referencia;
    },

    render: function () {
      for (let i = 0; i < corpo.length; i++) {
        for (let j = 0; j < corpo.length; j++) {
          if (referencia[i][j]) {
            bloco(corpo[i][j]);
          }
        }
      }
    },

    gerador: function (x = 5) {
      let lista = new Array(referencia.length);
      for (let i = 0; i < lista.length; i++) {
        lista[i] = [];
      }
      for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length; j++) {
          lista[j].push({ x: i * 30 + x * tamanho, y: j * 30 - tamanho * 4 });
        }
      }

      corpo = lista;
    },

    direita: function () {
      for (let i = 0; i < corpo.length; i++) {
        for (let j = 0; j < corpo.length; j++) {
          corpo[i][j].x += tamanho;
        }
      }
    },

    esquerda: function(){
      for (let i = 0; i < corpo.length; i++) {
        for (let j = 0; j < corpo.length; j++) {
          corpo[i][j].x -= tamanho;
        }
      }
    }
  };
}
