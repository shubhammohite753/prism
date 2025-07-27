import { Card } from "../shared/card";
import { Badge } from "../shared/badge";
import { MoreVertical, ArrowUpRight, ArrowDownRight } from "lucide-react";

function StatCard({
  label,
  value,
  change,
  positive,
}: {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <Card
      className={`
        bg-white dark:bg-zinc-900 
        border border-[#E5E7EB] dark:border-zinc-800 
        rounded-xl shadow-sm
        p-4 
        flex flex-col justify-between
        w-full sm:w-[200px] min-w-[210px] h-[106px]
        gap-2
      `}
    >
      <div className="flex items-start justify-between mb-1">
        <span className="text-sm text-muted-foreground dark:text-zinc-400 font-medium">
          {label}
        </span>
        <MoreVertical className="w-4 h-4 text-muted-foreground dark:text-zinc-500" />
      </div>

      <div className="flex items-end justify-between flex-1">
        <span
          className={`
            font-display
            font-semibold 
            text-[24px] 
            leading-[32px] 
            tracking-normal
            text-[#101828] dark:text-white
          `}
        >
          {value}
        </span>

        <Badge
          className={`
            flex items-center gap-1
            text-[13px] font-medium
            text-[#414651] 
            border border-[#D5D7DA]
            bg-transparent
            w-[58px] h-[24px]
            px-2 py-0.5 rounded-sm
          `}
          style={{
            boxShadow: "0px 1px 2px 0px var(--ColorsEffectsShadowsshadow-xs)",
          }}
        >
          {positive === undefined ? null : positive ? (
            <ArrowUpRight className="w-3 h-3 text-green-500 dark:text-green-300" />
          ) : (
            <ArrowDownRight className="w-3 h-3 text-red-500 dark:text-red-300" />
          )}
          {change}
        </Badge>
      </div>
    </Card>
  );
}

export default function SalesOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <StatCard label="Today's revenue" value="$1,280" change="10%" positive />
      <StatCard label="Today's orders" value="14" change="12%" positive />
      <StatCard
        label="Avg. order value"
        value="$91.42"
        change="2%"
        positive={false}
      />
    </div>
  );
}
