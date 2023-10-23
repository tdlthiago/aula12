
function Verificar(){
    
    let anoAtual = 2023
    let campo = document.getElementById("campo").value;
    let masculino = document.getElementById("sexo1")
    let feminino = document.getElementById("sexo2")
    
    let res = parseFloat(anoAtual) - parseFloat(campo)
 
    if(campo != '' && masculino != '' && feminino != ''){
 
        if(document.getElementById("sexo1").checked){
        let texto = document.querySelector("#mensagem")
    
        texto.innerHTML = "Sua idade é " + res + " seu sexo é Masculino"
    
        texto.body.appendChild(texto)
    
        } else if (document.getElementById("sexo2").checked) {
 
        let texto = document.querySelector("#mensagem")
    
        texto.innerHTML = "Sua idade é " + res + " e seu sexo é feminino" 
    
        texto.body.appendChild(texto)
    
        } 
    } else {
        let texto = document.querySelector("#mensagem")
    
        texto.innerHTML = "Preencha todos os campos!" 
    
        texto.body.appendChild(texto)
    }
 
}
