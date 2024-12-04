import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
// import hooks/components
import useCustomizer from './hooks/useCustomizer'
import Links from './components/Links'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const {bgColor, fontFamily, navColor, mobileNavColor} = useCustomizer()

  useEffect(() => {
    // Apply the bgColor to the body:
    document.body.style.backgroundColor = `#${bgColor}`

    // apply font family
    if (fontFamily === 'Radio Canada') {
      document.body.style.fontFamily = `'Radio Canada', sans-serif`
    }

    if (fontFamily === 'Hind') {
      document.body.style.fontFamily = `'Hind', sans-serif`
    }

    if (fontFamily === 'Fredoka') {
      document.body.style.fontFamily = `'Fredoka', sans-serif`
    }

    if (fontFamily === 'Palanquin') {
      document.body.style.fontFamily = `'Palanquin', sans-serif`
    }

    if (fontFamily === 'Noto Sans') {
      document.body.style.fontFamily = `'Noto Sans', sans-serif`
    }

    // apply navbar & footer color
    document.querySelector('nav').style.backgroundColor = navColor
    document.querySelector('footer').style.background = navColor

  }, [bgColor, fontFamily, navColor])

  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Links></Links>
        <Footer></Footer>
      </HashRouter>
    </>
  )
}

export default App
