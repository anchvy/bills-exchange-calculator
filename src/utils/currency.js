import { DOLLAR_TO_PENNY } from '../config/currency'
import { getFloatNumber, numberFormat } from './number'

/**
 * Calculate bills count with given dollar
 * @param {number} dollar
 * @param {boolean} [withFormatNumber = false]
 * @return {Bills}
 */
export const calculateBillCount = (dollar, withFormatNumber = false) => {
  // convert dollar to penny unit
  let penny = getFloatNumber(dollar) * 100

  return Object.entries(DOLLAR_TO_PENNY).reduce((result, [key, value]) => {
    if (penny <= 0) return { ...result, [key]: 0 }

    const billCount = Math.floor(penny / value)
    // find remain penny for next loop
    penny %= value

    return {
      ...result,
      [key]: withFormatNumber ? numberFormat(billCount) : billCount,
    }
  }, {})
}
