const calcular = document.getElementById('calcular');


function valorpoupado () {
    const nome = document.getElementById('nome').value;
    const valor_mensal = document.getElementById('valor_mensal').value;
    const juros = document.getElementById('juros').value;
    const meses = document.getElementById('meses').value;
    const resultado = document.getElementById('resultado');

    if (valor_mensal !== '' && juros !== '' && meses !== '') {

        const valor_poupado = valor_mensal*(1+(juros/100)**(meses)+1/(juros/100)).toFixed(2);

        let classificacao = '';

        if (valor_poupado < 18.5){
            classificacao = '';
        }else {
            classificacao = '';
        }
        
        resultado.textContent = `Olá, ${nome}! O valor poupado durante os ${meses} meses, seria de R$${valor_poupado} ${classificacao}!`;

    }else {
        resultado.textContent = 'Para calcular o valor poupado , preencha todos os campos.';
    }

}
calcular.addEventListener('click', valorpoupado);