import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { RouteMap } from './routes/routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <RouteMap />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  app
);