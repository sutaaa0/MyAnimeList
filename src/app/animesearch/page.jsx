import React from 'react'
import Cardtes from "../components/AnimeList/CardTes"

const SearchAnime = async ({ api }) => {

    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((data, index) => {
                return (
                     <div key={index} className="shadow-xl ">
                      <Cardtes title={data.title} episodes={data.episodes}
                        type={data.type} images={data.images.webp.image_url}
                        id={data.mal_id} />
                    </div>
                )
            })}
        </div>
    )
}

export default SearchAnime