const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/league', (req, res) => {
    const queryString = 
      `SELECT * FROM league`;
    
    pool.query(queryString)
      .then((results) => res.send(results.rows))
      .catch(error => {
        console.log('error in standing router get:', error);
        res.sendStatus(500);
    });

});

router.get('/player', (req, res) => {
  const queryString = 
    `SELECT player.id, player.name, game.league_id, points, COUNT(nullif(game.finished = false, true)) AS games_played
    FROM game_player
    JOIN player
    ON game_player.player_id = player.id
    JOIN game
    ON game.id = game_player.game_id
    JOIN league_player
    ON league_player.player_id = game_player.player_id
    GROUP BY player.id, player.name, game.league_id, league_player.points
    ORDER BY points DESC;`;
  
  pool.query(queryString)
    .then((results) => res.send(results.rows))
    .catch(error => {
      console.log('error in standing router get:', error);
      res.sendStatus(500);
  });

});

router.get('/game/:gid/:lid', (req, res) => {

  console.log('GAME req.params', req.params);

  const game = req.params.gid;
  const league = req.params.lid;
  
  const queryString = 
    `SELECT ROW_NUMBER() OVER(), game.league_id, game.game_number, game.finished, game_player.game_id, game_player.player_id, player.name, game_player.faction, game_player.mat, game_player.bid, game_player.final
    FROM game
    JOIN game_player
    ON game.id = game_player.game_id
    JOIN player
    ON player.id = game_player.player_id
    JOIN league
    ON league.id = game.league_id
    WHERE game_number = $1
    AND league_id = $2;`;
    
  pool.query(queryString, [game, league])
    .then((results) => res.send(results.rows))
    .catch(error => {
      console.log('error in standing router get:', error);
      res.sendStatus(500);
  });

});


// router.put('/update/:id', (req, res) => {
//   console.log('in table router update!');
//   console.log('req.body:', req.body);

//   const queryString = 
//     `UPDATE "table_name" SET x = $1, y = $2;`;
  
//   console.log(queryString);
  
//   pool.query(queryString)
//     .then(() => res.sendStatus(201))
//     .catch(error => {
//       console.log('error in upadate table router', error);
//       res.sendStatus(500);
//   });
// });


module.exports = router;