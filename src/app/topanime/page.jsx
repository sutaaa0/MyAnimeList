import React from "react";
import CardTes from "../components/AnimeList/CardTes";
import { getAnimeRespons } from "../lib/getAnimeRespons";

export default async function TopAnime () {
  const topAnime = await getAnimeRespons("top/anime", "limit=8");

  return (
    <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-3">
      {topAnime.data?.map((data) => {
        return (
          <div key={data.mal_id} className="shadow-xl ">
            <CardTes title={data.title} episodes={data.episodes} type={data.type} images={data.images.webp.image_url} id={data.mal_id} />
          </div>
        );
      })}
    </div>
  );
}

