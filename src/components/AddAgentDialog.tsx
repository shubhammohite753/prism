import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../shared/dialog";
import { Button } from "../shared/button";

export default function AddAgentDialog() {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    // Handle saving logic here (e.g., API call or form validation)
    console.log("Agent saved!");
    setOpen(false); // Close the dialog after saving
  };

  const handleCancel = () => {
    console.log("Modal closed without saving.");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex justify-center">
        <DialogTrigger asChild>
          <Button variant="outline" className="w-28 h-10">
            + Add
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">
            Add Agent
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 text-sm text-gray-600">
          {/* Future form input(s) */}
          This is where your Add Agent form will go.
        </div>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSave} className="bg-[#7F56D9] text-white hover:bg-[#6e49c2]">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
