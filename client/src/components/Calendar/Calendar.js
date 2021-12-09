export const Calendar = {
  nextMonth,
  todayDate,
  previousMonth,
  getDaysInMonth,
  daysBeforeCurrentMonth,
  daysAfterCurrentMonth,
  totalDays,
}

export function nextMonth(today,setDate) {
  var day = Math.min(new Date().getDate(), 28)
  if (today.getMonth() === 11) {
    setDate(new Date(today.getFullYear() + 1, 0, day))
  } else {
    setDate(new Date(today.getFullYear(), today.getMonth() + 1, day))
  }
}
export function todayDate(setDate) {
  setDate(new Date())
}
export function previousMonth(today, setDate) {
  var day = Math.min(new Date().getDate(), 28)
  if (today.getMonth() === 0) {
    setDate(new Date(today.getFullYear() - 1, 11, day))
  } else {
    setDate(new Date(today.getFullYear(), today.getMonth() - 1, day))
  }
}
export function getDaysInMonth(month, year) {
  //Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate()
}

// ...29th,30th,31st of previous month might have to appear in the top left 
// part of the calendar
export function daysBeforeCurrentMonth(today) {
  var firstDayCurrentMonth = today.setDate(1)
  const theFirstDayCurrentMonth = new Date(firstDayCurrentMonth).getDay()
  const daysInLastMonth = Calendar.getDaysInMonth(today.getMonth(), today.getYear())

  return Array(theFirstDayCurrentMonth)
    .fill(theFirstDayCurrentMonth)
    .map((e, i) => daysInLastMonth - e + i + 1)
}

// ...1st,2nd,3rd day of next month might have to appear in the bottom 
// right part of the calendar
export function daysAfterCurrentMonth(today) {
  const theLastDayCurrentMonth = new Date(
      Calendar.getDaysInMonth(today.getMonth() + 1, today.getYear())
    ).getDay()
  //another row of dates to give 6 rows in total for each month giving the same
  //height for each month
  var extra = totalDays(today) < 42 ? 42 - totalDays(today) : 0;
  return Array(6 - theLastDayCurrentMonth + extra)
    .fill('')
    .map((e, i) => i + 1)
} 

export function totalDays(today) {
  return today.getDay() + 
    Calendar.getDaysInMonth(today.getMonth() + 1, today.getYear()) + 
    6 - new Date(
      Calendar.getDaysInMonth(today.getMonth() + 1, today.getYear())
    ).getDay()
}

export default Calendar