import { getPeca } from "../main.js";


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



    
export function tangiveis(referencia) {
          let lista = [];
          let corpo = getPeca().getCorpo();
    
          for (let i = 0; i < corpo.length; i++) {
            for (let j = 0; j < corpo.length; j++) {
              if (referencia[i][j]) {
                lista.push(corpo[i][j]);
              }
            }
          }
          return lista;
        }