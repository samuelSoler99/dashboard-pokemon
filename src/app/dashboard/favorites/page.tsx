import {  PokemonsFavorites } from "@/pokemons";


export const metadata = {
  title: 'Favorites list',
  description: 'Favorites list',
};

export default async function PokemonsPage() {


  return (
    <div className="p-2 flex flex-col">

      <span className="flex items-center justify-center gap-1 p-2 rounded-xl bg-gray-900 text-white transition-all mr-2">Pokémons Favoritos<small className="text-blue-300 ">Global State</small></span>

      <PokemonsFavorites />
    </div>
  );
}

