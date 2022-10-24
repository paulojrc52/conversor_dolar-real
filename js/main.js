const inputValue = document.querySelector('#value')
const buttonCalcular = document.querySelector('#converter')
const resultado = document.querySelector('#res')

const url = 'https://economia.awesomeapi.com.br/json/last/'  
const coins = 'USD-BRL'


buttonCalcular.addEventListener('click', (event) => {
    const valorDigDolar = inputValue.value
    fetch(url + coins)
        .then(response => {
            return response.json()
        })
        .then((data) => {
            const entries = Object.entries(data)
            const valorEmDolar = entries[0][1].bid
            converter(parseFloat(valorEmDolar).toFixed(3), parseFloat(valorDigDolar).toFixed(3))
        })
    
})

function converter(valorCotação, valorDigitado) {
    const resFinal = valorCotação * valorDigitado

    resultado.innerHTML = `R$${resFinal.toFixed(2)}`
}
