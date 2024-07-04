import { useState, useEffect } from "react";

import Button from "../../components/Button/Button";


import transform_img from "../../img/section-transform/transform-img.jpg";
import play_button from "../../img/section-video/play-button.svg";

import FsLightbox from "fslightbox-react";


import results_img from "../../img/section-results/results-img.jpg";
import star_img from "../../img/section-results/star.svg";

import are_you_ready_img from "../../img/section-dont-miss/are-you-ready-img.jpg";

import live_life_img_1 from "../../img/section-live-life/live-life-img-1.png";
import live_life_img_2 from "../../img/section-live-life/live-life-img-2.png";
import live_life_img_3 from "../../img/section-live-life/live-life-img-3.png";
import live_life_img_4 from "../../img/section-live-life/live-life-img-4.png";
import live_life_img_5 from "../../img/section-live-life/live-life-img-5.png";

import star_rating_img from "../../img/section-live-life/star.svg"

const FreeGuide = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [emptyName, setEmptyName] = useState<string>('');

  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [emptyNameDirty, setEmptyNameDirty] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string>('Email cannot be empty');
  const [emptyNameError, setEmptyNameError] = useState<string>('The field cannot be empty');

  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (emailError || emptyNameError) {
        setFormValid(false);
    } else {
        setFormValid(true);
    }
  }, [emailError, emptyNameError]);

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Incorrect email!');
        setEmailDirty(true);
    } else {
        setEmailError('');
        setEmailDirty(false);
    }
  }

  const emptyNameHandler = (e: any) => {
    setEmptyName(e.target.value)
    if (!e.target.value) {
        setEmptyNameError('The field cannot be empty');
        setEmptyNameDirty(true);
    } else {
        setEmptyNameError('');
        setEmptyNameDirty(false);
    }
  }

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'email':
          setEmailDirty(true)
          break
      case 'name':
          setEmptyNameDirty(true)
          break
    }
  }

  return (
    <main className="main">
        <section className="results-speak">
            <div className="container-right">
              <div className="results-speak__inner">
                <div className="results-speak__left">
                  <h2 className="section-title">Results that speak for themselves</h2>
                  <p className="results-speak__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                  </p>
                  <div className="form-wrapper">
                   <form className="form" action="">
                     <input onChange={e => emptyNameHandler(e)} value={emptyName} onBlur={e => blurHandler(e)} className={(emptyNameDirty && emptyNameError) ? "form__input form__input--error" : "form__input"} id="formName" type="text" name="name" placeholder="Name"/>
                     <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className={(emailDirty && emailError) ? "form__input form__input--error" : "form__input"} id="formEmail" type="text" name="email" placeholder="Enter your email"/>
                     <p className="form__text">We care about your data in our <a href="">privacy policy</a></p>
                     <button disabled={!formValid} className="form__btn" type="submit">Get free guide</button>
                   </form>
                  </div>
                  
                </div>
                <div className="results-speak__right">
                    <div className="results-speak__img--wrapper">
                    <img className='results-speak__img' src={are_you_ready_img} alt="" />
                    <div className="circle">Free guide!</div>
                    </div>
                </div>
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
        <section className="live-life">
          <div className="container">
            <div className="live-life__wrapper">
              <div className="live-life__wrapper--content">
                <h2 className="section-title">Don’t miss out on my <span>‘Live life at the full potential’</span> free guide</h2>
                <p className="live-life__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <div className="live-life__action">
                 <Button enementCenter>Download my free guide</Button>
                </div>
                <div className="live-life__stars--wrapper">
                  <p className="live-life__stars--text">More than 100+ 5 star reviews</p>
                  <div className="live-life__stars">
                    <img className="live-life__star" src={star_rating_img} alt="" />
                    <img className="live-life__star" src={star_rating_img} alt="" />
                    <img className="live-life__star" src={star_rating_img} alt="" />
                    <img className="live-life__star" src={star_rating_img} alt="" />
                    <img className="live-life__star" src={star_rating_img} alt="" />
                  </div>
                </div>
                
              </div>
              <img className="live-life_img-1" src={live_life_img_1} alt="" />
              <img className="live-life_img-2" src={live_life_img_2} alt="" />
              <img className="live-life_img-3" src={live_life_img_3} alt="" />
              <img className="live-life_img-4" src={live_life_img_4} alt="" />
              <img className="live-life_img-5" src={live_life_img_5} alt="" />
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

export default FreeGuide;