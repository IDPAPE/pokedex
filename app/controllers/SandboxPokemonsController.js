import { AppState } from "../AppState.js"
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class SandboxPokemonsController {
    constructor() {
        console.log('sandbox pokemons controller loaded')
        AppState.on('myPokemon', this.drawMyPokemon)
        AppState.on('account', this.getMyPokemon)
    }

    async getMyPokemon() {
        await sandboxPokemonsService.getMyPokemon()
    }
    async catchPokemon() {
        await sandboxPokemonsService.catchPokemon()
    }
    async releasePokemon(name) {
        await sandboxPokemonsService.releasePokemon(name)
    }

    drawMyPokemon() {
        let myPokemonList = ''
        AppState.myPokemon.forEach(pokemon => myPokemonList += pokemon.MyPokemon)
        setHTML('my-pokemon', myPokemonList)
    }

}