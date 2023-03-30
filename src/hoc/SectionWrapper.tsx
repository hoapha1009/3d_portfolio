import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (children: ReactElement, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {children}
      </motion.section>
    )
  }

export default SectionWrapper
