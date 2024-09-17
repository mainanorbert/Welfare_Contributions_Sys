'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navlist } from '@/components/constants/constants'
import { X } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const path = usePathname()

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
      <div className='mr-8'>
        <div className='h-10 gap-2 ml-4 py-2 mt-4'>
          <button onClick={onClose} className="lg:hidden absolute top-4 right-4 text-white">
            <X size={24} />
          </button>
          <div className="text-center bg-gray-400 py-3 px-2 w-4/12 rounded">
            <p>{'Norbert'.slice(0, 1).toUpperCase()}{'Osiemo'.slice(0, 1).toUpperCase()}</p>
          </div>
          <div className="grow mt-2">
            <p className="text-[16px] font-bold text-white">Norbert</p>
            <p className="text-[12px] text-neutral-500">mainanorbert@gmail.com</p>
          </div>

          {navlist.map((item) => (
            <div key={item.ref} className={`mt-8 text-gray-500 hover:text-white ${path === item.ref ? 'text-white' : ''}`}>
              <Link href={item.ref}>{item.name}</Link>
            </div>
          ))}

          <div className='mt-[12rem] text-gray-500 hover:text-white'>
            <Link href="#">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar