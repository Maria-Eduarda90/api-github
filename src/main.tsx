import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GithubtProvider } from './context/github'

ReactDOM.render(
  <React.StrictMode>
    <GithubtProvider>
      <App />
    </GithubtProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
