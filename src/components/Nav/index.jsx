import React, { useState } from 'react'
import './index.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

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
      {createNavLink('#', <AiOutlineHome />)}
      {createNavLink('#about', <AiOutlineUser />)}
      {createNavLink('#experience', <BiBook />)}
      {createNavLink('#services', <RiServiceLine />)}
      {createNavLink('#contact', <BiMessageSquareDetail />)}
    </nav>
  )
}

export default Nav
