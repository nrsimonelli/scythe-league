const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryString = '';
    
    pool.query(queryString)
      .then((results) => res.send(results.rows))
      .catch(error => {
        console.log('error in table router get:', error);
        res.sendStatus(500);
    });

});

router.put('/update/:id', (req, res) => {
  console.log('in table router update!');
  console.log('req.body:', req.body);

  const queryString = 
    `UPDATE "table_name" SET x = $1, y = $2;`;
  
  console.log(queryString);
  
  pool.query(queryString)
    .then(() => res.sendStatus(201))
    .catch(error => {
      console.log('error in upadate table router', error);
      res.sendStatus(500);
  });
});


module.exports = router;