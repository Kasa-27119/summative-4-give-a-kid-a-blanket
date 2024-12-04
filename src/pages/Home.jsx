import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
// import components
import Articles from "../components/Articles"

const Home = () => {
  // states
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const handleGoDonation = (event) => {
    event.preventDefault()
    navigate('/donation')
  }

  return (
    <>
      <Helmet>
        {/* primary tags */}
        <title>Home - Give a Kid a Blanket</title>
        <meta name="title" content="Home - Give a Kid a Blanket" />
        <meta name="description" content="Welcome, we are Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />

        {/* open graph/ fb */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href}/>
        <meta property="og:title" content="Home - Give a Kid a Blanket" />
        <meta property="og:description" content="Welcome, we are Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1643321611132-15f7b8a63347?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="Home - Give a Kid a Blanket" />
        <meta property="twitter:description" content="Welcome, we are Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1643321611132-15f7b8a63347?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Helmet>

      {/* home hero section */}
      <div className='home-hero-box top-section section'>
        <div className="home-hero">
          {/* hero main box */}
          <div className="hero-main-box top-left-corner top-right-corner">
            <div className="hero-left top-left-corner">
              <div className="hero-top">
                <h1>Give a Kid a Blanket</h1>
                <img className='hero-logo' src="./images/gakab-logo.png" alt="give a kid a blanket logo" />
              </div>
              <p className='white-text'>Join us in spreading warmth and hope to families across our community—because together, we can make a difference.</p>

              {/* donate button */}
              <div className="hero-btn-box">
                <button className="primary-btn" onClick={handleGoDonation}>
                  <h4>Donate Now</h4>
                </button>
              </div>
            </div>
            <div className="hero-right top-left-corner"></div>
          </div>
          {/* hero pattern */}
          <div className="hero-pattern pattern bottom-right-corner bottom-left-corner"></div>
        </div>
      </div>

      {/* our mission section */}
      <div className="mission-box section">
        <div className="mission-top">
          <h2>Our Mission</h2>
          <p>We strive to create a compassionate and supportive environment where every child feels valued and empowered to thrive.</p>
        </div>

        {/* mission grid & items*/}
        <div className="mission-grid">

          <div className="mission-item">
            <img src="/images/new-nurture.png" alt="nurture icon"/>
            <h4>Nurture</h4>
            <p>We are dedicated to nurturing every child by addressing their needs with compassion.</p>
          </div>

          <div className="mission-item">
            <img src="/images/new-community.png" alt="commuunity icon"/>
            <h4>Community</h4>
            <p>We believe in working to unite individuals and organizations in the spirit of giving and support.</p>
          </div>

          <div className="mission-item">
            <img src="/images/new-kindness.png" alt="kindness icon"/>
            <h4>Kindness</h4>
            <p>Kindness is at the heart of everything we do, inspiring our actions with those we serve.</p>
          </div>

          <div className="mission-item">
            <img src="/images/new-participation.png" alt="participation icon"/>
            <h4>Participation</h4>
            <p>We encourage participation so that our collective effort creates lasting impact.</p>
          </div>
        </div>
      </div>

      {/* testimonials section */}
      <div className="testimonials-box section">
        <h2>Testimonials</h2>

        {/* panel box */}
        <div className="panel-box">
          <div className="panel-left top-left-corner testimonial1"></div>
          <div className="panel-right top-right-corner">
              <div className="panel-text">
                <p className='white-text'>"Last winter, we didn't have warm coats to play outside. Give a Kid a Blanket gave us jackets, gloves, and hats, and now we can enjoy winter and have fun with our friends. It made us so happy!" <br/><br/></p>
                <h6 className="white-text">- Emily & Thomas, aged 5 & 7</h6>
              </div>
              <div className="panel-pattern top-right-corner"></div>
          </div>
        </div>

        {/* reversed panel box */}
        <div className="panel-box box-reversed">
          <div className="panel-left bottom-right-corner testimonial2"></div>
          <div className="panel-right box-reversed bottom-left-corner">
              <div className="panel-text">
                <p className='white-text'>"My mom didn't have enough money to buy me a new blanket, and I was always cold going to bed. When Give a Kid a Blanket gave me a new warm blanket, I felt like I could sleep soundly. I'm so thankful for them." <br/><br/></p>

                <h6 className="white-text">- Alex, aged 6</h6>
              </div>
              <div className="panel-pattern bottom-left-corner"></div>
          </div>
        </div>
      </div>

      {/* articles & stories section */}
      <div className="articles-box section">
        <h2>Articles & Stories</h2>
        <div className="articles-posts-box full-corners">
          <Articles></Articles>
        </div>
      </div>

      {/* events section */}
      <div className="events-box section">
        <h2>Events</h2>

        {/* reversed panel box */}
        <div className="panel-box box-reversed">
          <div className="panel-left events1 top-right-corner"></div>
          <div className="panel-right box-reversed top-left-corner">
              <div className="panel-text">
              <h4 className="event-header">Operation Star 2024</h4>
              <p className='white-text'>We are hosting a special Christmas Charity Drive to bring joy and warmth to families in need, by giving them needed food and gifts this holidays. The event will take place on December 15th at the Community Center from 4:00 PM to 8:00 PM.</p>
              </div>
              <div className="panel-pattern top-left-corner"></div>
          </div>
        </div>

        {/* panel box */}
        <div className="panel-box">
          <div className="panel-left events2 bottom-left-corner"></div>
          <div className="panel-right bottom-right-corner">
              <div className="panel-text">
                <h4 className="event-header">Family Packs of Hope</h4>
                <p className='white-text'>Community members can contribute by sponsoring a family pack, donating items, or volunteering to assemble and distribute the packs. The goal is to reach 500 families by the end of the campaign.. This will take place on January 10th at the Community Center from 8:00 AM to 5:00 PM.</p>
              </div>
              <div className="panel-pattern bottom-right-corner"></div>
          </div>
        </div>
      </div>

      {/* gallery section */}
      <div className="gallery-box section">
        <h2>Gallery</h2>
        
        <div className="gallery-grid">
          <div className="gallery-box1 gallery-item"></div>
          <div className="gallery-box2 gallery-item"></div>
          <div className="gallery-box3 gallery-item"></div>
          <div className="gallery-box4 gallery-item"></div>
        </div>
      </div>
    </>
  )
}

export default Home
