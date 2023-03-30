import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useCurrentScrollingSectionID from '../hooks/useCurrentScrollingSectionID'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { styles } from '../styles'

const SECTION_ID_LIST = navLinks.map((link) => link.id)

const Navbar = () => {
  const [activeId] = useCurrentScrollingSectionID(SECTION_ID_LIST, 76)
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 85) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('handleScroll', handleScroll)

    return () => window.removeEventListener('handleScroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='h-12 w-12 object-contain' />
          <p className='flex cursor-pointer text-[20px] font-bold text-white '>
            HaFa &nbsp;
            <span className='hidden sm:block'> | Web Developer</span>
          </p>
        </Link>

        <ul className='hidden list-none flex-row gap-10 lg:flex'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title || activeId === nav.id ? 'font-semibold text-white' : 'font-medium text-secondary'
              } cursor-pointer text-sm hover:text-white lg:text-base`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='flex flex-1 items-center justify-end lg:hidden'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='h-[28px] w-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className='flex flex-1 list-none flex-col items-start justify-end gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
