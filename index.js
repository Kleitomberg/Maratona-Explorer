//obtemos os elementos pelo identificador  uinco - ID
const pergunta = document.getElementById('pergunta');
const resposta = document.getElementById('resposta');
const inputvalor = document.getElementById('minhapergunta')
const btn = document.getElementById('botaoperguntar')
const msg = document.querySelector('#msg-error')

const res = document.querySelector('#resultado')

//lista com possiveis repostas
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function fazerPergunta(){

    if(inputvalor.value != ""){
        res.style.opacity  = '1'
    }

    if(inputvalor.value == "") {
        msg.innerHTML = "pergunta vazia, por favor digite sua pergunta."
        
        return
      }

      btn.setAttribute("disabled", true)
//gerar valor ramdom
const totalRespostas = respostas.length
const aleatorio = Math.floor(Math.random()*totalRespostas)

//altera o elemento resposta com o valor aleatorio da lista
resposta.innerText  = respostas[aleatorio]

//alterando elemento pergunta pelo valor que foi digitado no input
pergunta.innerHTML = inputvalor.value

//reseta o input após clicar
inputvalor.value = ""


//resetando
setTimeout(function() {
    res.style.opacity  = '0'  
    btn.removeAttribute("disabled")   
  }, 3000)

    

}




