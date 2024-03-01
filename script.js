function converterDecimalParaBinario() {
    var decimalInput = document.getElementById('decimalInput').value;
    var resultado = document.getElementById('resultado');

    // Verifica se o valor inserido é válido
    if (decimalInput < 0 || isNaN(decimalInput) || decimalInput % 1 !== 0) {
        resultado.textContent = "Por favor, insira um número decimal inteiro positivo válido.";
        return;
    }

    // Converte o número decimal para binário
    var binario = (decimalInput === 0) ? "0" : (decimalInput >>> 0).toString(2);

    resultado.textContent = "O número binário é: " + binario;
}