import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CanvasLoader from '../Loader'
import useCheckIsMobile from '../../hooks/useCheckIsMobile'

type RobotProps = {
  isMobile: boolean
}

const Robot = ({ isMobile }: RobotProps) => {
  const robot = useGLTF('./robot/scene.gltf')

  return <primitive object={robot.scene} scale={isMobile ? 1.4 : 2} position-y={-1.8} rotation-y={0} />
}

const RobotCanvas = () => {
  const [isMobile] = useCheckIsMobile()

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-1, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Robot isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default RobotCanvas
