import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer3 = () => {
  return (
    <footer className='mainFooter' id='contact'>
        <div className='leftFooter'>
            <Link to='/login' style={{color:'white',textDecoration:'none',cursor:'text'}}><h1>ScanHubGen</h1></Link>
            <p>No.19/35,Situated on First Floor, Mount Road, Little Mount, 
Chennai-600015.

Customer care: 6380683793</p>
        </div>
        <div className='rightFooter'>
            <div className='footerLogos'>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <p>www.rayyan.co.in</p>
        </div>
    </footer>
  )
}

export default Footer3