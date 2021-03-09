import reservesString from '../../src/string/reverse-string'
test('', () => {
  const input = ['h', 'e', 'l', 'l', 'o']
  const output = ['o', 'l', 'l', 'e', 'h']
  reservesString(input)
  expect(output)
    .toMatchObject(input)
})
