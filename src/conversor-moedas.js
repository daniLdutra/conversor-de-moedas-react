import './conversor-moedas.css';
import { Form, Col, Button, Row } from 'react-bootstrap';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function ConversorMoedas() {
  return (
    <div>
      <h1>Conversor de Moedas</h1>
      <Form>
        <Row>
          <Col sm="3">
            <Form.Control placeholder="0" value={1} required />
          </Col>
          <Col sm="3">
            <Form.Control as="select"></Form.Control>
          </Col>
          <Col sm="1" className="text-center" style={{ paddingTop: '5px' }}>
            <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
          </Col>
          <Col sm="3">
            <Form.Control as="select"></Form.Control>
          </Col>
          <Col sm="2">
            <Button variant="success" type="submit">
              Converter
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ConversorMoedas;
