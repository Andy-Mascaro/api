export async function getPokedex() {
  
    let url = 'http://pokedex-alchemy.herokuapp.com/api/pokedex';
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}


  
  // API Documentation: https://swapi.dev/documentation
export async function getStarWarsPeople() {
    let url = 'https://swapi.dev/api/people';
  
    const resp = await fetch(url);
    const json = await resp.json();
    return json.results;
}

//////Other api documentation if you want to use a different api
///////https://last-airbender-api.herokuapp.com/ 
///////https://hey-arnold-api-documentation.netlify.app/
////////https://futuramaapi.herokuapp.com/
/////////https://rickandmortyapi.com/
///////https://swapi.dev/about