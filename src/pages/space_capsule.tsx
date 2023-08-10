// 100寸大屏
import '../index.scss'
import { Dodecahedron, Environment, Loader, MeshTransmissionMaterial, OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

// import { useRef } from 'react'
import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'
import { Scifi } from '~/components/Scifi'

export default function Screen100() {
  useEffect(() => {
    document.title = '太空舱'
  }, [])
  const [bad] = useState(false)
  const { enabled, samples, ...config } = useControls({
    enabled: true,
    size: { value: 35, min: 0, max: 100, step: 0.1 },
    focus: { value: 0.5, min: 0, max: 2, step: 0.1 },
    samples: { value: 16, min: 1, max: 40, step: 1 },
  })
  return (
    <div className="h-100vh w-100vw">
      <Canvas
        shadows
        camera={{ near: 1 }}>
        <OrbitControls
          minPolarAngle={1.3}
          maxPolarAngle={1.3}
          enableZoom={true}
          enablePan={false} />

        {/* {enabled && <SoftShadows
          {...config}
          samples={bad ? Math.min(6, samples) : samples} />} */}

        <color
          attach="background"
          args={['#171720']} />

        {/* <fog
          attach="fog"
          args={['white', 18, 30]} /> */}

        <ambientLight intensity={1} />

        {/* <pointLight
          intensity={100}
          position={[0, 1, 0]} /> */}

        {/* <spotLight
          castShadow
          intensity={100}
          position={[-2, 3, 1]}
          angle={1}
          penumbra={1} /> */}

        {/* <directionalLight
          intensity={1}
          castShadow
          position={[0, 2, 4]}
          shadow-mapSize={1024} /> */}

        {/* <rectAreaLight
          intensity={5}
          castShadow
          position={[0, 5, 0]}
          rotation-x={-Math.PI / 2}

          width={16}
          height={16} /> */}

        <Environment
          background
          preset="city" />

        <Scifi />

        {/* <Ring /> */}

        {/* <Test /> */}

        <Water />

        {/* <ContactShadows
          position={[0, -0.8, 0]}
          opacity={1}
          scale={10}
          blur={1.5}
          far={0.8} /> */}

        <EffectComposer disableNormalPass>
          <Bloom
            intensity={0.2} // The bloom intensity.
            blurPass={undefined} // A blur pass.
            kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur={false} // Enables or disables mipmap blur.
            resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            resolutionY={Resolution.AUTO_SIZE} />

          <Noise opacity={0.02} />

          <Vignette
            eskil={false}
            offset={0.1}
            darkness={1.1} />
        </EffectComposer>
      </Canvas>

      <Loader />
    </div>
  )
}

function Water() {
  const mesh$ = useRef<any>(null!)
  useFrame((state, delta) => (mesh$.current.rotation.x = mesh$.current.rotation.y += delta))
  const normalMap = useTexture('/bump.jpg')
  return (
    <group dispose={null}>
      <mesh
        castShadow
        position={[0, 2.7, 0]}
        ref={mesh$}>
        {/* <sphereGeometry
          position={[0, 2.7, 0]}
          args={[0.8, 64, 64]} /> */}
        <Dodecahedron args={[0.8, 32]}>

          <MeshTransmissionMaterial
            color="#D8E4FE"
            distortion={0}
            distortionScale={0.1}
            temporalDistortion={0}
            transmissionSampler
            ior={1.33}
            normalMap={normalMap}
            buffer={undefined}
            flatShading={false} />
        </Dodecahedron>
      </mesh>
    </group>
  )
}
