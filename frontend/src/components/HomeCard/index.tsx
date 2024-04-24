import { formatMoney } from "@/utils/formatMoney";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type prop = {
  title: string,
  value: number;
}

export function HomeCard({title, value}: prop) {
  return (
    <Card className="bg-transparent max-w-xs flex-1">
      <CardHeader className="text-slate-100">{title}</CardHeader>
      <CardContent className="text-slate-100 font-bold">{formatMoney(value)}</CardContent>
    </Card>
  )
}