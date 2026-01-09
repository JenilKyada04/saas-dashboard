"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Dropdownweekly } from "./Dropdownweekly"

const chartData = [
  { day: "12", value: 5 },
  { day: "13", value: 4 },
  { day: "14", value: 2 },
  { day: "15", value: 4 },
  { day: "16", value: 8 },
  { day: "17", value: 6 },
  { day: "18", value: 7 },
  { day: "19", value: 9 },
  { day: "20", value: 7 },
  { day: "21", value: 6 },
  { day: "22", value: 6 },
]

export function Barchart() {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">
            Study Statistics
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            December 03, 2022
          </p>
        </div>

        <div className="text-sm px-3 py-1   rounded-md">
          <Dropdownweekly />
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={{ value: { color: "#2563eb" } }}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="value"
              radius={8}
              fill="#2563eb"
              className="cursor-pointer"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
