import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";
import "./makeRequest.css";
function MakeRequest(props) {
  const [pcredentials, setpcredentials] = useState({username:"",resources:"",criticality:""});
  const onChange=(e)=>{
    setpcredentials({ ...pcredentials, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    var response = await fetch(`http://127.0.0.1:8000/healthcare/demands/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: pcredentials.username,  resources: pcredentials.resources , paramedic_username:"ashishtodi", criticality: pcredentials.criticality})
        });
        var json = await response.json();
        props.showAlert("Request is made successfully ", "success")
    // if (credentials.password === credentials.cpassword) {
        
    //     console.log('Hi')
    //     console.log(json)
    //     if (json.Success) {
    //         props.showAlert("Successfully registered ", "success")
    //         // save the auth-token and redirect
    //         // localStorage.setItem('token', json.authtoken)
    //         // redirect karne ke liye usehistory(jo aab useNavigate hogya hai) hook ka use karunga
    //         history("/login")
    //     }
    //     else {
    //         props.showAlert("Failed to signup", "danger");
    //     }
    // }
    // else {
    //     props.showAlert("passwords do not match", "danger")
    // }
}
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Form
        className="RequestForm shadow p-3 mt-5 d-flex flex-column "
        onSubmit={handleSubmit}
        style={{
          border: "none",
          position: "relative",
          top: "50px",
          backgroundColor: "#F1F1F5",
          color: "black",
          fontSize: 15,
        }}
      >
        <Row>
          <Col className="mb-2">
            <h6
              style={{
                textAlign: "center",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Make Request
            </h6>
          </Col>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridCandidateName">
            <Form.Label className="Labels">Patient ID *</Form.Label>
            <Form.Control
              className="Inputs"
              style={{
                border: "0",
                marginTop: "-3px",
                fontWeight: "bold",
                height: "60%",
                color: "black",
                fontSize: 10,
              }}
              type="text"
              name="candidateName"
              placeholder="Enter Patient ID"
              value={pcredentials.username}
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPreferredName">
            <Form.Label className="Labels">Resource Required *</Form.Label>
            <Form.Control
              className="Inputs"
              style={{
                border: "0",
                marginTop: "-3px",
                height: "60%",
                fontWeight: "bold",
                color: "black",
                fontSize: 10,
              }}
              type="text"
              name="preferredName"
              placeholder="Enter Resource Required"
              value={pcredentials.resources}
              onChange={onChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGender">
            <Form.Label className="Labels">Criticality *</Form.Label>
            <Form.Select
              required
              className="Inputs"
              style={{
                border: "0",
                display: "flex",
                fontWeight: "bold",
                height: "60%",
                color: "black",
                fontSize: 10,
              }}
              name=""
              value={pcredentials.criticality}
              onChange={onChange}
            >
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3 ">
          <Col className="mt-4 mb-2 d-flex flex-row-reverse justify-content-center">
            <Button
              // onClick={navigateToHome}
              className="NextButton"
              style={{
                backgroundColor: "#102990",
                marginTop: "10px",
                fontWeight: "bold",
                borderRadius: "8px",
                height: "80%",
                marginRight: "10px",
              }}
              variant="primary"
              type="button"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default MakeRequest;
