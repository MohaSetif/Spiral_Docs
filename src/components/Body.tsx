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
        <div className="right_content">
          <SyntaxHighlighter className="code_block" language="php" style={atelierCaveDark}>
            {database}
          </SyntaxHighlighter>
        </div>
        <div className="left_content">
          <h2>Database</h2>
          <h3>Laravel seamlessly integrates with PostgreSQL by configuring the .env file with the PostgreSQL connection details like DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, and DB_PASSWORD. Leveraging Laravel's migration system and eloquent ORM simplifies database setup and management, enabling smooth interaction between the application and PostgreSQL.</h3>
        </div>
      </div>
      <div className="cmd">
        <div className="left_content">
          <h2>Setting up starter kits</h2>
          <h3>
            Remember that they're not all-inclusive templates, you need to install packages for your projects, however, the purpose of this Spiral stack lies on Production Efficiency.
          </h3>
        </div>
        <div className="right_content">
          <div className="console">
            <header>
              <p>owner@randomuser23</p>
            </header>
            <div className="consolebody">
              <p>npx @mohasetif/create-spiral-app</p>
              <pre className="ascii-art">
                <code style={{ color: 'blue' }}>
                  {` ____        _           _   ____  _             _`}
                </code><br />
                <code style={{ color: 'blue' }}>
                  {`/ ___| _ __ (_)_ __ __ _| | / ___|| |_ __ _  ___| | __`}
                </code><br />
                <code style={{ color: '#2700c4' }}>
                  {`\\___ \\| '_ \\| | '__/ _\` | | \\___ \\| __/ _\` |/ __| |/ /`}
                </code><br />
                <code style={{ color: 'purple' }}>
                  {` ___) | |_) | | | | (_| | |  ___) | || (_| | (__|   < `}
                </code><br />
                <code style={{ color: '#c12dba' }}>
                  {`|____/| .__/|_|_|  \\__,_|_| |____/ \\__\\__,_|\\___|_|\\_\\`}
                </code><br />
                <code style={{ color: 'pink' }}>
                  {`      |_|`}
                </code>
              </pre>
              <p><b>{`?`} What project template would you like to generate?</b> (Use arrow keys)</p>
              <div>
                <p className='web_choice'>Laravel</p>
                <p className='active'>{`>`} Laravel-React</p>
                <p className='web_choice'>Laravel-Svelte</p>
                <p className='web_choice'>Laravel-Sveltekit</p>
                <p className='web_choice'>Laravel-Vue</p>
                <p className='web_choice'>Sveltekit-Tailwind</p>
              </div>
              <p><b>{`?`} What project template would you like to generate? </b><p className="active">Laravel-React</p></p>
              <p><b>Choose the variant for Laravel-React: </b></p>
              <div>
                <p className='active'>{`>`} Inertia</p>
                <p className='web_choice'>Typescript</p>
              </div>
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
