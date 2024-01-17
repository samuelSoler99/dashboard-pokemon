'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { SimplePokemon } from "..";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

interface Props {
    pokemon: SimplePokemon
}

export const PokemonFavorite = ({ pokemon }: Props) => {
    const { id, name } = pokemon;
    const isFavoritePokemon = useAppSelector(state => !!state.pokemons.favorites[id]);
    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    }

    return (
        <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" onClick={onToggle}>
            <div className="text-red-600">
                {isFavoritePokemon ?
                    (<IoHeart />) :
                    (<IoHeartOutline />)
                }
            </div>
            <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                    {isFavoritePokemon ?
                        "Favorito" :
                        "No Favorito"
                    }
                </p>
                <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
        </div>
    )
}
