import './App.css'
import { ReactComponent as Waves } from './svgs/waves.svg'
import { Pivot as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { VscCode } from 'react-icons/vsc'
import { BsPerson } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'
import { IoHomeOutline } from 'react-icons/io5'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import projectImage1 from './project-images-new/estheticsbytay.png'
import projectImage2 from './project-images-new/strong-notes-light.png'
import projectImage3 from './project-images-new/disaster-tracker-zoomed-out.png'
import anime from 'animejs/lib/anime.es.js'
import emailjs from '@emailjs/browser'

function App() {
  const [mobileNav, setMobileNav] = useState(false)
  const [darkMode, setDarkMode] = useState()
  const [atTop, setAtTop] = useState(true)
  const [distanceToTop, setDistanceToTop] = useState(0)
  const [width, setWidth] = useState()
  const [backgroundClicked, setBackgroundClicked] = useState(false)
  const [formSent, setFormSent] = useState(false)

  // Custom cursor code
  useEffect(() => {
    let clickCount = 0
    let moveCount = 0
    let landing = document.querySelector('.landing')
    let welcome = document.querySelector('.welcome')
    let waves = document.querySelector('.waves')
    let nav = document.querySelector('.fixed')
    let section = document.querySelector('#section')
    let cursor = document.querySelector('.cursor')
    let modeBtn = document.querySelector('#modeBtn')
    let modeBtnTwo = document.querySelector('#modeBtnTwo')
    let intro = document.querySelector('.intro')

    const cursorModeToggle = () => {
      if (clickCount % 2 === 0) {
        document.querySelector('.cursor').classList.remove('moving-dark')
        document.querySelector('.cursor').classList.add('moving-light')
      } else {
        document.querySelector('.cursor').classList.remove('moving-light')
        document.querySelector('.cursor').classList.add('moving-dark')
      }
      clickCount++
      console.log(clickCount)
    }
    landing.addEventListener('click', () => {
      cursorModeToggle()
    })
    modeBtn.addEventListener('click', () => {
      cursorModeToggle()
    })
    modeBtnTwo.addEventListener('click', () => {
      cursorModeToggle()
    })

    nav.addEventListener('mouseover', (e) => {
      cursor.style.display = 'none'
    })

    waves.addEventListener('mouseover', () => {
      cursor.style.display = 'none'
    })

    section.addEventListener('mouseover', (e) => {
      cursor.style.display = 'none'
    })

    landing.addEventListener('mousemove', (e) => {
      cursor.style.display = 'initial'

      moveCount++

      var cursorXpos = e.pageX
      var cursorYpos = e.pageY
      var xposToString = String(cursorXpos)
      var lastDigit = xposToString.slice(-1)

      if (clickCount % 2 === 0) {
        document.querySelector('.cursor').classList.add('moving-dark')
      } else {
        document.querySelector('.cursor').classList.add('moving-light')
      }
      document.querySelector(
        '.cursor'
      ).style.transform = `translate(${cursorXpos}px, ${cursorYpos}px)`
    })
  }, [])

  // Form code
  const handleFormSubmit = () => {
    sendForm()
    setFormSent(true)
    document.querySelector('#form').reset()
    setTimeout(() => {
      setFormSent(false)
    }, 5000)
  }

  const sendForm = async () => {
    try {
      await emailjs.sendForm(
        'service_owalq53',
        'template_o9ctw0q',
        document.querySelector('#form'),
        'uBZ-hyKaLFN98CCj3'
      )
    } catch (err) {
      console.log('FORM ERROR', err)
    }
  }

  // Canvas code
  useEffect(() => {
    let landing = document.querySelector('.landing')
    let modeBtn = document.getElementById('modeBtn')
    let modeBtnTwo = document.getElementById('modeBtnTwo')
    let c = document.getElementById('c')
    let ctx = c.getContext('2d')
    var cH = null
    var cW = null
    var bgColor = 'white'
    var animations = []
    var circles = []

    var colorPicker = (function () {
      if (!darkMode) {
        var colors = ['white', 'rgb(39, 39, 42)']
      } else {
        var colors = ['rgb(39, 39, 42)', 'white']
      }

      var index = 0
      function next() {
        index = index++ < colors.length - 1 ? index : 0
        return colors[index]
      }
      function current() {
        return colors[index]
      }
      return {
        next: next,
        current: current,
      }
    })()

    function removeAnimation(animation) {
      var index = animations.indexOf(animation)
      if (index > -1) animations.splice(index, 1)
    }

    function calcPageFillRadius(x, y) {
      var l = Math.max(x - 0, cW - x)
      var h = Math.max(y - 0, cH - y)
      return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2))
    }

    function addClickListeners() {
      landing.addEventListener('touchstart', handleEvent)
      landing.addEventListener('mousedown', handleEvent)
      modeBtn.addEventListener('touchstart', handleEvent)
      modeBtn.addEventListener('mousedown', handleEvent)
      modeBtnTwo.addEventListener('touchstart', handleEvent)
      modeBtnTwo.addEventListener('mousedown', handleEvent)
    }

    function handleEvent(e) {
      if (e.touches) {
        e.preventDefault()
        e = e.touches[0]
      }
      var currentColor = colorPicker.current()
      var nextColor = colorPicker.next()
      var targetR = calcPageFillRadius(e.pageX, e.pageY)
      var rippleSize = Math.min(75, cW * 0.1)
      var minCoverDuration = 750

      var pageFill = new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: nextColor,
      })
      var fillAnimation = anime({
        targets: pageFill,
        r: targetR,
        duration: Math.max(targetR / 1, minCoverDuration),
        easing: 'easeOutQuart',
        complete: function () {
          bgColor = pageFill.fill
          removeAnimation(fillAnimation)
        },
      })

      var ripple = new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: currentColor,
        stroke: {
          width: 3,
          color: currentColor,
        },
        opacity: 1,
      })
      var rippleAnimation = anime({
        targets: ripple,
        r: rippleSize,
        opacity: 0,
        easing: 'easeOutExpo',
        duration: 900,
        complete: removeAnimation,
      })

      var particles = []
      for (var i = 0; i < 32; i++) {
        var particle = new Circle({
          x: e.pageX,
          y: e.pageY,
          fill: currentColor,
          r: anime.random(24, 48),
        })
        particles.push(particle)
      }
      var particlesAnimation = anime({
        targets: particles,
        x: function (particle) {
          return particle.x + anime.random(rippleSize, -rippleSize)
        },
        y: function (particle) {
          return (
            particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15)
          )
        },
        r: 0,
        easing: 'easeOutExpo',
        duration: anime.random(1000, 1300),
        complete: removeAnimation,
      })
      if (e.target.nodeName === 'ARTICLE') {
        animations.push(fillAnimation, rippleAnimation)
      } else {
        animations.push(fillAnimation)
      }
    }

    function extend(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key]
        }
      }
      return a
    }

    var Circle = function (opts) {
      extend(this, opts)
    }

    Circle.prototype.draw = function () {
      ctx.globalAlpha = this.opacity || 1
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
      if (this.stroke) {
        ctx.strokeStyle = this.stroke.color
        ctx.lineWidth = this.stroke.width
        ctx.stroke()
      }
      if (this.fill) {
        ctx.fillStyle = this.fill
        ctx.fill()
      }
      ctx.closePath()
      ctx.globalAlpha = 1
    }

    var animate = anime({
      duration: Infinity,
      update: function () {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, cW, cH)
        animations.forEach(function (anim) {
          anim.animatables.forEach(function (animatable) {
            animatable.target.draw()
          })
        })
      },
    })

    var resizeCanvas = function () {
      cW = window.innerWidth
      cH = window.innerHeight
      c.width = cW * devicePixelRatio
      c.height = cH * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    ;(function init() {
      resizeCanvas()
      if (window.CP) {
        window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000
      }
      window.addEventListener('resize', resizeCanvas)
      addClickListeners()
      if (!!window.location.pathname.match(/fullcpgrid/)) {
        startFauxClicking()
      }
    })()

    function startFauxClicking() {
      setTimeout(function () {
        fauxClick(
          anime.random(cW * 0.2, cW * 0.8),
          anime.random(cH * 0.2, cH * 0.8)
        )
        startFauxClicking()
      }, anime.random(200, 900))
    }

    function fauxClick(x, y) {
      var fauxClick = new Event('mousedown')
      fauxClick.pageX = x
      fauxClick.pageY = y
      document.dispatchEvent(fauxClick)
    }
  }, [])

  // Detect and set light / dark mode accordingly
  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches
  //   ) {
  //     // dark mode
  //     setDarkMode(true)
  //   } else {
  //     setDarkMode(false)
  //   }

  //   window
  //     .matchMedia('(prefers-color-scheme: dark)')
  //     .addEventListener('change', (event) => {
  //       const colorScheme = event.matches ? 'dark' : 'light'
  //       if (colorScheme === 'dark') {
  //         console.log('DARK')
  //         setDarkMode(true)
  //       } else if (colorScheme === 'light') {
  //         console.log('LIGHT')
  //         setDarkMode(false)
  //       }
  //     })
  // }, [])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWidth])

  useEffect(() => {
    if (width >= 1280) {
      closeMobileNav()
    }
  }, [width])

  window.onscroll = () => {
    const position = window.pageYOffset
    setDistanceToTop(position)
    if (position < 100) {
      setAtTop(true)
    } else {
      setAtTop(false)
    }
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

  // useEffect(() => {
  //   console.log(darkMode)
  // }, [darkMode])

  return (
    <div
      className={`overflow-x-hidden ${
        darkMode ? 'dark bg-zinc-800' : 'bg-white'
      }`}>
      <header
        className={`fixed w-screen top-0 z-50 max-h-[100px] cursor-default ${
          atTop
            ? 'bg-transparent text-black dark:text-white'
            : 'bg-white  text-black dark:text-white dark:bg-zinc-800'
        }  px-1 pr-4 sm:px-2 sm:pr-6`}>
        <div className='box' style={{ padding: '15px 15px' }}>
          <div className='flex row justify-start items-center gap-4'>
            <h1
              className='logo text-3xl lg:text-4xl cursor-pointer'
              onClick={() => {
                scrollToTop()
                mobileNav && closeMobileNav()
              }}>
              <span className='text-accent-900'>JS</span>Dev
            </h1>
            <div
              id='modeBtn'
              className='xl:hidden ml-auto text-xs md:text-lg cursor-pointer'
              onMouseDown={(e) => {
                e.stopPropagation()
                toggleDarkMode()
              }}
              onTouchStart={(e) => {
                e.stopPropagation()
                toggleDarkMode()
              }}>
              {darkMode ? (
                <button
                  id='button'
                  className='border py-1 px-2 hover:bg-white hover:text-black'>
                  Light Theme
                </button>
              ) : (
                <button
                  id='button'
                  className='border border-zinc-400 py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                  Dark Theme
                </button>
              )}
            </div>
            <nav className='mobile-nav xl:hidden' onClick={toggleMobileNav}>
              <Hamburger
                direction='left'
                toggled={mobileNav}
                color={darkMode ? 'white' : 'black'}
              />
            </nav>
            <ul className='hidden xl:flex gap-6 text-center items-center text-2xl ml-auto'>
              <li>
                <div
                  onClick={() => {
                    scrollToTop()
                    closeMobileNav()
                  }}
                  className='flex gap-2 items-center cursor-pointer hover:text-accent-900'>
                  Home
                  <span className='text-accent-900'>
                    <IoHomeOutline />
                  </span>
                </div>
              </li>
              <li>
                <a
                  href='#projects'
                  onClick={closeMobileNav}
                  className='flex gap-2 items-center hover:text-accent-900'>
                  Projects
                  <span className=' text-accent-900 '>
                    <VscCode />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  onClick={closeMobileNav}
                  className='flex gap-2 items-center hover:text-accent-900'>
                  About Me
                  <span className=' text-accent-900 '>
                    <BsPerson />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  onClick={closeMobileNav}
                  className='flex gap-2 items-center hover:text-accent-900'>
                  Contact Me{' '}
                  <span className=' text-accent-900 '>
                    <VscMail />
                  </span>
                </a>
              </li>
              <div
                id='modeBtnTwo'
                className='hidden xl:block ml-1 text-xs md:text-lg cursor-pointer'
                onMouseDown={(e) => {
                  e.stopPropagation()
                  toggleDarkMode()
                }}
                onTouchStart={(e) => {
                  e.stopPropagation()
                  toggleDarkMode()
                }}>
                {darkMode ? (
                  <button
                    id='button'
                    className='border py-1 px-2 hover:bg-white hover:text-black'>
                    Light Theme
                  </button>
                ) : (
                  <button
                    id='button'
                    className='border  border-zinc-400 py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                    Dark Theme
                  </button>
                )}
              </div>
            </ul>
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
                className='flex gap-4 items-center cursor-pointer hover:text-accent-900'>
                Home
                <span className='text-accent-900'>
                  <IoHomeOutline />
                </span>
              </div>
            </li>
            <li id='mobile-nav-link' className=''>
              <a
                href='#projects'
                onClick={closeMobileNav}
                className='flex gap-4 items-center hover:text-accent-900'>
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
                className='flex gap-4 items-center hover:text-accent-900'>
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
                className='flex gap-4 items-center hover:text-accent-900'>
                Contact Me{' '}
                <span className=' text-accent-900 '>
                  <VscMail />
                </span>
              </a>
            </li>
          </ul>
        </section>
      )}
      <main className='cursor-none'>
        <div id='cursor' className='cursor'></div>
        <section className='welcome welcome-section min-h-[calc(90vh-100px)] sm:min-h-[calc(98vh-100px)] w-screen relative overflow-hidden dark:text-white bg-transparent'>
          <canvas
            id='c'
            className=' absolute top-0 min-h-[calc(90vh-100px)] sm:min-h-[calc(98vh-100px)] w-full bg-transparent'></canvas>
          <article
            className='landing absolute box w-screen min-h-[calc(90vh-100px)] sm:min-h-[calc(98vh-100px)] text-center grid items-center gap-4 z-20'
            onMouseDown={() => {
              toggleDarkMode()
              setBackgroundClicked(true)
            }}
            onTouchStart={() => {
              toggleDarkMode()
              setBackgroundClicked(true)
            }}>
            <div className='intro select-none py-8 px-4 mb- grid items-center gap-2 md:mb-72 '>
              <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col gap-2'>
                <div>
                  I'm <span className='text-accent-900 '>Jack Stevens</span>
                </div>
              </h2>
              <p className='font-light text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                Web Developer in Orange County, California.
              </p>
              <p
                className={`text-zinc-400 font-light dark:text-zinc-300 text-xs md:text-sm xl:text-base whitespace-nowrap ${
                  backgroundClicked && 'opacity-0'
                }`}
                style={{ transition: 'opacity 1s' }}>
                {'PS: Click the background to change theme!'}
              </p>
            </div>
          </article>
          <aside
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-center cursor-pointer w-max select-none z-30 ${
              distanceToTop < 500 ? 'opacity-100' : 'opacity-40'
            }`}
            onClick={() => {
              scrollToProjects()
            }}>
            <p className='text-zinc-800 dark:text-white dark:opacity-60'>
              Scroll Down
            </p>
            <div className='arrow pb-6 md:pb-6 pt-2'>
              <span className='dark:border-neutral-50 dark:border-opacity-80'></span>
            </div>
          </aside>
          <Waves className='waves absolute -bottom-0 h-[200px] sm:h-auto cursor-default z-20 translate-y-[0.75px]' />
        </section>
        <section
          id='section'
          className='underwater w-screen pt-[140px] bg-transparent dark:text-white dark:bg-zinc-800 cursor-default'
          style={{
            background:
              'linear-gradient(to bottom,rgba(0, 200, 150, 1) 0,rgba(255, 255, 255, 0) 50%)',
          }}>
          <div
            className={` box w-[90vw] md:w-[600px] lg:w-[750px] xl:w-[1024px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col gap-8 text-center lg:text-start mx-auto`}>
            <div id='projects' className='w-screen -translate-y-24'></div>
            <h1 className='pt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 md:mb-24 text-center md:text-start'>
              <span className='mr-2'>{'//'}</span>My Projects
            </h1>
            <section className={`projects flex flex-col gap-20 mb-12`}>
              <article
                id='esthetics-by-tay'
                className='mx-auto project flex flex-col gap-6 border-b border-zinc-800 dark:border-zinc-400 pb-20'>
                <img
                  src={projectImage1}
                  alt=''
                  className={`w-full h-full rounded-sm mx-auto shadow-lg dark:shadow-none`}
                />
                <div className='mx-auto lg:mx-0 skills text-base md:text-lg xl:text-xl flex gap-2 flex-wrap justify-center lg:justify-start uppercase tracking-widest'>
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
                  <span className='bg-accent-900 text-white px-2'>Netlify</span>
                </div>
                <div className='description text-sm sm:text-base md:text-lg flex flex-col gap-3'>
                  <p>
                    • Worked one on one with a client through a design phase
                    using Figma before building a functional website that they
                    felt best represented their brand.
                  </p>
                  <p>• Site uses fullPage.js for fullscreen navigation.</p>
                </div>
                <div className='project-buttons flex gap-4 text-base md:text-lg justify-center lg:justify-start'>
                  <button
                    onClick={() => {
                      window.open(
                        'https://github.com/Jakalanern/Taylor-Esthetician-Site'
                      )
                    }}
                    id='button'
                    className='border border-zinc-800 dark:border-zinc-100 px-2 hover:bg-accent-900 hover:border-white hover:text-white dark:hover:bg-accent-900  dark:hover:border-black dark:hover:text-white'>
                    Code
                  </button>
                  <button
                    onClick={() => {
                      window.open('https://www.estheticsbytay.com')
                    }}
                    id='button'
                    className='border border-zinc-800 dark:border-zinc-100 px-2 hover:bg-accent-900 hover:border-white hover:text-white dark:hover:bg-accent-900  dark:hover:border-black dark:hover:text-white'>
                    Demo
                  </button>
                </div>
              </article>
              <article
                id='strong-notes'
                className='mx-auto project flex flex-col gap-6 border-b border-zinc-300 dark:border-zinc-600 pb-20'>
                <img
                  src={projectImage2}
                  alt=''
                  className={`w-full h-full rounded-sm mx-auto shadow-lg dark:shadow-none`}
                />
                <div className='mx-auto lg:mx-0 skills text-base md:text-lg flex gap-2 flex-wrap justify-center lg:justify-start uppercase tracking-widest'>
                  <span className='bg-accent-900 text-white px-2'>HTML</span>
                  <span className='bg-accent-900 text-white px-2'>CSS</span>
                  <span className='bg-accent-900 text-white px-2'>
                    Tailwind
                  </span>
                  <span className='bg-accent-900 text-white px-2'>
                    JavaScript
                  </span>
                  <span className='bg-accent-900 text-white px-2'>React</span>
                  <span className='bg-accent-900 text-white px-2'>
                    GitHub Pages
                  </span>
                  <span className='bg-accent-900 text-white px-2'>
                    Firebase
                  </span>
                </div>
                <div className='description text-sm sm:text-base md:text-lg flex flex-col gap-3'>
                  <p>
                    • A weight lifting & workout tracking application w/
                    database.
                  </p>
                  <p>
                    • Input individual exercises, save them as a workout, and
                    view a history of all workouts filtered by date.
                  </p>
                  <p className='whitespace-nowrap'>
                    • Dark / light theme toggle.
                  </p>
                  <p className='whitespace-nowrap'>• Powered by Firebase.</p>
                </div>
                <div className='project-buttons flex gap-4 text-base md:text-lg justify-center lg:justify-start'>
                  <button
                    onClick={() => {
                      window.open('https://github.com/Jakalanern/strong-notes')
                    }}
                    id='button'
                    className='border border-zinc-400 dark:border-zinc-100 px-2 hover:bg-accent-900 hover:border-white hover:text-white dark:hover:bg-accent-900  dark:hover:border-black dark:hover:text-white'>
                    Code
                  </button>
                  <button
                    onClick={() => {
                      window.open('https://strong-notes.vercel.app/')
                    }}
                    id='button'
                    className='border border-zinc-400 dark:border-zinc-100 px-2 hover:bg-accent-900 hover:border-white hover:text-white dark:hover:bg-accent-900  dark:hover:border-black dark:hover:text-white'>
                    Demo
                  </button>
                </div>
              </article>
              <article
                id='disaster-tracker'
                className='mx-auto project flex flex-col gap-6 border-b border-zinc-300 dark:border-zinc-600 pb-20'>
                <img
                  src={projectImage3}
                  alt=''
                  className={`w-full h-full rounded-sm mx-auto shadow-lg dark:shadow-none`}
                />
                <div className='mx-auto lg:mx-0 skills text-base md:text-lg flex gap-2 flex-wrap justify-center lg:justify-start uppercase tracking-widest'>
                  <span className='bg-accent-900 text-white px-2'>HTML</span>
                  <span className='bg-accent-900 text-white px-2'>CSS</span>
                  <span className='bg-accent-900 text-white px-2'>
                    JavaScript
                  </span>
                  <span className='bg-accent-900 text-white px-2'>React</span>
                  <span className='bg-accent-900 text-white px-2'>Next.js</span>
                  <span className='bg-accent-900 text-white px-2'>
                    Styled Components
                  </span>
                  <span className='bg-accent-900 text-white px-2'>Figma</span>
                  <span className='bg-accent-900 text-white px-2'>Vercel</span>
                </div>
                <div className='description text-sm sm:text-base md:text-lg flex flex-col gap-3'>
                  <p>
                    • Displays a map of current natural disaster activity using
                    NASA's EONET API.
                  </p>
                  <p>
                    • Application will fetch new data when user selects a
                    different disaster to view.
                  </p>
                  <p>
                    • Event icons can be clicked to display a tooltip with more
                    info and a source link if available.
                  </p>
                  <p>
                    • Includes a donation link for those affected by wildfires.
                  </p>
                </div>
                <div className='project-buttons flex gap-4 text-base md:text-lg justify-center lg:justify-start'>
                  <button
                    onClick={() => {
                      window.open(
                        'https://github.com/Jakalanern/jacks-disaster-tracker'
                      )
                    }}
                    id='button'
                    className='border border-zinc-400 dark:border-zinc-100 px-2 hover:bg-accent-900 hover:border-white hover:text-white dark:hover:bg-accent-900  dark:hover:border-black dark:hover:text-white'>
                    Code
                  </button>
                  <button
                    onClick={() => {
                      window.open('http://jacks-disaster-tracker.vercel.app/')
                    }}
                    id='button'
                    className='border border-zinc-400 dark:border-zinc-100 px-2 hover:bg-accent-900 hover:border-white hover:text-white dark:hover:bg-accent-900  dark:hover:border-black dark:hover:text-white'>
                    Demo
                  </button>
                </div>
              </article>
            </section>
          </div>
        </section>
        <section className='underwater w-screen pt-8  bg-transparent dark:text-white dark:bg-zinc-800 cursor-auto '>
          <div id='about' className='w-screen -translate-y-24'></div>
          <div
            className={` w-[90vw] md:w-[600px] lg:w-[750px] xl:w-[1024px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col gap-8 text-center lg:text-start mx-auto`}>
            <div className='w-screen -translate-y-24'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-12 '>
              <span className='text-accent-900 mr-2'>{'//'}</span>About Me
            </h1>

            <article className='text-sm sm:text-base md:text-lg text-center md:text-start flex flex-col gap-4 border-b border-zinc-300 dark:border-zinc-600 pb-20'>
              <p>
                I'm a frontend developer with a passion for building functional
                and attractive websites and web applications.
              </p>
              <p>
                Technology, computers, and art have always been a major interest
                in my life. I spent my younger years both as a lead caricature
                artist and a freelance digital portrait artist before deciding
                to learn web development.
              </p>
              <p>
                From there, I found a passion for programming and the act of
                building websites as a whole. I'm eager to learn something new
                every day and I hope to provide value with my skills to whomever
                I can.
              </p>
              <p>
                In my free time I love to surf, draw & paint portraits, and
                spend time with my fiancé, my dog Ziggy, and my family.
              </p>
            </article>
          </div>
        </section>
        <section
          className='underwater w-screen  bg-transparent dark:text-white dark:bg-zinc-800 cursor-auto pt-20 '
          style={{
            background:
              'linear-gradient(to top ,rgba(0, 200, 150, .1) ,rgba(255, 255, 255, 0) 100%)',
          }}>
          <div id='contact' className='w-screen -translate-y-24'></div>

          <div
            className={` w-[90vw] md:w-[600px] lg:w-[750px] xl:w-[1024px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col gap-8 text-center lg:text-start mx-auto pb-20`}>
            <div className='w-screen -translate-y-24'></div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-12 '>
              <span className='text-accent-900 mr-2'>{'//'}</span>Contact Me
            </h1>
            <div className='box flex flex-col lg:flex-row text-sm sm:text-base md:text-lg justify-between gap-12 lg:gap-0'>
              <div className='flex flex-col justify-center gap-4'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                  Get in touch!
                </h1>
                <div className='any-questions'>
                  <p>Have any questions?</p>
                  <p>Shoot me an email, I'd be happy to hear from you.</p>
                </div>
                <div className='some-socials flex flex-col gap-2 mt-4 md:mt-10'>
                  <p>{'// Some socials'}</p>
                  <div className='social-buttons text-2xl md:text-4xl flex gap-4 justify-center lg:justify-start'>
                    <button
                      onClick={() => {
                        window.open(
                          'https://www.linkedin.com/in/jack-withers-stevens'
                        )
                      }}>
                      <FaLinkedinIn className='hover:text-accent-900' />
                    </button>
                    <button
                      onClick={() => {
                        window.open('https://github.com/Jakalanern')
                      }}>
                      <FaGithub className='hover:text-accent-900' />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <form
                  id='form'
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleFormSubmit()
                  }}
                  className='text-base sm:text-lg md:text-xl flex flex-col gap-2 p-6 border-2 border-black dark:border-white mx-2 lg:w-[400px] xl:w-auto'>
                  {formSent && (
                    <aside className='text-center text-sm sm:text-base md:text-lg flex flex-col gap-2 mb-2'>
                      <p className='whitespace-nowrap'>
                        Your message was sent.
                      </p>
                      <p className='whitespace-nowrap mb-1'>Thank you!</p>
                      <div className='bar-container'>
                        <div className='progress-container'>
                          <div className='progress-bar'></div>
                        </div>
                      </div>
                    </aside>
                  )}
                  <input
                    placeholder='Name'
                    type='text'
                    name='name'
                    className='border border-black dark:border-white dark:placeholder-zinc-400 p-2 rounded-none'
                  />
                  <input
                    placeholder='Email'
                    type='email'
                    name='email'
                    className='border border-black dark:border-white dark:placeholder-zinc-400 p-2 rounded-none'
                  />
                  <textarea
                    placeholder='Message'
                    name='message'
                    cols='30'
                    rows='10'
                    className='border border-black dark:border-white dark:placeholder-zinc-400 p-2 rounded-none'></textarea>
                  <button className='w-full px-2 py-1 bg-white text-black border border-black dark:border-white hover:bg-accent-100 dark:hover:bg-white  dark:hover:text-black dark:bg-transparent dark:text-white uppercase tracking-wider'>
                    Send
                  </button>
                </form>
              </div>
            </div>
            <article className='text-lg md:text-xl text-center md:text-start flex flex-col gap-4'></article>
          </div>
          <footer className='px-4 text-center pt-22 lg:pt-32 pb-12 text-base sm:text-lg md:text-xl flex flex-col gap-4 dark:text-white'>
            <h1>© 2022 Jack Stevens. All rights reserved.</h1>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
