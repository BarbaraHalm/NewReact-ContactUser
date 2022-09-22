import React ,{useState}from 'react';
import { Card,Col,Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'
import EditContactForm from './EditContactForm';

const ContactUsers = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const HandleDelete = (e) => {
      e.preventDefault();
      props.delete(props.userData.id)
    }


    
    return (
        <>
       <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Changes Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm editUser={props.editUser} prefill={props.userData} 
       closeModal={handleClose} />
        </Modal.Body>
      </Modal>
    
            <Col style={{ marginTop:"1rem"}}>
            <Card style={{backgroundColor:"lightpink", color: "black"}}>
      <Card.Body>
        <Card.Title>Name:{props.userData.name}</Card.Title>
        <Card.Text>
         Phone Num: {props.userData.phonenumber}
        </Card.Text>

        <Card.Text>
        Loaction: {props.userData.location}
        </Card.Text>

        <Button href="#" variant="primary" style={{marginRight:"10px", fontSize:"20px", width:"75px"}} 
        onClick={handleShow} > 
         Edit</Button>
        <Button href="#" variant="danger" style={{fontSize:"20px"}}onClick={HandleDelete}> Delete </Button>
      </Card.Body>
    </Card>
            </Col>
    </>
    );
}

export default ContactUsers;