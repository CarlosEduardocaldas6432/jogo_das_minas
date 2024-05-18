const grid =document.querySelector('.lugar-dos-itens')
let menosAposta = document.querySelector(".menos-aposta")
let maisAposta = document.querySelector(".mais-aposta")

//sistema de apostar

let valorAposta = document.querySelector(".parag-aposta");
let variavalor =["0.50","1.00","1.50","2.00","2.50","3.00","3.50","4.00"
,"4.50","5.00","5.50","6.00","6.50","7.00","7.50","8.00","8.50","9.00","9.50","10.00"]
let num = 0;

//obs: a variavel dinheiro aqui é para saber o valor da aposta 
let dinheiro = 0.50;

function AumentaAposta(){
   
  if(num<=18){
  
    num++
    dinheiro= dinheiro + 0.50
    valorAposta.textContent ="R$ "+ variavalor[num];
  }
  else{
    return
  }
  }

  function DiminuiAposta(){
  
  
    if(num>=1){
    
      num--
      dinheiro= dinheiro - 0.50
      valorAposta.textContent ="R$ "+ variavalor[num];
    }
    else{
      return
    }
    }

// parte do ganhor
let ganho = document.querySelector(".parag-ganho");



function ganhoDinheiro(){
    
     dinheiro = dinheiro + (dinheiro*0.2);
    
    ganho.textContent ="R$ "+ dinheiro.toFixed(2);
    

}


//botão retirar

let botaoretira = document.querySelector(".retirar");

function pararJogo(){

  alert('você ganhou R$'+dinheiro.toFixed(2));
  location.reload(true);


}
//criar elementos
function criarElementosComMinas() {
    // Número total de elementos
    let totalElementos = 20;

    // Número de minas desejado
    let numeroMinas = 4;

    // Array para armazenar os índices dos elementos que conterão minas
    let minasIndices = [];

    // Popula o array com índices únicos para as minas
    while (minasIndices.length < numeroMinas) {
      let indiceAleatorio = Math.floor(Math.random() * totalElementos);
      if (minasIndices.indexOf(indiceAleatorio) === -1) {
            minasIndices.push(indiceAleatorio);
      }
    }

    // Cria os elementos
  for (var i = 0; i < totalElementos; i++) {
    let bloco = document.createElement("div");
    bloco.classList.add("blocos");
    let faceBack = document.createElement("div");
    faceBack.classList.add("face-back");
    let faceFront = document.createElement("div");
    faceFront.classList.add("face-front");
    // Verifica se o elemento atual é uma mina
    if (minasIndices.includes(i)) {

      // ver se onde foi clicado é uma mina
      faceFront.classList.add("min"); // Adiciona a classe "min" à face da frente
      bloco.onclick = function() {

        bloco.style.transform = 'rotateY(180deg)';
        bloco.style.transition = 'transform 0.5s ease-in-out';
        faceBack.style.display = 'none';
        faceFront.style.display = 'block';
        
        setTimeout(function() {
     
          alert('você perdeu!!!');
          location.reload(true);
        
        }, 200);

      }
    }
    if (!minasIndices.includes(i)) {

      // ver se onde foi clicado é uma mina
      // Adiciona a classe "min" à face da frente
      bloco.onclick = function() {

        bloco.style.transform = 'rotateY(180deg)';
        bloco.style.transition = 'transform 0.5s ease-in-out';
        faceBack.style.display = 'none';
        faceFront.style.display = 'block';
        menosAposta.disabled = true
        maisAposta.disabled = true
        botaoretira.style.display='block'
        ganhoDinheiro()
      }
    }

    bloco.appendChild(faceBack);
    bloco.appendChild(faceFront);
    grid.appendChild(bloco);
  }
}

criarElementosComMinas();


