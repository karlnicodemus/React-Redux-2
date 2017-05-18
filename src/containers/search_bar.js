import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };

    //says that 'this' has a function called onInputChange. Bind to search bar.
    //Replace onInputChange with new bound instance.
    this.onInputChange = this.onInputChange.bind(this)
  }

onInputChange(event) {
  this.setState({term: event.target.value});
}

onFormSubmit(event) {
  //this prevents the browser from sending the form to the backend
  event.preventDefault();

  //We need to go and fetch weather data
}

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
