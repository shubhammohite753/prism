import Header from "../components/Header";
import SalesOverview from "../components/SalesOverview";
import SalesReport from "../components/SalesReport";
import ActivityFeed from "../components/ActivityFeed";
import FilterBar from "../components/FilterBar";
import AddAgentDialog from "../components/AddAgentDialog";
import StoreTraffic from "../components/StoreTraffic";
import SidebarWrapper from "../components/SidebarWrapper";

export default function Dashboard() {
  return (
    <div className="flex">
      <SidebarWrapper />
      <main
        className="flex-1 lg:ml-64 pt-15 px-6 pb-6 lg:px-10 lg:pb-10 lg:pt-5 space-y-6 w-full bg-[#F8F8F8] rounded-tl-[32px] rounded-bl-[32px] border border-[#E9EAEB]"
      >
        <Header />
        <FilterBar />
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-6 w-full lg:w-2/2">
            <SalesOverview />
            <SalesReport />
            <StoreTraffic />
            <AddAgentDialog />
          </div>

          {/* Right column – Activity Feed */}
          <div className="w-full lg:w-1/3">
            <ActivityFeed />
          </div>
        </div>
      </main>
    </div>
  );
}
