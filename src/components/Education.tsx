import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { education } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

interface EducationCardProps {
  education: {
    title: string
    school_name: string
    date: string
    icon: string
    iconBg: string
    diploma: string
    point: string
  }
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff'
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className='flex h-full w-full items-center justify-center'>
          <img
            src={education.icon}
            alt={education.school_name}
            className='h-[60%] w-[60%] rounded-full object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold text-white'>{education.title}</h3>
        <p className='text-[16px] font-semibold text-secondary' style={{ margin: 0 }}>
          {education.school_name}
        </p>
        <p className='text-[14px] font-semibold text-secondary' style={{ margin: 0 }}>
          {`${education.diploma} (${education.point})`}
        </p>
      </div>
    </VerticalTimelineElement>
  )
}

const Education = () => {
  return (
    <div id='education'>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText} text-center`}>What I have achieved so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((item, index) => (
            <EducationCard key={`education-${index}`} education={item} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(<Education />, 'education')
