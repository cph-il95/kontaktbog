import React from 'react'

export default function ContactItem({contact}) {
  return (
    <div>
        <p>{contact.firstname}</p>
        <p>{contact.lastname}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.company}</p>
        <p>{contact.position}</p>
    </div>
  )
}
