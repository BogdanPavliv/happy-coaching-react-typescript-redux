import {accordionData} from "../../utils/accordion.ts";

import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";

import page_about_img from "../../img/page-about/page-about-img.jpg";
import schedule_img from "../../img/page-about/schedule.svg";
import talk_img from "../../img/page-about/talk.svg";

import company_img_1 from "../../img/section-companies/company-img-1.png";
import company_img_2 from "../../img/section-companies/company-img-2.png";
import company_img_3 from "../../img/section-companies/company-img-3.png";
import company_img_4 from "../../img/section-companies/company-img-4.png";
import company_img_5 from "../../img/section-companies/company-img-5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {dataTimonials2} from "../../utils/testimonials.ts";
import {sliderTestimonialsSettings2} from "../../utils/common.ts";

import ready_img from "../../img/section-are-you-ready/ready.svg";
import schedule2_img from "../../img/section-are-you-ready/schedule.svg";
import talk2_img from "../../img/section-are-you-ready/talk.svg";
import award_img from "../../img/section-are-you-ready/award.svg";
import bell_img from "../../img/section-are-you-ready/bell.svg";
import online_img from "../../img/section-are-you-ready/online.svg";

import { motion } from "framer-motion";


const About = () => {
  return (
    <main className="main">
        <section className='home'>
            <div className="container">
                <div className="home__inner">
                    <div className="home__left">
                        <div className="suptitle page-home__subtitle">Proven strategies backed by science for success.</div>
                        <motion.h1 initial={{ y:"2rem", opacity:0 }} animate={{ y:0, opacity:1 }} transition={{duration:1, type: "ease-in"}} className="title">Live life at the full potential</motion.h1>
                        <p className="home__text">I help people to discover their true potential and live a fulfilling life...
                        Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?</p>
                        <div className="home__action">
                          <Button enementCenter={false}>Get your free guide now</Button>
                        </div>
                    </div>
                    <div className="home__right">
                        <motion.img initial={{ x:"7rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="home__img page-home__img" src={page_about_img} alt="Home" />
                        <motion.div initial={{ x:"14rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="badge-talk">
                            <img className="badge-talk__img" src={talk_img} alt="" />
                            <div className="badge-talk__content">
                                <div className="badge-talk__title">More than 250+</div>
                                <div className="badge-talk__subtitle">Online Sessions</div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ x:"14rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="badge-schedule">
                            <img className="badge-schedule__img" src={schedule_img} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        <section className="companies">
          <div className="container">
            <div className="companies__inner">
              <div className="companies__top">
                <div className="suptitle companies__subtitle">Proven strategies backed by science for success.</div>
              </div>
              <div className="companies__bottom">
                <ul className="companies__items">
                  <li className="companies__item">
                    <a className="companies__link" href="">
                      <img className="companies__img" src={company_img_1} alt="" />
                    </a>
                  </li>
                  <li className="companies__item">
                    <a className="companies__link" href="">
                      <img className="companies__img" src={company_img_2} alt="" />
                    </a>
                  </li>
                  <li className="companies__item">
                    <a className="companies__link" href="">
                      <img className="companies__img" src={company_img_3} alt="" />
                    </a>
                  </li>
                  <li className="companies__item">
                    <a className="companies__link" href="">
                      <img className="companies__img" src={company_img_4} alt="" />
                    </a>
                  </li>
                  <li className="companies__item">
                    <a className="companies__link" href="">
                      <img className="companies__img" src={company_img_5} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
            <div className="container">
                <div className="testimonials__inner">
                    <div className="testimonials__top">
                    <h2 className="section-title">Hear out what my clients say about me.</h2>
                    </div>
                    <div className="testimonials__bottom">
                        <div className="testimonials__slider--wrapper">
                            <Swiper 
                             {...sliderTestimonialsSettings2}
                             className='swiper-testimonials2'
                            >
                             {
                                dataTimonials2.map((card: any, i: any) => (
                                   <SwiperSlide key={i}>
                                     <div className='testimonials__slide_2'>
                                        <div className="testimonials__rating">
                                          {card.rating}
                                        </div>
                                        <p className="testimonials__slide--response">{card.response}</p>
                                        <div className="testimonials__slide--name">{card.name}</div>
                                        <img className='testimonials__slide--img' src={card.image} alt="" />
                                     </div>
                                   </SwiperSlide>
                                ))
                             }
                            </Swiper>
                        </div>
                    </div>
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

export default About;