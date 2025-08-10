import { Peca } from "./peca.js";

export const elePadrao = {
    referencia: referencia(),

    corpo: []
}

export function Ele(){
    let peca = Peca();
    peca.setReferencia(elePadrao.referencia);
    peca.gerador();

    return peca;
}

export function referencia(){

    const array = [[[0, 1, 0],
                    [0, 1, 0],
                    [0, 1, 1]],

                   [[0, 1, 0],
                    [0, 1, 0],
                    [1, 1, 0]]];


    let escolha = Math.floor(Math.random() * array.length);

  return array[escolha];
}