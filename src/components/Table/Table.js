import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Table extends Component {
  
  componentDidMount() {
    console.log('table mounted');
  }
  
  render() {
    return (
      <div className='root'>
        Table page
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

export default withRouter(connect(mapStateToProps)(Table));
