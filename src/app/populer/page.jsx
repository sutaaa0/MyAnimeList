import React from 'react'
import AnimeList from '../components/AnimeList'
import Headerlayout from '../components/Header/HeaderLayout'
import Carousel from "../components/Carousel/page.jsx"
import { getAnimeRespons } from "../lib/getAnimeRespons"

export default async function Populer() {

  const animePopuler = await getAnimeRespons("watch/promos/popular")

  return (
    <div className="w-full h-screen">
      <div className='w-full'>
      <Carousel />
      </div>
      <Headerlayout title={"Paling Populer"}  />
      <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {animePopuler.data.map(data => {
      return ( 
        <div key={data.entry.mal_id} className="shadow-xl">
          <AnimeList title={data.entry.title} images = {data.entry.images.jpg.image_url} id={data.entry.mal_id}/>
        </div>
      )
    })}
      </div>
    </div>
  )
}
