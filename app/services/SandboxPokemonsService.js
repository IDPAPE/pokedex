import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"


class SandboxPokemonsService {

    async getMyPokemon() {
        const response = await api.get('api/pokemon')
        const myPokemon = response.data.map(pokemon => new Pokemon(pokemon))
        AppState.myPokemon = myPokemon
        console.log(AppState.myPokemon)
    }

    async catchPokemon() {
        const response = await api.post('api/pokemon', AppState.activePokemon)
        console.log('response', response)
        const pokemon = new Pokemon(response.data)
        console.log('classed pokemon', pokemon)
        AppState.myPokemon.push(pokemon)
    }

    async releasePokemon(name) {
        const response = await api.delete(`api/pokemon/${name}`)
        console.log('releasing', response)
        const indexRemoved = AppState.myPokemon.findIndex(pokemon => pokemon.name == name)
        console.log('index is', indexRemoved)

    }
}

export const sandboxPokemonsService = new SandboxPokemonsService()