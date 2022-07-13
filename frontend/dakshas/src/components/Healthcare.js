import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Confirm from './Confirm';
import Dash from './Dash';

function Healthcare() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="/new" title="View Request">
        <Dash />
      </Tab>
      <Tab eventKey="/confirmed" title="Confirmed Appointments">
        <Confirm />
      </Tab>
    </Tabs>
  );
}

export default Healthcare;