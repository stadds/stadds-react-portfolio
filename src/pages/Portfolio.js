import React from "react";
import { Helmet } from "react-helmet";
import MainWrapper from "../components/MainWrapper";
import Container from "../components/Container";
import Row from "../components/Row";
import projects from "../utils/projects.json";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <MainWrapper>
      <Helmet>
        <title>Stadds: Portfolio</title>
      </Helmet>
      <Container conSize="-lg">
        <Row order="row-cols-1 row-cols-md-3">
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              description={project.text}
              url={project.url}
              image={project.img}
            ></PortfolioCard>
          ))}
        </Row>
      </Container>
    </MainWrapper>
  );
};

export default Portfolio;
