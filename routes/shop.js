const express = require ('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
router.get('/', (req, res, next) => {
    // res.send(`<h1>hello</h1>`);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
module.exports = router;