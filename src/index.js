import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './helpers/store'
import App from './App'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
