import { DownloadCloudIcon, PlusIcon } from "lucide-react";
import { Button } from "../shared/button";

export default function Header() {
  return (
    <div className="flex flex-row justify-between sm:items-center gap-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold">Sales overview</h1>
        <h5 className="text-sm text-muted-foreground">
          Your current sales summary and activity
        </h5>
      </div>
      {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 cursor-pointer"
        >
          <DownloadCloudIcon className="w-4 h-4" />
          <span>Export report</span>
        </Button>
        <Button className="text-white flex items-center gap-2 hover:bg-purple-700 cursor-pointer bg-[#7F56D9]">
          <PlusIcon className="w-4 h-4" />
          <span>Invite</span>
        </Button>
      </div> */}
      <div className="flex flex-row sm:flex-row gap-2 sm:gap-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 cursor-pointer"
        >
          <DownloadCloudIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Export report</span>
        </Button>
        <Button className="text-white flex items-center gap-2 hover:bg-purple-700 cursor-pointer">
          <PlusIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Invite</span>
        </Button>
      </div>
    </div>
  );
}
