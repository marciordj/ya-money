import { DataTable } from "react-native-paper";

export default function ExpenseList() {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>
          Teste 1
        </DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat (g)</DataTable.Title>
      </DataTable.Header>
    </DataTable>
  )
}