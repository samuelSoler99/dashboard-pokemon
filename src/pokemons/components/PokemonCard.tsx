import Link from "next/link"
import { PokemonFavorite, SimplePokemon } from "../index"
import Image from "next/image"

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon;

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className=" flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
                    <Image
                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt={name}
                        width={100}
                        height={100}
                        className=""
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>

                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Más información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <PokemonFavorite pokemon={pokemon} ></PokemonFavorite>
                </div>

            </div>
        </div >
    )
}
