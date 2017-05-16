// @flow

import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions/TodoListAction'
import { Footer, FooterTab, Text, List, Container, Content, ListItem, Header, Title, Button, Left, Right, Body, Icon } from 'native-base'
import { ListView } from 'react-native';
import Todo from './Todo'

class TodoList extends Component {
  render () {
    // Create 
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

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
          { console.log('sdasfas ' + this.props.todos) }
          { this.props.todos.length > 0
            ? <ListView dataSource={dataSource.cloneWithRows(this.props.todos)}
              renderRow={(todo) =>
                <ListItem>
                  {console.log('TodoList ' + todo.completed)}
                  <Todo id={todo.id} completed={todo.completed} text={todo.text} didToggle={(id) => { this.props.toggleTodo(id) }} />
                </ListItem>
              } /> : null
          }
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
