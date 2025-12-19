
async function verificarCPF() {
    var cpf = document.getElementById("CPF").value
    if(cpf == "") {
        alert("Por favor insira o CPF")
        return
    }
    // console.log(`CPF: ${cpf}`)
    var array = cpf.split("")
    // console.log(`Array: ${array}`)
    // console.log(`Tamanho do array: ${array.length}`)
    var eValido;
    var aux = 0;
    var aux2 = 0;
  
    // para o primeiro digito verificador;
    for(var i = 0; i < array.length - 2; i++) {
        aux += (array[i] * (i + 1))
    }
    // console.log(`Valor do aux: ${aux}`)
    var digver = aux % 11
    // console.log(`Primeiro digito verificador: ${digver}`)
    if(digver == 10) {
        digver = 0
    }

    // para o segundo digito verificador;
    for(var k = 0; k < array.length - 1; k++) {
        aux2 += (array[k] * k)
    }
    // console.log(`Valor do aux2: ${aux2}`)
    var digver2 = aux2 % 11
    // console.log(`Segundo digito verificador: ${digver2} (se for = 10, substitui-se por 0)`)
    if(digver2 == 10) {
        digver2 = 0
    }

    if(array[9] == digver && array[10] == digver2) {
        // if(array[10] == digver2) {
            eValido = true
            console.log("CPF Válido")
            // alert("CPF Válido!")
        
    } else {
        eValido = false
        console.log("CPF Inválido")
        // alert("CPF Inválido...")
    }
    // console.log(eValido) 
    return eValido
}

verificarCPF()
