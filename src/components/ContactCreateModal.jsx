import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewContactForm from './NewContactForm';
import Form from 'react-bootstrap/Form';
import { Contact } from '../entities/Contact';

function ContactCreateModal({setContacts, contacts}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState ("");
  const [email, setEmail] = useState ("");
  const [phone,setPhone] = useState ("");
  const [company,setCompany] = useState ("");
  const [position, setPosition] = useState ("");

//   denne styrer name input feltet
  const handleFirstnameChange = (e) => {
    console.log(e.target.value)
    setFirstname(e.target.value)
  }

//   denne styrer lastname input feltet
  const handleLastNameChange = (e) => {
    console.log(e.target.value)
    setLastname(e.target.value)
  }

//   denne styrer email input feltet
  const handleEmailChange = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

//   denne styrer phone input feltet
  const handlePhoneChange = (e) => {
    console.log(e.target.value)
    setPhone(e.target.value)
  }

//   denne styrer company input feltet
  const handleCompanyChange = (e) => {
    console.log(e.target.value)
    setCompany(e.target.value)
  }

//   denne styrer position input feltet
  const handlePositionChange = (e) => {
    console.log(e.target.value)
    setPosition(e.target.value)
  }

  const handleAddContact = () => {
    const newContact = new Contact(firstname, lastname, email, phone, company, position);
    setContacts([...contacts, newContact]);
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new contact</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="firstname"
                placeholder="Jane"
                autoFocus
                value={firstname}
                onChange={handleFirstnameChange}
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Doe"
                autoFocus
                value={lastname}
                onChange={handleLastNameChange}
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="JaneDoe@example.com"
                autoFocus
                value={email}
                onChange={handleEmailChange}
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="45 45 45 45"
                autoFocus
                value={phone}
                onChange={handlePhoneChange}
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="company"
                placeholder="Netto"
                autoFocus
                value={company}
                onChange={handleCompanyChange}
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="position"
                placeholder="CEO"
                autoFocus
                value={position}
                onChange={handlePositionChange}
              /></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddContact}>
            Add contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactCreateModal;