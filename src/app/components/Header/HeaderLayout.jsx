import Link from 'next/link'
import React from 'react'

export default function Headerlayout({title, linkTitle}) {
  return (
    <div className="p-4 flex justify-between items-center" >
      { title || linkTitle ?<div className='flex w-full items-center justify-between'>
          <h1 className="lg:text-2xl  text-xl font-bold">{title}</h1>
          <Link href="/animetop" className="md:text-md text-sm
          underline hover:text-indigo-500 transition-all">{linkTitle}</Link>
      </div>
      : null
    }
    </div>
  )
}
