import { useState } from "react"
import axios from "axios"

const formEndpoint = import.meta.env.VITE_WP_DONATION_FORM_ENDPOINT

const DonationForm = () => {
  // states for contact submission
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // states for input values
  const [name, setName] = useState("")
  const [donation, setDonation] = useState("")
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")
  const [message, setMessage] = useState("")

  // submit handler
  const handleSubmit = (event) => {
    event.preventDefault()

    const donationForm = new FormData()
    donationForm.append("your-name", name)
    donationForm.append("your-donation", donation)
    donationForm.append("your-email", email)
    donationForm.append("your-amount", amount)
    donationForm.append("your-message", message)

    axios
      .post(formEndpoint, donationForm, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      .then((response) => {
        console.log(response)
        setSubmitted(true)
      })

      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }

  if (submitted) {
    return (
      <div className="response-box">
        <h3 className="white-text">Thank You</h3>
        <p className="white-text">
          We are grateful for your donation.
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="response-box">
        <h3 className="white-text">Error</h3>
        <p className="white-text">
          We were unable to submit your donation. Please try again.
        </p>
      </div>
    )
  }

  return (
    <form className="form-right" onSubmit={handleSubmit} method="POST">
      <div className="form-field-grid">
        {/* fullname */}
        <div className="form-field">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          />
        </div>

        {/* donation type */}
        <div className="form-field">
          <label>Donation Type</label>
          <select
            name="donation"
            id="donationType"
            onChange={(event) => setDonation(event.target.value)}
            value={donation}
            required
          >
            <option value="">Select Type</option>
            <option value="One Time">One Time</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        {/* email*/}
        <div className="form-field">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </div>

        {/* amount */}
        <div className="form-field">
          <label>Amount ($)</label>
          <input
            type="text"
            name="amount"
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
            required
          />
        </div>
      </div>

      {/* message */}
      <div className="form-field-bottom">
        <label>Message</label>
        <input
          type="text"
          className="message"
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
      </div>

      <div className="form-submit-box">
        {/* submit button */}
        <button className="primary-btn form-btn" type="submit">
          <h4>Submit</h4>
        </button>
      </div>
    </form>
  )
}

export default DonationForm;
