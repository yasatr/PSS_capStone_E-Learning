import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children, hideNavbar, hideFooter }) => {
    // console.log('hideNavbar : ', hideNavbar)
    // console.log('hideFooter : ', hideFooter)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!hideNavbar && <Navbar style={{ marginBottom: 'auto' }} />}
      <div style={{ flex: 1 }}>{children}</div>
      {!hideFooter && <Footer style={{ marginTop: 'auto' }} />}
    </div>
  )
}

export default Layout