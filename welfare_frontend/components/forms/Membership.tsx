import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AddMember() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-blue-900 text-white hover:text-white hover:bg-blue-950">Add Member</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-black">
        <DialogHeader>
          <DialogTitle>Add Member</DialogTitle>
          <DialogDescription>
           Once you add a member, member details will be appear in the table of page
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className=" gap-4">
            <Label htmlFor="name" className="text-right mb-1 font-bold">
              First Name
            </Label>           
            <Input
              id="name"
              
              className="mt-1"
            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="name" className="text-right mb-1 font-bold">
              Last Name
            </Label>           
            <Input
              id="name"
              
              className="mt-1"
            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="name" className="text-right mb-1 font-bold">
            Member No.
            </Label>           
            <Input
              id="name"
              type="number"
              className="mt-1"

            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="name" className="text-right mb-1 font-bold">
              Status
            </Label>           
            <Input
              id="name"
              type="text"
              className="mt-1"

            />
          </div>
       
          
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
