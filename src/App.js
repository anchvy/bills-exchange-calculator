import React, { Component } from 'react'
import { DOLLAR_TO_PENNY } from './config/currency'
import { calculateBillCount } from './utils/currency'
import { getFloatNumber } from './utils/number'
import MainPage from './components/MainPage'

const VALUE_INITIAL_STATE = ''
const BILL_INITIAL_STATE = Object.keys(DOLLAR_TO_PENNY).reduce(
  (result, key) => ({
    ...result,
    [key]: 0,
  }),
  {}
)

/**
 * Bills shape
 * @typedef {Object} Bills
 * @property {number} DOLLAR_100
 * @property {number} DOLLAR_50
 * @property {number} DOLLAR_20
 * @property {number} DOLLAR_10
 * @property {number} DOLLAR_5
 * @property {number} DOLLAR_1
 * @property {number} QUARTER
 * @property {number} DIME
 * @property {number} NICKEL
 * @property {number} PENNY
 */

class App extends Component {
  constructor(props) {
    super(props)

    this.onChangeDollarText = this.onChangeDollarText.bind(this)
    this.store = {} // local store

    this.state = {
      value: VALUE_INITIAL_STATE,
      bills: BILL_INITIAL_STATE,
    }
  }

  /**
   * Get bill data from cache
   * @param {string} key - cache key (dollar unit)
   * @return {Bills}
   */
  getCacheData(key) {
    return this.store[key]
  }

  /**
   * Set bill data to cache
   * @param {string|number} key - cache key (dollar unit)
   * @param {Bills} value - cache value
   * @return {Bills}
   */
  setCacheData(key, value) {
    if (!value) return {}

    this.store[key] = value
    return value
  }

  /**
   * Get bill count with given dollar
   * @param {number} dollar
   * @return {Bills}
   */
  getBillCount(dollar) {
    // validate given data
    const convDollar = getFloatNumber(dollar)

    // get data in cache first
    let result = this.getCacheData(convDollar)
    if (result) return result

    // if no data in cache, then calculate new data
    result = calculateBillCount(convDollar, true)

    // finally, cache data
    this.setCacheData(convDollar, result)
    return result
  }

  /**
   * Event onChange for dollar text input
   * @param {*} event
   */
  onChangeDollarText(event) {
    const value = event.target.value.trim()
    const bills = this.getBillCount(value)

    this.setState({
      value,
      bills,
    })
  }

  render() {
    return (
      <MainPage
        items={this.state.bills}
        value={this.state.value}
        onChangeTextInput={this.onChangeDollarText}
      />
    )
  }
}

export default App
