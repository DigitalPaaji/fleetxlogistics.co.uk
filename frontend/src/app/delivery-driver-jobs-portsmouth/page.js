import React from 'react'
import Banner from '../components/Banner'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Jobs from '../components/Jobs'


function page() {

  return (
    <div>
      <Navbar/>
      <Banner/>
      <Jobs/>
      <Intro/>
      <Footer/>
    </div>
  )
}

export default page;