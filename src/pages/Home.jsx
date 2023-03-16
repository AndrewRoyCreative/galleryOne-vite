import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

import Hero from '../sections/Hero'
import WhatsOn from '../sections/WhatsOn'
import Exhibits from '../sections/Exhibits'
import Articles from '../sections/Articles'
import Newsletter from '../sections/Newsletter'


const Home = () => {



  return (
    <>
    <Navbar />
    <Hero />
    <WhatsOn />
    <Exhibits />
    <Articles />
    <Slider />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home