export function contains<T>(elem: T, arr: T[]) {
  let res = false
  arr.forEach(elem_ => {
    if (elem === elem_) {
      res= true
    }
  })
  return res
}