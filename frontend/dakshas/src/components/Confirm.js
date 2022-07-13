import React from "react";
import "./box.css";
import { Card } from "react-bootstrap";


const Confirm = () => {
  const cardInfo = [
    {
        name: "A Guy",
        patientId: 3456987,
        problem: "Cardiovascular pain",
        bloodGroup: "B+",
        zipcode: 410590
    },
    {
        name: "A Guy",
        patientId: 3456987,
        problem: "Cardiovascular pain",
        bloodGroup: "B+",
        zipcode: 410590
    },
    {
        name: "A Guy",
        patientId: 3456987,
        problem: "Cardiovascular pain",
        bloodGroup: "B+",
        zipcode: 410590
    },
    {
        name: "A Guy",
        patientId: 3456987,
        problem: "Cardiovascular pain",
        bloodGroup: "B+",
        zipcode: 410590
    },
    {
        name: "A Guy",
        patientId: 3456987,
        problem: "Cardiovascular pain",
        bloodGroup: "B+",
        zipcode: 410590
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "auto" }} key={index} className="box">
        <Card.Body>
          <Card.Title>Request No: {index+1}</Card.Title>
          <Card.Text>Patient Name: {card.name}</Card.Text>
          <Card.Text>ID: {card.patientId}</Card.Text>
          <Card.Text>Problem: {card.problem}</Card.Text>
          <Card.Text>Blood Group: {card.bloodGroup}</Card.Text>
          <Card.Text>Zipcode: {card.zipcode}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};


export default Confirm;