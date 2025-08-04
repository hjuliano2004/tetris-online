import { Peca } from "./peca.js";
import { tamanho } from "../cenario/Cenario.js";

export const stickPadrao = {
    referencia: [[0, 0, 0, 0],
                 [1, 1, 1, 1],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

    corpo: []
}

export function Stick(){
    let peca = Peca();
    peca.setReferencia(stickPadrao.referencia);
    peca.gerador();

    return peca;
}