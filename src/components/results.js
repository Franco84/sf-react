import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Well, ProgressBar} from 'react-bootstrap'

class Results extends Component {

  style(val) {
    if (val > 70 ){
      return 'success'
    } else if (val < 70 && val > 40) {
      return 'warning'
    } else {
      return 'danger'
    }
  }

  handleLoad() {
    if (!this.props.candidate.info) {
      return ""
    } else {
      return (
        <div>
          <br />
          <Well>
            Company: {this.props.candidate.info.company_id}
            <br />
            <br />
            Title: {this.props.candidate.info.title}
            <br />
            <br />
            Communication Score Percentile:
            <ProgressBar bsStyle={this.style(this.props.candidate.info.comm_score_percentile)} now={this.props.candidate.info.comm_score_percentile} label={`${this.props.candidate.info.comm_score_percentile}%`} />
            Coding Score Percentile:
            <ProgressBar bsStyle={this.style(this.props.candidate.info.code_score_percentile)} now={this.props.candidate.info.code_score_percentile} label={`${this.props.candidate.info.code_score_percentile}%`} />
          </Well>
        </div>
      )
    }
  }

  render() {

    return (
      <div>
        {this.handleLoad()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    candidate: state.candidate
  }
}

export default connect(mapStateToProps)(Results)
