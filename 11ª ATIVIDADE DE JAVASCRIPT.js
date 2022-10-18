const carro = {
    motor: "V8 6.2"
    portas: "2"
    capota: "Conversivel"
}

let cor = [preto, azul, vermelho]

for (let cor of carro){
    console.log (cor)
}

for (let prop in carro ){
    console.log (prop+ "=" + carro[prop])
}
