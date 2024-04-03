import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { apiPokemonsService } from "../services/ApiPokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class ApiPokemonsController {
    constructor() {
        console.log('Api Pokemons Controller Loaded')
        this.getApiPokemons()
        AppState.on('pokeApiPokemons', this.drawApiPokemons)
        AppState.on('activePokemon', this.drawActivePokemon)
    }

    async getApiPokemons() {
        try {
            apiPokemonsService.getApiPokemons()
        } catch (error) {
            console.error(error)
            Pop.toast("could not load Api Pokemons")
        }
    }

    drawApiPokemons() {
        let pokedexList = ''
        AppState.pokeApiPokemons.forEach(pokemon => pokedexList += Pokemon.pokedexListTemplate(pokemon.name))
        // console.log(AppState.pokeApiPokemons)
        setHTML('pokedex-list', pokedexList)
    }

    async setActivePokemonfromPokedex(name) {
        // console.log('active pokemon', activePokemon)
        await apiPokemonsService.setActivePokemonFromPokedex(name)
    }

    drawActivePokemon() {
        setHTML('active-pokemon', AppState.activePokemon.ActivePokemon)
    }


}