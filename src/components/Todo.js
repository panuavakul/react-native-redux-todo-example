
import React, { Component, PropTypes } from 'react'
import { CheckBox, Text, Content, Col, Grid } from 'native-base'

export default class Todo extends Component {
  render () {
    return (
      <Content>
        <Grid>
          <Col style={{ width: 45 }}>
            <Content contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
              {console.log('Todo ' + this.props.completed)}
              <CheckBox checked={this.props.completed} onPress={() => { this.props.didToggle(this.props.id) }} />
            </Content>
          </Col>
          <Col><Text>{this.props.text}</Text></Col>
        </Grid>
      </Content>
    )
  }
}

// Type checking
// How is this possible?? Object is not created yet, but I'm assigning it's parameters
// Is there a better way to write this? Like in constructor or something?
Todo.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  didToggle: PropTypes.func.isRequired
}
