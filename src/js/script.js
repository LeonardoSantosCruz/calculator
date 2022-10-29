let foiRealizadaUmaOperacao = false

function insert(num){

    if(foiRealizadaUmaOperacao && Number(num)){// testar se numero, se sim
        cleanAll()  
    } else if (foiRealizadaUmaOperacao && !Number(num)){ // testar se numero, senão
        foiRealizadaUmaOperacao = false 
    }
    let addNum = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = addNum + num    
}

function cleanAll(){
    document.getElementById('tela').innerHTML = ""
    foiRealizadaUmaOperacao = false
}

function backspace(){
    let apagar = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = apagar.substring(0, apagar.length -1)/* .lenght me dá a quantidade;
  sendo assim, ele vai removendo o ultimo caractere*/
}

function igualdade(){
    var resultado = document.getElementById('tela').innerHTML
    
     if(resultado){
        document.getElementById('tela').innerHTML= eval(resultado) 
        foiRealizadaUmaOperacao =true
    }
}
