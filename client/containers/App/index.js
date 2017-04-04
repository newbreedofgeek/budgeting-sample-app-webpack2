import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from 'components/Header';
import Profile from 'containers/Profile';
import Home from 'containers/Home';
import Footer from 'components/Footer';
import './style.css';

class App extends Component {
  componentWillMount() {}

  render() {
    return(
      <div>
        <Header />
          { this.props.children }
        <Footer />
      </div>
    )
  }
}


export default connect()(App);
