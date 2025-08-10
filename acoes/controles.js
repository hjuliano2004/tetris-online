import { tamanho } from "../cenario/Cenario.js";
import { peca, setPeca } from "../main.js";
import { referencia } from "../models/ele.js";
import {
  colideLateral,
  colideRotacao,
  paredeDireita,
  paredeEsquerda,
} from "./colisoes.js";
import { aleatorias, rotacao } from "./utilis.js";

export let controle = {
  teclas: window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
        if (!paredeDireita() && !colideLateral(tamanho)) {
          peca.direita();
        }

        break;

      case "ArrowLeft":
        if (!paredeEsquerda() && !colideLateral(-tamanho)) {
          peca.esquerda();
        }

        break;

      case "Spacebar":
      case " ":
        colideRotacao();
        peca.setReferencia(rotacao(peca.getReferencia()));
        
        break;

      case "p":
        setPeca(aleatorias());
    }
  }),
};
