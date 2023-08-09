import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import App from './App'

const DigitalPeople = lazy(() => import('~/pages/digital_people'))
const SpaceCapsule = lazy(() => import('~/pages/space_capsule'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/digital_people',
    element: <DigitalPeople />,
  },
  {
    path: '/space_capsule',
    element: <SpaceCapsule />,
  },
])
