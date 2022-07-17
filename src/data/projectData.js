import ticTacImg from '../sites-2022/tic-tac-toe.png'
import flashCardImg from '../sites-2022/flash-cards.png'
import budgetImg from '../sites-2022/budget.png'
import notesImg from '../sites-2022/notes.png'
import weatherImg from '../sites-2022/weather.png'
import reactTodoImg from '../sites-2022/react-todo-2.png'
import calculatorImg from '../sites-2022/calculator.png'
import hangmanImg from '../sites-2022/hangman.png'
import groceryImg from '../sites-2022/grocery.png'
import brickBreakerImg from '../sites-2022/brick-breaker.png'
import tipCalculatorImg from '../sites-2022/tip-calculator.png'
import portfolioImg from '../sites-2022/dev-portfolio.png'
import bmrImg from '../sites-2022/bmr.png'
import artfolioImg from '../sites-2022/artfolio.png'
import estheticsImg from '../sites-2022/esthetics_by_tay.png'
import disasterImg from '../sites-2022/disaster-tracker.png'

const data = [
  {
    title: 'Disaster Tracker',
    desc: 'Fetches data from an API to display a map of current natural disaster activity. Also fetches new data on state change when the user picks a different disaster category to view from the top navigation. Individual event icons can be clicked to view more detailed information in an animated tooltip. Features conditional rendering, useState, useEffect, mapping data to render multiple components, and more. Fully responsive for all devices.',
    img: disasterImg,
    id: 21,
    type: 'Featured',
    code: 'https://github.com/Jakalanern/jacks-disaster-tracker/tree/master',
    demo: 'https://jacks-disaster-tracker.vercel.app/',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Next', 'Material-UI'],
  },
  {
    title: 'Esthetics by Tay',
    desc: 'Worked one-on-one with a client through each phase of their project, including a design phase using Figma before building a functional website that they felt best represented their brand. Features fullPage.js, responsive media queries inside styled components, conditional rendering, an information dropdown for their services built from scratch, and more.',
    img: estheticsImg,
    id: 20,
    type: 'Featured',
    code: '',
    demo: 'https://www.estheticsbytay.com',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Styled-Components', 'Figma'],
  },
  {
    title: 'Dev Portfolio',
    desc: 'Built with React. Includes many functional components, useState to manage project data, filter functions for project data using high order functions along with useState, css animations, react router, framer-motion, and more!',
    img: portfolioImg,
    id: 0,
    type: 'Portfolio Featured',
    demo: '',
    code: 'https://github.com/Jakalanern/Development-Portfolio-REACT',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Styled-Components'],
  },
  {
    title: 'Todo List',
    desc: 'Features a completion system on click, individually removable todos, uses local storage and was built using functional components, props, useState, useEffect, and more.',
    img: reactTodoImg,
    id: 2,
    type: 'Featured',
    demo: 'https://react-todo-list-5-28-22.netlify.app/',
    code: 'https://github.com/Jakalanern/REACT-todo-List',
    skills: ['HTML', 'CSS', 'JS', 'React'],
  },
  {
    title: 'Notes App',
    desc: 'Includes a note creation page, fullscreen modal to view each note, editable notes, deleteable notes, settings menu where you can change accent color, and all of it is stored on your local machine using local storage.',
    img: notesImg,
    id: 4,
    type: 'Featured',
    demo: 'https://jakalanern.github.io/Jack-Notes/',
    code: 'https://github.com/Jakalanern/Jack-Notes',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Tic-Tac-Toe',
    desc: 'Includes player name input screens, a persistent score tracking system, sound effects, a sound on/off toggle button, dynamic animations, scoreboard with player name display, win screen with animations / sounds, loss animations / sounds, draw with sounds, a clear board button, a full game & score reset button, and more. Built with vanilla JS.',
    img: ticTacImg,
    id: 5,
    type: 'Featured Game',
    demo: 'https://jakalanern.github.io/Tic-Tac-Toe/',
    code: 'https://github.com/Jakalanern/Tic-Tac-Toe',
    skills: ['HTML', 'CSS', 'JS'],
  },
  // {
  //   title: 'Flashcard App',
  //   desc: "Uses an array of objects to store the information of each card the user creates, then iterates through them to create new flashcard elements on the page whenever the 'Create Card' form is submitted. Each card has a hidden answer which can be revealed with a toggle. Each card is fully editable and removable as well.",
  //   img: flashCardImg,
  //   id: 8,
  //   type: 'App',
  //   demo: 'https://jakalanern.github.io/Challenge-15-Flash-Card-Challenge/',
  //   code: 'https://github.com/Jakalanern/Challenge-15-Flash-Card-Challenge',
  //   skills: ['HTML', 'CSS', 'JS'],
  // },
  {
    title: 'Expense Tracker',
    desc: 'Expense Calculator built from scratch using HTML, CSS, and JavaScript! Features trackable expenses that append themselves to a list. Each expense is fully editable and removable. All expenses added or removed will be calculated into remaining balance based off of the overall budget specified!',
    img: budgetImg,
    id: 9,
    type: 'Utility',
    demo: 'https://jakalanern.github.io/Challenge-16-Budget-Application-Intermediate/',
    code: 'https://github.com/Jakalanern/Challenge-16-Budget-Application-Intermediate',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'My Art Portfolio',
    desc: 'Built with HTML, CSS, and JS. Created a website with a gallery of my drawings and portrait paintings. All of the drawings and paintings are done by me by hand. Either digitally or traditionally.',
    img: artfolioImg,
    id: 1,
    type: 'Portfolio',
    demo: 'https://jakalanern.github.io/Artfolio',
    code: 'https://github.com/Jakalanern/Artfolio',
    skills: ['HTML', 'CSS', 'JS'],
  },
  // {
  //   title: 'Weather App',
  //   desc: 'Weather app built from scratch using HTML, CSS, and JavaScript! Features a functioning search bar where you can search any city in the world and recieve the weather. Utilizes an API to fetch the weather data and display it on the page.',
  //   img: weatherImg,
  //   id: 3,
  //   type: 'App',
  //   demo: 'https://jakalanern.github.io/Weather/',
  //   code: 'https://github.com/Jakalanern/Weather',
  //   skills: ['HTML', 'CSS', 'JS'],
  // },
  {
    title: 'Brick Breaker',
    desc: "Fun challenge to re-create the 'Brick-Breaker' game from scratch using the canvas element and collision functions! I implemented many custom features such as the pause system, pause screen, sounds, sound toggle system with button control, win/loss conditions, score counter, life counter, DARK / LIGHT themes with button control, game difficuly, etc!",
    img: brickBreakerImg,
    id: 6,
    type: 'Game',
    demo: 'https://jakalanern.github.io/Challenge-20-Bricker-Breaker-Game/',
    code: 'https://github.com/Jakalanern/Challenge-20-Bricker-Breaker-Game',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Hangman',
    desc: 'Built from scratch with HTML, CSS, and JavaScript. Game features fully randomized words to guess which are fetched from an API, keydown listeners for inputting letters, wrong letter tracking with display, a score system, and win/loss screens.',
    img: hangmanImg,
    id: 7,
    type: 'Game',
    demo: 'https://jakalanern.github.io/Challenge-21-Hangman-Game/',
    code: 'https://github.com/Jakalanern/Challenge-21-Hangman-Game',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Calculator',
    desc: 'Fully functioning calculator built from scratch with HTML, CSS, and JavaScript! All operations are possible using this calculator, supports floating point numbers, and includes a clear button.',
    img: calculatorImg,
    id: 10,
    type: 'Utility',
    demo: 'https://jakalanern.github.io/Challenge-10-Calculator/',
    code: 'https://github.com/Jakalanern/Challenge-10-Calculator',
    skills: ['HTML', 'CSS', 'JS'],
  },
  // {
  //   title: 'Grocery List',
  //   desc: 'Grocery List built from scratch with HTML, CSS, and JavaScript! Web app that allows you to create any grocery item you like and append them to a list. Also provides feedback to the user with a message upon item submit, item remove, and full clear!',
  //   img: groceryImg,
  //   id: 11,
  //   type: 'App',
  //   demo: 'https://jakalanern.github.io/Challenge-13-Grocery-List/',
  //   code: 'https://github.com/Jakalanern/Challenge-13-Grocery-List',
  //   skills: ['HTML', 'CSS', 'JS'],
  // },
  {
    title: 'Tip Calculator',
    desc: 'Built from scratch using HTML, CSS, and JavaScript! This utility allows you to enter your bill amount, amount of people sharing the bill, and your opinion on service quality. When you press calculate it calculates individual bill prices and tip costs for each individual person at the table!',
    img: tipCalculatorImg,
    id: 12,
    type: 'Utility',
    demo: 'https://jakalanern.github.io/Challenge-11-Tip-Calculator/',
    code: 'https://github.com/Jakalanern/Challenge-11-Tip-Calculator',
    skills: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'BMR Calculator',
    desc: 'Built from scratch using HTML, CSS, and JavaScript! This utility allows you to enter your gender, age, height, and weight. Behind the scenes the utility will calculate your BMR (Basal Metabolic Rate) and display it for you!',
    img: bmrImg,
    id: 13,
    type: 'Utility',
    demo: 'https://jakalanern.github.io/BMR-Calculator/',
    code: 'https://github.com/Jakalanern/BMR-Calculator',
    skills: ['HTML', 'CSS', 'JS'],
  },
]

export default data
