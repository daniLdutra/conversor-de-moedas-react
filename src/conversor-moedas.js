import './conversor-moedas.css';
import { Form, Col, Button, Row, Spinner, Alert, Modal } from 'react-bootstrap';
import { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from './listar-moedas';

function ConversorMoedas() {
  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [exibirSpinner, setExibirSpinner] = useState(false);

  function handleValor({ target }) {
    setValor(target.value.replace(/\D/g, ''));
  }

  function handleMoedaDe({ target }) {
    setMoedaDe(target.value);
  }

  function handleMoedaPara({ target }) {
    setMoedaPara(target.value);
  }

  return (
    <div>
      <h1>Conversor de Moedas</h1>
      <div className="jumbotron">
        <Alert variant="danger" show={true}>
          Erro ao obter dados de conversão, tente novamente!
        </Alert>
        <Form>
          <Row>
            <Col sm="3">
              <Form.Control
                placeholder="0"
                value={valor}
                onChange={handleValor}
                required
              />
            </Col>
            <Col sm="3">
              <Form.Control
                as="select"
                value={moedaDe}
                onChange={handleMoedaDe}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="1" className="text-center" style={{ paddingTop: '5px' }}>
              <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
            </Col>
            <Col sm="3">
              <Form.Control
                as="select"
                value={moedaPara}
                onChange={handleMoedaPara}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="2">
              <Button variant="success" type="submit">
                <span className={exibirSpinner ? null : 'hidden'}>
                  <Spinner animation="border" size="sm" />
                </span>
                <span className={exibirSpinner ? 'hidden' : null}>
                  Converter
                </span>
              </Button>
            </Col>
          </Row>
        </Form>
        <Modal show={false}>
          <Modal.Header type="button" class="close" aria-label="Close">
            <Modal.Title>Conversão</Modal.Title>
            <span aria-hidden="true">X</span>
          </Modal.Header>
          <Modal.Body>Resultado da conversão aqui...</Modal.Body>
          <Modal.Footer>
            <Button variant="success">Nova conversão</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ConversorMoedas;
