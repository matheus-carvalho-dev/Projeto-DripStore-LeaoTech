import React from 'react'
import Gallery from './components/Gallery/Gallery'
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection'
import Categories from './components/Categories/Categories'
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className={`${styles.body}`}>
      <Header/>
      <main className='container'><Gallery/> <FeaturedCollection/> <Categories/> </main>
      <Footer/>
    </div>
  )
}

export default Home