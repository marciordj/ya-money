export const data: expenses = [
  {
    id: 1,
    place: "Shopping",
    price: 7.21,
    bank: "Bradesco",
    date: "13/03/2025"
  },
  {
    id: 2,
    place: "Restaurante",
    price: 15.50,
    bank: "Itaú",
    date: "20/04/2025"
  },
  {
    id: 3,
    place: "Cinema",
    price: 10.75,
    bank: "Banco do Brasil",
    date: "05/05/2025"
  },
  {
    id: 4,
    place: "Parque",
    price: 5.99,
    bank: "Santander",
    date: "18/04/2025"
  },
  {
    id: 5,
    place: "Teatro",
    price: 20.00,
    bank: "Caixa Econômica",
    date: "22/03/2025"
  },
  {
    id: 6,
    place: "Museu",
    price: 8.90,
    bank: "Banco Inter",
    date: "29/03/2025"
  },
  {
    id: 7,
    place: "Praia",
    price: 25.75,
    bank: "Nubank",
    date: "08/04/2025"
  },
  {
    id: 8,
    place: "Hotel",
    price: 100.00,
    bank: "Banco Original",
    date: "10/05/2025"
  },
  {
    id: 9,
    place: "Café",
    price: 3.50,
    bank: "Banco Safra",
    date: "15/04/2025"
  },
  {
    id: 10,
    place: "Estádio",
    price: 50.25,
    bank: "Banco Pan",
    date: "25/04/2025"
  }
];

type expenses = {
  id: number,
  place: string,
  price: number,
  date: string,
  bank: string
}[]