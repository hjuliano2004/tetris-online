import { tamanho } from "../cenario/Cenario.js";
import { getPeca, peca, setPeca } from "../main.js";
import { referencia } from "../models/ele.js";
import {
  colideLateral,
  colideRotacao,
  compensaRotacao,
  paredeDireita,
  paredeEsquerda,
} from "./colisoes.js";
import { aleatorias, rotacao, tangiveis} from "./utilis.js";
import { getEmpilhados } from "../cenario/torre.js";

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
        //colideRotacao(tangiveis(rotacao(getPeca().getReferencia()), getPeca().getCorpo()), getEmpilhados());
        girar();
        break;

      case "p":
        setPeca(aleatorias());
    }
  }),
};


function girar(){

  let visiveis = tangiveis(getPeca().getReferencia(), getPeca().getCorpo());

if(colideRotacao(visiveis, getEmpilhados())){
  compensaRotacao();
}else{
  peca.setReferencia(rotacao(peca.getReferencia()))
}

}