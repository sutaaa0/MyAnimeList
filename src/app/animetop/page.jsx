"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cardtes from "../components/AnimeList/CardTes";
import Pagination from "../components/Pagination/Pagination";
import { getAnimeRespons } from "../lib/getAnimeRespons";
import Btnback from "../topcharacter/Btnback";
const AnimeTop = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fectData();
    setLoading(false);
  }, [page]);

  const Loading = () => {
    <Loading />;
  };

  const fectData = async () => {
    const animeTop = await getAnimeRespons("top/anime", `page=${page}`);

    setData(animeTop);
  };

  return (
    <div>
      <div className="w-full h-[70px]"></div>
      <Header title={"Top Anime halaman"} page={page} />
      <div className="w-full flex justify-end px-3">
        <Btnback />
      </div>
      <div className="grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-3">
        {data.data?.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl ">
              <Cardtes title={data.title} episodes={data.episodes} type={data.type} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          );
        })}
      </div>
      {loading ? Loading() : <Pagination page={page} setPage={setPage} lastPage={data.pagination?.last_visible_page} />}
    </div>
  );
};

export default AnimeTop;
