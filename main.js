const botoes = document.querySelectorAll(".botao");
for(let i=0; i<botoes.length; i++){
    botoes[j].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[i].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}