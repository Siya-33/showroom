// 100寸大屏
import '../index.scss'
import { Dodecahedron, Environment, MeshTransmissionMaterial, OrbitControls, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

// import { useRef } from 'react'
import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'
import { Scifi } from '~/components/Scifi'

export default function Screen100() {
  useEffect(() => {
    document.title = '太空舱'
  }, [])
  return (
    <div className="h-100vh w-100vw">
      <Canvas>
        <OrbitControls />

        <color
          attach="background"
          args={['#171720']} />

        {/* <fog
          attach="fog"
          args={['white', 18, 30]} /> */}

        <ambientLight intensity={0.1} />

        {/* <SpotLight
          castShadow
          intensity={1}
          position={[-2, 3, 1]}
          angle={0.5}
          penumbra={1} /> */}

        {/* <directionalLight
          intensity={5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512} /> */}

        <Environment
          background
          preset="city" />

        <Scifi />

        {/* <Ring /> */}

        {/* <Test /> */}

        <Water />

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
