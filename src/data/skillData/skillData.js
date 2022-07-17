import htmlIcon from './icons/html-5.svg'
import cssIcon from './icons/css-3.svg'
import javascriptIcon from './icons/javascript.svg'

let skillData = [
  {
    name: 'HTML5',
    src: 'fa6-brands:html5',
  },
  {
    name: 'CSS3',
    src: 'fa6-brands:css3-alt',
  },
  {
    name: 'JavaScript',
    src: 'fa6-brands:js',
  },
  {
    name: 'React.js',
    src: 'fa6-brands:react',
  },
  {
    name: 'Next.js',
    src: 'akar-icons:nextjs-fill',
  },
  {
    name: 'Material UI',
    src: 'mdi:material-ui',
  },

  {
    name: 'Styled Components',
    src: 'file-icons:styledcomponents',
  },
  {
    name: 'Sass',
    src: 'fa6-brands:sass',
  },

  // {
  //   name: 'Bootstrap',
  //   src: 'fa6-brands:bootstrap',
  // },
  // {
  //   name: 'Tailwind',
  //   src: 'bxl:tailwind-css',
  // },
  // {
  //   name: 'jQuery',
  //   src: 'akar-icons:jquery-fill',
  // },
  {
    name: 'Git',
    src: 'bi:git',
  },
  {
    name: 'Figma',
    src: 'akar-icons:figma-fill',
  },
  // {
  //   name: 'Adobe XD',
  //   src: 'file-icons:adobe-xd',
  // },
  {
    src: '',
  },
  {
    src: '',
  },
]

let id = 1
skillData.forEach((skill) => (skill.id = `skill-${id++}`))

export default skillData
