"use client"
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';


export default function SearchBar() {
  const router = useRouter()
  const ref = useRef()

  const handleSearch = (event) => {
    const keyword = ref.current.value;
    if(!keyword) return;
    if(event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`)
    }
  } 

  return (
    <div className='relative'>
      <div>
        <input type="text" onKeyDown={handleSearch} className="py-2 h-[40px] w-[100px] sm:w-[200px] px-3 block text-black border-gray-200 rounded-full text-xs lg:text-sm md:text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Cari Anime..." ref={ref} ></input>
        <button className='absolute top-1 end-2' onClick={handleSearch}>
          <MagnifyingGlass size={32}  />
        </button>
      </div>   
    </div>
  )
}