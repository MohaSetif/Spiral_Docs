import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaravel, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { database } from './Postgre';
import faSvelte from '../assets/images/pngaaa.com-4915832-removebg-preview.png'
import Tailwind from '../assets/images/image-invert.png'
import Postgres from '../assets/images/imgbin-computer-icons-postgresql-database-others-SKZhuzreHG59SpDwpJV6M0Yz6-removebg-preview.png'
import '../assets/css/Home.css'
import Card from './Card';

export default function Body() {
  const cardsData = [
    { icon: faLaravel, title: 'Laravel', content: 'PHP framework for swift web development.' },
    { icon: faReact, title: 'React', content: 'JavaScript library for dynamic interfaces.' },
    { icon: faVuejs, title: 'Vue.js', content: 'Versatile JavaScript framework for UIs.' },
    { icon: faSvelte, title: 'Svelte/Sveltekit', content: 'Modern JS frameworks with efficient output.' },
    { icon: Tailwind, title: 'Tailwind', content: 'Utility-based rapid CSS framework packed with classes.' },
    { icon: Postgres, title: 'PostgreSQL', content: 'Robust open-source database system.' },
  ];
  return (
    <>
       <div className="Home">
        <div className="left_content">
          <h2>One Backend, Many <span className='frontends'>Frontends</span></h2>
          <h3>You're a Javascript fan? No problem, Build robust applications in PHP using Laravel as a backend. As a frontend, use React, Vue or even Svelte by pairing Laravel with Inertia or Typescript.</h3>
        </div>
        <div className="right_content">
          <div className="solar_system">
            <div className="sun"><FontAwesomeIcon className='laravel_icon' icon={faLaravel} /></div>
            <div className="first_planet-outline">
              <div className="first_planet"><FontAwesomeIcon className='react_icon' icon={faReact} /></div>
            </div>
        
            <div className="second_planet-outline">
              <div className="second_planet"><FontAwesomeIcon className='vue_icon' icon={faVuejs} /></div>
            </div>
        
            <div className="third_planet-outline">
              <div className="third_planet"><img src={faSvelte} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="configs">
        <div className="code-block-container">
          <SyntaxHighlighter className="code_block" language="php" style={atelierCaveDark}>
            {database}
          </SyntaxHighlighter>
        </div>
        <div className="conf_exp">
          <h2>Code</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem asperiores provident incidunt nulla culpa ea at ipsa ut laborum sit accusamus architecto ad iusto rem veniam libero, temporibus corrupti.</h3>
        </div>
      </div>
      <div id="cards">
          {cardsData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                content={card.content}
              />
          ))}
      </div>
    </>
  )
}
