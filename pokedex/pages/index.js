
export async function getStaticProps(context) {
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
      .then((response) => {
        if(response.ok) {
          return response.json()
        }
      })
      .then((object) => {
        return object.pokemon_entries
      })

  return {
    props: {pokemons},
  }
}

export default function Home(props) {
  const { pokemons } = props;

  return (
    <div>
      Pokedéx

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            {pokemon.pokemon_species.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
