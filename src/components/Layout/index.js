import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

import './index.css'

class Layout extends Component {
  render() {
    return (
      <div className="layout-bg">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Layout
