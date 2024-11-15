import React from 'react'
import { Hero } from '../components'
import Baner from '../components/Baner/Baner'
import Review from '../components/Review/Review'
import Blogs from '../components/Blog/Blogs'
import Course from '../components/Course/Course'

const Home = () => {

  return (
    <section>
    <section>
      <Hero/>
      <Baner/>
    </section>
    <section>
            <Course/>
    </section>
    <section>
            <Review/>
    </section>
    <section>
        <Blogs />
    </section>
    </section>
  )
}

export default Home
