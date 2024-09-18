'use client'

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, UsersIcon, ClockIcon, SearchIcon } from "lucide-react"
import { CreateContribution } from "@/components/forms/Contributions"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const fundraisers = [
  {
    name: "School Fees",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    purpose: "This fundraiser is meant for the son of David in plans to join University",
    startDate: "May 1, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    purpose: "This fundraiser is meant for medical treatment of cancer patients",
    startDate: "May 1, 2023"
  },
  {
    name: "Burial Plans",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    purpose: "This fundraiser is to support the family for funeral expenses",
    startDate: "May 1, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    purpose: "This fundraiser is for heart surgery expenses",
    startDate: "May 1, 2023"
  },
  {
    name: "Burial Plans",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    purpose: "This fundraiser is to cover burial costs for Karani Amos",
    startDate: "May 1, 2023"
  },
  {
    name: "Others",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    purpose: "This fundraiser is to purchase tents for community events",
    startDate: "May 1, 2023"
  },
  {
    name: "Medical Aid",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    purpose: "This fundraiser is for a child's emergency medical treatment",
    startDate: "May 1, 2023"
  },
  {
    name: "Burial Plans",
    amountRaised: 7000,
    goalAmount: 10000,
    donors: 125,
    daysLeft: 15,
    purpose: "This fundraiser is to support a family who lost their breadwinner",
    startDate: "May 1, 2023"
  },
];

const CARDS_PER_PAGE = 6;

export default function Component() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedName, setSelectedName] = useState("all");

  const filteredFundraisers = useMemo(() => {
    return fundraisers.filter(fundraiser => 
      fundraiser.purpose.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedName === "all" || fundraiser.name === selectedName)
    );
  }, [searchTerm, selectedName]);

  const indexOfLastCard = currentPage * CARDS_PER_PAGE;
  const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
  const currentCards = filteredFundraisers.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredFundraisers.length / CARDS_PER_PAGE);

  const uniqueNames = Array.from(new Set(fundraisers.map(f => f.name)));

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Running Contributions</h1>
        <CreateContribution />
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search by purpose..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Select value={selectedName} onValueChange={setSelectedName}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {uniqueNames.map((name) => (
              <SelectItem key={name} value={name}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCards.map((fundraiser, index) => (
          <FundraiserCard key={index} fundraiser={fundraiser} />
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
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
  const { name, amountRaised, goalAmount, donors, daysLeft, purpose, startDate } = fundraiser;
  const progressPercentage = (amountRaised / goalAmount) * 100;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/dashboard/contributionlist" className="block">
      <div 
        className="relative rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-400 via-amber-700 to-red-700 transition-all duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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

          <Button className="w-full bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors">
            Donate Now
          </Button>
        </div>

        {isHovered && (
          <div className="absolute inset-0 bg-amber-950 bg-opacity-80 text-white p-6 flex flex-col justify-center space-y-4 transition-opacity duration-300">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span>Started on {startDate}</span>
            </div>
            <div className="flex items-center">
              <UsersIcon className="w-5 h-5 mr-2" />
              <span>{purpose}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 mr-2" />
              <span>{daysLeft} days left</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}