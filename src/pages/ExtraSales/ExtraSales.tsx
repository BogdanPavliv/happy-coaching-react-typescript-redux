import { useState } from "react";
import {accordionData} from "../../utils/accordion.ts";

import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";

import ready_img from "../../img/section-are-you-ready/ready.svg";
import schedule2_img from "../../img/section-are-you-ready/schedule.svg";
import talk2_img from "../../img/section-are-you-ready/talk.svg";
import award_img from "../../img/section-are-you-ready/award.svg";
import bell_img from "../../img/section-are-you-ready/bell.svg";
import online_img from "../../img/section-are-you-ready/online.svg";

import online_session_img from "../../img/section-online-session/online-session-img.jpg";

import self_esteem_img from "../../img/section-self-esteem/self-esteem-img.jpg";

import waves_img from "../../img/section-home/waves.svg";

import transform_img from "../../img/section-transform/transform-img.jpg";
import play_button from "../../img/section-video/play-button.svg";

import FsLightbox from "fslightbox-react";


import results_img from "../../img/section-results/results-img.jpg";
import star_img from "../../img/section-results/star.svg";

import guarantee_img from "../../img/section-guarantee/guarantee-img.svg";

import { motion } from "framer-motion";

const ExtraSales = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);
  return (
    <main className="main">
        <section className='home'>
            <div className="container">
                <div className="home__inner">
                    <div className="home__left">
                        <div className="suptitle page-home__subtitle">Proven strategies backed by science for success.</div>
                        <motion.h1 initial={{ y:"2rem", opacity:0 }} animate={{ y:0, opacity:1 }} transition={{duration:1, type: "ease-in"}} className="title">Self Esteem Therapy</motion.h1>
                        <p className="home__text">I help people to discover their true potential and live a fulfilling life...
                        Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                        <div className="home__action">
                          <Button enementCenter={false}>Claim your spot</Button>
                        </div>
                    </div>
                    <div className="home__right">
                        <motion.img initial={{ x:"7rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="home__img page-home__img" src={self_esteem_img} alt="Home" />
                    </div>
                    <img className="waves-img" src={waves_img} alt="" />
                </div>
            </div>
        </section>
        <section className="transform-life">
          <div className="container">
            <div className="transform-life__inner">
              <div className="transform-life__top">
                <div className="transform-life__top--inner">
                  <div className="tag">How does it work?</div>
                  <h4 className="transform-life__title">Are you ready to transform your life?</h4>
                  <p className="transform-life__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                  </p>
                </div>
              </div>
              <div className="transform-life__bottom">
                <ul className="transform-life__bottom--list">
                  <li className="transform-life__bottom--item">
                    <img className="transform-life__bottom--item-img" src={ready_img} alt="" />
                    <h4 className="transform-life__bottom--item-title">Ready to start? Let’s talk!</h4>
                    <p className="transform-life__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </li>
                  <li className="transform-life__bottom--item">
                    <img className="transform-life__bottom--item-img" src={schedule2_img} alt="" />
                    <h4 className="transform-life__bottom--item-title">Ready to start? Let’s talk!</h4>
                    <p className="transform-life__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </li>
                  <li className="transform-life__bottom--item">
                    <img className="transform-life__bottom--item-img" src={talk2_img} alt="" />
                    <h4 className="transform-life__bottom--item-title">Ready to start? Let’s talk!</h4>
                    <p className="transform-life__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </li>
                  <li className="transform-life__bottom--item">
                    <img className="transform-life__bottom--item-img" src={award_img} alt="" />
                    <h4 className="transform-life__bottom--item-title">Ready to start? Let’s talk!</h4>
                    <p className="transform-life__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </li>
                  <li className="transform-life__bottom--item">
                    <img className="transform-life__bottom--item-img" src={bell_img} alt="" />
                    <h4 className="transform-life__bottom--item-title">Ready to start? Let’s talk!</h4>
                    <p className="transform-life__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </li>
                  <li className="transform-life__bottom--item">
                    <img className="transform-life__bottom--item-img" src={online_img} alt="" />
                    <h4 className="transform-life__bottom--item-title">Ready to start? Let’s talk!</h4>
                    <p className="transform-life__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="transform">
            <div className="container">
                <div className="transform__inner">
                   <div className="transform__left">
                        <div className="tag">How does it work?</div>
                        <h2 className="section-title">Are you ready to transform your life?</h2>
                        <p className="are-you-ready__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                        </p>
                      
                   </div>
                   <div className="transform__right">
                        <ul className="transform__right-list">
                            <li className="transform__right-item online-white">
                                <div className="transform__right-item-content">
                                  <h4 className="transform__right-item-title">Online consultation</h4>
                                  <p className="transform__right-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </li>
                            <li className="transform__right-item ready-white">
                                <div className="transform__right-item-content">
                                  <h4 className="transform__right-item-title">Ready to start? Let’s talk!</h4>
                                  <p className="transform__right-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </li>
                        </ul>
                     </div>
                </div>
            </div>
        </section>
        <section className="video">
          <div className="container">
            <div className="video__wrapper">
              <img className="video__img" src={transform_img} alt="" />
              <a className="video__link" href="#" onClick={() => setToggler(!toggler)}>
                <img className="play-btn" src={play_button} alt="" />
              </a>
              <FsLightbox
                toggler={toggler}
                sources={[
                  'https://www.youtube.com/watch?v=F6CJtIk457g',
                ]}
              />
            </div>
          </div>
        </section>
        <section className="results">
          <div className="container">
            <div className="results__top">
              <div className="results__top--wrapper">
                <div className="results__top--content">
                  <div className="tag">Testimonials</div>
                  <h2 className="section-title">Results that speak for themselves</h2>
                </div>
                <div className="results__top--action">
                 <Button enementCenter={false}>Get started</Button>
                </div>
              </div>
            </div>
            <div className="results__bottom">
              <div className="results__cards">
                <div className="results__card">
                  <div className="results__card--response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <img className="results__card--img" src={results_img} alt="" />
                  <div className="results__card--name">Naam</div>
                  <div className="results__card--role">Bedrijf</div>
                  <div className="results__card--stars">
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                  </div>
                </div>
                <div className="results__card">
                  <div className="results__card--response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <img className="results__card--img" src={results_img} alt="" />
                  <div className="results__card--name">Naam</div>
                  <div className="results__card--role">Bedrijf</div>
                  <div className="results__card--stars">
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                  </div>
                </div>
                <div className="results__card">
                  <div className="results__card--response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <img className="results__card--img" src={results_img} alt="" />
                  <div className="results__card--name">Naam</div>
                  <div className="results__card--role">Bedrijf</div>
                  <div className="results__card--stars">
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                  </div>
                </div>
                <div className="results__card">
                  <div className="results__card--response">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                  <img className="results__card--img" src={results_img} alt="" />
                  <div className="results__card--name">Naam</div>
                  <div className="results__card--role">Bedrijf</div>
                  <div className="results__card--stars">
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                    <img className="results__card--star" src={star_img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program">
          <div className="container">
            <div className="program__inner">
              <div className="program__top">
                <div className="program__top--inner">
                  <div className="tag">This is not for everyone!</div>
                  <h2 className="section-title">This program is perfect for you if...
                  </h2>
                </div>
              </div>
              <div className="program__bottom">
                <div className="program__bottom--wrapper">
                  <div className="program__bottom--left">
                    <h4 className="program__bottom--title">This is <span>NOT</span> for you if...</h4>
                    <ul className="program__bottom--list">
                      <li className="program__bottom--item unchecked">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li className="program__bottom--item unchecked">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li className="program__bottom--item unchecked">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li className="program__bottom--item unchecked">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                    </ul>
                  </div>
                  <div className="program__bottom--right">
                    <h4 className="program__bottom--title">This is for you if...</h4>
                    <ul className="program__bottom--list">
                      <li className="program__bottom--item checked">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li className="program__bottom--item checked">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li className="program__bottom--item checked">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                      <li className="program__bottom--item checked">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="online-session">
          <div className="container">
            <div className="online-session__inner">
              <div className="online-session__left">
                <h4 className="online-session__title">Get 15-Minutes Complimentary online session.</h4>
                <p className="online-session__text">Limited Period Offer. Claim Now.</p>
                <div className="online-session__action">
                  <Button enementCenter={false}>Book now</Button>
                </div>
              </div>
              <div className="online-session__right">
                <img className="online-session__img" src={online_session_img} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="guarantee">
          <div className="container">
            <div className="guarantee__inner">
              <img className="guarantee__img" src={guarantee_img} alt="" />
              <h4 className="guarantee__title">Guarantee</h4>
              <p className="guarantee__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
              </p>
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

export default ExtraSales;