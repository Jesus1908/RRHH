const express = require('express');
const router = express.Router();
const crud = require('./controllers/crud');

router.get('/', (req, res) => {
  crud.list(req, res);
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/save', crud.save);

router.post('/delete/:id', crud.delete);

module.exports = router;