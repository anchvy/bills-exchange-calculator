import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DOLLAR_CONFIG, CURRENCY_NAME_CONFIG } from '../config/currency'
import Item from './Item'
import { numberFormat } from '../utils/number'

const Wrapper = styled.div`
  display: ${props => (props.hide ? 'none' : 'block')};
  padding: 20px;
  background: white;
  opacity: 0.95;
  width: 100%;
  border-radius: 10px;
  border: 2px solid gray;
`

const Header = styled.div`
  color: gray;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 0;
`

class ItemList extends React.PureComponent {
  render() {
    const { items, value } = this.props
    const ItemsComponent = Object.entries(DOLLAR_CONFIG).map(([dollarKey, dollarValue]) => (
      <Item
        key={`currency-${dollarKey}`}
        title={CURRENCY_NAME_CONFIG[dollarValue]}
        value={items[dollarKey]}
      />
    ))

    return (
      <Wrapper hide={!value}>
        <Header>Result for: $ {numberFormat(value)}</Header>
        <Content>{ItemsComponent}</Content>
      </Wrapper>
    )
  }
}

ItemList.propTypes = {
  items: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

ItemList.defaultProps = {
  items: {},
  value: 0,
}

export default ItemList
