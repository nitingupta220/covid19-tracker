import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import Select from "react-select";
import { getCountries, getCountryData } from "../actions";
import Block from "./Block";
import { getCountriesSelector, countryDataSelector } from "../selectors";

const SelectContainer = ({
  allCountries,
  countryData,
  getCountries,
  getCountryData,
}) => {
  const [country, setCountry] = useState("");

  const onMenuOpen = () => {
    setTimeout(() => {
      getCountries();
      getCountryData();
    }, 1000);
  };

  const changeCountry = (country) => {
    setCountry(country.label);
    getCountryData(country);
  };

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Select
              isSearchable={false}
              options={allCountries}
              onChange={(change) => changeCountry(change)}
              onMenuOpen={onMenuOpen}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <br />

      {Object.keys(countryData).length !== 0 ? (
        <Container>
          <Row>
            <Col>
              <Card bg={"danger"} text={"white"}>
                <Card.Header>{`${country}'s Confirmed`}</Card.Header>
                <Card.Body>
                  <Block value={countryData.confirmed} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg={"primary"} text={"white"}>
                <Card.Header>{`${country}'s Recovered`}</Card.Header>
                <Card.Body>
                  <Block value={countryData.recovered} />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg={"secondary"} text={"white"}>
                <Card.Header>{`${country}'s Deaths`}</Card.Header>
                <Card.Body>
                  <Block value={countryData.deaths} />
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
  allCountries: getCountriesSelector(state),
  countryData: countryDataSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(getCountries()),
  getCountryData: (country) => dispatch(getCountryData(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
