import { activityData } from "../data/activity";

interface ActivityItem {
  user: string;
  action: string;
  image: string;
  online?: boolean;
}

export default function ActivityFeed() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Activity
        </h2>
        <button className="text-sm hover:underline">View All</button>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {activityData.map((item: ActivityItem, i: number) => (
          <div key={i} className="relative flex items-start gap-3">
            {/* Avatar */}

            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.user}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* User Content */}
            <div className="text-sm leading-tight">
              <p className="font-semibold  dark:text-white text-[#414651]">
                {item.user}
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-xs">
                Purchased{" "}
                <span className="font-medium text-xs hover:underline cursor-pointer text-[#7F56D9]">
                  {item.action}
                </span>
              </p>
            </div>

            {/* Online Dot - Positioned Top Right of Entire Row */}
            {item.online && (
              <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
