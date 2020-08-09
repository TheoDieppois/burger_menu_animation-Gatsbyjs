import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useMousePosition from "../hooks/useMousePosition"
import { motion } from "framer-motion"

//Components
import Header from "./header"
import Menu from "../components/menu"

//Styles
import "../styles/App.scss"

const Layout = ({ children }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuState, setMenuState] = useState(false)

  // custom cursor
  const [cursorHovered, setCursorHovered] = useState(false)

  // disable scrolling when the menu is opened
  useEffect(() => {
    menuState
      ? document.body.classList.add("body-lock")
      : document.body.classList.remove("body-lock")
  }, [menuState])

  const { x, y } = useMousePosition()

  return (
    <div className="app">
      <motion.div
        animate={{
          x: x - 16,
          y: y - 16,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? 0.8 : 0,
        }}
        transition={{
          ease: "linear",
          duration: 0.2,
        }}
        className="cursor"
      ></motion.div>
      <Header
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
        siteTitle={siteData.site.siteMetadata.title}
      />
      <Menu
        setCursorHovered={setCursorHovered}
        menuState={menuState}
        setMenuState={setMenuState}
        x={x}
        y={y}
      />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
