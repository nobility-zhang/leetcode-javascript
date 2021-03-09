const group = (deck) => {
  deck.sort((a, b) => a - b)
  let dst = []
  let temp = []
  for (let i = 0; i < deck.length; i++) {
    temp.push(deck[i])
    for (let j = i + 1; j < deck.length + 1; j++) {
      if (j < deck.length && deck[i] === deck[j]) {
        temp.push(deck[j])
      } else {
        dst.push([...temp])
        temp.length = 0
        i = j - 1
        break
      }
    }
  }
  return dst
}
const gcd = (num1, num2) => {
  return num2 === 0 ? num1 : gcd(num2, num1 % num2)
}
const gcdRecursion = (arr) => {
  if (arr.length === 0) {
    return null
  }
  while (true) {
    if (arr.length === 1) {
      return arr[0]
    }
    let a = arr.shift()
    let b = arr.shift()
    let v = gcd(a, b)
    if (v === 1) {
      return 1
    } else {
      arr.unshift(v)
    }
  }
}
// #914
export default (deck) => {
  if (deck.length < 2) {
    return false
  }
  const arr = group(deck)
  const lens = []
  arr.forEach(item => {
    lens.push(item.length)
  })
  const min = gcdRecursion([...lens])
  if (min === 1) {
    return false
  }
  return lens.every(item => {
    if (item % min !== 0) {
      return false
    } else {
      return true
    }
  })
}
