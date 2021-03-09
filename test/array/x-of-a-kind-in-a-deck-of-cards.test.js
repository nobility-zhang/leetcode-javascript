import xOfAKindInADeckOfCards from '../../src/array/x-of-a-kind-in-a-deck-of-cards'
test('', () => {
  let input = [1, 2, 3, 4, 4, 3, 2, 1]
  let output = true
  let expected = xOfAKindInADeckOfCards(input)
  expect(expected).toBe(output)

  input = [1, 1, 1, 2, 2, 2, 3, 3]
  output = false
  expected = xOfAKindInADeckOfCards(input)
  expect(expected).toBe(output)

  input = [1]
  output = false
  expected = xOfAKindInADeckOfCards(input)
  expect(expected).toBe(output)

  input = [1, 1]
  output = true
  expected = xOfAKindInADeckOfCards(input)
  expect(expected).toBe(output)

  input = [1, 1, 2, 2, 2, 2]
  output = true
  expected = xOfAKindInADeckOfCards(input)
  expect(expected).toBe(output)

  input = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2]
  output = true
  expected = xOfAKindInADeckOfCards(input)
  expect(expected).toBe(output)
})
