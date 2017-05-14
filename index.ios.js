/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Container, Button, Text } from 'native-base'
import app from './src/app'

export default class ReactNativeTodo extends Component {
  render () {
    return (
      <Container>
        <Button>
          <Text>
            Button
          </Text>
        </Button>
      </Container>
    )
  }
}

AppRegistry.registerComponent('ReactNative_Todo', () => app)
