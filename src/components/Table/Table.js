import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import PlayerList from  '../PlayerList/PlayerList'

class Table extends Component {
  
  componentDidMount() {
    console.log('table mounted');
    this.getLeagueName();
    this.getPlayerName();
  }
  getLeagueName = () => {
    this.props.dispatch({
      type: 'FETCH_LEAGUE',
    })
  }
  getPlayerName = () => {
    this.props.dispatch({
      type: 'FETCH_PLAYER',
    })
  }
  
  
  render() {
    return (
      <div className='root'>
        <div className='container-page'>
        {/* {JSON.stringify(this.props.league)} */}
          {this.props.league.map(row => (
            <div key={row.id} className='container-division'>
              <div className='division'>
                <div className='division-name'>
                {row.division}
                </div>
                <div className='division-header'>
                  <div className='player-name'>player</div>
                  <div className='games-played'>games</div>
                  <div className='points'>points</div>
                </div>
              </div>
              <PlayerList leagueId={row.id}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  league: state.league,
  player: state.player
});

export default withRouter(connect(mapStateToProps)(Table));
