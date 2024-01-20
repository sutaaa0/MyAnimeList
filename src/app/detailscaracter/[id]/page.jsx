"use client"
import React from "react";
import { getAnimeRespons } from "../../lib/getAnimeRespons";
import Image from "next/image";
import BtnBack from "../../topcharacter/BtnBack"
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const characterDetails = await getAnimeRespons(`characters/${id}/full`);

  return (
    <div className="py-2 px-5 w-full">
        <div className="w-full h-[20px]"></div>
      <div className="text-center flex justify-between mt-12 py-2 text-2xl">
        <h3>{characterDetails.data.name}</h3>
        <div>
            <BtnBack />
        </div>
      </div>
      <div className="flex w-full lg:flex-row flex-col gap-x-3 lg:justify-between items-top">
        <div className="flex gap-x-3 justify-center lg:items-start items-center">
          <Image className="object-cover py-2 h-[400px] w-[300px]" src={characterDetails.data.images.jpg.image_url} alt={characterDetails.data.images.jpg.image_url} width={350} height={350} />
        </div>
        <div className="flex w-full lg:text-left text-center flex-col mb-1 flex-wrap">
          <div className="flex jutify-center lg:justify-start sm:py-0 gap-y-2 items-center flex-wrap gap-x-3">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-base sm:text-base font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white w-full ">
            Name Kanji :{characterDetails.data.name_kanji}
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-base sm:text-base font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white w-full">
              Nicknames :{characterDetails.data.nicknames}
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-base sm:text-base font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white w-full">
              favorites :{characterDetails.data.favorites}
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white w-full">
              URL : <Link className="text-blue-500 text-base underline" href={`${characterDetails.data.url}`}>Read More</Link>
            </span>
          </div>
          <div className="w-full">
            <div className="text-center">
                <h3 className="text-2xl py-2 font-bold">About</h3>
            </div>
            <p>{characterDetails.data.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
