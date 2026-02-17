let pokemon={
    "name": "pikachu",
    "nivel": 60,
    "habilidades":["Impac trueno","Rayo", "Bola Voltio"],
    "pokeball": true,
    "equipo":{
        "pokemon 2": "Charizar",
        "pokemon 3": "Bulbasaur"
    },
    "tipo": "electrico",
}

console.log(pokemon);
console.log(`Mi pokemon es ` + pokemon.name);
console.log(`Y su nivel es ` + pokemon.nivel);
console.log(`Sus habilidades son ` + pokemon.habilidades);
console.log(`Lo tengo en pokeball? ` + pokemon.pokeball);
console.log(`Y su tipo es ` + pokemon.tipo);

console.table(pokemon)