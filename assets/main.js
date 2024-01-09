function calcular() {
    const form = document.querySelector('.form')
    const captura1 = document.querySelector('.secao_valor1')
    const captura2 = document.querySelector('.secao_valor2')

    const resultado = document.querySelector('.resultado')

    function receberEventoCaptura(evento) {
        evento.preventDefault()

        //captura dos valor no HTML
        const valor1 = captura1.querySelector('.valor1').value
        const valor2 = captura2.querySelector('.valor2').value

        if(isNaN(valor1)) {
            alert('Insira apenas números!')
            return
        }
        if(isNaN(valor2)) {
            alert('Insira apenas números!')
            return
        }

        //conversão dos valores para Float
        parseFloat(valor1)
        parseFloat(valor2)

        //calculos realizados com base nas entradas
        const porcentagem = valor1 / 100
        const calculaNumero1 = 100 - (100 * porcentagem)
        const calculaNumero2 = (valor2 / calculaNumero1) * 100

        //Resultado do calculo
        if(resultado.innerHTML === '') {
            resultado.innerHTML = `<div>R$<p>${calculaNumero2.toFixed(2)}</p></div>`
        }
        else {
            const valorAtual = parseFloat(resultado.querySelector('p').textContent)
            const novoCalculo = valorAtual + calculaNumero2
            resultado.innerHTML = `<div>R$<p>${novoCalculo.toFixed(2)}</p></div>`
        }
        
    }

    //botão para realizar o evento de calculo
    form.addEventListener('submit', receberEventoCaptura)
}

function limpaResultado() {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
}

calcular()