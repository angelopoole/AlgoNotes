update=>





create new =>





filter to delete =>



filter to search => {

 `
filterPokemon = () => {
  let {pokemonData, filterTerm} = this.state
  let filteredPokemonArray = pokemonData.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm)
  })
  return filteredPokemonArray
}

 `
}

`
 <input className="prompt"
        onChange={props.onChange}
        value={props.filterTerm}
         />
         
filterPokemon = () => {
  let {pokemonData, filterTerm} = this.state
  let filteredPokemonArray = pokemonData.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm)
  })
  return filteredPokemonArray
}

         

constructor(props) {
    super(props)
  
    this.state = {
      pokemonData: [],
      filterTerm: ""
    }
  }
`




find hp object within the db

let { pokemon } = this.props
  let { name, sprites, stats, frontUrl } = pokemon
  let {front, back} = sprites
  let foundHPObject = stats.find(statObj => {return statObj.name === "hp"})
  
  foundHPObject.value returns value of hp object. 