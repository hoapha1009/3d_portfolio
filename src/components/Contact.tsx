import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { toast } from 'react-toastify'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Hoang Pham',
          from_email: form.email,
          to_email: 'hafaisworking@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          toast.success('Thank you. I will get back to you as soon as possible.😻😻', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 5000,
            icon: '😻'
          })

          setForm({
            name: '',
            email: '',
            message: ''
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          toast.error('Something went wrong. Please try again.🙀🙀', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 5000,
            icon: '🙀'
          })
        }
      )
  }

  return (
    <div id='contact' className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] rounded-2xl bg-black-100/70 p-8'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary'
            />
          </label>

          <button
            type='submit'
            className='w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none hover:brightness-150'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='h-[350px] md:h-[550px] xl:h-auto xl:flex-1'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(<Contact />, 'contact')
