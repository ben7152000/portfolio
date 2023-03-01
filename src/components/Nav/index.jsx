import React, { useState } from 'react'
import './index.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const navLinks = {
    '#': <AiOutlineHome />,
    '#about': <AiOutlineUser />,
    '#experience': <BiBook />,
    '#services': <RiServiceLine />,
    '#contact': <BiMessageSquareDetail />
  }

  function createNavLink(href, icon) {
    return (
      <a
        href={href}
        onClick={() => setActiveNav(href)}
        className={activeNav === href ? 'active' : ''}
      >
        {icon}
      </a>
    )
  }

  return (
    <nav>
      {Object.entries(navLinks).map(([href, icon]) => createNavLink(href, icon))}
    </nav>
  )
}

export default Nav