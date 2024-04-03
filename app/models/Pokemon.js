

export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.forms[0].url
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
        return `
        <div class="row">
            <h3>${this.name}</h3>
        </div>
        <div class="row">
        <img src="${this.img}" alt="">
        </div>
        <div class="row">
            <div class="col-6">
                <p>Height: 4'03" | Weight: 98 lbs</p>
            </div>
            <div class="col-6">
                <p>Types: Water | Poison</p>
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