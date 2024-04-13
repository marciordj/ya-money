export function formatMoney(amount: number) {
  const valueParsed = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)

  return valueParsed
}