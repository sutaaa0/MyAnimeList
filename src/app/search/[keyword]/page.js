"use client"

import Headerlayout from "../../components/Header/HeaderLayout"
import {getAnimeRespons} from "../../lib/getAnimeRespons"
import TopAnime from "../../topanime/page"


const Page = async ({params}) => {
  const {keyword} = params;
  const decode = decodeURI(keyword)

  // const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decode}`)
  // const searchAnime = await response.json()

 const searchAnime = await getAnimeRespons("anime", `q=${decode}`)

  return(
    <div className="w-full h-auto">
      <Headerlayout title={`Search For ${decode}`} />
      <TopAnime api={searchAnime} />
    </div>
  )
}

export default Page