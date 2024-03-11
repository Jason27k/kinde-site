"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

const SearchComponent = () => {
  // LOAD CONTENT WHILE SEARCHING
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Search size={24} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>
              Hint: Want a more advanced search? Try the browser page.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Search
              </Label>
              <Input id="search" placeholder="Search Ani Sekai" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchComponent;
