import { getFloatNumber, numberFormat } from '../number'

describe('getFloatNumber', () => {
  const specs = [
    {
      input: 1,
      result: 1,
    },
    {
      input: '.99',
      result: 0.99,
    },
    {
      input: undefined,
      result: 0,
    },
    {
      input: NaN,
      result: 0,
    },
  ]

  specs.forEach(({ input, result }) => {
    it(`should return ${JSON.stringify(result)}, when passing ${JSON.stringify(input)}`, () => {
      expect(getFloatNumber(input)).toBe(result)
    })
  })
})

describe('numberFormat', () => {
  const specs = [
    {
      input: 1,
      result: '1',
    },
    {
      input: 1000,
      result: '1,000',
    },
    {
      input: 100000,
      result: '100,000',
    },
    {
      input: 100000.12,
      result: '100,000.12',
    },
    {
      input: 1.123456,
      result: '1.123456',
    },
    {
      input: undefined,
      result: '0',
    },
    {
      input: NaN,
      result: '0',
    },
  ]

  specs.forEach(({ input, result }) => {
    it(`should return ${JSON.stringify(result)}, when passing ${JSON.stringify(input)}`, () => {
      expect(numberFormat(input)).toBe(result)
    })
  })
})
