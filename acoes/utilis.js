import { getPeca } from "../main.js";
import { Blocao } from "../models/blocao.js";
import { Ele } from "../models/ele.js";
import { Engrenagem } from "../models/engrenagem.js";
import { Stick } from "../models/stick.js";


export function rotacao(referencia) {
      let novo = new Array(referencia.length);

      for (let i=0; i < novo.length; i++) {
        novo[i] = [];
      }

      for (let i = 0; i < referencia.length; i++) {
        for (let j = 0; j < referencia.length; j++) {
          novo[j].unshift(referencia[i][j]);
        }
      }
      return novo;
    }


export function tangiveis(referencia, corpo) {
          let lista = [];
    
          for (let i = 0; i < corpo.length; i++) {
            for (let j = 0; j < corpo.length; j++) {
              if (referencia[i][j]) {
                lista.push(corpo[i][j]);
              }
            }
          }
          return lista;
        }

export function aleatorias(){
  const array = [Stick, Engrenagem, Blocao, Ele];

  let escolha = Math.floor(Math.random() * array.length);


  return array[escolha]();
}