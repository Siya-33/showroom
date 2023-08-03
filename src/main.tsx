import React from 'react'
import ReactDOM from 'react-dom/client'

// router
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

// tailwind reset style
import '@unocss/reset/tailwind.css'

// unocss
import 'virtual:uno.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
