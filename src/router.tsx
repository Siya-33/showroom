import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import App from './App'

const Screen1 = lazy(() => import('./pages/screen1'))
const Screen2 = lazy(() => import('./pages/screen2'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/screen1',
    element: <Screen1 />,
  },
  {
    path: '/screen2',
    element: <Screen2 />,
  },
])
