var fs = require('fs').promises
async function verificarCPF() {
    try {
        var cpf = await ( await fs.readFile('./CPF.txt') ).toString()
    } catch (error) {
        console.log(`${error}`)
        return
    }
    if(cpf == "") {
        alert("Por favor insira o CPF")
        return
    }
    console.log(`CPF: ${cpf}`)
    var array = cpf.split("")
    console.log(`Array: ${array}`)
    console.log(`Tamanho do array: ${array.length}`)
    var eValido;
    var aux = 0;
    var aux2 = 0;
    for(var i = 0; i < array.length - 2; i++) {
        // para o primeiro digito verificador;
        aux += (array[i] * (i + 1))
    }
    // console.log(`Valor do aux: ${aux}`)
    var digver = aux % 11
    console.log(`Primeiro digito verificador: ${digver}`)
    if(digver == 10) {
        digver = 0
    }

    for(var k = 0; k < array.length - 1; k++) {
        // para o segundo digito verificador;
        aux2 += (array[k] * k)
    }
    // console.log(`Valor do aux2: ${aux2}`)
    var digver2 = aux2 % 11
    console.log(`Segundo digito verificador: ${digver2} (se for = 10, substitui-se por 0)`)
    if(digver2 == 10) {
        digver2 = 0
    }

    if(array[9] == digver) {
        if(array[10] == digver2) {
            eValido = true
            console.log("CPF Válido")
            // alert("CPF Válido!")
        } else {
            eValido = false
            console.log("CPF Inválido")
            // alert("CPF Inválido...")
        }
    } else {
        eValido = false
        console.log("CPF Inválido")
        // alert("CPF Inválido...")
    }
    console.log(eValido) 
    return eValido
}

verificarCPF()