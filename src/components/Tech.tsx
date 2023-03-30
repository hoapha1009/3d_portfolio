import { motion } from 'framer-motion'
import ParallaxTilt from 'react-parallax-tilt'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      </motion.div>
      <div className='mt-4 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <div className='h-28 w-28' key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <TechCard index={index} icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

const TechCard = ({ index, icon }: { index: number; icon: string }) => {
  return (
    <ParallaxTilt tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={100} className='h-28 w-28'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}>
        <div className='green-pink-gradient w-full rounded-full p-[1px] shadow-card'>
          <div className='flex flex-col items-center justify-center rounded-full bg-tertiary py-5'>
            <img src={icon} alt={icon} className='h-16 w-16 object-contain ' />
          </div>
        </div>
      </motion.div>
    </ParallaxTilt>
  )
}

export default SectionWrapper(<Tech />, 'tech')
