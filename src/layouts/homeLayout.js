/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.css"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <main>
      <div className="home-page">{children}</div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
