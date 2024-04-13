import { formatMoney } from "@/utils/formatMoney";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "../ui/table";
import { data } from "./data";

export function ExpenseTable() {
  return (
    <Table>
        <TableHeader className="text-slate-100">
          <TableHead>
            Place
          </TableHead>
          <TableHead>
            Price
          </TableHead>
          <TableHead>
            Bank
          </TableHead>
          <TableHead>
            Date
          </TableHead>
        </TableHeader>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.price} className="text-slate-100">
              <TableCell>{item.place}</TableCell>
              <TableCell>{formatMoney(item.price)}</TableCell>
              <TableCell>{item.bank}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}