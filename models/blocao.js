import { Peca } from "./peca.js";

export const blocoPadrao = {
    referencia: [[1, 1],
                 [1, 1]],

    corpo: []
}

export function Blocao(){
    let peca = Peca();
    peca.setReferencia(blocoPadrao.referencia);
    peca.gerador();

    return peca;
}