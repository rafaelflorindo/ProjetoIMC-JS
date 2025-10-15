function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let pesoConvertido = parseFloat(peso);
    let alturaConvertida = parseFloat(altura);

    if (isNaN(pesoConvertido) || isNaN(alturaConvertida)) {
        alert("Os valores informados devem ser numéricos")
        return
    }

    if (alturaConvertida <= 0) {
        alert("Altura não pode ser inferior a 0")
        return
    }

    if (alturaConvertida > 100)
        alturaConvertida = alturaConvertida / 100

    let imc = pesoConvertido / (alturaConvertida * alturaConvertida);

    document.getElementById("resultadoIMC").innerText = `IMC: ${imc.toFixed(0)}`;
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Magresa - Obesidade (grau) 0";
    } else if (imc < 25) {
        classificacao = "Normal - Obesidade (grau) 0";
    } else if (imc < 30) {
        classificacao = "Sobre Peso - Obesidade (grau) I";
    } else if (imc < 40) {
        classificacao = "Obesidade - Obesidade (grau) II";
    } else {
        classificacao = "Obesidade Grave - Obesidade (grau) III";
    }
    
    document.getElementById("classificacao").innerText = classificacao
}