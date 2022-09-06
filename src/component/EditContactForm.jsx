import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const EditContactForm = (props) => {
    const [name, setName] = useState(props.prefill.name);
    const [phonenumber, setPhonenumber] = useState(props.prefill.phonenumber);
    const [location, setLocation] = useState(props.prefill.location);

    const HandleEdit =(e)=> {
        e.preventDefault();
        props.editUser(props.prefill.id,{ name, phonenumber, location });
        setName("");
        setPhonenumber("");
        setLocation("")
        props.closeModal()
    }

    return (
        <div>
             <Form style={{border:"1px solid black", backgroundColor: "lightcoral", height: "350px" ,borderRadius: "15px"}}>
                <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}}
                 className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} 
                className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" value={phonenumber} onChange={(e) => {
                        setPhonenumber(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} 
                className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" value={location} onChange={(e) => {
                        setLocation(e.target.value)
                    }} />
                </Form.Group>

                <Button style={{width: "100px", marginRight:"30px", marginLeft:"50px", fontSize:"15px" }} variant="primary" type="submit" onClick={HandleEdit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default EditContactForm;