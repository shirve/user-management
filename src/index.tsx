import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import Modal from 'react-modal'
import { ReactQueryClient } from 'api'

Modal.setAppElement(document.getElementById('root') as HTMLElement)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ReactQueryClient>
      <App />
    </ReactQueryClient>
  </React.StrictMode>
)
