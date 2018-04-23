import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, ListGroup, ListGroupItem  } from 'react-bootstrap';

import './style.scss';

export default class PhonesList extends Component {
  static propTypes = {
    phones: PropTypes.object,
    phonesFetch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    props.phonesFetch();
  }

  render() {
    const { phones } = this.props;
    console.log('phones', phones);
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <ListGroup>
              {
                phones.map( (phone, index) => <ListGroupItem key={index}>{phone.DeviceName}</ListGroupItem>)
              }
              </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
