const path = require('path');
const rootDir = require('../util/path');
const express = require ('express');
const router = express.Router();
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    let found = false;
    let a = 2;
    f = () => {
        while(!found){
            console.log(a);
            // if((a+1) % 3 === (a+2)%5 === (a+5)%7 === (a+3)%9 === (a+1)%13 === (a+4)%17 ===0)
           if(a % 17 !==13){a = a + 3; console.log('in ------ 17'); continue;}
            else if(a % 13 !== 12){a = a + 3 * 17; console.log('in ------ 13'); continue;}
            else if(a % 7 !== 2){a = a + 3 * 13 * 17 ; console.log('in ------ 7');  continue;}
            else if(a % 5 !== 3){a = a + 3 * 7 * 13 * 17 ;  console.log('in ------ 5'); continue;}
            else if(a % 9 !== 6){a = a + 5 * 7 * 13 * 17; console.log('in ------ 9');  continue;}
            else if(a % 3 !== 2){a = a + 5 * 7 * 13 * 17; console.log('in ------ 3');  continue;}
            else
            {
                console.log('--------'+a);
                found = true;
            }
        }
    };
    f();
    res.redirect('/');
});
module.exports = router;