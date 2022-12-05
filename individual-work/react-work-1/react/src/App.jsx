import { useState } from 'react'
import './App.css'
import Project from './Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>

        <div className="headercontent">

          <div className="headerleft">

            <ul>
              <li id="logo">Logo</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfilio</li>
            </ul>

          </div>

          <div className="headerright">
            Contact
          </div>

        </div>

      </header>

      <div className="wrap ">

        <main>

          <div className="portfolio">

            <div className="headline">
              Portfolio
            </div>

            <div className="recent">
              Recent Work
            </div>

          </div>

          <hr />

          <div className="container">

            <Project />
            

            <Project />

          </div>

          <div className="container">

            <Project />

            <Project />

          </div>

          <div className="container">

            <Project />

            <Project />

          </div>

          <div className="copyright">
            Copyright &#169; Example.com 2015
          </div>

        </main>

      </div>
    </div>
  )
}

export default App
