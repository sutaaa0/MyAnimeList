"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const Page = () => {
    const router = useRouter();

  return (
    <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
        <div className='flex justify-center items-center gap-4 flex-col'>
            <h3>NOT FOUND</h3>
            <button onClick={() => router.back()} className='text-white '>
                Kembali
            </button>
        </div>
    </div>
  )
}

export default Page