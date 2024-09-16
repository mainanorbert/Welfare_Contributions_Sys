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

export function CreateContribution() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-amber-100 text- hover:bg-amber-200 ">Create Contribution</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-black">
        <DialogHeader>
          <DialogTitle>Add Contribution</DialogTitle>
          <DialogDescription>
           Once you create a contribution, it will be appear as a card in this page
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className=" gap-4">
            <Label htmlFor="name" className="text-right mb-1 font-bold">
              Type
            </Label>           
            <Input
              id="name"
              
              className="mt-1"
            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="name" className="text-right mb-1 font-bold">
              Target Amount
            </Label>           
            <Input
              id="name"
              type="number"
              className="mt-1"

            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="name" className="text-right mb-1 font-bold">
              Deadline
            </Label>           
            <Input
              id="name"
              type="Date"
              className="mt-1"

            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="name" className="text-right mb-1 font-bold">
              Description
            </Label>   
            <br />     
            <Textarea 
            maxLength={100}
            />   
            

          </div>
          
        </div>
        <DialogFooter>
          <Button type="submit">Add Contribution</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
