import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import "./Patientdetails.css";

const PatientDetails = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/makeRequest");
  }
  // const history = useHistory();

  // function navigateToHome() {
  //   history.push("/makerequest");
  // }
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Form
        className="PersonalForm shadow p-3 mt-5 d-flex flex-column "
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
              Patient Details
            </h6>
          </Col>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridCandidateName">
            <Form.Label className="Labels">Name *</Form.Label>
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
              placeholder="Enter Name"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPreferredName">
            <Form.Label className="Labels">ID *</Form.Label>
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
              placeholder="Enter Preferred Name"
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridDateofBirth">
            <Form.Label className="Labels">Address *</Form.Label>
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
              type="address"
              name="dateofBirth"
              placeholder="Ex - 123 Main St"
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridMobileNo">
            <Form.Label className="Labels">Phone Number *</Form.Label>
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
              type="number"
              name="mobileNo"
              placeholder=" Phone No"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMobileNo">
            <Form.Label className="Labels">Pin Code *</Form.Label>
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
              type="number"
              name="mobileNo"
              placeholder=" Phone No"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGender">
            <Form.Label className="Labels">Blood Group *</Form.Label>
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
              name="gender"
            >
              <option>AB+</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>A-</option>
              <option>B-</option>
              <option>O-</option>
              <option>AB-</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridMobileNo">
          <Form.Label className="Labels">Input File *</Form.Label>
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
            type="file"
            name="input"
            required
          />
        </Form.Group>

        <Row className="mb-3 ">
          <Col className="mt-4 mb-2 d-flex flex-row-reverse justify-content-center">
            <Button
              onClick={handleClick}
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
              Next
            </Button>
            <Button
              className="ReturnButton border-2 "
              style={{
                borderColor: "#102990",
                color: "white",
                marginTop: "10px",
                borderRadius: "8px",
                height: "80%",
                alignItems: "center",
              }}
              variant="outline-primary"
              type="button"
            >
              Return to Login Page
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default PatientDetails;
