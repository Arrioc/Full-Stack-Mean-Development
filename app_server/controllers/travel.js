
const request = require('request'); //Convert handlebaras template to parsing data
const apiOptions = {
    server: 'http://localhost:3000'
};

/* internal method to render travel list view */
const renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + '- Travel';

    if (!(responseBody instanceof Array)) {                 // if the result that came back is not in an array
        message = 'API lookup error';                       // then set message tp api lookup error
        responseBody = [];                                  // and set response body to be an empty array
    } else {
        if (!responseBody.length) {                         // if it is empty/nothing in DB
            message = 'No trips exist in our database!';    // then set message that there's no trips in DB
        }
    }

    res.render('travel',          // call response object render method with travel,(the pagetitle), 
        {                         
            title: pageTitle,
            trips: responseBody,  // pass response body that we got back from api
            message
        }
    );
}

/* GET travel list view */
const travelList = (req, res) => {
    const path = '/api/trips';               // path points to api/trips 
    const requestOptions = {                 // build request 
        // note the ` is a 'backtick' not a quote (shift- tilde) HTTP cxonsists of URL, method and body...
        url: `${apiOptions.server}${path}`,  // parse and resolve contents from apiOptions.server, and given path
        method: 'GET',
        json: {},
    };
    // log on the console this call over the API, writes out informational message: helpful in debugging
    console.info('>> travelController.travleList calling ' + requestOptions.url);
    request(
        requestOptions,                         // pass in options...
        (err, { statusCode }, body) => {        // callbaack, status code, body
            if (err) {
                console.error(err);             // render error on console
            }
            renderTravelList(req, res, body);   // else call new method to handle rendering
        }
    );
};

module.exports = {
    travelList
}