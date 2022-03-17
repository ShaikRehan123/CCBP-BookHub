import { Component } from "react";
import Cookies from "js-cookie";

import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
    isPasswordVisible: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, {
      expires: 30,
    });
    const { history } = this.props;
    history.replace("/");
  };

  onSubmitFailure = (errorMsg) => {
    console.log(errorMsg);
    this.setState({ showSubmitError: true, errorMsg });
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    // Make sure the password and username are not empty
    if (username === "" || password === "") {
      this.onSubmitFailure("Username and password cannot be empty");
      return;
    }
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  onClickCheckbox = () => {
    this.setState((prev) => ({ isPasswordVisible: !prev.isPasswordVisible }));
  };

  renderPasswordField = () => {
    const { password, isPasswordVisible } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          Password*
        </label>
        <div className="password-container">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
          />
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="show-password"
            checked={isPasswordVisible}
            onChange={this.onClickCheckbox}
            className="eye-check"
          />
          <label htmlFor="show-password" className="input-label">
            Show Password
          </label>
        </div>
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  render() {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      const { history } = this.props;
      history.replace("/");
    }
    const { showSubmitError, errorMsg } = this.state;
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dsc7vpalz/image/upload/v1647501985/qvj42hsw8lmrbeyxnovr.png"
            className="login-website-logo-desktop-image"
            alt="login website logo"
          />
          <h1
            className="heading"
            style={{
              textAlign: "center",
            }}
          >
            Book Hub
          </h1>
          <h1 className="login-heading">Login</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </form>
        <img
          src="https://res.cloudinary.com/dsc7vpalz/image/upload/v1647502471/cxldctw1elcdijp5ml8s.png"
          className="login-image"
          alt="website login"
        />
      </div>
    );
  }
}

export default Login;
