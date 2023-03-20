import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Col,
  Form,
  Row,
} from "react-bootstrap";

export default function Home() {
  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="home-container" fluid>
      <Row className="home-row">
        <Col className="text-column">
          <h1 className="text-column-header">
            Learn to code by watching others
          </h1>
          <p className="text-column-body">
            See how experienced developers solve problems in real-time. Watching scripted
            tutorials is great, but understanding how developers think is invaluable.
          </p>
        </Col>
        <Col className="form-column">
          <Card className="form-card-header">
            <h4 className="form-card-header-text">
              <strong>Try it free 7 days&nbsp;</strong>
            </h4>
            <h4 className="form-card-header-text">
              then $20/mo. thereafter
            </h4>
          </Card>

          <Card className="form-card-container">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="form-input-field"
                  size="lg"
                  placeholder="First Name"
                  required
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <Form.Control.Feedback className="form-feedback" type="invalid">
                  First Name cannot be empty
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Control
                  className="form-input-field"
                  size="lg"
                  placeholder="Last Name"
                  required
                  onChange={(event) => setLastName(event.target.value)}
                />
                <Form.Control.Feedback className="form-feedback" type="invalid">
                  Last Name cannot be empty
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  className="form-input-field"
                  size="lg"
                  type="email"
                  placeholder="Email Address"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Control.Feedback className="form-feedback" type="invalid">
                  Looks like this is not an email
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  className="form-input-field"
                  size="lg"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Form.Control.Feedback className="form-feedback" type="invalid">
                  Password cannot be empty
                </Form.Control.Feedback>
              </Form.Group>

              <Button className="form-claim-button" size="lg" type="submit">
                CLAIM YOUR FREE TRIAL
              </Button>
              <Form.Text className="text-muted form-footer-text">
                By clicking the button, you are agreeing to our
                <Button className="terms-and-services-link" bsPrefix="custom-btn" variant="link" href="">
                  Terms and Services
                </Button>
              </Form.Text>
            </Form>
          </Card>
        </Col>
      </Row>

    </Container >
  );
}