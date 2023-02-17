import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className='content'>
    {/**we have to show child elements*/}
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout