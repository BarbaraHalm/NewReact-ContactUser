import React from 'react';
import ContactUsers from "./ContactUsers";
import { Container,Row } from 'react-bootstrap';
import { connect } from "react-redux"
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
const mapStateToProps = (state)=> ({
    user: state.users
})
export default connect(mapStateToProps)(Contact);