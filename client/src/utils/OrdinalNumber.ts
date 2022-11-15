export function ordinalNumber(num: number) {
  if (num % 10 === 1) {
    return num + "st";
  } else if (num % 10 === 2) {
    return num + "nd";
  } else if (num % 10 === 3) {
    return num + "rd";
  }
  return num + "th";
}
