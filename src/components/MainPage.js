import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import IMAGE_BACKGROUND from '../statics/background.jpg'
import ItemList from './ItemList'
import { SCREEN_MAX_WIDTH } from '../config/style'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${SCREEN_MAX_WIDTH}px;
  background-image: url(${IMAGE_BACKGROUND});
  position: fixed;
  height: 100%;
`

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.95;
  width: 100%
  margin: 40px;
  flex-direction: column;
`

const Input = styled.input`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
`

// const

class MainPage extends React.Component {
  render() {
    const { value, onChangeTextInput, items } = this.props

    return (
      <Wrapper>
        <Container>
          <ContentBox>
            <Input placeholder="$ 0.00" value={value} onChange={onChangeTextInput} />
            <ItemList items={items} value={value} />
          </ContentBox>
        </Container>
      </Wrapper>
    )
  }
}

MainPage.propTypes = {
  items: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChangeTextInput: PropTypes.func,
}
MainPage.defaultProps = {
  items: {},
  value: '',
  onChangeTextInput: () => {},
}

export default MainPage
