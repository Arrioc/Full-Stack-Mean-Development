/* Quickly convert handlebaras template to parsing data */
/* ~WARNING~ - NOT a best practice for a Production Website!!! Its very expensive! */
/* Best practice: do something at startup time, read file once, cache it in memory as variable etc, then use it*/ 
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
};