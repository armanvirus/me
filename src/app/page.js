import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components"

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
              <p>I design and code high quality UI/UX, <br />
                high efficient server, <br />
                and i like what i do.
              </p>
              LET'S CHAT!
              </div>
            <div>
              <div> <span>6</span><span>YEARS <br /> EXPERIENCE</span> </div>
              <div> <span>36</span><span>PROJECTS COMPLETED <br /> WITHIN RANGE</span> </div>
            </div>
          </div>
          <div className="right-hero">
            <img src="" alt="" />
          </div>
          <div></div>
        </div>
        <div className="main">
          <section>
            <div className="services">
              <div className="service-card">
                <div><span>Design</span> <span>icon</span></div>
                <p>making responsive designs</p>
                <div>read more</div>
              </div>
              <div className="service-card">
                <div><span>Design</span> <span>icon</span></div>
                <p>making responsive designs</p>
                <div>read more</div>
              </div>
              <div className="service-card">
                <div><span>Design</span> <span>icon</span></div>
                <p>making responsive designs</p>
                <div>read more</div>
              </div>
            </div>
            <div className="techs">
              <div className="tech">
                <span>JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech">
                <span>JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech">
                <span>JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech">
                <span>JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech">
                <span>JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech">
                <span>JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech">
                <span>JS</span>
                <span>JavaScript</span>
              </div>
              <div className="tech">
                <span>JS</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="about-me">
              <span>more about me</span>
              <h3>Hello! I'm Arman <br /> Grema</h3>
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
          </section>
          <section className="works">
            <div className="works-sec-a">
              <div>
                <h3>Latest Works</h3>
                <span>Perfect solutions for real world problems</span>
              </div>
              <div>
                <div className="work-card">
                  <div>
                    <div className="work-name">Lorem</div>
                    <div className="stacks">
                      <span>react</span>
                      <span>next</span>
                    </div>
                  </div>
                  <div className="work-main">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <h5><a href="">ALL PROJECTS </a></h5>
                <p>See some other works that are not live on my github profile. <a href="">here</a></p>
              </div>
            </div>
            <div className="works-sec-b">
              <div className="work-card">
                <div>
                  <div className="work-name">Lorem</div>
                  <div className="stacks">
                    <span>react</span>
                    <span>next</span>
                  </div>
                </div>
                <div className="work-main">
                  <img src="" alt="" />
                </div>
              </div>
              <div className="work-card">
                <div>
                  <div className="work-name">Lorem</div>
                  <div className="stacks">
                    <span>react</span>
                    <span>next</span>
                  </div>
                </div>
                <div className="work-main">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <footer>
        <div>
          <div>
            <h4>Let's make something amazing together</h4>
            <p>Start by <a href="">saying Hi!</a></p>
          </div>
          <div className="logo">
            <span>Arman</span><span>Grema</span>
          </div>
        </div>
        <div>
        <div>
        <span>get to me through</span>
        <div>
        <p>23 byepass road, hammadu kafi, Gombe</p>
        <h4>agrema101@unimaid.endu.ng</h4>
        </div>
        <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
        </div>
        <div className={styles.flexAround}></div>
        </div>
      </footer>
    </div>
  );
}
