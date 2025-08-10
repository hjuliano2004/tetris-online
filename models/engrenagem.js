import { Peca } from "./peca.js";

export const enginePadrao = {
    referencia: [[0, 1, 0],
                 [1, 1, 1],
                 [0, 0, 0]],

    corpo: []
}

export function Engrenagem(){
    let peca = Peca();
    peca.setReferencia(enginePadrao.referencia);
    peca.gerador();

    return peca;
}