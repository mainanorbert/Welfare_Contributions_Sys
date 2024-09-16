'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navlist } from '../../components/constants/constants'
const Sidebar = () => {
  const path = usePathname()

  return (
    <div className='bg-black'>
    <div className='mr-8'>
    <div
          className=' h-10 gap-2 ml-4 py-2 mt-4'
        >
          <div className=" text-center bg-gray-400 py-3 px-2 w-4/12 rounded">
            <p>{'Norbert'.slice(0, 1).toUpperCase()}{'Osiemo'.slice(0, 1).toUpperCase()}</p>
          </div>
          <div className="grow">
            <p className="text-[16px] font-bold">Norbert</p>
            <p className="text-[12px] text-neutral-500">mainanorbert@gmail.com</p>
          </div>

          {navlist.map((item)=>(
            <div className={`mt-8 text-gray-500 hover:text-white ${path === item.ref? 'text-white':''}`}>
            <Link href={item.ref}>{item.name}</Link>
          </div>
          ))}

          <div className='mt-[14rem] text-gray-500 hover:text-white'>
            <Link href="#">Logout</Link>
          </div>


        </div>
        
    </div>
    </div>
  )
}

export default Sidebar
