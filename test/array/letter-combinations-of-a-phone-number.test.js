import letterCombinationsOfAPhoneNumber from '../../src/array/letter-combinations-of-a-phone-number'
test('', () => {
  let input = '23'
  let output = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  let expected = letterCombinationsOfAPhoneNumber(input)
  expect(expected).toMatchObject(output)

  input = '2'
  output = ['a', 'b', 'c']
  expected = letterCombinationsOfAPhoneNumber(input)
  expect(expected).toMatchObject(output)

  input = ''
  output = []
  expected = letterCombinationsOfAPhoneNumber(input)
  expect(expected).toMatchObject(output)
})
