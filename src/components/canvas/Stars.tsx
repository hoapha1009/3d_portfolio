import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.cjs'

interface StarsProps {}

const Stars = (props: StarsProps) => {
  const ref = useRef<any>(null)
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }) || 0)

  useFrame((state, delta) => {
    if (ref.current) {
      // Add a null check to prevent accessing ref.current when it's null
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as any} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color='#f272c8' size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='absolute inset-0 z-[-1] h-auto w-full'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
