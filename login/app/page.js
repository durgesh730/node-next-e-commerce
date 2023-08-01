import Footer from '@/component/Footer/Footer'
import Products from '@/component/Products/Products'
import './globals.css'
import Navbar from '@/component/Navbar/Navbar'

const page = () => {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  )
}

export default page
