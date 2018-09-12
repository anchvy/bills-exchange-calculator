import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ITEM_PER_ROW = 1

const Wrapper = styled.div`
  display: ${props => (props.hide ? 'none' : 'flex')};
  width: ${100 / ITEM_PER_ROW}%;
  justify-content: center;
  margin-bottom: 10px;
`

const Text = styled.div`
  width: 20%;
  color: black;
  font-weight: bold;
  font-size: 20px;
`

const Input = styled.input`
  text-align: center;
  font-size: 25px;
  color: black;
  width: 50%;
`

class Item extends React.PureComponent {
  render() {
    const { value, title } = this.props

    return (
      <Wrapper hide={value === 0 || value === '0'}>
        <Text>{title}</Text>
        <Input value={value} disabled />
      </Wrapper>
    )
  }
}

Item.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
}

Item.defaultProps = {
  value: 0,
  title: '',
}

export default Item
