'use client'

import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

const allMembers = [
  { no: 1, fullName: "John Doe", memberNo: "M001", amountRaised: 1500.00 },
  { no: 2, fullName: "Jane Smith", memberNo: "M002", amountRaised: 2200.50 },
  { no: 3, fullName: "Bob Johnson", memberNo: "M003", amountRaised: 1800.75 },
  { no: 4, fullName: "Alice Brown", memberNo: "M004", amountRaised: 3000.00 },
  { no: 5, fullName: "Charlie Davis", memberNo: "M005", amountRaised: 950.25 },
  { no: 6, fullName: "Eva Wilson", memberNo: "M006", amountRaised: 2500.00 },
  { no: 7, fullName: "Frank Miller", memberNo: "M007", amountRaised: 1750.50 },
  { no: 8, fullName: "Grace Lee", memberNo: "M008", amountRaised: 3200.75 },
  { no: 9, fullName: "Henry Taylor", memberNo: "M009", amountRaised: 1100.00 },
  { no: 10, fullName: "Ivy Clark", memberNo: "M010", amountRaised: 2800.25 },
  { no: 11, fullName: "Jack Robinson", memberNo: "M011", amountRaised: 1900.50 },
  { no: 12, fullName: "Karen White", memberNo: "M012", amountRaised: 2600.75 },
  { no: 4, fullName: "Alice Brown", memberNo: "M004", amountRaised: 3000.00 },
  { no: 5, fullName: "Charlie Davis", memberNo: "M005", amountRaised: 950.25 },
  { no: 6, fullName: "Eva Wilson", memberNo: "M006", amountRaised: 2500.00 },
  { no: 7, fullName: "Frank Miller", memberNo: "M007", amountRaised: 1750.50 },
  { no: 8, fullName: "Grace Lee", memberNo: "M008", amountRaised: 3200.75 },
  { no: 9, fullName: "Henry Taylor", memberNo: "M009", amountRaised: 1100.00 },
  { no: 10, fullName: "Ivy Clark", memberNo: "M010", amountRaised: 2800.25 },
  { no: 11, fullName: "Jack Robinson", memberNo: "M011", amountRaised: 1900.50 },
  { no: 12, fullName: "Karen White", memberNo: "M012", amountRaised: 2600.75 },
  { no: 4, fullName: "Alice Brown", memberNo: "M004", amountRaised: 3000.00 },
  { no: 5, fullName: "Charlie Davis", memberNo: "M005", amountRaised: 950.25 },
  { no: 6, fullName: "Eva Wilson", memberNo: "M006", amountRaised: 2500.00 },
  { no: 7, fullName: "Frank Miller", memberNo: "M007", amountRaised: 1750.50 },
  { no: 8, fullName: "Grace Lee", memberNo: "M008", amountRaised: 3200.75 },
  { no: 9, fullName: "Henry Taylor", memberNo: "M009", amountRaised: 1100.00 },
  { no: 10, fullName: "Ivy Clark", memberNo: "M010", amountRaised: 2800.25 },
  { no: 11, fullName: "Jack Robinson", memberNo: "M011", amountRaised: 1900.50 },
  { no: 12, fullName: "Karen White", memberNo: "M012", amountRaised: 2600.75 },
]

export default function ContributionPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredMembers, setFilteredMembers] = useState(allMembers)
  const membersPerPage = 20

  useEffect(() => {
    const results = allMembers.filter(member =>
      member.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredMembers(results)
    setCurrentPage(1)
  }, [searchTerm])

  const totalAmountRaised = allMembers.reduce((total, member) => total + member.amountRaised, 0)
  const targetAmount = 15000
  const progressPercentage = (totalAmountRaised / targetAmount) * 100

  const indexOfLastMember = currentPage * membersPerPage
  const indexOfFirstMember = indexOfLastMember - membersPerPage
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember)

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-4 flex-grow">
            <h1 className="text-2xl font-bold">Contribution: School Fees</h1>
            <p className="text-muted-foreground">
              The font sizes for the main text and button labels are scaled down on smaller screens. 
              The font sizes for the main text and button labels are scaled down on smaller screens with...
            </p>
            <div className="flex items-center gap-4">
              <Progress value={progressPercentage} className="w-full" />
              <span className="text-sm font-medium">{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Raised</p>
                <p className="text-xl font-bold">${totalAmountRaised.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Target</p>
                <p className="text-xl font-bold">${targetAmount.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <Button size="lg" className="w-full md:w-auto">Pay Now</Button>
        </div>
      </Card>

      <Card className="w-full overflow-hidden">
        <div className="p-4">
          <Input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
        </div>
        <Table>
          <TableCaption>Fundraising Summary for Current Campaign</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] font-bold">No.</TableHead>
              <TableHead className="font-bold">Full Name</TableHead>
              <TableHead className="font-bold">Member No.</TableHead>
              <TableHead className="text-right font-bold">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentMembers.map((member) => (
              <TableRow key={member.memberNo}>
                <TableCell>{member.no}</TableCell>
                <TableCell className="font-medium">{member.fullName}</TableCell>
                <TableCell>{member.memberNo}</TableCell>
                <TableCell className="text-right">${member.amountRaised.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-primary/5">
              <TableCell colSpan={3} className="font-bold">Total Amount Raised</TableCell>
              <TableCell className="text-right font-bold">${totalAmountRaised.toFixed(2)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <div className="flex justify-between items-center p-4">
          <Button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span>Page {currentPage} of {totalPages}</span>
          <Button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  )
}