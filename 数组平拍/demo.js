
let arr = [3, 4, [4, 5, ['s']]]
function flat(arr) {
  let i = 0
  while(i < arr.length) {
    if(Array.isArray(arr[i])) {
      let tmp = flat(arr[i])
      arr.splice(i, 1, ...tmp)
      i += tmp.length - 1
    }
    i++
  }
  return arr
}
flat(arr) //[3, 4, 4, 5, 's']