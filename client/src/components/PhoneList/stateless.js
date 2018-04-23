import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, ListGroup, ListGroupItem  } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import { slugify } from '../../utils';

import './style.scss';

export default class PhonesList extends Component {
  static propTypes = {
    phones: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { phones } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <ListGroup>
              {
                phones.map( (phone, index) =>
                  <LinkContainer key={index} to={`/phone-detail/${slugify(phone.DeviceName)}`}>
                    <ListGroupItem>{phone.DeviceName} {phone.os}</ListGroupItem>
                  </LinkContainer>)
              }
              </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
