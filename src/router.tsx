import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import App from './App'

const Screen1 = lazy(() => import('./pages/screen1'))
const Screen2 = lazy(() => import('./pages/screen2'))
const Screen100 = lazy(() => import('./pages/screen100'))

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
  {
    path: '/screen100',
    element: <Screen100 />,
  },
])
