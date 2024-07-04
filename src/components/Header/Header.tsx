// components/Header.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleMenu } from "../../redux/menuSlice";
import logo from "../../img/logo.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { NavLink } from "react-router-dom";
import "./Header.scss";

type Props = {
  isTopOfPage: boolean;
};

export const Header = ({ isTopOfPage }: Props) => {
  const isMenuToggled = useSelector((state: RootState) => state.menu.isMenuToggled);
  const dispatch = useDispatch();
  const isAboveMediumScreens = useMediaQuery("(max-width: 991px)");
  const headerBackground = isTopOfPage ? "" : "#EDEFF5";

  const activeLink = 'header__nav-link header__nav-link--active';
  const normalLink = 'header__nav-link';

  const mobileActiveLink = 'mobile-menu__nav-link mobile-menu__nav-link--active';
  const mobileNormalLink = 'mobile-menu__nav-link';

  return (
    <>
      <header className="header" style={{ backgroundColor: headerBackground }}>
        <div className="container-md">
          <div className="header__inner">
            <NavLink to="/" className="logo">
              <img className='logo__img' src={logo} alt="logo" />
            </NavLink>
            {isAboveMediumScreens ? (
              <button className="menu__btn" onClick={() => dispatch(toggleMenu())}>
                <span className={isMenuToggled ? "nav-icon nav-icon--active" : "nav-icon"}></span>
              </button>
            ) : (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                    <NavLink
                      to="/"
                      className={({ isActive }) => isActive ? activeLink : normalLink}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="header__nav-item">
                    <NavLink
                      to='/services'
                      className={({ isActive }) => isActive ? activeLink : normalLink}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="header__nav-item">
                    <NavLink
                      to='/about'
                      className={({ isActive }) => isActive ? activeLink : normalLink}
                    >
                      About us
                    </NavLink>
                  </li>
                  <li className="header__nav-item">
                    <NavLink
                      to='/extra-sales'
                      className={({ isActive }) => isActive ? activeLink : normalLink}
                    >
                      Extra Salespage
                    </NavLink>
                  </li>
                </ul>
                <div className="action">
                  <NavLink
                    to='/free-guide'
                    className="action__button--menu"
                  >
                    Get your free guide now
                  </NavLink>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu modal */}
      {isAboveMediumScreens && isMenuToggled && (
        <div className="mobile-menu__nav">
          <ul className="mobile-menu__nav-list">
            <li className="mobile-menu__nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
              >
                Home
              </NavLink>
            </li>
            <li className="mobile-menu__nav-item">
              <NavLink
                to='/services'
                className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
              >
                Services
              </NavLink>
            </li>
            <li className="mobile-menu__nav-item">
              <NavLink
                to='/about'
                className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
              >
                About us
              </NavLink>
            </li>
            <li className="mobile-menu__nav-item">
              <NavLink
                to='/extra-sales'
                className={({ isActive }) => isActive ? mobileActiveLink : mobileNormalLink}
              >
                Extra Salespage
              </NavLink>
            </li>
          </ul>
          <div className="action">
            <NavLink
              to='/free-guide'
              className="action__button--menu"
            >
              Get your free guide now
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
