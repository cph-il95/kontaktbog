import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="name"
                placeholder="Jane"
                autoFocus
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="name"
                placeholder="Doe"
                autoFocus
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="JaneDoe@example.com"
                autoFocus
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="name"
                placeholder="45 45 45 45"
                autoFocus
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="name"
                placeholder="Netto"
                autoFocus
              /></Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput0">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="name"
                placeholder="CEO"
                autoFocus
              /></Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;