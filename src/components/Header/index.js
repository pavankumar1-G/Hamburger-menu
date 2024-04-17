// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header-container">
    <div className="nav-header-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="hamburger-icon"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-menu-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
              type="button"
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>

            <ul className="nav-menu-list">
              <Link className="nav-link" to="/" onClick={() => close()}>
                <li className="nav-menu-item">
                  <AiFillHome size="30" />
                  <p className="item-name">Home</p>
                </li>
              </Link>
              <Link className="nav-link" to="/about" onClick={() => close()}>
                <li className="nav-menu-item">
                  <BsInfoCircleFill size="30" />
                  <p className="item-name">About</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)
export default withRouter(Header)
