import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import { withRouter } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div className='root'>
          body
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

export default withRouter(connect(mapStateToProps)(Home));
