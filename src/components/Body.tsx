import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaravel, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import faSvelte from '../assets/images/pngaaa.com-4915832-removebg-preview.png'
import '../assets/css/Home.css'
import Card from './Card';

export default function Body() {
  const cardsData = [
    { icon: faLaravel, title: 'Laravel', content: 'Laravel backend' },
    { icon: faReact, title: 'React', content: 'React frontend' },
    { icon: faVuejs, title: 'Vue.js', content: 'Vue.js frontend' },
    { icon: faSvelte, title: 'Svelte', content: 'Svelte frontend' }
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
