import React from "react";
import { Helmet } from "react-helmet";
import MainWrapper from "../components/MainWrapper";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import headshot from "../assets/img/about/bio_photo.PNG";

const About = () => {
  return (
    <MainWrapper>
      <Helmet>
        <title>Stadds: About</title>
      </Helmet>
      <Container conSize="-lg" other="bg-third rounded shadow">
        <Row>
          <Col size="md-5" order="order-md-2">
            <div className="card text-center p-2 no-bg-no-bd">
              <img
                src={headshot}
                className="img-fluid rounded"
                alt="Sam's headshot"
              />
            </div>
          </Col>
          <Col size="md-7" order="order-md-1" other="text-center">
            <h2 className="display-3">Welcome</h2>
            <h3>I'm Samantha Taddonio</h3>
            <hr className="my-4 fourth" />
            <p className="lead">
              I am a full-time Senior Business Analyst for a Product Solutions
              team. We work on building new products to support our company.
            </p>
            <p className="lead">
              When I have spare time I like to read, paint, and play D&amp;D.
            </p>
          </Col>
        </Row>
      </Container>
    </MainWrapper>
  );
};

export default About;
