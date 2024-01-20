"use client"
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';


export default function Search() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const ref = useRef()

  const handleSearch = (event) => {
    const keyword = ref.current.value;
    if(!keyword) return;
    if(event.key === "Enter" || event.type === "click") {
      setLoading(true)
      event.preventDefault();
      router.push(`/search/${keyword}`)
    }
  } 

  return (
    <div className='relative'>
      <div>
        <input type="text" onKeyDown={handleSearch} className="py-3 h-[65px] w-[350px] sm:w-[600px] lg:w-[1000px] px-5 block text-black border-gray-200 rounded-full text-sm lg:text-lg md:text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Cari Anime..." ref={ref} ></input>
        <button className='absolute top-4 end-5' onClick={handleSearch}>
          <MagnifyingGlass size={32}  />
        </button>
      </div>   
    </div>
  )
}