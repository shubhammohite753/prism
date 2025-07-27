import {
  Calendar as CalendarIcon,
  ListFilter,
  Plus,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../shared/button";
import { Calendar } from "../shared/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../shared/popover";
import { Tabs, TabsList, TabsTrigger } from "../shared/tabs";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { ChevronDown } from "lucide-react";
const statusOptions = ["Active", "Inactive"];

export default function FilterBar() {
  const [tab, setTab] = useState<string>("default");
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    date: { from: undefined, to: undefined },
  });
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 6, 20),
    to: new Date(2025, 6, 30),
  });

  const nextMonth = new Date(date?.from ?? new Date());
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  const handleSelect = (range: DateRange | undefined) => {
    setDate(range);
  };

  const formatRange = () => {
    if (!date?.from || !date?.to) return "Pick a date";
    return `${format(date.from, "LLL dd, y")} - ${format(
      date.to,
      "LLL dd, y"
    )}`;
  };

  const getDateRange = (label: string): DateRange => {
    const now = new Date();
    const today = new Date(now);
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);

    switch (label) {
      case "Today":
        return { from: today, to: today };
      case "Yesterday":
        return { from: yesterday, to: yesterday };
      case "This week": {
        const start = new Date(now);
        start.setDate(now.getDate() - now.getDay());
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return { from: start, to: end };
      }
      case "Last week": {
        const start = new Date(now);
        start.setDate(now.getDate() - now.getDay() - 7);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        return { from: start, to: end };
      }
      case "This month": {
        const start = new Date(now.getFullYear(), now.getMonth(), 1);
        const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        return { from: start, to: end };
      }
      case "Last month": {
        const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const end = new Date(now.getFullYear(), now.getMonth(), 0);
        return { from: start, to: end };
      }
      case "This year": {
        const start = new Date(now.getFullYear(), 0, 1);
        const end = new Date(now.getFullYear(), 11, 31);
        return { from: start, to: end };
      }
      case "Last year": {
        const start = new Date(now.getFullYear() - 1, 0, 1);
        const end = new Date(now.getFullYear() - 1, 11, 31);
        return { from: start, to: end };
      }
      case "All time": {
        return { from: new Date(2000, 0, 1), to: now };
      }
      default:
        return { from: today, to: today };
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, status: e.target.value });
  };

  const handleApply = () => {
    console.log("Applied filters:", filters);
    setOpen(false);
  };

  const handleClear = () => {
    setFilters({
      search: "",
      status: "",
      date: { from: undefined, to: undefined },
    });
    setOpen(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 w-full">
      {/* Tabs */}
      <Tabs
        value={tab}
        onValueChange={setTab}
        className="w-auto shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs),0px_-2px_0px_0px_#0A0D120D_inset,0px_0px_0px_1px_#0A0D122E_inset]"
      >
        <TabsList className="border border-input shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-800 rounded-lg overflow-hidden p-0 h-9 w-full max-w-[348px] min-w-[300px] sm:min-w-[300px]">
          <TabsTrigger
            value="default"
            className="rounded-none border-r border-input dark:border-zinc-800 h-10 px-4 font-medium cursor-pointer
            data-[state=active]:bg-[#FAFAFA] dark:data-[state=active]:bg-zinc-900
            data-[state=active]:text-foreground dark:data-[state=active]:text-white
            data-[state=active]:shadow-none
            hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <span className="relative flex items-center justify-center gap-1">
              {tab === "default" && (
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              )}
              Default
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="saved"
            className="rounded-none border-r border-input dark:border-zinc-800 h-10 px-4 font-medium cursor-pointer
            data-[state=active]:bg-[#FAFAFA] dark:data-[state=active]:bg-zinc-900
            data-[state=active]:text-foreground dark:data-[state=active]:text-white
            data-[state=active]:shadow-none
            hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <span className="relative flex items-center gap-1 justify-center">
              {tab === "saved" && (
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              )}
              Saved view
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="sdr"
            className="rounded-none h-10 px-4 font-medium cursor-pointer
            data-[state=active]:bg-[#FAFAFA] dark:data-[state=active]:bg-zinc-900
            data-[state=active]:text-foreground dark:data-[state=active]:text-white
            data-[state=active]:shadow-none
            hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <span className="relative flex items-center justify-center gap-1">
              {tab === "sdr" && (
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
              )}
              SDR view
            </span>
          </TabsTrigger>

          <Button
            size="icon"
            variant="ghost"
            className="rounded-none h-10 px-3 border-l border-input dark:border-zinc-800 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </TabsList>
      </Tabs>

      {/* Date range and filter */}
      <div className="flex gap-2 flex-wrap shadow-[0px_1px_2px_0px_var(--ColorsEffectsShadowsshadow-xs),0px_-2px_0px_0px_#0A0D120D_inset,0px_0px_0px_1px_#0A0D122E_inset]">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="sm:w-[220px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formatRange()}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[90vw] max-w-[95vw] sm:max-w-[700px] p-4 rounded-2xl shadow-2xl bg-white dark:bg-zinc-900 dark:text-white">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Sidebar */}
              <div className="sm:w-[160px] flex flex-col gap-1 text-sm">
                {[
                  "Today",
                  "Yesterday",
                  "This week",
                  "Last week",
                  "This month",
                  "Last month",
                  "This year",
                  "Last year",
                  "All time",
                ].map((label) => (
                  <button
                    key={label}
                    onClick={() => setDate(getDateRange(label))}
                    className="px-3 py-2 text-left rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800"
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Calendars */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={handleSelect}
                  defaultMonth={date?.from}
                  numberOfMonths={1}
                  className="rounded-lg border shadow-sm sm:flex-1 custom-calendar dark:border-zinc-800 dark:bg-zinc-900"
                />
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={handleSelect}
                  defaultMonth={nextMonth}
                  numberOfMonths={1}
                  className="rounded-lg border shadow-sm sm:flex-1 hidden sm:block custom-calendar dark:border-zinc-800 dark:bg-zinc-900"
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between gap-2 mt-4">
              <div className="flex gap-2">
                <Button variant="outline">
                  {date?.from?.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Button>
                <Button variant="outline">
                  {date?.to?.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-[#7F56D9] text-white dark:bg-purple-500"
                  onClick={() => setOpen(false)}
                >
                  Apply
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Filters Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <ListFilter className="w-4 h-4" />
              Filters
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[300px] p-4 rounded-2xl shadow-2xl bg-white dark:bg-zinc-900 dark:text-white">
            <div className="flex flex-col gap-4">
              {/* Search */}
              <div className="relative mb-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleInputChange}
                  className="pl-8 pr-20 py-2 w-full rounded-md border border-border text-sm text-foreground bg-background cursor-pointer"
                  disabled={false}
                />
                <kbd className="absolute right-3 top-2.5 pointer-events-none inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>

              {/* Status Dropdown */}
              <div className="relative inline-block w-48 w-full">
                <select
                  value={filters.status}
                  onChange={handleStatusChange}
                  className="w-full p-2 pr-10 rounded-md border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 bg-white text-black dark:text-white appearance-none"
                >
                  <option value="">Select status</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                  <ChevronDown className="w-4 h-4 text-[#A4A7AE]" />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleClear}>
                  Clear
                </Button>
                <Button
                  className="bg-[#7F56D9] text-white hover:bg-[#6e4ccc] dark:bg-purple-500"
                  onClick={handleApply}
                >
                  Apply
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
