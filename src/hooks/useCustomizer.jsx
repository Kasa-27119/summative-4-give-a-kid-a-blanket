import {useState, useEffect} from 'react'
import axios from 'axios'

const useCustomizer = () => {
  const [bgColor, setBgColor] = useState('')
  const [fontFamily, setFontFamily] = useState('')
  const [navColor, setNavColor] = useState('')
  const [mobileNavColor, setMobileNavColor] = useState('')

  const baseUrl = import.meta.env.VITE_WP_BASE_URL

  useEffect (() => {
    axios.get(`${baseUrl}/wp-json/custom-theme/v1/customizer-settings`)
    .then((response) => {
      const { backgroundColor, fontFamily, navbarColor,  mobileMenu } = response.data
      setBgColor(backgroundColor)
      setFontFamily(fontFamily)
      setNavColor(navbarColor)
      setMobileNavColor(navbarColor)
    })
    .catch((error) => {
      console.error('error fetching customizer values', error)
    })
  }, [baseUrl])

  return {bgColor, fontFamily, navColor, mobileNavColor}
}

export default useCustomizer
