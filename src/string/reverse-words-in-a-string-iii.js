// #557
export default (string) => {
  let arr = string.split(' ')
  let result = arr.map(item => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}
