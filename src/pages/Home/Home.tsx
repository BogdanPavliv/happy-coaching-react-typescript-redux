import Button from "../../components/Button/Button";
import section_home_img_1 from "../../img/section-home/section-home-img-1.jpg";
import waves_img from "../../img/section-home/waves.svg";
import sight_img from "../../img/section-home/sight.svg";

import coaching_img from "../../img/section-can-help/coaching.svg";
import consultation_img from "../../img/section-can-help/consultation.svg";
import group_img from "../../img/section-can-help/group.svg";
import star_img from "../../img/section-testimonials/star.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {dataTimonials} from "../../utils/testimonials.ts";
import {sliderTestimonialsSettings} from "../../utils/common.ts";

import section_stay_motivated_img_1 from "../../img/section-stay-motivated/section-stay-motivated-img-1.jpg";
import section_stay_motivated_img_2 from "../../img/section-stay-motivated/section-stay-motivated-img-2.jpg";
import section_stay_motivated_img_3 from "../../img/section-stay-motivated/section-stay-motivated-img-3.jpg";

import are_you_ready_img from "../../img/section-dont-miss/are-you-ready-img.jpg";
import online_session_img from "../../img/section-online-session/online-session-img.jpg";
import { motion } from "framer-motion";

// somewhere in your project, e.g., a typings.d.ts file
// declare module '../../utils/testimonials' {
//     const dataTimonials: any;
//     export = dataTimonials;
// }



const Home = () => {
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
                        <motion.img initial={{ x:"7rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="home__img page-home__img" src={section_home_img_1} alt="Home" />
                        <motion.div initial={{ x:"14rem", opacity:0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration:2, type: "ease-in" }} className="badge">
                            <img className="badge__img" src={sight_img} alt="" />
                            <div className="badge__content">
                                <div className="badge__title">100%</div>
                                <div className="badge__subtitle">Success rate this year</div>
                            </div>
                        </motion.div>
                    </div>
                    <img className="waves-img" src={waves_img} alt="" />
                </div>
            </div>
        </section>
        <section className="can-help">
            <div className="container">
             <div className="can-help__inner">
               <div className="can-help__top">
                 <div className="can-help__top--left">
                    <h2 className="section-title">I can help you in these particular areas.</h2>
                 </div>
                 <div className="can-help__top--right">
                    <p className="can-help__top--right-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    </p>
                    <p className="can-help__top--right-text">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    </p>
                 </div>
               </div>
               <div className="can-help__bottom">
                 <ul className="can-help__bottom--grid">
                    <li className="can-help__bottom--item">
                      <img className="can-help__bottom--item-img" src={coaching_img} alt="" />
                      <h3 className="can-help__bottom--item-title">1:1 Coaching</h3>
                      <p className="can-help__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                      </p>
                    </li>
                    <li className="can-help__bottom--item">
                      <img className="can-help__bottom--item-img" src={consultation_img} alt="" />
                      <h3 className="can-help__bottom--item-title">Consultation</h3>
                      <p className="can-help__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                      </p>
                    </li>
                    <li className="can-help__bottom--item">
                      <img className="can-help__bottom--item-img" src={group_img} alt="" />
                      <h3 className="can-help__bottom--item-title">Group Coaching Sessions</h3>
                      <p className="can-help__bottom--item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                      </p>
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
                             {...sliderTestimonialsSettings}
                             className='swiper-testimonials'
                            >
                             {
                                dataTimonials.map((card: any, i: any) => (
                                   <SwiperSlide key={i}>
                                     <div className='testimonials__slide'>
                                        <p className="testimonials__slide--response">{card.response}</p>
                                        <div className="testimonials__slide--name">{card.name}</div>
                                        <img className='testimonials__slide--img' src={card.image} alt="" />
                                        <div className="testimonials__slide--stars">
                                           <img className="testimonials__slide--star" src={star_img} alt="" />
                                           <img className="testimonials__slide--star" src={star_img} alt="" />
                                           <img className="testimonials__slide--star" src={star_img} alt="" />
                                           <img className="testimonials__slide--star" src={star_img} alt="" />
                                           <img className="testimonials__slide--star" src={star_img} alt="" />
                                        </div>
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
        <section className="stay-motivated">
          <div className="container">
            <div className="stay-motivated__inner">
              <div className="stay-motivated__top">
               <h2 className="section-title component-center">Stay Motivated, read the weekly blog articles.</h2>
              </div>
              <div className="stay-motivated__middle">
                <ul className="stay-motivated__items">
                  <li className="stay-motivated__item">
                    <img className="stay-motivated__item--img" src={section_stay_motivated_img_1} alt="" />
                    <div className="stay-motivated__item--content">
                      <h4 className="stay-motivated__item--title">Balancing your love and work life.</h4>
                      <p className="stay-motivated__item--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                      </p>
                    </div>
                  </li>
                  <li className="stay-motivated__item">
                    <img className="stay-motivated__item--img" src={section_stay_motivated_img_2} alt="" />
                    <div className="stay-motivated__item--content">
                      <h4 className="stay-motivated__item--title">A short break from Social Media is important.</h4>
                      <p className="stay-motivated__item--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                      </p>
                    </div>
                  </li>
                  <li className="stay-motivated__item">
                    <img className="stay-motivated__item--img" src={section_stay_motivated_img_3} alt="" />
                    <div className="stay-motivated__item--content">
                      <h4 className="stay-motivated__item--title">How to be 1% Better Every Day</h4>
                      <p className="stay-motivated__item--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="stay-motivated__bottom">
                <div className="stay-motivated__action">
                  <Button enementCenter>Read more blogs</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dont-miss">
          <div className="container">
            <div className="dont-miss__inner">
              <div className="dont-miss__left">
                <h2 className="section-title">Don’t miss out on my ‘Live life at the full potential’ free guide</h2>
                <div className="dont-miss__text--wrapper">
                  <p className="dont-miss__text--top">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                  </p>
                  <p className="dont-miss__text--bottom">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div className="dont-miss__action">
                  <Button enementCenter={false}>Get your free guide now</Button>
                </div>
              </div>
              <div className="dont-miss__right">
                <div className="dont-miss__img--wrapper">
                  <img className='dont-miss__img' src={are_you_ready_img} alt="" />
                  <div className="circle">Free guide!</div>
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

export default Home;