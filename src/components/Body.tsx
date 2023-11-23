import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaravel, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import '../assets/css/Home.css'

export default function Body() {
  return (
    <div className="Home">
        <div className="left_content">
          <h2>One Backend, Many Frontends</h2>
          <h3>You're a Javascript fan? No problem, Build robust, full-stack applications in PHP using Laravel and Livewire. Love JavaScript? Build a monolithic React, Vue or Svelte driven frontend by pairing Laravel with Inertia or Typescript.</h3>
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
              <div className="third_planet"></div>
            </div>
          </div>
        </div>
      </div>
  )
}
