import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class ApiPokemonsService {

    async getApiPokemons() {
        const response = await pokeApi.get('?limit=386')
        const pokemonsList = response.data.results
        console.log(pokemonsList)
        AppState.pokeApiPokemons = pokemonsList
        console.log(AppState.pokeApiPokemons)
    }

    async setActivePokemonFromPokedex(name) {
        // console.log(name)
        const response = await pokeApi.get(`${name}`)
        console.log(response)
        const pokemon = new Pokemon(response.data)
        console.log(pokemon)
        AppState.activePokemon = pokemon


    }
}

export const apiPokemonsService = new ApiPokemonsService()