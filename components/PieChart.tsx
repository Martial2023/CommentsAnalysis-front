"use client"

import { ChartPie } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
    count: {
        label: "Commentaires: ",
    },
    positif: {
        label: "Positifs"
    },
    negatif: {
        label: "Negatifs"
    },
    neutre: {
        label: "Neutres"
    }
} satisfies ChartConfig

interface ChartDrawerProps {
    positifsCount: number
    negatifsCount: number
    neutralCount: number
}

export function ChartDrawer({  positifsCount, negatifsCount, neutralCount } : ChartDrawerProps) {
    const chartData = [
        { comments: "positif", count: positifsCount, fill:  "#2E86C1"},
        { comments: "negatif", count: negatifsCount, fill: "#E74C3C" },
        { comments: "neutre", count: neutralCount, fill: "#FFC107" }
    ]
    return (
        <Card className="flex flex-col w-full h-full">
            <CardHeader className="items-center pb-0">
                <CardTitle>
                    <h4 className='text-center text-semibold text-xl text-gray-800 flex items-center gap-2'>
                        <ChartPie className='text-orange-400' />
                        Répartition des commentaires
                    </h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[300px] [&_.recharts-text]:fill-background"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey="count" hideLabel />}
                        />
                        <Pie data={chartData} dataKey="count">
                            <LabelList
                                dataKey="comments"
                                className="fill-background"
                                stroke="none"
                                fontSize={14}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
