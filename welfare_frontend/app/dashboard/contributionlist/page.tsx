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
import { FileDown } from 'lucide-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

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
  { no: 13, fullName: "Liam Brown", memberNo: "M013", amountRaised: 3000.00 },
  { no: 14, fullName: "Mia Davis", memberNo: "M014", amountRaised: 950.25 },
  { no: 15, fullName: "Noah Wilson", memberNo: "M015", amountRaised: 2500.00 },
  { no: 16, fullName: "Olivia Miller", memberNo: "M016", amountRaised: 1750.50 },
  { no: 17, fullName: "Peter Lee", memberNo: "M017", amountRaised: 3200.75 },
  { no: 18, fullName: "Quinn Taylor", memberNo: "M018", amountRaised: 1100.00 },
  { no: 19, fullName: "Rachel Clark", memberNo: "M019", amountRaised: 2800.25 },
  { no: 20, fullName: "Samuel Robinson", memberNo: "M020", amountRaised: 1900.50 },
  
]

export default function ContributionPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredMembers, setFilteredMembers] = useState(allMembers)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [showPaymentForm, setShowPaymentForm] = useState(false)
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

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.text('Contribution List', 14, 15)
    doc.text(`Total Amount Raised: $${totalAmountRaised.toFixed(2)}`, 14, 25)

    const tableColumn = ["No.", "Full Name", "Member No.", "Amount"]
    const tableRows = allMembers.map(member => [
      member.no,
      member.fullName,
      member.memberNo,
      `$${member.amountRaised.toFixed(2)}`
    ])

    doc.autoTable({
      head: [tableColumn],
      startY: 30,
      body: tableRows,
      
    })

    doc.save('contribution_list.pdf')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the payment submission
    console.log(`Submitting payment: ${paymentMethod}, ${phoneNumber}, ${amount}`)
    // Reset form and close dialog
    setPaymentMethod('')
    setPhoneNumber('')
    setAmount('')
    setShowPaymentForm(false)
  }

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
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full sm:w-auto">Pay Now</Button>
              </DialogTrigger>
              <DialogContent className='bg-white text-black'>
                <DialogHeader>
                  <DialogTitle>Choose Payment Method</DialogTitle>
                  <DialogDescription>
                    Select your preferred payment method to continue.
                  </DialogDescription>
                </DialogHeader>
                {!showPaymentForm ? (
                  <div className="flex justify-center bg-white space-x-4 mt-4">
                    <Button onClick={() => { setPaymentMethod('M-Pesa'); setShowPaymentForm(true); }}>
                      M-Pesa
                    </Button>
                    <Button onClick={() => { setPaymentMethod('PayPal'); setShowPaymentForm(true); }}>
                      PayPal
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Submit Payment</Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
            <Button size="lg" className="w-full sm:w-auto" onClick={generatePDF}>
              <FileDown className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
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