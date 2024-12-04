import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageHeader = ({ title, image_url }) => {
  const navigate = useNavigate();

  const handleBackClick = (event) => {
      event.preventDefault();
      navigate(-1);
  }

  return (
    <div className="page-header-box">
      <div className='page-header' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${image_url})`}}>
        <div className="header-arrow">
          <i className="fa-solid fa-arrow-left-long" onClick={handleBackClick}></i>
        </div>
        <div className="header-text">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="page-header-pattern pattern"></div>
    </div>
  )
}

export default PageHeader
