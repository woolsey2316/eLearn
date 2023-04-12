export function sameMonth(monthNames: string[], due: string, month: string) {
  return monthNames[new Date(due).getMonth()] === month
}