import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import SocialStrip from "./social-strip"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <SocialStrip />
      <Header/>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
