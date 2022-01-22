import { getPokedex } from './fetch.js';

const template = document.querySelector('#template');
const list = document.querySelector('#list');
const audio = document.querySelector('#audio');

async function getPokemon() {
    const pokemons = await getPokedex();  
    for (let pokemon of pokemons) {
        const clone = template.content.cloneNode(true);
        const pokemonName = clone.querySelector('#pokemon');
        const pokemonImage = clone.querySelector('#image');
        audio.src = '/assets/pokemon.wav';
        audio.play();

        pokemonName.textContent = pokemon.pokemon;
        pokemonImage.src = pokemon.url_image;
        list.append(clone);
    }

}

window.addEventListener('load', async() => {
    await getPokemon();

    

    //if (selected === 'pokemon') {
        //list.innerHTML = 'pokedex';
        // await loadPokedex();

    //} else if (selected === 'star-wars') {
       // list.innerHTML = 'people';
        //await loadStarWars();
   // }

});

//console.log('app.js is running');
//const template = document.querySelector('#template');
//const list = document .quarrySelector('#list');
//console.log('elements');