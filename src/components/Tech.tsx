import { motion } from 'framer-motion'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { BallCanvas } from './canvas'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      </motion.div>
      <div className='mt-4 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='h-28 w-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(<Tech />, 'tech')
