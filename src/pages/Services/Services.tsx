import section_home_img_2 from "../../img/section-home/section-home-img-2.jpg";
import coaching_img from "../../img/section-can-help/coaching.svg";
import consultation_img from "../../img/section-can-help/consultation.svg";
import group_img from "../../img/section-can-help/group.svg";

import are_you_ready_img from "../../img/section-are-you-ready/are-you-ready-img.jpg";
import {accordionData} from "../../utils/accordion.ts";

import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";


const Services = () => {
  return (
    <main className="main">
        <section className='home'>
            <div className="container">
                <div className="home__inner">
                    <div className="home__left">
                        <div className="suptitle page-home__subtitle">I can help you in these patricular areas.</div>
                        <motion.h1 initial={{ y:"2rem", opacity:0 }} animate={{ y:0, opacity:1 }} transition={{duration:1, type: "ease-in"}} className="title">I help people to discover their true potential</motion.h1>
                        <p className="home__text">I help people to discover their true potential and live a fulfilling life...
                        Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                    </div>
                    <div className="home__right">
                        <motion.img initial={{ x:"7rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="home__img" src={section_home_img_2} alt="Home" />
                    </div>
                </div>
            </div>
        </section>
        <section className="i-can-help">
            <div className="container">
                <div className="i-can-help__inner">
                    <div className="i-can-help__top">
                      <div className="i-can-help__top-title-wrapper">
                        <h2 className="section-title">I can help you in these particular areas.</h2>
                      </div>
                    </div>
                    <div className="i-can-help__bottom">
                        <div className="i-can-help__bottom--grid">
                          <div className="i-can-help__bottom--row">
                            <div className="i-can-help__bottom--item">
                                <img className="i-can-help__bottom--item-img" src={group_img} alt="" />
                                <h3 className="i-can-help__bottom--item-title">Group Coaching Sessions</h3>
                                <p className="i-can-help__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                            </div>
                            <div className="i-can-help__bottom--item">
                                <img className="i-can-help__bottom--item-img" src={coaching_img} alt="" />
                                <h3 className="i-can-help__bottom--item-title">Online course</h3>
                                <p className="i-can-help__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                            </div>
                          </div>  
                          <div className="i-can-help__bottom--row i-can-help__bottom--row-transform">
                            <div className="i-can-help__bottom--item">
                                <img className="i-can-help__bottom--item-img" src={consultation_img} alt="" />
                                <h3 className="i-can-help__bottom--item-title">Consultation</h3>
                                <p className="i-can-help__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                            </div>
                            <div className="i-can-help__bottom--item">
                                <img className="i-can-help__bottom--item-img" src={coaching_img} alt="" />
                                <h3 className="i-can-help__bottom--item-title">1:1 Coaching</h3>
                                <p className="i-can-help__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="are-you-ready">
          <div className="container">
            <div className="are-you-ready__inner">
              <div className="are-you-ready__top">
                <div className="are-you-ready__top-inner">
                  <div className="tag">How does it work?</div>
                  <h2 className="section-title">Are you ready to transform your life?</h2>
                  <p className="are-you-ready__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                  </p>
                </div>
              </div>
              <div className="are-you-ready__bottom">
                <div className="are-you-ready__bottom--inner">
                  <div className="are-you-ready__bottom--left">
                    <ul className="are-you-ready__bottom--list">
                      <li className="are-you-ready__bottom--item talk">
                        <div className="are-you-ready__bottom--item-content">
                          <h4 className="are-you-ready__bottom--item-title">Talk to me first</h4>
                          <p className="are-you-ready__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                      </li>
                      <li className="are-you-ready__bottom--item schedule"> 
                        <div className="are-you-ready__bottom--item-content">
                          <h4 className="are-you-ready__bottom--item-title">Schedule a meeting</h4>
                          <p className="are-you-ready__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                      </li>
                      <li className="are-you-ready__bottom--item online">
                        <div className="are-you-ready__bottom--item-content">
                          <h4 className="are-you-ready__bottom--item-title">Online consultation</h4>
                          <p className="are-you-ready__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                      </li>
                      <li className="are-you-ready__bottom--item ready">
                        <div className="are-you-ready__bottom--item-content">
                          <h4 className="are-you-ready__bottom--item-title">Ready to start? Let’s talk!</h4>
                          <p className="are-you-ready__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="are-you-ready__bottom--right">
                    <img className="are-you-ready__bottom--img" src={are_you_ready_img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="good-to-know">
          <div className="container">
            <div className="good-to-know__inner">
              <div className="good-to-know__top">
                <div className="good-to-know__top--inner">
                  <h2 className="section-title text-center">Good to know.</h2>
                  <p className="good-to-know__text">Everything you need to know about the my services.
                  </p>
                </div>
              </div>
              <div className="good-to-know__middle">
                 <Accordion sections={accordionData}/>
              </div>
              <div className="good-to-know__bottom">
                <div className="good-to-know__bottom--wrapper">
                  <h4 className="good-to-know__bottom--title">Still have questions?</h4>
                  <p className="good-to-know__bottom--text">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                  <div className="good-to-know__action">
                  <Button enementCenter>Get in touch</Button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="notified">
          <div className="container">
            <div className="notified__inner">
              <div className="notified__left">
                <h4 className="notified__title">Get notified when I publish new articles</h4>
                <p className="notified__text">Stay up to date with the latest news, announcements, and articles.</p>
              </div>
              <div className="notified__right">
                <form className="notified__form" action="#">
                  <input className="notified__input" type="text" placeholder='Enter your email' />
                  <button className="notified__button" type='submit'>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Services;