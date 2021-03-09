const numberToLetter = (digits) => {
  const map = new Map()
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')
  const numbers = digits.split('')
  const lsetters = []
  numbers.forEach(item => {
    lsetters.push(map.get(item).split(''))
  })
  return lsetters
}
const combination = (arr1, arr2) => {
  const arr = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr.push(arr1[i] + arr2[j])
    }
  }
  return arr
}
export default (digits) => {
  if (digits === '') {
    return []
  }
  const lsetters = numberToLetter(digits)
  if (lsetters.length === 1) {
    return lsetters[0]
  }
  while (true) {
    if (lsetters.length > 1) {
      lsetters.splice(0, 2, combination(lsetters[0], lsetters[1]))
    } else {
      return lsetters[0]
    }
  }
}
