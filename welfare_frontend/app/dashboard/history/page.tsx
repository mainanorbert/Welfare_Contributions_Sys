import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

// Sample data for the table
const contributions = [
  { type: "Cash", description: "Monthly donation", amount: "$100.00" },
  { type: "Volunteer", description: "Community cleanup", amount: "5 hours" },
  { type: "Goods", description: "Clothing donation", amount: "Estimated $200 value" },
  { type: "Fundraising", description: "Charity run participation", amount: "$500.00" },
]

export default function ContributionTable() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="text-2xl font-bold ">Contribution History</div>
        <Button variant="outline" className="bg-blue-950 text-white hover:bg-blue-900 hover:text-white">
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
                <Button variant="ghost" size="icon">
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