import { Helmet } from "react-helmet"
// import components
import PageHeader from "../components/PageHeader"
import ContactForm from "../components/ContactForm"

const Contact = () => {

  return (
    <>
      <Helmet>
        {/* primary tags */}
        <title>Contact Us - Give a Kid a Blanket</title>
        <meta name="title" content="Contact Us - Give a Kid a Blanket" />
        <meta name="description" content="Contact us at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />

        {/* open graph/ fb */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Contact Us - Give a Kid a Blanket" />
        <meta property="og:description" content="Contact us at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1579190520010-4226162a0cb5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="Contact Us - Give a Kid a Blanket" />
        <meta property="twitter:description" content="Contact us at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1579190520010-4226162a0cb5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Helmet>

      <div className='section top-section'>
        <PageHeader className='page-header'   title='Contact'
          image_url='https://images.unsplash.com/photo-1579190520010-4226162a0cb5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        </PageHeader>
      </div>

      {/* contact details section */}
      <div className="contact-details-section section">
        <h2>Contact Details</h2>
        <div className="contact-box box-reversed">
          <div className="panel-left top-right-corner bottom-right-corner auckland"></div>
          <div className="panel-right box-reversed bottom-left-corner top-left-corner">
            <div className="panel-text">
              <p className="white-text">
              We welcome you to visit and donate, by appointment only at
              Unit 6/91 Central Park Drive, Henderson, Auckland 0610. <br></br>Any post or orders from an online delivery are to be sent to this address at 03 Christian Rd, Swanson, Auckland 0614. Please drop us an email to let us know it's coming.<br></br><br></br>If you have any further questions, please contact us at badwakk@xtra.co.nz.
              </p>
            </div>
            <div className="panel-pattern top-left-corner bottom-left-corner "></div>
          </div>
        </div>
      </div>

      {/* contact form section */}
      <div className="contact-form-section section">
        <h2>Contact Form</h2>

        {/* contact form */}
        <div className='form-box full-corners reverse'>
          
          <div className="form-left reverse">
            <div className="pattern top-right-corner bottom-right-corner form-pattern"></div>
            <img className="form-img" src='https://images.unsplash.com/photo-1643321614612-45037d065d22?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='children smiling image'></img>
          </div>

          {/* contact form */}
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  )
}

export default Contact
