import React, { Component } from 'react'
import IDForm from './IDForm'
import Results from './results'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <br />
          <Col xs={12} sm={8} smOffset={2}>
            <PageHeader><small>Welcome to the SF Candidate Information Portal</small></PageHeader>
            <IDForm />
            <Results />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default (App)
