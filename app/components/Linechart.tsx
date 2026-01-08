"use client"

import { HiDotsVertical } from "react-icons/hi";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components2/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components2/ui/chart"

const chartData = [
    { day: "Mon", overall: 30000, actual: 15000 },
    { day: "Tue", overall: 55000, actual: 25000 },
    { day: "Wed", overall: 42000, actual: 45000 },
    { day: "Thu", overall: 60000, actual: 35000 },
    { day: "Fri", overall: 50000, actual: 52000 },
    { day: "Sat", overall: 90000, actual: 80000 },
    { day: "Sun", overall: 110000, actual: 105000 },
]

const chartConfig = {
    overall: { label: "Overall", color: "#9ec5ff" },
    actual: { label: "Actual", color: "#000000" },
} satisfies ChartConfig

export function Linechart() {
    return (
        <Card className="rounded-2xl shadow-sm">

            <CardHeader className="pb-0">
                <div className="flex items-start justify-between">
                    <div className="flex  items-center gap-2">
                        <CardTitle className="text-base font-semibold">
                            Improvement Graph
                        </CardTitle>
                        <CardDescription className="text-sm">
                            Overall vs Actual
                        </CardDescription>
                    </div>

                    <HiDotsVertical className="text-gray-500 cursor-pointer mt-1" />
                </div>
            </CardHeader>


            <CardContent className="pt-4">
                <ChartContainer config={chartConfig}>
                    <LineChart data={chartData}>
                        <CartesianGrid vertical={false} stroke="#f1f1f1" />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />

                        <Line
                            type="monotone"
                            dataKey="overall"
                            stroke="#9ec5ff"
                            strokeWidth={3}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="actual"
                            stroke="#000"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
