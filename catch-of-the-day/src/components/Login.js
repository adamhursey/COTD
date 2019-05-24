import React from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <nav className="Login">
    <h2>Inventory Login</h2>
    <p>Sign in the manage your stores inventory</p>
    <button
      className="github"
      type="button"
      onClick={() => props.authenticate('Github')}
    >
      Login With Github
    </button>
    <button
      className="facebook"
      type="button"
      onClick={() => props.authenticate('Facebook')}
    >
      Login With Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
