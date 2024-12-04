import { Helmet } from 'react-helmet'
import PageHeader from '../components/PageHeader'
import Members from '../components/Members'
import Sponsors from '../components/Sponsors'

const About = () => {
  return (
    <>
      <Helmet>
        {/* primary tags */}
        <title>About Us - Give a Kid a Blanket</title>
        <meta name="title" content="About Us - Give a Kid a Blanket" />
        <meta name="description" content="Read about Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />

        {/* open graph/ fb */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href}/>
        <meta property="og:title" content="About Us - Give a Kid a Blanket" />
        <meta property="og:description" content="Read about Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1567303594219-01425314f0fb?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="About Us - Give a Kid a Blanket" />
        <meta property="twitter:description" content="Read about Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1567303594219-01425314f0fb?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Helmet>

      {/* page header section */}
      <div className='section top-section'>
        <PageHeader className='page-header' title='About Us'
          image_url='https://images.unsplash.com/photo-1567303594219-01425314f0fb?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        </PageHeader>
      </div>

      {/* our story section */}
      <div className="story-box section">
        <h2>Our Story</h2>
        <div className="panel-box box-reversed">
          <div className="panel-left our-story top-left-corner bottom-left-corner"></div>
          <div className="panel-right box-reversed bottom-left-corner top-left-corner">
            <div className="panel-text">
              <p className='white-text'>Give a Kid a Blanket was born from the vision and dedication of a passionate couple, Bernie and Donna, who have spent their lives championing causes for vulnerable communities. Driven by their belief that every child deserves warmth and dignity.<br/> Their commitment to creating positive change continues to inspire the charity's mission and values, touching countless lives along the way.</p>
            </div>
            <div className="panel-pattern top-left-corner bottom-left-corner "></div>
          </div>
        </div>
      </div>

      {/* our impact section */}
      <div className="impact-box section">
        <h2>Our Impact</h2>
        <p className='brown-text'>Give a Kid a Blanket has made a remarkable positive impact on the lives of children around Auckland, offering essential support and resources through their child-centric initiatives over the past 10 years.</p>

        {/* impact grid */}
        <div className="impact-grid">
          {/* impact items */}
          <div className="impact-item">
            <img className="impact-icon" src='./images/new-donation.png'></img>
            <h4 className='brown-text'>Donations</h4>
            <p className='brown-text'>We have raised an average of $50,000 NZD in donations per year.</p>
          </div>

          <div className="impact-item">
            <img className="impact-icon" src='./images/new-children.png'></img>
            <h4 className='brown-text'>Children</h4>
            <p className='brown-text'>We have helped around 2,000 children around Auckland per year.</p>
          </div>

          <div className="impact-item">
            <div className="impact-icon volunteer"></div>
            <img className="impact-icon" src='./images/new-volunteers.png'></img>
            <h4 className='brown-text'>Volunteers</h4>
            <p className='brown-text'>We register around 150 dedicated volunteers per year.</p>
          </div>
        </div>
      </div>

      {/* our team grid */}
      <div className="team-box section">
        <h2>Our Team</h2>
        {/* team grid */}
        <div className="team-grid full-corners">
          <Members></Members>
        </div>
      </div>


      {/* our sponsors grid */}
      <div className="sponsors-box section">
        <h2>Our Sponsors</h2>
        {/* sponsors grid */}
        <div className="sponsors-grid">
          {/* sponsor items */}
          <Sponsors></Sponsors>
        </div>
      </div>
    </>
  )
}

export default About

