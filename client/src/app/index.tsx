import * as React from 'react'
import glamorous from 'glamorous'
const bg = require('./background.jpg')

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>Welcome to Aimee's Planner!</Text>
      </Container>
    )
  }
}

const Container = glamorous.div({
  background: `url(${bg})`,
  minHeight: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const Text = glamorous.span({
  fontSize: 42,
  background: 'white',
  color: 'pink'
})
