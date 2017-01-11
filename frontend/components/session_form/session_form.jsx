import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}


	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup" className="login-toggle-link">Sign up</Link>;
		} else {
			return <Link to="/login" className="login-toggle-link">Log in</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>{error}</li>
				))}
			</ul>
		);
	}



	render() {
    const toggleText = this.props.formType === "login"
      ? "Don't have an account?"
      : "Already have an account?";

		return (



			<div className="login-form-container">
        <div className="credentials-box" >

  				<form onSubmit={this.handleSubmit} className="login-form-box">
  					InstaClone
  					<br/>
            <div className="login-form">
              <br/>
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input" />
              <br/>
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
              <br/>
              <input type="submit" value={this.props.formType}/>
            </div>
            {this.renderErrors()}
          </form>
        </div>
        <div className="toggle-login-box">
          {toggleText} {this.navLink()}
        </div>
			</div>
		);
	}

}

export default withRouter(SessionForm);


// <div className="login-form">
//   <br/>
//   <label> Username:
//     <input type="text"
//       value={this.state.username}
//       onChange={this.update("username")}
//       className="login-input" />
//   </label>
//   <br/>
//   <label> Password:
//     <input type="password"
//       value={this.state.password}
//       onChange={this.update("password")}
//       className="login-input" />
//   </label>
//   <br/>
//   <input type="submit" value="Submit" />
// </div>
