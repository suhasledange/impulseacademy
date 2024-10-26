import React from 'react'
import { Hero } from '../components'
import Baner from '../components/Baner/Baner'
import Courses from './Courses'
import Review from '../components/Review/Review'
import Blogs from '../components/Blog/Blogs'

const Home = () => {
  return (
    <section>
    <section id="Home">
      <Hero/>
      <Baner/>
    </section>
    <section id="Courses">
            <Courses/>
    </section>
    <section className='Review'>
            <Review/>
    </section>
    <section>
        <Blogs/>
    </section>
    </section>
  )
}

export default Home
