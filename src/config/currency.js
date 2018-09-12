/**
 * DOLLAR CONFIG
 */
export const DOLLAR_CONFIG = {
  DOLLAR_100: 100,
  DOLLAR_50: 50,
  DOLLAR_20: 20,
  DOLLAR_10: 10,
  DOLLAR_5: 5,
  DOLLAR_1: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
}

/**
 * CURRENCY NAME CONFIG
 */
export const CURRENCY_NAME_CONFIG = {
  [DOLLAR_CONFIG.DOLLAR_100]: '$100 bill',
  [DOLLAR_CONFIG.DOLLAR_50]: '$50 bill',
  [DOLLAR_CONFIG.DOLLAR_20]: '$20 bill',
  [DOLLAR_CONFIG.DOLLAR_10]: '$10 bill',
  [DOLLAR_CONFIG.DOLLAR_5]: '$5 bill',
  [DOLLAR_CONFIG.DOLLAR_1]: '$1 bill',
  [DOLLAR_CONFIG.QUARTER]: 'Quarter ( $0.25 )',
  [DOLLAR_CONFIG.DIME]: 'Dime ( $0.10 )',
  [DOLLAR_CONFIG.NICKEL]: 'Nickel ( $0.05 )',
  [DOLLAR_CONFIG.PENNY]: 'Penny ( $0.01 )',
}

/**
 * PENNY CONFIG
 * convert all dollar to penny unit
 */
export const DOLLAR_TO_PENNY = Object.entries(DOLLAR_CONFIG).reduce(
  (result, [key, value]) => ({
    ...result,
    [key]: value * 100,
  }),
  {}
)
