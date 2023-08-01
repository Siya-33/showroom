import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import CurvedSurface from './components/CurvedSurface'

function App() {
  return (
    <div className="h-100vh w-100vw">
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight />
          <pointLight />
          <Stage>
            <CurvedSurface />
          </Stage>
          <OrbitControls makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} maxZoom={0} />
        </Canvas>
      </div>
      <div className="text-6xl text-gray">
        works!
      </div>
    </div>
  )
}

export default App
