var money = document.getElementById('money')

// config From
var convertFrom = document.getElementById('from')
var imgFrom = document.getElementsByTagName('img')[0]
var coinFrom = document.getElementById('coinFrom')
var valueFrom = document.getElementById('valueFrom')

// config to
var imgTo = document.getElementsByTagName('img')[2]
var coinTo = document.getElementById('coinTo')
var valueTo = document.getElementById('valueTo')
var convertTo = document.getElementById('to')

function changed() { // trocando imagens E textos da div resultado

    if (convertFrom.value == 'real') {
        imgFrom.src = './img/brasil.png'
        coinFrom.innerText = `Real`
    }

    if (convertTo.value == 'dolar') {
        imgTo.src = './img/estados-unidos.png'
        coinTo.innerText = 'Dólar Americano'
    } else if (convertTo.value == 'euro') {
        imgTo.src = './img/euro.png'
        coinTo.innerText = 'Euro'
    }
    convert()
}

money.setAttribute('placeholder', 'R$ 10.000,00')

async function convert() {
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta) {
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro  = moedas.EURBRL.high
 
    var conversion = 0
    if (convertFrom.value == 'real' && convertTo.value == 'dolar') {
        conversion =  money.value / dolar
        valueFrom.innerText = `${Number(money.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        valueTo.innerText = `${conversion.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
    }else if (convertFrom.value == 'real' && convertTo.value == 'euro') {
        conversion =  money.value / euro
        valueFrom.innerText = `${Number(money.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
        valueTo.innerText = `${conversion.toLocaleString('en-GB', { style: 'currency', currency: 'EUR' })}`
    }
}
