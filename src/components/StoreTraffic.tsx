"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Button } from "../shared/button";
import { Card, CardContent, CardHeader, CardTitle } from "../shared/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../shared/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shared/tabs";
import { data12m, data24h, data30d, data3m, data7d } from "../data/data";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} as const;

const barColors = {
  desktop: "#9e7ffa", // Purple
  mobileLight: "#e5e7eb", // Light gray
  mobileDark: "#52525b",  
};

const gridStroke = {
  light: "#f4f4f8",
  dark: "#27272a",  
};

export default function StoreTraffic() {
  return (
    <Card className="rounded-2xl border shadow-sm bg-white dark:bg-zinc-900 dark:border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-foreground dark:text-white">
          Store traffic
        </CardTitle>
        <Button variant="outline" size="sm">
          View report
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="12m" className="w-full">
          <TabsList className="mb-4 bg-transparent border-none shadow-none gap-1 flex flex-wrap">
            {["12m", "3m", "30d", "7d", "24h"].map((range) => (
              <TabsTrigger
                key={range}
                value={range}
                className="rounded-md px-3 py-1.5 text-sm font-medium
                  data-[state=active]:bg-muted
                  data-[state=active]:text-foreground
                  data-[state=active]:shadow-none
                  data-[state=active]:border-none"
              >
                {range === "12m"
                  ? "12 months"
                  : range === "3m"
                  ? "3 months"
                  : range === "30d"
                  ? "30 days"
                  : range === "7d"
                  ? "7 days"
                  : "24 hours"}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Chart Configurations */}
          {[
            { key: "12m", data: data12m, xKey: "month", barSize: 30 },
            { key: "3m", data: data3m, xKey: "month", barSize: 30 },
            { key: "30d", data: data30d, xKey: "day", barSize: 15 },
            { key: "7d", data: data7d, xKey: "day", barSize: 30 },
            { key: "24h", data: data24h, xKey: "hour", barSize: 15 },
          ].map(({ key, data, xKey, barSize }) => (
            <TabsContent key={key} value={key}>
              <ChartContainer
                config={chartConfig}
                className="w-full h-[260px] md:h-[320px]"
              >
                <BarChart
                  data={data}
                  barCategoryGap={key === "30d" || key === "24h" ? 8 : 24}
                  barGap={2}
                  barSize={barSize}
                >
                  {/* Grid */}
                  <CartesianGrid
                    vertical={false}
                    stroke={gridStroke.light}
                    className="dark:stroke-[--tw-border-color]"
                  />
                  {/* Axis */}
                  <XAxis
                    dataKey={xKey}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    tick={{
                      fontSize: key === "30d" || key === "24h" ? 12 : 14,
                      fill: "#888", 
                      className: "dark:fill-zinc-400",
                    }}
                    minTickGap={key === "30d" || key === "24h" ? 8 : 0}
                  />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  {/* Bars */}
                  <Bar
                    dataKey="desktop"
                    stackId="a"
                    fill={barColors.desktop}
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="mobile"
                    stackId="a"
                    radius={[4, 4, 0, 0]}
                    fill={barColors.mobileLight}
                    className="dark:fill-zinc-600"
                  />
                </BarChart>
              </ChartContainer>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
