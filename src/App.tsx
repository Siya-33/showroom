import Screen1 from './pages/screen1'

const test = false
if (test)
  console.warn('test')

function App() {
  return (
    <div className="relative h-100vh w-100vw screen-bg">
      <div className="pointer-events-none absolute inset-0 w-full bg-[url(@/bg/cover1.png)] bg-top bg-no-repeat opacity-60 mix-blend-soft-light" />

      <Screen1 />

      <div className="pointer-events-none absolute inset-0 w-full rotate-180 bg-[url(@/bg/cover1.png)] bg-top bg-no-repeat opacity-60 mix-blend-soft-light" />
    </div>
  )
}

export default App
