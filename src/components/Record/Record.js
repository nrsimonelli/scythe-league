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
    this.getLeagueName();
  }

  state = {
    divisionId: '',
    gameId: '',

  }

  getLeagueName = () => {
    this.props.dispatch({
      type: 'FETCH_LEAGUE',
    })
  }
  getGameData = () => {
    this.props.dispatch({
      type: 'FETCH_GAME',
      payload: {
        game: this.state.gameId,
        league: this.state.divisionId
      }
    })
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
        <div className='container-page'>
        <FormControl className='form-control'>
          <InputLabel id="division">Division</InputLabel>
          <Select
            id="division-select"
            value={this.state.divisionId}
            onChange={this.handleInputChangeFor('divisionId')}
          >
            {this.props.league.map((div) => (
              <MenuItem key={div.id} value={div.id}>{div.division}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className='form-control'>
          <InputLabel id="gameId">Game</InputLabel>
          <Select
            id="game-select"
            value={this.state.gameId}
            onChange={this.handleInputChangeFor('gameId')}
          >
            
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
           
          </Select>
        </FormControl>
        <div>
          <button onClick={this.getGameData}>Submit</button>
        </div>
        </div>
        
        <div>

       
          {this.state.gameId && this.state.divisionId !== '' && (
            <div className='container-division'>
              <div className='division-header'>
                <div>Player</div>
                <div>Faction</div>
                <div>Mat</div>
                <div>Bid</div>
                <div>Raw</div>
                <div>Final</div>
              </div> 
              {this.props.game.map((x) => (
                <div key={x.row_number} className='division-data'>
                  <div className='record-player-name'>{x.name}</div>
                  <div className='record-faction'>{x.faction}</div>
                  <div className='record-mat'>{x.mat}</div>
                  <div className='record-bid'>{x.bid}</div>
                  <div className='record-raw'>{x.row_number}</div>
                  <div className='record-final'>{x.final}</div>
                </div>
                ))}            
            </div>
          )}
            </div>
       

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  league: state.league,
  player: state.player,
  game: state.game,
});

export default withRouter(connect(mapStateToProps)(Record));
