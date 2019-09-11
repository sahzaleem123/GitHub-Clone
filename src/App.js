import React from 'react';
import './App.css';
import Figure from './components/Figure'

function App() {
  return (
    <div className="App">
      <header>
        <div className="left">
          <a href="https://github.com/"><i class="fab fa-github"></i></a>
          <nav>
            <ul>
              <a href="#">
                <li>Why GitHub?<i class="fas fa-angle-down"></i></li>
              </a>
              <a href="#">
                <li>Enterprise</li>
              </a>
              <a href="#">
                <li>Explore<i class="fas fa-angle-down"></i></li>
              </a>
              <a href="#">
                <li>Marketplace</li>
              </a>
              <a href="#">
                <li>Pricing<i class="fas fa-angle-down"></i></li>
              </a>
            </ul>
          </nav>
        </div>
        <div className="right">
          <input type="text" placeholder="Search Github"></input>
          <img src="https://github.githubassets.com/images/search-key-slash.svg" alt=""
            class="mr-2 header-search-key-slash"></img>
          <ul>
            <a href="#">
              <li>Sign in</li>
            </a>
          </ul>
          <button>Sign up</button>
          <ul className="ul-2">
            <a href="#">
              <li><i class="fas fa-bars"></i></li>
            </a>
          </ul>
        </div>
      </header>
      <section className="sec-one">
        <div className="content">
          <div class="sec-one-right">
            <h1>Built for developers</h1>
            <p class="lead-mktg mb-4">
              GitHub is a development platform inspired by the way you work. From <a href="#"
                class="text-white jumbotron-link">open source</a> to <a href="#"
                  class="text-white jumbotron-link">business</a>, you can host and review code, manage projects,
and build software alongside 40 million&nbsp;developers.
              </p>
            <button className="btn-1">Sign up for Github</button>
          </div>
          <div className="sec-one-left">
            <form action="#">
              <label for="username">Username</label>
              <input type="text" id="username" required></input>
              <label for="email">Email</label>
              <input type="email" id="email" required></input>
              <label for="password">Password</label>
              <input type="password" id="password" required></input>
              <p>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase
                        letter. <a href="#">Learn more.</a></p>
              <button type="submit">Sign up for Github</button>
              <p className="dark">By clicking “Sign up for GitHub”, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Statement</a>. We’ll
                        occasionally send you account related emails.</p>
            </form>
          </div>
        </div>
      </section>
      <section className="sec-two">
        <div className="sec-two-div-one">
          <h1>Get started with GitHub Enterprise</h1>
          <p>Take collaboration to the next level with security and administrative features built for businesses.</p>
          <button>Contact Sales</button>
          <a href="#">Or start a free trial of Enterprise Server →</a>
        </div>
        <div className="sec-two-div-two">
          <h1>Introducing GitHub Actions with CI/CD</h1>
          <p>Automate any workflow with GitHub Actions. <br></br>
            See the latest updates announced at our HQ reveal.
            </p>
          <button>Check it out →</button>
        </div>
        <div className="sec-two-div-three">
          <h1>More than 2.1 million businesses and organizations use GitHub</h1>
          <ul>
            <li>
              <img alt="Airbnb"
                src="https://github.githubassets.com/images/modules/site/logos/airbnb-logo.png"></img>
            </li>
            <li>
              <img alt="SAP" src="https://github.githubassets.com/images/modules/site/logos/sap-logo.png"></img>
            </li>
            <li>
              <img alt="IBM" src="https://github.githubassets.com/images/modules/site/logos/ibm-logo.png"></img>
            </li>
            <li>
              <img alt="Google"
                src="https://github.githubassets.com/images/modules/site/logos/google-logo.png"></img>
            </li>
            <li>
              <img alt="PayPal"
                src="https://github.githubassets.com/images/modules/site/logos/paypal-logo.png"></img>
            </li>
            <li>
              <img alt="Bloomberg"
                src="https://github.githubassets.com/images/modules/site/logos/bloomberg-logo.png"></img>
            </li>
            <li>
              <img alt="Spotify"
                src="https://github.githubassets.com/images/modules/site/logos/spotify-logo.png"></img>
            </li>
            <li>
              <img alt="Swift"
                src="https://github.githubassets.com/images/modules/site/logos/swift-logo.png"></img>
            </li>
            <li>
              <img alt="Facebook"
                src="https://github.githubassets.com/images/modules/site/logos/facebook-logo.png"></img>
            </li>
            <li>
              <img alt="Node.js"
                src="https://github.githubassets.com/images/modules/site/logos/node-logo.png"></img>
            </li>
            <li>
              <img alt="NASA" src="https://github.githubassets.com/images/modules/site/logos/nasa-logo.png"></img>
            </li>
            <li>
              <img alt="Walmart"
                src="https://github.githubassets.com/images/modules/site/logos/walmart-logo.png"></img>
            </li>
          </ul>
        </div>
        <div className="sec-two-div-four">
          <h2>GitHub for teams</h2>
          <h1>A better way to work together</h1>
          <p>GitHub brings teams together to work through problems, move ideas forward, and learn from each other
                along the way.</p>
          <button>Sign up your team →</button>
        </div>
        <div className="sec-two-div-five">
          <div className="sec-two-div-five-left">
            <img src="https://github.githubassets.com/images/modules/site/home-illo-team.svg"></img>
          </div>
          <div className="sec-two-div-five-right">
            <div>
              <h3>Write better code</h3>
              <p>Collaboration makes perfect. The conversations and code reviews that happen in pull
                  requests help your team share the weight of your work and improve the software you build.
                        <a>Learn about code review.</a></p>
            </div>
            <div>
              <h3>Manage your chaos</h3>
              <p>Take a deep breath. On GitHub, project management happens in issues and project
                  boards, right alongside your code. All you have to do is mention a teammate to get them
                        involved. <a>Learn about project management.</a></p>
            </div>
            <div>
              <h3>Find the right tools</h3>
              <p>Browse and buy apps from GitHub Marketplace with your GitHub account. Find the tools
                        you like or discover new favorites—then start using them in minutes. <a>Learn about
                            integrations.</a></p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-three">
        <div className="sec-three-div-one">
          <h3>See how the world's leading companies use GitHub Enterprise.</h3>
          <div className='sec-three-content'>
            <Figure
              src="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg"
              heading="MGM Resorts International"
              paragraph="Hospitality"
              link="Read more"
            ></Figure>
            <Figure
              src="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg"
              heading="Nationwide"
              paragraph="Insurance"
              link="Read more"
            ></Figure>
            <Figure
              src="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg"
              heading="SAP"
              paragraph="Business Software"
              link="Read more"
            ></Figure>
            <Figure
              src="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg"
              heading="Spotify"
              paragraph="Technology / Streaming"
              link="Read more"
            ></Figure>
          </div>
        </div>
        <div id="same-styles-2" className="sec-two-div-four">
          <h2>Security and administration</h2>
          <h1>Your business needs, met</h1>
          <p>From flexible hosting to granular access controls, we’ve got your security requirements covered.</p>
          <button>Learn how GitHub Enterprise works →</button>
        </div>
        <div className="sec-three-div-three">
          <div className="sec-three-div-three-left">
            <h3>Code security</h3>
            <p>Prevent problems before they happen. Protected branches, signed commits, and required status checks
                    protect your work and help you maintain a high standard for your code.</p>
            <h3>Access controlled</h3>
            <p>Encourage teams to work together while limiting access to those who need it with granular permissions
                and
                    authentication through SAML/SSO and LDAP.</p>
          </div>
          <div className="sec-three-div-three-right">
            <img src="https://github.githubassets.com/images/modules/site/home-illo-business.png"></img>
          </div>
        </div>
        <div className="sec-three-div-four">
          <main>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="mr-4" width="64px">
              <path
                d="M27 13h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm15-1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM27 28h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm15 3a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm4 0a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"
                fill="#23292f"></path>
              <path
                d="M50 44h-1a13 13 0 0 0-4.68-9H48a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-5v-3h5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H16a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h5v3h-5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11.72a13 13 0 0 0-3.79 5.21A7 7 0 0 0 13.28 44 6 6 0 0 0 14 56h36a6 6 0 0 0 0-12zM15 17v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1zm8 3h18v3H23zm-7 13a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a12.9 12.9 0 0 0-10 0H16zm34 21H14a4 4 0 1 1 .09-8 1 1 0 0 0 1-.83 5 5 0 0 1 8.6-2.55 1 1 0 0 0 1.7-.42A11 11 0 0 1 47 45a1 1 0 0 0 1 1h2a4 4 0 0 1 0 8z"
                fill="#23292f"></path>
            </svg>
            <div className="sec-three-div-four-right">
              <h3>Hosted where you need it</h3>
              <p>Securely and reliably host your work on GitHub using GitHub Enterprise Cloud. Or deploy GitHub
                  Enterprise Server in your own data centers or in a private cloud using Amazon Web Services,
                        Azure, or Google Cloud Platform.</p>
              <a href="#">Compare plans →</a>
              <a href="#">Contact Sales for more information →</a>
            </div>
          </main>
        </div>
        <div id="same-styles-3" className="sec-two-div-four">
          <h2>Integrations</h2>
          <h1>Build on GitHub</h1>
          <p>Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.</p>
          <button>Learn about integrations →</button>
        </div>
        <div className="sec-three-div-five">
          <div title="Slack" className="slack">
            <img src="https://github.githubassets.com/images/modules/site/integrators/slackhq.png"
              alt="Slack"></img>
          </div>
          <div title="ZenHub" className="zenhub">
            <img src="https://github.githubassets.com/images/modules/site/integrators/zenhubio.png"
              alt="ZenHub"></img>
          </div>
          <div title="Travis CI" className="travis">
            <img src="https://github.githubassets.com/images/modules/site/integrators/travis-ci.png"
              alt="Travis CI"></img>
          </div>
          <div title="Atom" className="atom">
            <img src="https://github.githubassets.com/images/modules/site/integrators/atom.png" alt="Atom"></img>
          </div>
          <div title="Circle CI" className="circle-ci">
            <img src="https://github.githubassets.com/images/modules/site/integrators/circleci.png"
              alt="Circle CI"></img>
          </div>
          <div title="Google" className="google">
            <img src="https://github.githubassets.com/images/modules/site/integrators/google.png"
              alt="Google"></img>
          </div>
          <div title="Code Climate" className="code-climate">
            <img src="https://github.githubassets.com/images/modules/site/integrators/codeclimate.png"
              alt="Code Climate"></img>
          </div>
        </div>
        <div className="sec-three-div-six">
          <p>Sometimes, there’s more than one tool for the job.</p>
          <p>Why not try something new?</p>
          <a href="#">Browse GitHub Marketplace →</a>
        </div>
        <div id="same-styles-4" className="sec-two-div-four">
          <h2>Community</h2>
          <h1>Welcome home, developers</h1>
          <p>GitHub is home to the world’s largest community of developers and their projects...</p>
        </div>
        <div id="same-div-2" className="sec-three-div-one">
          <div className='sec-three-content'>
            <Figure
              src="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg"
              heading="Russell Keith-Magee"
              paragraph="Russell Keith-Magee created BeeWare to fill a gap in his own process. Today, BeeWare is the go-to project for supporting Python on every platform."
              link="Read more"
            ></Figure>
            <Figure
              src="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg"
              heading="Kris Nova"
              paragraph="Kris Nova quickly developed a passion for open source software. Now she gets to work on open source tooling at her day job, which includes maintaining Kubernetes Operations (kops)."
              link="Read more"
            ></Figure>
            <Figure
              src="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg"
              heading="Evan You"
              paragraph="In 2013, Evan You founded Vue, a Javascript framework funded by the community on Patreon. In 2016, Vue reached 2,000,000 downloads."
              link="Read more"
            ></Figure>
            <Figure
              src="https://customer-stories-feed.github.com/customer_stories/jessfraz/hero.jpg"
              heading="Jess Frazelle"
              paragraph="Jess Frazelle works on Kubernetes full-time. Previously she maintained Docker, a software containerization platform used by thousands of teams."
              link="Read more"
            ></Figure>
          </div>
          <h3>...whether you’re making your first commit or sending a Rover to Mars, there’s room for you here, too.</h3>
        </div>
        <div className="sec-three-div-seven">
          <div className="div-left">
            <div className="orange">
              <span>100M*</span>
              <span>repositories worldwide</span>
            </div>
            <div className="blue">
              <span>40M*</span>
              <span>developers worldwide</span>
            </div>
            <div className="purple">
              <span>2.1M*</span>
              <span>businesses & organizations worldwide</span>
            </div>
          </div>
          <div className="div-right">
            <div>
              <p>
                GitHub’s users create and maintain influential technologies alongside the world’s largest <a>open source community</a>
              </p>
            </div>
            <div>
              <p><a>Developers</a> use GitHub for personal projects, from experimenting with new
                  programming languages to hosting their life’s work.
                </p>
            </div>
            <div>
              <p><a>Businesses</a> of all sizes use GitHub to support their development process and to
                  securely build software.
                </p>
            </div>
            <h5>* As of April 2019</h5>
          </div>
        </div>
      </section>
      <section className="sec-four">
        <h1>Get started for free — join the millions of developers already using GitHub to share their code, work
            together, and build amazing things.</h1>
        <div>
          <form action="#">
            <div className="name">
              <label for="username-2">Username</label>
              <input type="text" id="username-2" required></input>
            </div>
            <div className="email">
              <label for="email-2">Email</label>
              <input type="email" id="email-2" required></input>
            </div>
            <div className="password">
              <label for="password-2">Password</label>
              <input type="password" id="password-2" required></input>
            </div>
            <button type="submit">Sign up for Github</button>
          </form>
        </div>
        <p>By clicking “Sign up for GitHub”, you agree to our <a href="#">Terms of Service</a> and <a
          href="#">Privacy Statement</a>. We’ll
        occasionally send you account related emails.</p>
      </section>
      <footer>
        <section>
          <a href="#">
            <svg height="30" class="octicon octicon-logo-github" viewBox="0 0 45 16" version="1.1" width="84"
              aria-hidden="true">
              <path fill-rule="evenodd"
                d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 0 0-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z">
              </path>
            </svg>
          </a>
          <ul>
            <li>Product</li>
            <li>Features</li>
            <li>Security</li>
            <li>Enterprise</li>
            <li>Customer Stories</li>
            <li>Pricing</li>
            <li>Resourses</li>
          </ul>
          <ul>
            <li>Platforum</li>
            <li>Developer API</li>
            <li>Partners</li>
            <li>Atom</li>
            <li>Electron</li>
            <li>GitHub Desktop</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>Help</li>
            <li>Community Forum</li>
            <li>Training</li>
            <li>Status</li>
            <li>Contact GitHub</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Shop</li>
          </ul>
        </section>
        <div>
          <ul>
            <li>© 2019 GitHub, Inc.</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-facebook-square"></i></li>
            <li><i class="fab fa-youtube"></i></li>
            <li><i class="fab fa-linkedin-in"></i></li>
            <li><i class="fab fa-github"></i></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
