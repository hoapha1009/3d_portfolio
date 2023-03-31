import { motion } from 'framer-motion'
import ParallaxTilt from 'react-parallax-tilt'
import { github } from '../assets'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  index: number
  name: string
  description: string
  tags: { name: string; color: string }[]
  image: string
  source_code_link: string
  live_demo_link: string
}

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <ParallaxTilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1}
        transitionSpeed={150}
        className='flex h-full w-full flex-col justify-between rounded-2xl bg-tertiary p-5 sm:w-[360px]'
      >
        <div className='flex-1'>
          <div className='relative w-full'>
            <Link to={live_demo_link} target='_blank' className=''>
              <img src={image} alt={name} className='h-full w-full rounded-2xl object-cover' />
            </Link>

            <div className='card-img_hover absolute inset-0 m-3 flex justify-end'>
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className='black-gradient flex h-10 w-10 items-center justify-center rounded-full'
              >
                <img src={github} alt='source code' className='h-1/2 w-1/2 object-contain' />
              </div>
            </div>
          </div>

          <Link to={live_demo_link} target='_blank' className='h-full pt-5'>
            <h3 className='text-[24px] font-bold text-white'>{name}</h3>
            <p className='mt-2 text-[14px] text-secondary'>{description}</p>
          </Link>
        </div>

        <Link to={live_demo_link} target='_blank' className='flex flex-wrap gap-2 pt-4'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </Link>
      </ParallaxTilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div id='projects'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Personal Projects.</h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary'
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(<Works />, '')
