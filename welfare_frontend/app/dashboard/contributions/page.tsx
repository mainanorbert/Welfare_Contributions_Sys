
'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, UsersIcon, ClockIcon } from "lucide-react"
import { CreateContribution } from "@/components/forms/Contributions"

const fundraisers = [
  {
    name: "School Fees",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    organizer: "This fundraiser is meant for the sone Of David in plan to join University",
    startDate: "May 1, 2023"
  },
  {
    name: "School Fees",
    amountRaised: 7500,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    organizer: "John Doe",
    startDate: "May 1, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 5000,
    goalAmount: 12000,
    donors: 85,
    daysLeft: 10,
    organizer: "Jane Smith",
    startDate: "April 20, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 5000,
    goalAmount: 12000,
    donors: 85,
    daysLeft: 10,
    organizer: "Jane Smith",
    startDate: "April 20, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 5000,
    goalAmount: 12000,
    donors: 85,
    daysLeft: 10,
    organizer: "Jane Smith",
    startDate: "April 20, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 5000,
    goalAmount: 12000,
    donors: 85,
    daysLeft: 10,
    organizer: "Jane Smith",
    startDate: "April 20, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 5000,
    goalAmount: 12000,
    donors: 85,
    daysLeft: 10,
    organizer: "Jane Smith",
    startDate: "April 20, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 5000,
    goalAmount: 12000,
    donors: 85,
    daysLeft: 10,
    organizer: "Jane Smith",
    startDate: "April 20, 2023"
  },
  // Add more as needed
];

const CARDS_PER_PAGE = 6;

export default function FundraiserPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the paginated data
  const indexOfLastCard = currentPage * CARDS_PER_PAGE;
  const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
  const currentCards = fundraisers.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(fundraisers.length / CARDS_PER_PAGE);

  return (
    <div className="relative h-screen ">
    <div className=" max-w-7xl mb-4 mx-auto px-4">
      <div className="flex justify-between mt-4 pr-[5rem]">
      <div className="text-2xl">Running Contributions</div>
      <div><CreateContribution/></div>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
        {currentCards.map((fundraiser, index) => (
          <FundraiserCard key={index} fundraiser={fundraiser} />
        ))}
      </div>

    
    </div>
      {/* Pagination Controls */}
      <div className="flex justify-end absolute right-5 bottom-0 space-x-4">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </Button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

function FundraiserCard({ fundraiser }) {
  const { name, amountRaised, goalAmount, donors, daysLeft, organizer, startDate } = fundraiser;
  const progressPercentage = (amountRaised / goalAmount) * 100;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative mt-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay for page fade effect */}
      {isHovered && (
        <div className="fixed inset-0   z-10 pointer-events-none" />
      )}

      <div
        className={`rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-400 via-amber-700 to-red-700 relative transition-transform duration-300 ${
          isHovered ? "transform scale-95" : ""
        }`}
        style={{ maxWidth: '280px' }} 
      >
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold text-white">{name}</h2>
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

          {/* Donate Now button */}
          <Button className="w-full bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors">
            Donate Now
          </Button>
        </div>

        {/* Dropdown Details */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white rounded-lg shadow-lg p-4 space-y-2 transition-all duration-300 ease-in-out z-20 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
          style={{ marginTop: '8px' }} // Space between dropdown and button
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
      </div>
    </div>
  );
}
