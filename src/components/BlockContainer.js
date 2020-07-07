import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import Block from "./Block";
import { getAllData } from "../actions";
import { allDetailsSelector } from "../selectors";

const BlockContainer = ({ allDetails, getAllData }) => {
  useEffect(() => {
    getAllData();
  });
  return (
    <>
      {Object.keys(allDetails).length !== 0 ? (
        <Container>
          <Row>
            <Col>
              <Card bg={"danger"} text={"white"}>
                <Card.Header>Total Confirmed</Card.Header>
                <Card.Body>
                  <Block value={allDetails.confirmed} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg={"primary"} text={"white"}>
                <Card.Header>Total Recovered</Card.Header>
                <Card.Body>
                  <Block value={allDetails.recovered} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg={"secondary"} text={"white"}>
                <Card.Header>Total Deaths</Card.Header>
                <Card.Body>
                  <Block value={allDetails.deaths} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  allDetails: allDetailsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getAllData: () => dispatch(getAllData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BlockContainer);
