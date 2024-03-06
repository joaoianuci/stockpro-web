import Link from "next/link";
import { Input } from "@/app/components/ui/input";
import { LineChartIcon, SearchIcon } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";

export function Navbar() {
  return (
    <nav className="flex items-center h-14 px-4 border-b bg-white md:px-6 dark:bg-gray-950 gap-3 justify-between">
      <div className="flex items-center justify-center gap-2 w-full">
        <Link className="mr-4" href="#">
          <LineChartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          <span className="sr-only">StockPro</span>
        </Link>
        <div className="flex-1">
          <div className="relative">
            <SearchIcon className="absolute left-3 h-5 w-5 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8"
              placeholder="Search stocks, news, and more"
              type="search"
            />
          </div>
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
}
