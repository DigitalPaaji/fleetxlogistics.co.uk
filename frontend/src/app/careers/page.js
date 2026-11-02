import React from 'react'
import InnerBanner from '../components/InnerBanner'
import CareersPage from '../components/Careers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
          <>
    <Navbar/>
        <InnerBanner/>
        <CareersPage/>
        <Footer/>
        </>
    </div>
  )
}

export default page