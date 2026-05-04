import styles from "./page.module.css";
import { Header } from "./components"
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import Social from "./components/Social"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faMdb, faGit, faBootstrap, faPhp, faLaravel, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div className={styles.main}>
      <header>
        <Header />
        <div className="hero">
          <div className="left-hero">
            <div>
              <div>Freelance Developer</div>
              <h1>Talk is cheap. <br /> Show me the code</h1>
              <p>I design and code high quality UI/UX,
                high efficient server, <br />
                and i like what i do.
              </p>
              <a href="#">LET&apos;S CHAT!</a>
            </div>
            <div>
              <div> <h2>9</h2> <span>YEARS <br /> EXPERIENCE</span> </div>
              <div> <h2>36</h2> <span>PROJECTS COMPLETED <br /> WITHIN RANGE</span> </div>
            </div>
          </div>
          <div className="right-hero">
            <img src="/me.png" alt="" />
          </div>
          {/* <div></div> */}
        </div>
      </header>
      <div className="main">
        <section>
          <div className="services">
            <div className="cards">
              <div className={styles.card}>
                <div><span>Design</span> <BrushIcon /></div>
                <p>Making clean interfaces with a sharp eye for detail.</p>
                <div>read more</div>
              </div>
              <div className={styles.card}>
                <div><span>Frontend</span> <ViewQuiltIcon /></div>
                <p>Building fast, responsive web apps that work on any device.</p>
                <div>read more</div>
              </div>
              <div className={styles.card}>
                <div><span>Backend</span> <StorageIcon /></div>
                <p>Designing scalable APIs and server side systems.</p>
                <div>read more</div>
              </div>
            </div>
            <div className="about-me">
              <span className="subtitle">more about me</span>
              <h2>Hello! I&apos;m Arman <br /> Grema</h2>
              <h5>Every great product begin with an even better story </h5>
              <p>
                My 8+ years journey ago began with a simple curiosity. I wanted
                to know how things on the internet worked. That curiosity never left. Today, I
                build fullstack applications that are fast, reliable, and easy to use. I enjoy
                working closely with people to understand what they really need, then building
                solutions that go beyond what they expected. Good code, to me, is not just
                code that works, it&apos;s code that lasts, scales, and makes someone&apos;s
                life more easier.
              </p>
            </div>
          </div>
          <div className="techs">
            <div>
              <div className="tech">
                <FontAwesomeIcon icon={faHtml5} />
                <span>html</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCss3} />
                <span>css3</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faBootstrap} />
                <span>bootstrap</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faJs} />
                <span>JavaScript</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faReact} />
                <span>reactjs</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faCaretUp} />
                <span>nextjs</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faNodeJs} />
                <span>nodejs</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faMdb} />
                <span>mongodb</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faReact} />
                <span>react native</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faGit} />
                <span>version control</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faPhp} />
                <span>php</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faLaravel} />
                <span>laravel</span>
              </div>
              <div className="tech">
                <FontAwesomeIcon icon={faDocker} />
                <span>docker</span>
              </div>
              <div className="tech">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', fontSize: '30px' }}>
                  <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
                <span>sql</span>
              </div>
              <div className="tech">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" style={{ width: '1em', height: '1em', fontSize: '30px' }}>
                  <path d="M64 0C28.654 0 0 11.85 0 26.46v75.08C0 116.15 28.654 128 64 128s64-11.85 64-26.46V26.46C128 11.85 99.346 0 64 0zm0 8c32.614 0 56 10.44 56 18.46S96.614 44.92 64 44.92 8 34.48 8 26.46 31.386 8 64 8zm0 112c-32.614 0-56-10.44-56-18.46v-13.5C19.2 96.32 40.5 101.54 64 101.54s44.8-5.22 56-13.5v13.5C120 109.56 96.614 120 64 120zm0-26.46c-32.614 0-56-10.44-56-18.46v-13.5C19.2 69.86 40.5 75.08 64 75.08s44.8-5.22 56-13.5v13.5C120 83.1 96.614 93.54 64 93.54zm0-26.46c-32.614 0-56-10.44-56-18.46v-13.5C19.2 43.4 40.5 48.62 64 48.62s44.8-5.22 56-13.5v13.5C120 57.08 96.614 67.08 64 67.08z" />
                </svg>
                <span>sqlite</span>
              </div>
              <div className="tech">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" style={{ width: '1em', height: '1em', fontSize: '30px' }}>
                  <path d="M121.8 93.1c-2.3-2.9-7-4.3-14.1-4.1l-4.3.2-1.7-3.4c-2.4-4.8-3.4-9.2-2.7-11.9l.2-.9-3.4-3.4-.9.3c-1.6.5-3.9 1.3-6.7 4.8-1.4 1.8-2.8 4.1-3.9 6.8L83 83.7l-2.4-1c-2.6-1.1-5.4-1.7-8.2-1.8H64c-5.5 0-10.8 1.8-15.1 5.1l-1.1.8-1.4-.5c-1.8-.7-4.9-1.4-7.5-.4-2 .7-3.5 2.3-4.3 4.6-.9 2.6-.8 5.6.4 8.7l.8 2.1-1.6 1.6c-2.4 2.4-3.8 5.7-3.8 9.2 0 7.2 5.5 13 12.2 13h56.9c7.7 0 14.8-5.1 16.9-12.2l.1-.4 2.4-8.7.1-.5c.4-3.9-.4-7.5-2.3-10.2zM96.5 56.7c-2.4 0-4.7.3-6.9.9l-2.1.6-.8-2c-3-7.4-7.5-13.7-12.5-17.2l-1.2-.8.3-1.4c.5-2.1.6-3.7.5-5.2-.4-5.5-2.7-8.8-5.8-8.8-1.6 0-3.6.9-5.4 3.8-2.1 3.3-3 8-2.5 13.3l.2 2.3-2.2.6c-7.3 2.1-13.2 9.3-16 19.4l-.4 1.5H40c-11.5 0-19.1 7.7-19.1 19.1 0 2.1.3 4.1.8 6l.8 2.8H14c-5 0-9 4.1-9 9.2 0 5 4 9.1 9 9.1h82.5c8.5 0 15.4-7 15.4-15.6V72.3c0-8.6-6.9-15.6-15.4-15.6z" />
                </svg>
                <span>redis</span>
              </div>
            </div>
          </div>
        </section>
        <section className="works">
          <div className="works-sec-a">
            <div>
              <h2>Latest Works</h2>
              <span>Perfect solutions for real world problems</span>
            </div>
            <div>
              <div className="work-card">
                <div className="work-card-head">
                  <h4 className="work-name">Dashboard</h4>
                  <div className="stacks">
                    <span>react</span>
                    <span>next</span>
                  </div>
                </div>
                <div className="work-main">
                  <img src="/projects/a.jpg" alt="" />
                </div>
              </div>
            </div>
            <div>
              <h3><a href="">ALL PROJECTS </a></h3>
              <p>See some other works that are not live on my github profile. <a href="">here</a></p>
            </div>
          </div>
          <div className="works-sec-b">
            <div className="work-card">
              <div className="work-card-head">
                <h4 className="work-name">Lectrocloud</h4>
                <div className="stacks">
                  <span>react</span>
                  <span>next</span>
                </div>
              </div>
              <div className="work-main">
                <img src="/projects/b.jpg" alt="" />
              </div>
            </div>
            <div className="work-card">
              <div className="work-card-head">
                <h4 className="work-name">Vrsdata</h4>
                <div className="stacks">
                  <span>react</span>
                  <span>next</span>
                </div>
              </div>
              <div className="work-main">
                <img src="/projects/c.jpg" alt="" />
              </div>
            </div>
            <div>
              <h3><a href="">ALL PROJECTS </a></h3>
              <p>See some other works that are not live on my github profile. <a href="">here</a></p>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div>
          <div>
            <h3>Let&apos;s make something amazing <br /> together</h3>
            <p>Start by <a href="">saying Hi!</a></p>
          </div>
          <div className="logo">
            <span>Arman</span> <span>Grema</span>
          </div>
        </div>
        <div>
          <div>
            <span className="subtitle">reachout to me through</span>
            <div>
              <p>23 byepass road, hammadu kafi, Gombe</p>
              <h4>abdurrahmangrema19@gmail.com</h4>
            </div>
            <ul className="footer-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
          <Social />
        </div>
      </footer>
    </div>
  );
}
