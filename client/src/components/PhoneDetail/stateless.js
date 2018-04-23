import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Panel } from 'react-bootstrap';

import { reslugify } from '../../utils';

import './style.scss';

export default class PhoneDetail extends Component {
  static propTypes = {
    phones: PropTypes.object,
    params: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      phone: props.phones[reslugify(props.params.phoneName)]
    }
  }
  render() {
    const { phone } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">Mobile: {phone.DeviceName}</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                {
                  Object.keys(phone).map((key, index) =>
                    key === 'DeviceName' ? null : <p key={index}>{key + ': ' + phone[key]}</p>)
                }
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
