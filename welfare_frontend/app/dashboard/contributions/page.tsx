// import React from 'react'

// const Contributions = () => {
//   return (
//     <div>
//      <div> Running Contributions</div>
//      <div className='grid grid-cols-3 p-4'>
//         <div className='bg-green-400'>
//             <div >School Fees</div>
//             <p>To make the image visible without adding content inside the div,
//                 you need to give the div some dimensions (width and height).
//                 Since an empty div doesn't have any
//                 intrinsic dimensions, setting the size will ensure the background </p>
//         </div>
//         <div>
//             <div>School Fees</div>
//             <p>To make the image visible without adding content inside the div,
//                 you need to give the div some dimensions (width and height).
//                 Since an empty div doesn't have any
//                 intrinsic dimensions, setting the size will ensure the background </p>
//         </div>
       

//      </div>
//     </div>
//   )
// }

// export default Contributions




'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, UsersIcon, ClockIcon } from "lucide-react"

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)
  const fundraiserName = "School Fees"
  const amountRaised = 7500
  const goalAmount = 10000
  const donors = 125
  const progressPercentage = (amountRaised / goalAmount) * 100

  // Additional details for the dropdown
  const daysLeft = 15
  const organizer = "John Doe"
  const startDate = "May 1, 2023"

  return (
    <div 
      className="max-w-md mx-auto relative mt-[10rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold text-white">{fundraiserName}</h2>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xl font-semibold text-white">Raised</span>
              <span className="text-2xl font-bold text-white">${amountRaised.toLocaleString()}</span>
            </div>
            <Progress value={progressPercentage} className="h-2 mb-2" />
            <div className="flex justify-between text-sm text-white">
              <span>{progressPercentage.toFixed(1)}% of ${goalAmount.toLocaleString()}</span>
              <span>{donors} donors</span>
            </div>
          </div>
          
          {/* Dropdown details */}
          <div 
            className={`absolute left-0 right-0 bg-white rounded-lg shadow-lg p-4 space-y-2 transition-all duration-300 ease-in-out ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
            style={{
              top: 'auto',
              bottom: '100%',
              marginBottom: '8px', // Space between dropdown and button
            }}
          >
            <div className="flex items-center text-gray-600">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>Started on {startDate}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <UsersIcon className="w-4 h-4 mr-2" />
              <span>Organized by {organizer}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>{daysLeft} days left</span>
            </div>
          </div>

          <Button className="w-full bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors">
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  )
}
