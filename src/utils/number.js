/**
 * Convert given data to float number
 * @param {*} number
 * @return {number}
 */
export const getFloatNumber = number => {
  const convNumber = parseFloat(number)
  return Number.isNaN(convNumber) ? 0 : convNumber
}

/**
 * Format given number with comma
 * @param {number} number
 * @return {string}
 */
export const numberFormat = number => {
  const numberParts = String(getFloatNumber(number)).split('.')
  numberParts[0] = numberParts[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')

  return numberParts.join('.')
}
