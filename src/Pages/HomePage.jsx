import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import Hero from '../Components/Hero'
import FeatureSection from '../Components/FeatureSection'
import CardSection from '../Components/CardSection'
import WSection from '../Components/WSection'
import ReviewSection from '../Components/ReviewSection'
import AddReviewSection from '../Components/AddReviewSection'


function HomePage() {
  return (
  <>
  <Header />
<Carousel />
<br />
<FeatureSection  />
<br />
<Hero   name = "Welcome to Electronix" des = "Discover the best electronics with unbeatable prices and quality." btntxt = "Shop Now" img = "/Carosel/4.jpg"/>

<br />
<CardSection />
<WSection/>
<Hero   name = "New year Sale" des = "50% off" btntxt = "Sale Shop" img = "/Static Products/Sale/1.jpg"/>
<ReviewSection name = "What Our Customers Say" />
<AddReviewSection />
  <Footer />
  
  </>)
}

export default HomePage
