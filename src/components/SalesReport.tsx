"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { Button } from "../shared/button";
import { Card, CardContent, CardHeader, CardTitle } from "../shared/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shared/tabs";
import { data12m, data24h, data30d, data3m, data7d } from "../data/data";

function ChartTab({
  data,
  value,
  xKey,
}: {
  data: unknown[];
  value: string;
  xKey: string;
}) {
  return (
    <TabsContent value={value}>
      <div className="w-full h-[260px] md:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ left: 0, right: 0, top: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id={`colorDesktop-${value}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity={0.04} />
              </linearGradient>
              <linearGradient
                id={`colorMobile-${value}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#c4b5fd" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.04} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="#e5e7eb"
              className="dark:stroke-zinc-800"
            />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              interval="preserveStartEnd"
              tick={{
                fontSize: 12,
                fill: "#888", // fallback color
              }}
            />
            <Area
              type="monotone"
              dataKey="desktop"
              stroke="#a78bfa"
              strokeWidth={3}
              fill={`url(#colorDesktop-${value})`}
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="mobile"
              stroke="#c4b5fd"
              strokeWidth={3}
              fill={`url(#colorMobile-${value})`}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </TabsContent>
  );
}

export default function SalesReport() {
  return (
    <Card className="rounded-2xl border shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-foreground dark:text-white">
          Sales report
        </CardTitle>
        <Button variant="outline" size="sm">
          View report
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="12m" className="w-full">
          <TabsList className="mb-4 bg-transparent border-none shadow-none gap-1 flex flex-wrap">
            {[
              { label: "12 months", value: "12m" },
              { label: "3 months", value: "3m" },
              { label: "30 days", value: "30d" },
              { label: "7 days", value: "7d" },
              { label: "24 hours", value: "24h" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-md px-3 py-1.5 text-sm font-medium 
                  data-[state=active]:bg-muted 
                  data-[state=active]:text-foreground 
                  data-[state=active]:shadow-none 
                  data-[state=active]:border-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <ChartTab data={data12m} value="12m" xKey="month" />
          <ChartTab data={data3m} value="3m" xKey="month" />
          <ChartTab data={data30d} value="30d" xKey="day" />
          <ChartTab data={data7d} value="7d" xKey="day" />
          <ChartTab data={data24h} value="24h" xKey="hour" />
        </Tabs>
      </CardContent>
    </Card>
  );
}
