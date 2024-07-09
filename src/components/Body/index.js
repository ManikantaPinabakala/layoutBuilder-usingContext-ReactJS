import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Body extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value

          return (
            <div className="body-container">
              {showLeftNavbar && (
                <div className="left-menu-container">
                  <h1 className="body-section-heading">Left Navbar Menu</h1>
                  <ul className="left-list">
                    <li className="left-list-item">Item 1</li>
                    <li className="left-list-item">Item 2</li>
                    <li className="left-list-item">Item 3</li>
                    <li className="left-list-item">Item 4</li>
                  </ul>
                </div>
              )}
              {showContent && (
                <div className="content-container">
                  <h1 className="body-section-heading">Content</h1>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              )}
              {showRightNavbar && (
                <div className="right-container">
                  <h1 className="body-section-heading">Right Navbar</h1>
                  <div className="ads-container">
                    <div className="ad-container">
                      <p className="text">Ad 1</p>
                    </div>
                    <div className="ad-container">
                      <p className="text">Ad 2</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
