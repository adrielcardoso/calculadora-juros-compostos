
function calcularJurosCompostos() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);
    const tempoUnidade = document.getElementById('tempoUnidade').value;
    const aporteMensal = parseFloat(document.getElementById('aporteMensal').value);

    let montante = valorInicial;
    let resumo = `Resumo dos Investimentos:\n`;

    for (let i = 0; i < tempo; i++) {
        if (tempoUnidade === 'meses') {
            montante += aporteMensal;
            montante *= (1 + taxaJuros / 12);
        } else {
            montante += aporteMensal;
            montante *= (1 + taxaJuros);
        }

        // Adicione informações sobre cada período ao resumo
        resumo += `Ano ${i + 1}: ${montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`;
    }

    // Formatação monetária com duas casas decimais
    const montanteFormatado = montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('montante').textContent = montanteFormatado;

    // Exibir resumo dos investimentos
    document.getElementById('resumoTaxaInvestimento').textContent = resumo;
}
