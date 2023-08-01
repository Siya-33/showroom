/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'

function CurvedSurface(props) {
  function createPlane(width, height, widthSegments, heightSegments) {
    const vertexCount = widthSegments * heightSegments * 6
    const vertices = new Float32Array(vertexCount * 3) // 每个顶点有3个浮点数（x, y, z）

    for (let y = 0; y <= heightSegments; y++) {
      for (let x = 0; x <= widthSegments; x++) {
        const index = (x + y * (widthSegments + 1)) * 3
        const xPos = (x / widthSegments) * width - width / 2
        const yPos = (y / heightSegments) * height - height / 2
        const zPos = 0 // 这里设置平面的Z坐标为0，你可以根据需求修改Z坐标来实现曲面效果
        vertices[index] = xPos
        vertices[index + 1] = yPos
        vertices[index + 2] = zPos
      }
    }
    return vertices
  }

  const vertices = createPlane(1, 1, 1, 1)
  // console.log(vertices)

  return (
    <mesh {...props}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={vertices.length / 3} array={vertices} itemSize={3} />
      </bufferGeometry>
      <meshBasicMaterial color="black" side={THREE.DoubleSide} wireframe={false} />
    </mesh>
  )
}

export default CurvedSurface
