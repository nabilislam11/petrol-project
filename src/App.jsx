import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Container from './components/layout/Container'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Welcome from './components/Welcome/Welcome'
import Slider from './components/Slider/Slider'
import Service from './components/Service/Service'
import About from './components/About/About'
import Logo from './components/Logo/Logo'
import Blog from './components/Blog/Blog'


function App() {


  return (
    <>
  
    <Header></Header>
    <Container></Container>
    <Navbar></Navbar>
    <Banner></Banner>
    <Welcome></Welcome>
    <Slider></Slider>
    <Service></Service>
    <About></About>
    <Logo></Logo>
    <Blog></Blog>
    </>
  )
}

export default App
