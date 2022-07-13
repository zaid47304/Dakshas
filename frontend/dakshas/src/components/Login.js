import './LoginPage.css';
import {Button, Form, Container, Row, Col, DropdownButton, Dropdown} from 'react-bootstrap';
import {useState} from 'react';

function Login() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
    return(
        <div className="login">
            <Container className="login-form">
                <Form>
                    <Row>
                        <div className='title-container'>
                            <h1 className='title'>Login</h1>
                        </div>
                        <Col>
                            <Form.Label>Select login preference:</Form.Label>
                            <DropdownButton id="dropdown-basic-button" title={value.slice(2)} onSelect={handleSelect}>
                                <Dropdown.Item href="#/Admin">Admin</Dropdown.Item>
                                <Dropdown.Item href="#/Healthcare">Healthcare</Dropdown.Item>
                                <Dropdown.Item href="#/Paramedic">Paramedic</Dropdown.Item>
                            </DropdownButton>
                            <hr></hr>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="btn">
                            Submit
                            </Button>
                        </Col>
                    </Row>   
                </Form>
            </Container>
        </div>
        )
    }
    export default Login;