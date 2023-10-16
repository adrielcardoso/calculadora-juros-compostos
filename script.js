
function calcularJurosCompostos() {
    const principal = parseFloat(document.getElementById('principal').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);
    
    const montante = principal * Math.pow(1 + taxaJuros, tempo);
    
    document.getElementById('montante').textContent = montante.toFixed(2);
}
