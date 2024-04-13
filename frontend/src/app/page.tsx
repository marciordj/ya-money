import { ExpenseTable } from "@/components/ExpenseTable";
import { HomeCard } from "@/components/HomeCard";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-around mt-12">
        <HomeCard title="Entrada" value={4000} />
        <HomeCard title="Saidas" value={3000} />
      </div>
      <div className="mt-28 rounded-md border">
        <ExpenseTable />
      </div>
    </>
  );
}
