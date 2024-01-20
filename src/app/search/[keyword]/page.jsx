import Cardtes from "../../components/AnimeList/CardTes";
import Headerlayout from "../../components/Header/HeaderLayout"
import { getAnimeRespons } from "../../lib/getAnimeRespons"


const Page = async ({params}) => {
  const {keyword} = params;

  const decode = decodeURI(keyword)
  const searchAnime = await getAnimeRespons("anime", `q=${decode}`)

  return(
    <div className="w-full h-auto">
      <Headerlayout title={`Search For ${decode}`} />
      <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-3">
      {searchAnime.data?.map((data) => {
        return (
          <div key={data.mal_id} className="shadow-xl ">
            <Cardtes title={data.title} episodes={data.episodes} type={data.type} images={data.images.webp.image_url} id={data.mal_id} />
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Page