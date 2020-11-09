import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ConfirmSearch from '../ConfirmSearch/ConfirmSearch';


const mat = [
  {
    value: 'Industrial',
    label: 'Industrial',
  },
  {
    value: 'Engineering',
    label: 'Engineering',
  },
  {
    value: 'Militant',
    label: 'Militant',
  },
  {
    value: 'Patriotic',
    label: 'Patriotic',
  },
  {
    value: 'Innovative',
    label: 'Innovative',
  },
  {
    value: 'Mechanical',
    label: 'Mechanical',
  },
  {
    value: 'Agricultural',
    label: 'Agricultural',
  },
]
const faction = [
  {
    value: 'Crimea',
    label: 'Crimea',
  },
  {
    value: 'Saxony',
    label: 'Saxony',
  },
  {
    value: 'Polania',
    label: 'Polania',
  },
  {
    value: 'Albion',
    label: 'Albion',
  },
  {
    value: 'Nordic',
    label: 'Nordic',
  },
  {
    value: 'Rusviet',
    label: 'Rusviet',
  },
  {
    value: 'Togawa',
    label: 'Togawa',
  },
]

class Record extends Component {
  
  componentDidMount() {
    console.log('record mounted');
    this.getLeagueName();
  }

  state = {
    divisionId: '',
    gameId: '',
    showGame: false,
    showSubmit: false,
    open: false,

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
        league: this.state.divisionId,
      }
    })
    this.searchGame();
  }

  searchGame = () => {
    if (this.props.game.finshed) {
      this.setState({
        open: true,
      })
    } else {
      this.submitConfirm()
    }
    
  }
  submitConfirm = () => {
    this.setState({
      showGame: true,
      showSubmit: false
    });
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    if (propertyName === 'divisionId' || 'gameId') {
      this.setState({
        showSubmit: true
      });
    }
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
          {this.state.showSubmit && (
          <button onClick={this.getGameData()}>Submit</button>

          )}
        </div>
        
        </div>
        
        <div>

       
          {/* {this.state.showGame && (
            <div className='container-record-game'>
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
                  <div className='record-faction'>
                    <TextField
                      className='faction-select'
                      select
                      label='Select'
                      value={this.state.p1_faction}
                      onChange={this.handleInputChangeFor('p1_faction')}
                    >
                      {faction.map((list) => (
                        <MenuItem key={list.value} value={list.value}>
                          {list.label}
                        </MenuItem>
                      ))}

                    </TextField>
                  </div>
                  <div className='record-mat'>{x.mat}</div>
                  <div className='record-bid'>{x.bid}</div>
                  <div className='record-raw'>{x.row_number}</div>
                  <div className='record-final'>{x.final}</div>
                </div>
                ))}            
            </div>
          )} */}
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
