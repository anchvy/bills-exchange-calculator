import { calculateBillCount } from '../currency'

describe('calculateBillCount', () => {
  const specs = [
    {
      input: 1,
      result: {
        DIME: 0,
        DOLLAR_1: 1,
        DOLLAR_10: 0,
        DOLLAR_100: 0,
        DOLLAR_20: 0,
        DOLLAR_5: 0,
        DOLLAR_50: 0,
        NICKEL: 0,
        PENNY: 0,
        QUARTER: 0,
      },
    },
    {
      input: 0.99,
      result: {
        DIME: 2,
        DOLLAR_1: 0,
        DOLLAR_10: 0,
        DOLLAR_100: 0,
        DOLLAR_20: 0,
        DOLLAR_5: 0,
        DOLLAR_50: 0,
        NICKEL: 0,
        PENNY: 4,
        QUARTER: 3,
      },
    },
    {
      input: 124.67,
      result: {
        DIME: 1,
        DOLLAR_1: 4,
        DOLLAR_10: 0,
        DOLLAR_100: 1,
        DOLLAR_20: 1,
        DOLLAR_5: 0,
        DOLLAR_50: 0,
        NICKEL: 1,
        PENNY: 2,
        QUARTER: 2,
      },
    },
    {
      input: -1,
      result: {
        DIME: 0,
        DOLLAR_1: 0,
        DOLLAR_10: 0,
        DOLLAR_100: 0,
        DOLLAR_20: 0,
        DOLLAR_5: 0,
        DOLLAR_50: 0,
        NICKEL: 0,
        PENNY: 0,
        QUARTER: 0,
      },
    },
    {
      input: undefined,
      result: {
        DIME: 0,
        DOLLAR_1: 0,
        DOLLAR_10: 0,
        DOLLAR_100: 0,
        DOLLAR_20: 0,
        DOLLAR_5: 0,
        DOLLAR_50: 0,
        NICKEL: 0,
        PENNY: 0,
        QUARTER: 0,
      },
    },
  ]

  specs.forEach(({ input, result }) => {
    it(`should return ${JSON.stringify(result)}, when passing ${JSON.stringify(input)}`, () => {
      expect(calculateBillCount(input)).toEqual(result)
    })
  })
})
