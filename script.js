
function calcularJurosCompostos() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);
    const tempoUnidade = document.getElementById('tempoUnidade').value;

    let montante;

    if (tempoUnidade === 'meses') {
        montante = valorInicial * Math.pow(1 + taxaJuros / 12, tempo);
    } else {
        montante = valorInicial * Math.pow(1 + taxaJuros, tempo);
    }

    // Formatação monetária com duas casas decimais
    const montanteFormatado = montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('montante').textContent = montanteFormatado;
}
