import './App.css'
import { ReactComponent as Waves } from './svgs/waves.svg'
import { Pivot as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { VscCode } from 'react-icons/vsc'
import { BsPerson } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'
import { IoHomeOutline } from 'react-icons/io5'
import projectImage1 from './project-images/esthetics_by_tay.png'
import projectImage2 from './project-images/disaster-tracker.png'

function App() {
  const [mobileNav, setMobileNav] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [distanceToTop, setDistanceToTop] = useState(0)

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      // dark mode
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const colorScheme = event.matches ? 'dark' : 'light'
        if (colorScheme === 'dark') {
          console.log('DARK')
          setDarkMode(true)
        } else if (colorScheme === 'light') {
          console.log('LIGHT')
          setDarkMode(false)
        }
      })
  }, [])

  window.onscroll = () => {
    const position = window.pageYOffset
    setDistanceToTop(position)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const scrollToProjects = () => {
    window.location.href = '#projects'
  }

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  const closeMobileNav = () => {
    setMobileNav(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={` ${darkMode ? 'dark bg-zinc-800' : 'bg-white'}`}>
      <header className='sticky top-0 z-50 max-h-[69px] bg-white dark:text-white dark:bg-zinc-800'>
        <div className='box' style={{ padding: '5px 15px' }}>
          <div className='flex row justify-start items-center gap-4'>
            <h1 className='logo text-3xl lg:text-4xl' onClick={scrollToTop}>
              <span className='text-accent-900'>JS</span>Dev
            </h1>
            <div
              className='ml-auto text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
              onClick={() => {
                toggleDarkMode()
              }}>
              {darkMode ? <FiSun /> : <FiMoon />}
            </div>
            <nav className='mobile-nav' onClick={toggleMobileNav}>
              <Hamburger
                direction='left'
                toggled={mobileNav}
                color={darkMode ? 'white' : 'black'}
              />
            </nav>
          </div>
        </div>
      </header>
      {mobileNav && (
        <section
          id='mobile-nav'
          className='fixed top-0 h-screen w-screen bg-white z-40 grid items-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white dark:bg-zinc-800'>
          <ul className='flex flex-col gap-12 text-center items-center'>
            <li id='mobile-nav-link'>
              <div
                onClick={() => {
                  scrollToTop()
                  closeMobileNav()
                }}
                className='flex gap-4 items-center'>
                Home
                <span className=' text-accent-900 '>
                  <IoHomeOutline />
                </span>
              </div>
            </li>
            <li id='mobile-nav-link' className=''>
              <a
                href='#projects'
                onClick={closeMobileNav}
                className='flex gap-4 items-center'>
                Projects{' '}
                <span className=' text-accent-900 '>
                  <VscCode />
                </span>
              </a>
            </li>
            <li id='mobile-nav-link'>
              <a
                href='#about'
                onClick={closeMobileNav}
                className='flex gap-4 items-center'>
                About Me
                <span className=' text-accent-900 '>
                  <BsPerson />
                </span>
              </a>
            </li>
            <li id='mobile-nav-link'>
              <a
                href='#contact'
                onClick={closeMobileNav}
                className='flex gap-4 items-center'>
                Contact Me{' '}
                <span className=' text-accent-900 '>
                  <VscMail />
                </span>
              </a>
            </li>
          </ul>
        </section>
      )}
      <main>
        <section className='welcome-section min-h-[calc(90vh-69px)] sm:min-h-[calc(98vh-69px)] w-screen relative overflow-hidden dark:text-white bg-transparent'>
          <article className='box w-screen min-h-[calc(90vh-69px)] sm:min-h-[calc(98vh-69px)] text-center grid items-center gap-4'>
            <div className='py-8 px-4 mb-32 grid items-center gap-2'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col gap-2'>
                <div>
                  I'm <span className='text-accent-900 '>Jack Stevens</span>
                </div>
              </h2>
              <p className='font-light text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                Web Developer in Orange County, California.
              </p>
            </div>
          </article>
          <aside
            className={`absolute bottom-0 w-screen text-center z-20 ${
              distanceToTop < 200
                ? 'opacity-100'
                : distanceToTop < 300
                ? 'opacity-30'
                : 'opacity-10'
            }`}
            onClick={() => {
              scrollToProjects()
            }}>
            <p className='text-zinc-600 dark:text-white dark:opacity-60'>
              Scroll Down
            </p>
            <div className='arrow pb-16 md:pb-4 pt-2'>
              <span className='dark:border-neutral-50 dark:border-opacity-40'></span>
            </div>
          </aside>
          <Waves className='absolute bottom-0 h-[200px] sm:h-auto' />
        </section>
        <section
          id='projects'
          className=' w-screen pt-[160px] dark:text-white bg-transparent dark:text-white dark:bg-zinc-800'
          style={{
            background:
              'linear-gradient(to bottom,rgba(0, 200, 150, 0.7) 0,rgba(255, 255, 255, 0) 50%)',
          }}>
          <div className='box text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col gap-8  text-center'>
            <h1>My Projects</h1>
            <section className='projects flex flex-col gap-8 mb-12'>
              <article className='w-[325px] mx-auto project flex flex-col gap-6'>
                <img
                  src={projectImage1}
                  alt=''
                  className='w-[325px] h-[325px] rounded-sm mx-auto'
                />
                <div className='mx-auto skills text-lg flex gap-2 flex-wrap justify-center'>
                  <span className='bg-accent-900 text-white px-2'>HTML</span>
                  <span className='bg-accent-900 text-white px-2'>CSS</span>
                  <span className='bg-accent-900 text-white px-2'>
                    JavaScript
                  </span>
                  <span className='bg-accent-900 text-white px-2'>React</span>
                  <span className='bg-accent-900 text-white px-2'>
                    Styled Components
                  </span>
                  <span className='bg-accent-900 text-white px-2'>Figma</span>
                </div>
                <div className='description text-lg'>
                  <p>
                    Worked one on one with a client through a design phase using
                    Figma before building a functional website that they felt
                    best represented their brand.
                  </p>
                </div>
                <div className='project-buttons flex gap-4 text-xl justify-center'>
                  <button
                    id='button'
                    className='border border-zinc-400 dark:border-zinc-100 px-2'>
                    Code
                  </button>
                  <button
                    id='button'
                    className='border border-zinc-400 dark:border-zinc-100 px-2'>
                    Demo
                  </button>
                </div>
                <hr />
              </article>
              <article className='w-[325px] mx-auto project flex flex-col gap-6'>
                <img
                  src={projectImage2}
                  alt=''
                  className='w-[325px] h-[325px] rounded-sm mx-auto'
                />
                <div className='mx-auto skills text-lg flex gap-2 flex-wrap justify-center'>
                  <span className='bg-accent-900 text-white px-2'>HTML</span>
                  <span className='bg-accent-900 text-white px-2'>CSS</span>
                  <span className='bg-accent-900 text-white px-2'>
                    JavaScript
                  </span>
                  <span className='bg-accent-900 text-white px-2'>React</span>
                  <span className='bg-accent-900 text-white px-2'>
                    Styled Components
                  </span>
                  <span className='bg-accent-900 text-white px-2'>Figma</span>
                </div>
                <div className='description text-lg'>
                  <p>
                    Worked one on one with a client through a design phase using
                    Figma before building a functional website that they felt
                    best represented their brand.
                  </p>
                </div>
                <div className='project-buttons flex gap-4 text-xl justify-center'>
                  <button
                    id='button'
                    className='border border-zinc-400 dark:border-zinc-100 px-2'>
                    Code
                  </button>
                  <button
                    id='button'
                    className='border border-zinc-400 dark:border-zinc-100 px-2'>
                    Demo
                  </button>
                </div>
                <hr />
              </article>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
