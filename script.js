// Lógica de verificação de idade

const idadeInput = document.getElementById('idadeInput');
const verifyButton = document.getElementById('verifyButton')
const result = document.getElementById('resultado');

function verificarIdade() {
    result.classList.remove('visivel');
    const idade = parseInt(idadeInput.value);
    let menssagem = '';
    
    if(isNaN(idade) || idade < 0){
        menssagem = 'Por favor, insira uma idade válida';
    }else if(idade < 18){
        menssagem = 'Você é menor de idade';
    }else if(idade < 60){
        menssagem = 'Você é adulto';
    }else{
        menssagem = 'Você é idoso';
    }

    setTimeout(() => {
        result.innertext = menssagem;
        result.classList.add('visivel');
    }, 100);
}

verifyButton.addEventListener('click', verificarIdade);
idadeInput.addEventListener('keyup', (event) => {
    if(event.key === 'enter') verificarIdade();
});

// animação do canvas de fundo

const canvas = document.getElementById(background-canvas);
const ctx = canvas.getContext('2d');

// ajusta o tamanho do canvas para preencher o tamanho da janela

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Objeto para amazenar a posição do mouse
let mouse = {
    x: null,
    y: null,
    radius: 150 // área de influencia do mouse
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// array para armazenar as partículas
let particulasArray = [];
const numeroDeParticulas = 100;

// classe para representar cada partícula
class Particula{
    constructor(x, y, direcaoX, direcaoY, tamanho, cor){
        this.x = x;
        this.y = y;
        this.direcaoX = direcaoX
        this.direcaoY = direcaoY
        this.tamanho = tamanho
        this.cor = cor;        
    }
    // método para desenhar a particula no canvas (método = função dentro de uma classe)
    desenhar(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.tamanho, 0, Math.Pi * 2, false);
        ctx.fillStyle= '#007bff'
        ctx.fill();
    }  
}