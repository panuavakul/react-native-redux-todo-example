// @flow

import { createStore } from 'redux'
import reducers from './reducers'
import devToolsEnhancer from 'remote-redux-devtools'

export default createStore(reducers, devToolsEnhancer())
