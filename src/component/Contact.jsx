import React from 'react';
import ContactUsers from "./ContactUsers";
import { Container,Row } from 'react-bootstrap';
const Contact = (props) => {
    return (
        <div>
            <h3>CONTACT LIST</h3>
    <Container>
        <Row md={3}>
        {props.user.map((user,index)=> {
        return (
            <div key={index}>
            <ContactUsers userData={user}
             editUser={props.editUser}
             delete={props.delete}/>
            </div>
        )
      })}
        </Row>
    </Container>
        </div>
    );
}

export default Contact;