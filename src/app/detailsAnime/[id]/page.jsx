"use client"
import React from "react";
import { getAnimeRespons } from "../../lib/getAnimeRespons";
import Image from "next/image";
import VideoPlayers from "../../components/VideoPlayers/VideoPlayers"
import BtnBack from "../../topcharacter/BtnBack";

const Page = async ({ params: { id } }) => {
  const animeDetails = await getAnimeRespons(`anime/${id}`);

  return (
    <div className="py-2 px-5">
      <div className="text-center mt-16 flex py-2 justify-between text-2xl">
        <h3>{animeDetails.data.title}</h3>
        <div>
            <BtnBack />
        </div>
      </div>
      <div className="flex w-full lg:flex-row flex-col gap-x-3 lg:justify-between items-top">
        <div className="flex gap-x-3 justify-center lg:items-start items-center">
          <Image className="object-cover py-2 h-[400px] w-[300px]" src={animeDetails.data.images.jpg.image_url} alt={animeDetails.data.images.jpg.image_url} width={350} height={350} />
        </div>
        <div className="flex w-full lg:text-left text-center flex-col mb-1 flex-wrap">
          <div className="flex jutify-center lg:justify-start items-center gap-x-3">
            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white">
              Year : {animeDetails.data.year}
            </span>
            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white">
              Score : {animeDetails.data.score}
            </span>
            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white">
              Rank : {animeDetails.data.rank}
            </span>
            <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white">
              Episodes : {animeDetails.data.episodes}
            </span>
          </div>
          <p>{animeDetails.data.synopsis}</p>
          <div className="w-full my-3">
            <h3 className="text-center text-2xlp y-3">Trailer</h3>
            <VideoPlayers videoId={animeDetails.data.trailer.youtube_id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
