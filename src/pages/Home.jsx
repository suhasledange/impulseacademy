import React from 'react'
import { Hero } from '../components'
import Baner from '../components/Baner/Baner'
import Review from '../components/Review/Review'
import Blogs from '../components/Blog/Blogs'
import Course from '../components/Course/Course'
import { Helmet } from 'react-helmet';
const Home = () => {

  return (
    <section>
       <Helmet>
        <title>Impulse Academy | Learn Physics Online</title>
        <meta
          name="description"
          content="Impulse Academy offers top-quality physics courses. Explore our diverse range of resources, blogs, and reviews to enhance your learning."
        />
        <meta
          name="keywords"
          content="Impulse Academy, physics courses, online learning, physics tutorials, physics resources"
        />
        <meta property="og:title" content="Impulse Academy | Learn Physics Online" />
        <meta property="og:description" content="Impulse Academy offers top-quality physics courses. Explore our diverse range of resources, blogs, and reviews to enhance your learning." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_to_image" />
      </Helmet>
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
