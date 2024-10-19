import React from 'react'
import './Header.css'

import TeacherIcon from '../svg/Teacher'
const Header = () => {
  return (
    <>
        <header>
          <button className='hover title'>Teacher.io</button>
          <div className='logoImg'> <TeacherIcon /></div>
        </header>
    </>
  )
}

export default Header