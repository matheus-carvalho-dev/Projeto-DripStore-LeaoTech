import React from 'react'
import Gallery from './components/Gallery/Gallery'
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection'

const Home = () => {
  return (
    <div>
      <main className='container'>
          <FeaturedCollection/>
      </main>
    </div>
  )
}

export default Home