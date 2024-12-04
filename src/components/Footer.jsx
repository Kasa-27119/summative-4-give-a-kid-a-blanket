import React from "react"

const Footer = () => {

  return (
    <footer>
      <div className="footer-main">
        <div className="footer-left">
          <div className='footer-logo'></div>
          <p>Unit 6/91 Central Park Drive, Henderson, <br/>Auckland 0610<br/>
          Give a Kid a Blanket © 2024</p>
        </div>
        <div className="footer-right">
          {/* footer link icons */}
          <a href="https://www.facebook.com/profile.php?id=100064575226572&ref=page_internal" target="_blank">
            <div className="footer-icon facebook"></div>
          </a>

          <a href="https://www.instagram.com/giveakidablanketnz/" target="_blank">
            <div className="footer-icon instagram"></div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
