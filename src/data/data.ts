
export const data12m = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 273, mobile: 190 },
  { month: "May", desktop: 309, mobile: 130 },
  { month: "Jun", desktop: 314, mobile: 140 },
  { month: "Jul", desktop: 350, mobile: 180 },
  { month: "Aug", desktop: 370, mobile: 200 },
  { month: "Sep", desktop: 400, mobile: 220 },
  { month: "Oct", desktop: 420, mobile: 240 },
  { month: "Nov", desktop: 440, mobile: 260 },
  { month: "Dec", desktop: 460, mobile: 280 }, 
];

export const data3m = [
  { month: "Jan", desktop: 460, mobile: 280 },
  { month: "Feb", desktop: 480, mobile: 300 },
  { month: "Mar", desktop: 510, mobile: 320 },
];

export const data30d = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  desktop: 300 + Math.round(Math.sin(i / 5) * 30 + Math.random() * 20),
  mobile: 150 + Math.round(Math.cos(i / 6) * 20 + Math.random() * 10),
}));

export const data7d = Array.from({ length: 7 }, (_, i) => ({
  day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
  desktop: 350 + Math.round(Math.sin(i) * 20 + Math.random() * 10),
  mobile: 180 + Math.round(Math.cos(i) * 10 + Math.random() * 5),
}));

export const data24h = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  desktop: 200 + Math.round(Math.sin(i / 3) * 20 + Math.random() * 10),
  mobile: 100 + Math.round(Math.cos(i / 4) * 10 + Math.random() * 5),
}));
