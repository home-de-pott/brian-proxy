import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 4,
    };
  }
  componentDidMount() {
    setInterval(() => {
      let countdown = this.state.countdown;
      countdown--;
      this.setState({ countdown });
    }, 1000);
    setTimeout(() => {
      this.props.history.push('/');
    }, 4000);
  }
  render() {
    return (
      <h1 className="not-found">
        That page was not found. We'll send you back home in {this.state.countdown}.
      </h1>
    );
  }
}

export default NotFound;
