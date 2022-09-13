import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import  Contact from "./component/Contact";
import ContactForm from './component/ContactForm';

function App() {
  const [users, setUsers] = useState([
    { 
      name: "Kelvin ", 
      phonenumber: " +233 45(345)-3454",
      location: "East-Legon", id: "17373788" 
    },
    { 
      name: "Dela",
      phonenumber: " +44 (345)564-7439 ",
      location: "Brimingham ",
      id: "19929920" },
    { 
      name: " Orison",
      phonenumber: "+1 (546)725-0289",
      location: "College-Park ",
      id: "uqawquei" },
  ]);


const AddNewUser = (data) => {
  data.id = Math.random();toString();
  setUsers([...users,data])
  console.log(AddNewUser);
}

const EditUser = (id,newedit) => {
setUsers(
  users.map((wantedUser)=> {
    if (wantedUser.id === id) {
      return newedit;
    }
    return wantedUser;
  })
)
}

const DeleteUser = (id) => {
setUsers(
  users.filter((user)=> {
    if (user.id !== id) {
      return user;
    } 
  })
)

}


return (
  <>
<Container>
 <Row style={{marginTop: "20px"}}>
 <Col md={4}>
 <h3>CONTACT FORM</h3>
 <ContactForm addUser= {AddNewUser}/>
 </Col>


<Col md={8}>
<Contact user={users} editUser={EditUser} delete={DeleteUser}/>
</Col>

 </Row>
</Container>
  </>
 );
}

export default App;


