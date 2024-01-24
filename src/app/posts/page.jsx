import React from 'react'

const PostsPage = () => {
  return (
    <nav className='flex items-center justify-center max-w-screen-xl mx-auto mt-16 bg-red-400 lg:px-10 gap-x-3'>
      <h1 className='max-w-56 font-bold bg-blue-800 text-end lg:text-3xl md:text-[23px]'>Telusuri di</h1>
      <ul className='flex items-center justify-around bg-green-700'>
        <li className=' py-3 md:py-2 text-[22px] font-semibold rounded-lg md:px-7 lg:px-9 xl:px-14 md:text-[18px] text-primary bg-tertiary drop-shadow'>
          <a href="">Semua</a>
        </li>
        <li className=' py-3 md:py-2 text-[22px] font-semibold rounded-lg md:px-7 lg:px-9 xl:px-14 md:text-[18px] text-gray-400 '>
          <a href="">Project</a>
        </li>
        <li className=' py-3 md:py-2 text-[22px] font-semibold rounded-lg md:px-7 lg:px-9 xl:px-14 md:text-[18px] text-gray-400 '>
          <a href="">Lomba</a>
        </li>
        <li className=' py-3 md:py-2 text-[22px] font-semibold rounded-lg md:px-7 lg:px-9 xl:px-14 md:text-[18px] text-gray-400 '>
          <a href="">Organisasi</a>
        </li>
        <li className=' py-3 md:py-2 text-[22px] font-semibold rounded-lg md:px-7 lg:px-9 xl:px-14 md:text-[18px] text-gray-400 '>
          <a href="">Lainnya</a>
        </li>
      </ul>
    </nav>
  )
}

export default PostsPage