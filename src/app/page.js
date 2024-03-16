import styles from "./page.module.css";
import { Header } from "./components"
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import Social from "./components/Social"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faMdb } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
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
              <a href="#">LET'S CHAT!</a>
              </div>
            <div>
              <div> <h2>6</h2> <span>YEARS <br /> EXPERIENCE</span> </div>
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
                <div><span>Design</span> <BrushIcon/></div>
                <p>making responsive designs</p>
                <div>read more</div>
              </div>
              <div className={styles.card}>
                <div><span>Frontend</span> <ViewQuiltIcon/></div>
                <p>making responsive designs</p>
                <div>read more</div>
              </div>
              <div className={styles.card}>
                <div><span>Backend</span> <StorageIcon/></div>
                <p>making responsive designs</p>
                <div>read more</div>
              </div>
              </div>
            <div className="about-me">
              <span className="subtitle">more about me</span>
              <h2>Hello! I&apos;m Arman <br /> Grema</h2>
              <h5>Every great product begin with an even better story </h5>
              <p>
                Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
                Velit nulla adipisci ipsum ratione
                quisquam cupiditate dolore suscipit
                obcaecati enim quia unde consequatur
                eaque provident ducimus neque,
                nemo veniam ad aliquam.
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
            <h3>Let's make something amazing <br/> together</h3>
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
        <h4>agrema101@unimaid.edu.ng</h4>
        </div>
        <ul className="footer-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
        </div>
        <Social/>
        </div>
      </footer>
    </div>
  );
}
