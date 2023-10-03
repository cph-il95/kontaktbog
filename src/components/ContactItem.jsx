import React from 'react'

export default function ContactItem({contact}) {
  return (
    <div className='each-contact-info'>Name:
      <div className='names-contact'> 
        <p className='firstname-p'>{contact.firstname}</p>
        <p className='lastname-p'>{contact.lastname}</p>
      </div>

       <div className='email-contact'> Email:
        <p>{contact.email}</p>
       </div>

        <div className='phone-contact'> Phone:
          <p>{contact.phone}</p>
        </div>

        <div className='company-contact'> Company:
          <p>{contact.company}</p>
        </div>

        <div className='position-contact'> Position:
          <p>{contact.position}</p>
        </div>
        
    </div>
  )
}
