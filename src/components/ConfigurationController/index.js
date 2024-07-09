import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const onChangeContent = event => {
            onToggleShowContent(event.target.checked)
          }

          const onChangeLeftNavbar = event => {
            onToggleShowLeftNavbar(event.target.checked)
          }

          const onChangeRightNavbar = event => {
            onToggleShowRightNavbar(event.target.checked)
          }

          return (
            <div className="controller-bg">
              <h1 className="layout-heading">Layout</h1>
              <div className="checkbox-container">
                <div className="single-container">
                  <input
                    type="checkbox"
                    id="content"
                    value="Content"
                    checked={showContent}
                    onChange={onChangeContent}
                  />
                  <label htmlFor="content" className="label">
                    Content
                  </label>
                </div>
                <div className="single-container">
                  <input
                    type="checkbox"
                    id="left-navbar"
                    value="Left Navbar"
                    checked={showLeftNavbar}
                    onChange={onChangeLeftNavbar}
                  />
                  <label htmlFor="left-navbar" className="label">
                    Left Navbar
                  </label>
                </div>
                <div className="single-container">
                  <input
                    type="checkbox"
                    id="right-navbar"
                    value="Right Navbar"
                    checked={showRightNavbar}
                    onChange={onChangeRightNavbar}
                  />
                  <label htmlFor="right-navbar" className="label">
                    Right Navbar
                  </label>
                </div>
              </div>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
