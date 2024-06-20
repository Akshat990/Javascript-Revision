let arr = [45, 23, 21]
//Array map method
let a = arr.map((value, index, array  ) =>{
      console.log(value, index, array)
      return value + index
})
console.log(a)