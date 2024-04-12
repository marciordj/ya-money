import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
]
 
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export default function Home() {
  
  return (
    <div className="mt-28 rounded-md border">
      <Table>
        <TableHeader className="text-slate-100">
          <TableHead>
            Lugar
          </TableHead>
          <TableHead>
            Preço
          </TableHead>
          <TableHead>
            Banco
          </TableHead>
          <TableHead>
            Data
          </TableHead>
        </TableHeader>
        <TableBody>
          <TableRow className="text-slate-100">
            <TableCell>
              Shopping
            </TableCell>
            <TableCell>
              R$ 123,00
            </TableCell>
            <TableCell>
              Bradesco
            </TableCell>
            <TableCell>
              13/04/2023
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
