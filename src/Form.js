import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {name, job} = this.state;

    return (
      <form>
        <h3>Add New</h3>
        <label>Name</label>
        <input
                type="text"
                name="name"
                value={name}
                className="App-form-control"
                onChange={this.handleChange} />
        <label>Job</label>
        <input
                type="text"
                name="job"
                value={job}
                className="App-form-control"
                onChange={this.handleChange} />
        <input
                type="button"
                value="Submit"
                className="App-btn App-btn-primary"
                onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;
