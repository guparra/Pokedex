/*
quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem 

pra isso vamos precisar trabalhar com dois elementos
1- listagem
2- cartao do pokemon

precisamos criar duas variaves no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons

- remover a classe aberto so do cartao que esta aberto 
- ao clicar em um pokemon na listagem pegamos o id desse pokemon pra saber qual cartao mostrar
- remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variaves no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
//vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons

    pokemon.addEventListener('click', () => {
   //remover a classe aberto so do cartao que esta aberto 
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')
    
        //ao clicar em um pokemon na listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')

    })
})



