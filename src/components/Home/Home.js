import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div className='root'>
        <div>View Standings</div>
        <div>Play</div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

export default withRouter(connect(mapStateToProps)(Home));
