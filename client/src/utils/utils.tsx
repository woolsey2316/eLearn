export function contains<T>(elem: T, arr: T[]) {
  arr.forEach(elem_ => {
    if (elem === elem_) {
      return true
    }
  })
  return false
}