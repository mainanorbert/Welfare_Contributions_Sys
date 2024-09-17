import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Eye } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Sample data for the table
const fundraisingData = [
  { type: "School Fees", amountRaised: "$5000", description: "Fundraising for underprivileged students' education" },
  { type: "Sickness", amountRaised: "$7500", description: "Medical expenses for community members" },
  { type: "Death", amountRaised: "$3000", description: "Support for bereaved families" },
  { type: "School Fees", amountRaised: "$4000", description: "Scholarship fund for high-achieving students" },
  { type: "Sickness", amountRaised: "$6000", description: "Cancer treatment support" },
  { type: "Death", amountRaised: "$2500", description: "Funeral expenses assistance" },
  { type: "School Fees", amountRaised: "$3500", description: "School supplies for low-income families" },
  { type: "Sickness", amountRaised: "$5500", description: "Mental health support program" },
  { type: "Death", amountRaised: "$2000", description: "Memorial fund for community leader" },
  { type: "School Fees", amountRaised: "$4500", description: "After-school program funding" },
]

export default function FundraisingTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState("All")
  const itemsPerPage = 5

  const filteredData = filter === "All" 
    ? fundraisingData 
    : fundraisingData.filter(item => item.type === filter)

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredData.slice(startIndex, endIndex)

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="School Fees">School Fees</SelectItem>
            <SelectItem value="Sickness">Sickness</SelectItem>
            <SelectItem value="Death">Death</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Download All
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Amount Raised</TableHead>
            <TableHead>View</TableHead>
            <TableHead>Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.amountRaised}</TableCell>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4">
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
    </div>
  )
}