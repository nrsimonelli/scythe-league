import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class PlayerList extends Component {
  
  render() {
    return (
      <div>
       {this.props.player.map((x) => (
         this.props.leagueId === x.league_id &&
         (
          <div key={x.id} className='division-data'>
            <div>{x.name}</div>
            <div>{x.games_played}</div>
            <div>{x.points}</div>
          </div>)
       ))}
      </div>
    ); // end render
  } // end return
} // end class

const mapStateToProps = (state) => ({
  player: state.player
});

export default withRouter(connect(mapStateToProps)(PlayerList));