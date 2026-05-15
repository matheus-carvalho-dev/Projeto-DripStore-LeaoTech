import React from 'react'
import Gallery from './components/Gallery/Gallery'
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection'
import Categories from './components/Categories/Categories'

const Home = () => {
  return (
    <div>
      <main className='container'>
          <Categories/>
      </main>
    </div>
  )
}

export default Home