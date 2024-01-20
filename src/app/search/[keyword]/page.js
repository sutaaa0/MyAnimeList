import Headerlayout from "../../components/Header/HeaderLayout"
import { getAnimeRespons } from "../../lib/getAnimeRespons"
import SearchAnime from "../../animesearch/page"


const Page = async ({params}) => {
  const {keyword} = params;

  const decode = decodeURI(keyword)
  const searchAnime = await getAnimeRespons("anime", `q=${decode}`)

  return(
    <div className="w-full h-auto">
      <Headerlayout title={`Search For ${decode}`} />
      <SearchAnime api={searchAnime} />
    </div>
  )
}

export default Page