/* 
    VARIÁVEIS: 
    - let:      posso alterar o valor quantas vezes eu quiser.
    - const:    toda vez que crio uma const, eu não posso trocar o valor depois.
    - var:      descontinuado, não usamos mais.

    ----------------------------------------------------------------------------

    CONDIÇÃO:
    if (condição, for verdadeira) {
        faça isso
    } else {
        se o if for falso, faça isso
    }

    ----------------------------------------------------------------------------

    FUNÇÃO:
    - é um trecho do código que só é executado quando chamado
    ex:
    let numero = 13
    console.log("oi")
    function like() {
        console.log("tudo bem")
        console.log("como vai a vida")
    }
    like()
    console.log(numero)

    ----------------------------------------------------------------------------

    LAÇOS: 
    - forEach
    ex (imprime um produto por vez): 
    let produtos = ['blusa', 'tenis nike', 'camiseta', 'shorts']
    produtos.forEach (produto => {
        console.log(produto)
    })

    ex (se for blusa, aparece blusa. se nao for, aparece nao é blusa)
    let produtos = ['blusa', 'tenis nike', 'camiseta', 'shorts']
    produtos.forEach (produto => {
    if (produto == 'blusa') {
        console.log(produto)
    } else {
        console.log("nao é blusa!")
    }
})
*/


