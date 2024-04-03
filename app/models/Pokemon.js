

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
    }

    static pokedexListTemplate(pokemonName) {
        return `
        <p class="border-bottom border-dark" onclick="app.ApiPokemonsController.setActivePokemonfromPokedex('${pokemonName}')"><i class=" mdi mdi-pokeball"></i> ${pokemonName}</p>
        `
    }

    get ActivePokemon() {
        console.log(this.img)
        return `
        <div class="row text-center">
            <h3>${this.name}</h3>
        </div>
        <div class="row justify-content-center">
        <img class="pokemon-img" src="${this.img}" alt="${this.img}">
        </div>
        <div class="row">
            <div class="col-6">
                <p>Height: ${this.height}' | Weight: ${this.weight} lbs</p>
            </div>
            <div class="col-6">
                <p>Types: ${this.types[0].type.name} ${this.types[1] ? '| ' + this.types[1].type.name : ''}</p>
            </div>
        </div>
        <div class="row justify-content-end">
            <div class="col-2">
                <button class="btn btn-rounded btn-success">Catch</button>
            </div>
        </div>
        `
    }
}
/*
name: String, required
nickName: String, 
img: String, required
weight: String, 
height: String, 
types: undefined, 
creatorId: String (References Account Id), required
*creator: Object (Virtual Added by Database)
*createdAt: ISO Timestamp (Virtual Added by Database)
*updatedAt: ISO Timestamp (Virtual Added by Database) 
*/