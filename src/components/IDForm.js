import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { getCandidateInfo } from '../actions'

class IDForm extends Component {

  renderField(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${touched && error ? 'text-danger' : ''}`
    return (
      <div className={className}>
        <input
          className="form-control"
          placeholder={field.placeholder}
          type={field.type}
          {...field.input}
        />
        <div>
          <br />
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(value) {
    this.props.getCandidateInfo(value.candidateID)
  }

  render() {
    const {handleSubmit, pristine, submitting} = this.props
    return (
      <div>
        <form>
          <Field
            placeholder=" Candidate ID"
            name="candidateID"
            type="number"
            component={this.renderField}
          />
          <div className="text-danger">
            {this.props.candidate.error}
          </div>
          <br />
          <Button onClick={handleSubmit(this.onSubmit.bind(this))} disabled={pristine || submitting} type="submit" bsStyle="primary" bsSize="xsmall">Submit</Button>
        </form>
      </div>

    );
  }
}

function validate(values) {
  const errors = {}
  if (!values.candidateID) {
    errors.candidateID = "Please Enter An ID"
  }
  return errors
}

function mapStateToProps(state) {
  return {
    candidate: state.candidate
  }
}

export default reduxForm({
  validate,
  form: 'IDForm'
})(
  connect(mapStateToProps,{getCandidateInfo})(IDForm)
);
