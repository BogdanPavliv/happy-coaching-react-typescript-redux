import { NavLink } from "react-router-dom";
import logo from "../../img/logo.svg";
import "./Footer.scss";

import made_by_img from "../../img/footer/made-by.svg";

import linkedin_img from "../../img/footer/linkedin.svg";
import facebook_img from "../../img/footer/facebook.svg";
import website_img from "../../img/footer/website.svg";


type Props = {}

export const Footer = (props: Props) => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__top">
                  <div className="footer__logo--wrapper">
                    <NavLink  to="/" className="logo">
                        <img className='logo__img' src={logo} alt="" />
                    </NavLink>
                    <p className="slogan">
                     Design amazing digital experiences that create more happy in the world.
                    </p>
                  </div>
                  <nav className="footer__menu">
                    <ul className="footer__menu--list">
                        <li className="footer__menu--item">
                            <p className="footer__menu--title">Pages</p>
                        </li>
                        <li className="footer__menu--item">
                            <NavLink 
                              to="/" 
                              className="footer__menu--link"
                            >
                               Home
                            </NavLink>
                        </li>
                        <li className="footer__menu--item">
                            <NavLink 
                              to='/services' 
                              className="footer__menu--link"
                            >
                               Services 
                            </NavLink>
                        </li>
                        <li className="footer__menu--item">
                            <NavLink 
                              to='/about' 
                              className="footer__menu--link"
                            >
                               About us 
                            </NavLink>
                        </li>
                        <li className="footer__menu--item">
                            <NavLink 
                              to='/extra-sales' 
                              className="footer__menu--link"
                            >
                               Extra Sales/Landingpage 
                            </NavLink>
                        </li>
                        <li className="footer__menu--item">
                            <a className="footer__menu--link" href="#">
                               Free guide 
                            </a>
                        </li>
                    </ul>
                  </nav>
                  <div className="footer__actions">
                    <ul className="footer__menu--list">
                        <li className="footer__menu--item">
                            <p className="footer__menu--title">Contact</p>
                        </li>
                        <li className="footer__menu--item">
                            <a className="footer__menu--link" href="tel:+123456789">
                              +123 456 789
                            </a>
                        </li>
                        <li className="footer__menu--item">
                            <a className="footer__menu--link" href="mailto:hello@happydigital.nl">
                              hello@happydigital.nl
                            </a>
                            </li>
                        <li className="footer__menu--item">
                            <a className="footer__menu--link" href="#">
                             Instagram     
                            </a>
                        </li>
                        <li className="footer__menu--item">
                            <a className="footer__menu--link" href="#">
                              LinkedIn
                            </a>
                        </li>
                        <li className="footer__menu--item">
                            <a className="footer__menu--link" href="#">
                                    
                            </a>
                        </li>
                    </ul>
                  </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__studio--wrapper">
                        <a className="studio" href="#">
                            <img className="footer__studio" src={made_by_img} alt="" />
                        </a>
                    </div>
                    <div className="footer__socials--wrapper">
                        <ul className="footer__socials">
                            <li className="footer__socials--item">
                                <a className="footer__socials--link" href="#">
                                    <img className="footer__socials--img" src={linkedin_img} alt="" />
                                </a>
                            </li>
                            <li className="footer__socials--item">
                                <a className="footer__socials--link" href="#">
                                    <img className="footer__socials--img" src={facebook_img} alt="" />
                                </a>
                            </li>
                            <li className="footer__socials--item">
                                <a className="footer__socials--link" href="#">
                                    <img className="footer__socials--img" src={website_img} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};