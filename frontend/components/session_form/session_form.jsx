import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  render() {
    return (
      <div>
        <h1>Please {this.props.formType} or {this.navLink()}</h1>
        <form onSubmit={this.handleSubmit}>

          <label>Username
            <input onChange={this.update("username")} type="text" value={this.state.username}>
            </input>
          </label>

          <label>Password
            <input onChange={this.update("password")} type="password" value={this.state.password}>
            </input>
          </label>

          <button> {this.props.formType} </button>

        </form>
      </div>
    );
  }
}

export default SessionForm;
