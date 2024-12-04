import { Helmet } from 'react-helmet'
import PageHeader from '../components/PageHeader'
import DonationForm from '../components/DonationForm'

const Donation = () => {
  return (
    <>
      <Helmet>
        {/* primary tags */}
        <title>Donation - Give a Kid a Blanket</title>
        <meta name="title" content="Donation - Give a Kid a Blanket" />
        <meta name="description" content="Donate now to Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />

        {/* open graph/ fb */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href}/>
        <meta property="og:title" content="Donation - Give a Kid a Blanket" />
        <meta property="og:description" content="Donate now to Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1534982841079-afde227ada8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="Donation - Give a Kid a Blanket" />
        <meta property="twitter:description" content="Donate now to Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1534982841079-afde227ada8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Helmet>

      {/* page header section */}
      <div className='section top-section'>
        <PageHeader className='page-header' title='Donation'
          image_url='https://images.unsplash.com/photo-1534982841079-afde227ada8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        </PageHeader>
      </div>
      
      {/* make a donation section */}
      <div className="donation-section section">
        <h2>Make a Donation</h2>

        {/* donation form */}
        <div className='form-box full-corners'>
          {/* form left - img and pattern */}
          <div className="form-left">
            <div className="pattern top-left-corner bottom-left-corner form-pattern"></div>
            <img className="form-img" src='https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='children smiling image'></img>
          </div>

          {/* form right - donation form */}
          <DonationForm></DonationForm>
          {/* <form className="form-right">
            <div className="form-field-grid">
             
              <div className="form-field">
                <label>Full Name</label>
                <input type="text"/>
              </div>

              <div className="form-field">
                
                <label>Donation Type</label>
                <select name="donation-type" id="donationType">
                  <option value='One Time'>One Time</option>
                  <option value='Monthly'>Monthly</option>
                </select>

              </div>

              <div className="form-field">
                <label>Email Address</label>
                <input type="email"/>
              </div>

              <div className="form-field">
                <label>Amount ($)</label>
                <input type="number"/>
              </div>
            </div>
            <div className="form-field-bottom">
              <label>Message</label>
              <input type="text" className='message'/>
            </div>
            
            <button className='primary-btn form-btn'>To Payment</button>
          </form> */}
        </div>
      </div>
    </>
  )
}

export default Donation
