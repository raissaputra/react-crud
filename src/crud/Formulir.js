import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h3>Tambah Data</h3>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" placeholder="ketikan makanan kamu" name="nama" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" placeholder="deskripsi" name="deskripsi"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number"  name="harga" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
