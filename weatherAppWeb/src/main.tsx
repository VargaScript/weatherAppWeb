import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')

if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  )
} else {
  console.error('Element with id "root" is not found in the document.')
}
