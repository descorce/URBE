/*function pokeFetch() {
    fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
    .then( res => res.json())
    .then( data => console.log(data))
}

pokeFetch();*/

async function pokeFetch(id) {
    if(id>=1 && id<=898){
        try {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            let pokemonJSON = await res.json()

            console.log(pokemonJSON)

            let output = "";

            let types = () => {
                let concatTypes = "";

                for(i=0; i < pokemonJSON.types.length; i++){
                    if( i < pokemonJSON.types.length - 1){
                        concatTypes += `${pokemonJSON.types[i].type.name}, `
                    }
                    else{
                        concatTypes += `${pokemonJSON.types[i].type.name}.`
                    }
                }

                return concatTypes;
            }

                output += `
                    <h1 class="display-4 fw-bold">#${pokemonJSON.id} ${pokemonJSON.name}</h1>
                    <img class="responsive" src="${pokemonJSON.sprites.front_default}"/>
					<div class="col-lg-6 mx-auto">
					    <h3 class="display-7 fw-bold">Tipo: ${types()}</h3>
					</div>
                `;

            document.getElementById("pokeDetails").innerHTML = output;

        } catch (error) {
            console.log(error)
        }
    }
    else{
        let output = "";

        output += `
                    <h1 class="display-4 fw-bold">:( No atrapaste nada, consulta fuera de rango.</h1>
					<div class="col-lg-6 mx-auto">
					    <h3 class="display-7 fw-bold">¡Intentalo de nuevo! (Rango: 1 - 898)</h3>
					</div>
                `;

        document.getElementById("pokeDetails").innerHTML = output;
    }
}