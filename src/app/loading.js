import React from 'react'

const loading = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-black border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
    <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
      <div className="flex justify-center">
        <div className="animate-spin inline-block w-[70px] h-[70px] border-[3px] border-current border-t-transparent text-white rounded-full dark:text-blue-500" role="status" aria-label="loading">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default loading