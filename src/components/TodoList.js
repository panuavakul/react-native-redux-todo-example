// @flow

import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions/TodoListAction'
import { Footer, FooterTab, Text, List, Container, Content, ListItem, Header, Title, Button, Left, Right, Body, Icon } from 'native-base'
import Todo from './Todo'

class TodoList extends Component {
  render () {
    return (
      <Container>

        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Todos</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List dataArray={this.props.todos}
            renderRow={(todo) =>
              <ListItem>
                {console.log('TodoList ' + todo.completed)}
                <Todo id={todo.id} completed={todo.completed} text={todo.text} didToggle={(id) => { this.props.toggleTodo(id) }} />
              </ListItem>
            } />
        </Content>

        <Footer>
          <FooterTab>
            <Button full onPress={() => { this.props.addTodo('New') }}>
              <Text>Add New Todos</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    )
  }
}

// Does all container received all the same state?
function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({addTodo: addTodo, toggleTodo: toggleTodo}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TodoList)
