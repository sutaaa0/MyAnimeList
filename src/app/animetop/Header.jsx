import React from 'react'

const Header = ({title, page}) => {
  return (
    <div className='flex justify-center h-[60px] items-center'>
        <div className='flex gap-x-2 text-2xl'>
            <h1>{title}</h1>
            <h1> # {page}</h1>
        </div>
    </div>
  )
}

export default Header 