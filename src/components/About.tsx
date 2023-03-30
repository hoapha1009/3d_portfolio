import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

// interface ServiceCardProps {
//   title: string
//   icon: string
//   index: number
// }

// const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
//   <Tilt
//     className='w-full xs:w-[250px]'
//     options={{
//       max: 45,
//       scale: 1,
//       speed: 450
//     }}
//   >
//     <motion.div
//       variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//       className='green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card'
//     >
//       <div className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5'>
//         <img src={icon} alt='web-development' className='h-16 w-16 object-contain' />

//         <h3 className='text-center text-[20px] font-bold text-white'>{title}</h3>
//       </div>
//     </motion.div>
//   </Tilt>
// )

const About = () => {
  return (
    <div className='container'>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 max-w-4xl text-[17px] leading-[30px] text-secondary'>
        Highly motivated and skilled front-end developer with nearly 2 years of experience building and implementing
        user-friendly and visually appealing websites. Proficient in HTML, CSS, JavaScript and Typescript. Strong
        ability to create responsive design and cross-browser compatibility. Experience in working with popular
        front-end frameworks such as React and NextJS. Ability to work efficiently in a fast-paced environment and
        deliver projects on time and within budget. Strong problem-solving skills and attention to detail. Committed to
        staying up-to-date with the latest front-end technologies and industry trends.
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  )
}

export default SectionWrapper(<About />, 'about')