import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
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
          <div className='mt-8 text-gray-500 hover:text-white'>
            <Link href="/dashboard/contributions">Contributions</Link>
          </div>
          <div className='mt-4 text-gray-500 hover:text-white'>
            <Link href="/dashboard/members">Membership</Link>
          </div>
          <div className='mt-4 text-gray-500 hover:text-white'>
            <Link href="#">History</Link>
          </div>
          <div className='mt-4 text-gray-500 hover:text-white'>
            <Link href="#">Accounting</Link>
          </div>

          <div className='mt-[18rem] text-gray-500 hover:text-white'>
            <Link href="#">Logout</Link>
          </div>


        </div>
        
    </div>
    </div>
  )
}

export default Sidebar
