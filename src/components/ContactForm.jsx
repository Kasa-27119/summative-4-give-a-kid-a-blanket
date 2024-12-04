import { useState } from "react"
import axios from "axios"
import Seo from "./Seo"

const formEndpoint = import.meta.env.VITE_WP_CONTACT_FORM_ENDPOINT

const ContactForm = () => {
  // states for contact submission
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // states for input values
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  // submit handler
  const handleSubmit = (event) => {
    // stop page refresh
    event.preventDefault()
    
    const contactForm = new FormData()
    contactForm.append('your-name', name);
    contactForm.append('your-email', email);
    contactForm.append('your-city', city);
    contactForm.append('your-phone', phone);
    contactForm.append('your-message', message);

    axios.post(formEndpoint, contactForm, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })

    .then((response) => {
      console.log(response)
      setSubmitted(true)
    })
    
    .catch((error) => {
      console.log(error)
      setError(error)
    })
      
  }

  if (submitted) {
    return (
      <div className="response-box">
        <h3 className="white-text">Thank You</h3>
        <p className="white-text">We will be in contact shortly.</p>
      </div>
    )
  }

  if (error) {
    <div className="response-box">
      <h3 className="white-text">Error</h3>
      <p className="white-text">We were unable to send your contact details. Please try again.</p>
    </div>
  }

  return (
    <form className="form-right" onSubmit={handleSubmit} method='POST'>
      <div className="form-field-grid">
        {/* form fields */}
        <div className="form-field">
          <label>Full Name</label>
          <input type="text" 
            name={name}
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          />
        </div>

        <div className="form-field">
          <label>Email Address</label>
          <input type="email"
            name={email}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </div>

        <div className="form-field">
          <label>City</label>
          <input type="text" 
            name={city}
            onChange={(event) => setCity(event.target.value)}
            value={city}
            required
          />
        </div>

        <div className="form-field">
          <label>Phone</label>
          <input type="tel"
            name={phone} 
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            required
          />
        </div>
      </div>

      <div className="form-field-bottom">
        <label>Message</label>
        <input type="text" 
          className='message'
          name={message}
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          required
        />
      </div>
            
      <div className="form-submit-box">
        <button 
          className='primary-btn form-btn'
          type="submit"
          >
            <h4>Submit</h4>
        </button>   
      </div>   
    </form>
  )
}

export default ContactForm


