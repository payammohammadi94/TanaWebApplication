import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Annoncement from '../components/annoncement/Annoncement'
import Slider from '../components/slider/Slider'
import Categorys from '../components/category/Categorys'
import PopularProducts from '../components/popularProduct/PopularProducts'
import Footer from '../components/footer/Footer'
export default function Home() {
  return (
    <div>
        <Annoncement />
        <Navbar/>
        <Slider />
        <Categorys />
        <PopularProducts />
        <Footer />
    </div>
  )
}
