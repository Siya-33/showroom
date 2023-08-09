import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Rig({ children }: any) {
  const outer = useRef<THREE.Group>(null!)
  const inner = useRef<THREE.Group>(null!)
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime()
    outer.current.position.y = THREE.MathUtils.lerp(outer.current.position.y, 0, 0.05)
    // inner.current.rotation.y = Math.sin(t / 8) * Math.PI
    // inner.current.position.z = 5 + -Math.sin(t / 2) * 10
    // inner.current.position.y = -5 + Math.sin(t / 2) * 2
  })
  return (
    <group
      position={[0, -100, 0]}
      ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  )
}
