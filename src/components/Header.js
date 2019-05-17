import React from 'react';
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';

const Header = ({title}) => (
  <div className="Header">
    <AppBar position="static">
      <h1>{title}</h1>
    </AppBar>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
