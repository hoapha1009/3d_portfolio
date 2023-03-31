import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { slideIn, textVariant } from '../utils/motion'
import RobotCanvas from './canvas/Robot'

// interface ServiceCardProps {
//   title: string
//   icon: string
//   index: number
// }

// const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
//   <ParallaxTilt tiltMaxAngleX={45} tiltMaxAngleY={45} scale={1} transitionSpeed={450} className='w-full xs:w-[250px]'>
//     <motion.div
//       variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//       className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'
//     >
//       <div className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5'>
//         <img src={icon} alt='web-development' className='h-16 w-16 object-contain' />

//         <h3 className='text-center text-[20px] font-bold text-white'>{title}</h3>
//       </div>
//     </motion.div>
//   </ParallaxTilt>
// )

const About = () => {
  return (
    <div id='about' className=''>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className='flex flex-col-reverse gap-10 overflow-hidden xl:flex-row'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='mt-4  flex-[0.75] text-lg leading-[30px] text-secondary'
        >
          I understand that a successful business relies on a great app, and that's where I come in. As a highly skilled
          software developer with expertise in JavaScript, Typescript, React, Next.js. I have the tools and experience
          necessary to create efficient, scalable, and user-friendly solutions that can solve real-world problems. I am
          passionate about learning and collaborating closely with my clients to ensure that their vision is brought to
          life. My goal is to not only meet but exceed your expectations by delivering top-quality results in a timely
          and professional manner. Let's work together to turn your ideas into reality.
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='h-[380px] md:h-[450px] xl:h-auto xl:flex-1'>
          <RobotCanvas />
        </motion.div>
      </div>

      {/* <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  )
}

export default SectionWrapper(<About />, 'about')
