'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"
import jsPDF from "jspdf"
import 'jspdf-autotable'

// Sample data for the table
const contributions = [
  {no:"1", type: "Cash", description: "Monthly donation", amount: 400.00 },
  {no:"2", type: "Volunteer", description: "Community cleanup", amount: 500.54 },
  {no:"3", type: "Goods", description: "Clothing donation", amount: 480.54 },
  {no:"4", type: "Fundraising", description: "Charity run participation", amount: 4100.87 },
]

export default function ContributionTable() {

  const generatePDF = () => {
    const doc = new jsPDF()
    doc.text('Contribution History', 14, 15)
    // doc.text(`Total Amount Raised: $${totalAmountRaised.toFixed(2)}`, 14, 25)

    const tableColumn = ["No.", "Type", "Description", "Amount"]
    const tableRows = contributions.map(contribition => [
      contribition.no,
      contribition.type,
      contribition.description,
       `$${contribition.amount.toFixed(2)}`
    ])

    doc.autoTable({
      head: [tableColumn],
      startY: 30,
      body: tableRows,
      
    })

    doc.save('contribution_list.pdf')
  }

  const generateReceipt = (contribution) => {
    const doc = new jsPDF({
      format: 'a6',
      unit: 'mm'
    });
    
    // Set font
    doc.setFont('helvetica');
    
    // Add title
    doc.setFontSize(14);
    doc.text('Save the Community!', 10, 10);
    doc.setFontSize(12);
    doc.text('Transaction Receipt', 10, 15);
    
    // Add line
    doc.line(10, 17, 138, 17);
    
    // Add donor information
    doc.setFontSize(10);
    
    // DONOR label (bold)
    doc.setFont('helvetica', 'bold');
    doc.text('DONOR', 10, 25);
    doc.setFont('helvetica', 'normal');
    doc.text('John Doe', 10, 30);
    doc.text('123 Main St', 10, 35);
    doc.text('Anytown, ST 12345', 10, 40);
    
    // PHONE label (bold)
    doc.setFont('helvetica', 'bold');
    doc.text('PHONE', 10, 47);
    doc.setFont('helvetica', 'normal');
    doc.text('123-456-7890', 10, 52);
    
    // EMAIL label (bold)
    doc.setFont('helvetica', 'bold');
    doc.text('EMAIL', 10, 59);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 255);
    doc.text('johndoe@example.com', 10, 64);
    doc.setTextColor(0, 0, 0);
    
    // Transaction details with bold labels
    doc.setFont('helvetica', 'bold');
    doc.text('AMOUNT', 80, 25);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    
    // Underline the amount
    doc.text(`$${contribution.amount.toFixed(2)}`, 80, 31);
    const amountWidth = doc.getTextWidth(`$${contribution.amount.toFixed(2)}`);
    doc.line(80, 32, 80 + amountWidth, 32);
    
    doc.setFontSize(10);
    
    // Other details with bold labels
    doc.setFont('helvetica', 'bold');
    doc.text('DATE', 80, 38);
    doc.setFont('helvetica', 'normal');
    doc.text(new Date().toLocaleDateString(), 80, 43);
    
    doc.setFont('helvetica', 'bold');
    doc.text('TYPE', 80, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(contribution.type, 80, 55);
    
    doc.setFont('helvetica', 'bold');
    doc.text('DESCRIPTION', 80, 62);
    doc.setFont('helvetica', 'normal');
    doc.text(contribution.description, 80, 67, { maxWidth: 58 });
    
    // Add footer
    doc.setFontSize(8);
    doc.text('Thank you for your contribution!', 74, 90, { align: 'center' });
    
    // Save the PDF
    doc.save(`contribution_receipt_${contribution.no}.pdf`);
  };


  

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="text-2xl font-bold ">Contribution History</div>
        <Button
        variant="outline"
        className="bg-blue-950 text-white hover:bg-blue-900 hover:text-white"
        onClick={generatePDF}        
        >
          <Download className="mr-2  h-4 w-4" />
          Download All
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>                       
            <TableHead>Amount</TableHead>
            <TableHead>View</TableHead> 
            <TableHead>Download</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contributions.map((contribution, index) => (
            <TableRow key={index}>
              <TableCell>{contribution.type}</TableCell>                         
              <TableCell>{contribution.amount}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon"
                onClick={()=> generateReceipt(contribution)}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}