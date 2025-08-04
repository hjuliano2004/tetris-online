import { peca } from "../main.js";
import {
  colideDireita,
  colideEsquerda,
  paredeDireita,
  paredeEsquerda,
} from "./colisoes.js";
import { rotacao } from "./utilis.js";

export let controle = {
  teclas: window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
        if (!paredeDireita() && !colideDireita()) {
          peca.direita();
        }

        break;

      case "ArrowLeft":
        if (!paredeEsquerda() && !colideEsquerda()) {
          peca.esquerda();
        }

        break;

      case "Spacebar":
      case " ":
        peca.setReferencia(rotacao(peca.getReferencia()));

      default:
        break;
    }
  }),
};
