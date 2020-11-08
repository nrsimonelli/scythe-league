import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Record extends Component {
  
  componentDidMount() {
    console.log('record mounted');
    
  }
  state = {
    division: '',
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log(this.state);
  }
  
  render() {
    return (
      <div className='root'>
        <div>
        <FormControl className='form-control'>
          <InputLabel id="division">League</InputLabel>
          <Select
            id="division-select"
            value={this.state.division}
            onChange={this.handleInputChangeFor('division')}
          >
            {this.props.league.map((div) => (
              <MenuItem key={div.id} value={div.division}>{div.division}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  league: state.league,
  player: state.player
});

export default withRouter(connect(mapStateToProps)(Record));
