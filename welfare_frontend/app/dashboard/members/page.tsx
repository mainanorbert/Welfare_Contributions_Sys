'use client'
import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { AddMember } from '@/components/forms/Membership'

const members = [
  { firstName: "John", lastName: "Doe", memberNo: "M001", status: "Active" },
  { firstName: "Jane", lastName: "Smith", memberNo: "M002", status: "Inactive" },
  { firstName: "Alice", lastName: "Johnson", memberNo: "M003", status: "Active" },
  { firstName: "Bob", lastName: "Brown", memberNo: "M004", status: "Active" },
  { firstName: "Charlie", lastName: "Davis", memberNo: "M005", status: "Inactive" },
  { firstName: "David", lastName: "Wilson", memberNo: "M006", status: "Active" },
  { firstName: "Eva", lastName: "Taylor", memberNo: "M007", status: "Active" },
  { firstName: "Frank", lastName: "Anderson", memberNo: "M008", status: "Inactive" },
  { firstName: "Grace", lastName: "Martinez", memberNo: "M009", status: "Active" },
  { firstName: "Henry", lastName: "Thomas", memberNo: "M010", status: "Active" },
  { firstName: "Ivy", lastName: "Clark", memberNo: "M011", status: "Inactive" },
  { firstName: "Jack", lastName: "Rodriguez", memberNo: "M012", status: "Active" },
]

export default function MemberList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')  // New state for filtering by status
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredMembers, setFilteredMembers] = useState(members)
  const membersPerPage = 5

  // Update filtering logic
  useEffect(() => {
    let results = members.filter(member =>
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    if (statusFilter !== 'All') {
      results = results.filter(member => member.status === statusFilter)
    }
    setFilteredMembers(results)
    setCurrentPage(1)
  }, [searchTerm, statusFilter])

  const handleView = (memberNo: string) => {
    console.log(`Viewing member ${memberNo}`)
    // Implement view logic here
  }

  const handleEdit = (memberNo: string) => {
    console.log(`Editing member ${memberNo}`)
    // Implement edit logic here
  }

  const handleDelete = (memberNo: string) => {
    console.log(`Deleting member ${memberNo}`)
    // Implement delete logic here
  }

  const indexOfLastMember = currentPage * membersPerPage
  const indexOfFirstMember = indexOfLastMember - membersPerPage
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember)

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex justify-between items-center mb-4'>
        <div className="text-2xl font-bold">Member List</div>
        <div><AddMember /></div>
      </div>
      <div className="mb-4 flex space-x-4">
        <Input
          type="text"
          placeholder="Search by first name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <Table>
        <TableCaption>A list of all members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Member No.</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentMembers.map((member) => (
            <TableRow key={member.memberNo}>
              <TableCell>{member.firstName}</TableCell>
              <TableCell>{member.lastName}</TableCell>
              <TableCell>{member.memberNo}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  member.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'
                }`}>
                  {member.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => handleView(member.memberNo)}>
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleEdit(member.memberNo)}>
                  <Pencil className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDelete(member.memberNo)}>
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
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
