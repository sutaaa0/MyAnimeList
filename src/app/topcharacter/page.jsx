"use client"
import React, { useEffect, useState } from 'react'
import CardCharacter from "./CardCharacter"
import Headerlayout from '../components/Header/HeaderLayout'
import { getAnimeRespons } from "../lib/getAnimeRespons"
import Pagination from '../components/Pagination/Pagination'

export default async function page() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [page])

    const fetchData = async () => {
        const Character = await getAnimeRespons("top/characters", `page=${page}` )
        setData(Character)
    }


  return (
    <div className="w-full h-screen">
    <div className='h-[70px] w-full'></div>
      <Headerlayout title={"Top Character"}  />
      <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {data.data?.map(data => {
      return ( 
        <div key={data.mal_id} className="shadow-xl">
          <CardCharacter title={data.name} images = {data.images.jpg.image_url} id={data.mal_id}/>
        </div>
      )
    })}
      </div>
      <Pagination page={page} setPage={setPage} lastPage={data.pagination?.last_visible_page}/>
    </div>
  )
}
