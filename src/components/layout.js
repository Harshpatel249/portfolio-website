import * as React from "react"
import PropTypes from "prop-types"
import { useMediaQuery } from 'react-responsive';

import Header from "./header"
import SocialStrip from "./social-strip"
import "./layout.css"

const Layout = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });
  return (
    isMobile ?
      <>
        <main>{children}</main>
      </>
      :
      <>
        <SocialStrip />
        <Header />
        <main>{children}</main>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
