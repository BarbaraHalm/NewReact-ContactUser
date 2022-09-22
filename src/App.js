import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import  Contact from "./component/Contact";
import ContactForm from './component/ContactForm';

function App() {
  const [users, setUsers] = useState([]);


const AddNewUser = (data) => {
  data.id = Math.random();toString();
  setUsers([...users,data])
  console.log(AddNewUser);
}

const EditUser = (id,newedit) => {
setUsers(
  users.map((data)=> {
    if (data.id === id) {
      return newedit;
    }
    return data;
  })
)
}

const DeleteUser = (id,deletedcontact) => {
setUsers(
  users.filter((data)=> {
    if (data.id !== id) {
      return deletedcontact
    }
    return data;
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


