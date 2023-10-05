import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Contact } from '../entities/Contact';


function ContactCreateModal({setContacts, contacts}) {
  const [show, setShow] = useState(false);
  
  function handleClose() {
    setShow(false);
    setFirstname("")
    setTouchedFirstname(false)
    setLastname("")
    setTouchedLastname(false)
    setEmail("")
    setTouchedEmail(false)
    setPhone("")
    setTouchedPhone(false)
    setCompany("")
    setTouchedCompany(false)
    setPosition("")
    setTouchedPosition(false)
  }

  const handleShow = () => setShow(true);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState ("");
  const [email, setEmail] = useState ("");
  const [phone,setPhone] = useState ("");
  const [company,setCompany] = useState ("");
  const [position, setPosition] = useState ("");
  const [touchedFirstname, setTouchedFirstname] = useState(false);
  const [touchedLastname, setTouchedLastname] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPhone, setTouchedPhone] = useState(false);
  const [touchedCompany, setTouchedCompany] = useState(false);
  const [touchedPosition, setTouchedPosition] = useState(false);

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
    handleClose()
  }

  let isValidFirstname = firstname.trim() !== '';
  let isValidLastname = lastname.trim() !== '';
  let isValidEmail = email.trim() !== '';
  let isValidPhone = phone.trim() !== '';
  let isValidCompany = company.trim() !== '';
  let isValidPosition = position.trim() !== '';

  console.log("first name", isValidFirstname);
  console.log("touched", touchedEmail)
  return (
    <>
    <div className='createmodal-container'> 

      <div className='open-add-btn'>
        <h4>Add new contacts here</h4>
        <Button className='opencontactmodal' variant="info" onClick={handleShow}>
        Add new contact
      </Button>
      </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new contact</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="firstname"
                placeholder="Type your firstname here"
                value={firstname}
                onChange={handleFirstnameChange}
                onBlur={() => setTouchedFirstname(true)}/>
              </Form.Group>
              { !isValidFirstname && touchedFirstname && firstname.trim() === '' && (
                <div className='error-message'>
                  Please fill out your firstname.
                </div>
              )}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Type your lastname here"
                value={lastname}
                onChange={handleLastNameChange}
                onBlur={() => setTouchedLastname(true)}/>
              </Form.Group>
              { !isValidLastname && touchedLastname &&
                <div className='error-message'>
                  Please fill out your lastname.
                </div>
              }

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Type your email here"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => setTouchedEmail(true)}
              /></Form.Group>
              { !isValidEmail && touchedEmail &&
                <div className='error-message'>
                  Please fill out your email.
                </div>
              }
             

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Type your phone number here"
                value={phone}
                onChange={handlePhoneChange}
                onBlur={() => setTouchedPhone(true)}/>
                </Form.Group>
                {!isValidPhone && touchedPhone &&
                  <div className='error-message'>
                    Please fill out your phone number.
                  </div>
                
                }

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="company"
                placeholder="Type your compant name here"
                value={company}
                onChange={handleCompanyChange}
                onBlur={() => setTouchedCompany(true)}/>
              </Form.Group>
              { !isValidCompany && touchedCompany &&
                <div className='error-message'>
                  Please fill out your company.
                </div>
              }

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="position"
                placeholder="Type your position here"
                value={position}
                onChange={handlePositionChange}
                onBlur={() => setTouchedPosition(true)}/>
              </Form.Group>
              { !isValidPosition && touchedPosition &&
                <div className='error-message'>
                  Please fill out your lastname.
                </div>
              }

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='cancel-btn' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='save-btn' variant="primary" onClick={handleAddContact}
          disabled={
            !touchedFirstname ||
            !touchedLastname ||
            !touchedEmail ||
            !touchedPhone ||
            !touchedCompany ||
            // !touchedPosition ||
            !isValidFirstname ||
            !isValidLastname ||
            !isValidEmail ||
            !isValidPhone ||
            !isValidCompany ||
            !isValidPosition
          }
          >
            Add contact
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default ContactCreateModal;