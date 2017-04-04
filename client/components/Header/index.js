import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <header>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </header>
  );
};
