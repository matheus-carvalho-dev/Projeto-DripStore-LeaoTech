import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import styles from "./RegisterModal.module.scss";
import { registerUser } from "../../services/api";


const RegisterModal = ({ show, handleClose }) => {

  const [form, setForm] = useState({

    nomeCompleto:"",
    cpf:"",
    email:"",
    celular:"",
    endereco:"",
    bairro:"",
    cidade:"",
    cep:"",
    complemento:"",
    newsletter:false

  });

  const handleChange = ({ target }) => {

    const { name, value, checked, type } = target;

    setForm({

      ...form,

      [name]: type === "checkbox" ? checked : value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      const response = await registerUser(form);

      alert(response.message || "Cadastro realizado!");

      handleClose();

    }catch(error){

      alert(error.message);

    }

  };

  return (

    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >

      <Modal.Header
        closeButton
        className={styles.modalHeader}
      >

        <Modal.Title className={styles.modalTitle}>
          Criar Conta
        </Modal.Title>

      </Modal.Header>

      <Modal.Body>

        <Form onSubmit={handleSubmit}>

          <h5 className={styles.sectionTitle}>
            Informações Pessoais
          </h5>

          <Form.Group className="mb-3">

            <Form.Label>Nome Completo *</Form.Label>

            <Form.Control
              className={styles.input}
              name="nomeCompleto"
              placeholder="Insira seu nome"
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>CPF *</Form.Label>

            <Form.Control
              className={styles.input}
              name="cpf"
              placeholder="Insira seu CPF"
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Email *</Form.Label>

            <Form.Control
              className={styles.input}
              type="email"
              name="email"
              placeholder="Insira seu email"
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Celular *</Form.Label>

            <Form.Control
              className={styles.input}
              name="celular"
              placeholder="Insira seu celular"
              onChange={handleChange}
            />

          </Form.Group>

          <h5 className={styles.sectionTitle}>
            Informações de Entrega
          </h5>

          <Form.Group className="mb-3">

            <Form.Label>Endereço *</Form.Label>

            <Form.Control
              className={styles.input}
              name="endereco"
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Bairro *</Form.Label>

            <Form.Control
              className={styles.input}
              name="bairro"
              onChange={handleChange}
            />

          </Form.Group>

          <div className="row">

            <div className="col-md-6">

              <Form.Group className="mb-3">

                <Form.Label>Cidade *</Form.Label>

                <Form.Control
                  className={styles.input}
                  name="cidade"
                  onChange={handleChange}
                />

              </Form.Group>

            </div>

            <div className="col-md-6">

              <Form.Group className="mb-3">

                <Form.Label>CEP *</Form.Label>

                <Form.Control
                  className={styles.input}
                  name="cep"
                  onChange={handleChange}
                />

              </Form.Group>

            </div>

          </div>

          <Form.Group className="mb-3">

            <Form.Label>Complemento</Form.Label>

            <Form.Control
              className={styles.input}
              name="complemento"
              onChange={handleChange}
            />

          </Form.Group>

          <Form.Check
            className="mb-4"
            type="checkbox"
            name="newsletter"
            label="Quero receber ofertas por e-mail."
            onChange={handleChange}
          />

          <Button
            type="submit"
            className={styles.button}
          >
            Criar Conta
          </Button>

        </Form>

      </Modal.Body>

    </Modal>

  );

};

export default RegisterModal;