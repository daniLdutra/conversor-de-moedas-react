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
  const [formValidado, setFormValidado] = useState(false);
  const [exibirModal, setExibirModal] = useState(false);

  function handleValor({ target }) {
    setValor(target.value.replace(/\D/g, ''));
  }

  function handleMoedaDe({ target }) {
    setMoedaDe(target.value);
  }

  function handleMoedaPara({ target }) {
    setMoedaPara(target.value);
  }

  function handleFecharModal(event) {
    setValor('1');
    setMoedaDe('BRL');
    setMoedaPara('USD');
    setFormValidado(false);
    setExibirModal(false);
  }

  function converter(event) {
    event.preventDefault();
    setFormValidado(true);
    if (event.currentTarget.checkValidity() === true) {
      //Imprementar chamada ao Fixed.io
      setExibirModal(true);
    }
  }

  return (
    <div>
      <h1>Conversor de Moedas</h1>
      <div className="jumbotron">
        <Alert variant="danger" show={true}>
          Erro ao obter dados de conversão, tente novamente!
        </Alert>
        <Form onSubmit={converter} noValidate validated={formValidado}>
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
        <Modal show={exibirModal} onHide={handleFecharModal}>
          {console.log(handleFecharModal)}
          <Modal.Header>
            <Modal.Title onHide={handleFecharModal}>Conversão</Modal.Title>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleFecharModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body>resultado conversao</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ConversorMoedas;
