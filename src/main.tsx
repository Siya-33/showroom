import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// tailwind reset style
import '@unocss/reset/tailwind.css'

// unocss
import 'virtual:uno.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
