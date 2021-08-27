# CS 465 Full Stack Development
This project features a full Stack Development project which uses a MEAN stack (MongoDB, Express, Angular, Node.js). I recently updated the project, and am working out one little kink in it. Then I'll push/publish it here.

## Architecture: Frontend 
For Express HTML, when I changed the static HTML into JSON templates for the client’s front-end I used handlebars as my template engine and wrote the code in JavaScript. Whereas in the single-page application (SPA), I converted code using an Angular template engine which was written in TypeScript, but I still used HTML files for rendering with Angular. The SPA is an administrative single page app that can manipulate packages shown thru the static customer interface. Some differences I note between these UI's is how I adopted styles, such as cascading style sheets (CSS files) and the headers, footers, and page views from the Express application I created.

## Architecture: Backend 
There are many reasons to use a NoSQL database for the MEAN stack. MongoDB is fast, scalable, and unlike relational databases, MongoDB is a data store which allows for more variety of data by being less structured. This data is stored as BSON (binary JSON) data and thus is a JavaScript method of storing data, allowing for more versatility because the MEAN stack is JavaScript centric. I need the database to use JavaScript (meaning BSON/JSON) because I want end-to-end JavaScript throughout the MEAN stack. This lets me use one language to create a whole program and allows for more efficient communications between the MEAN components. 

## Functionality: JSON ties together the frontend and backend 
JSON (JavaScript Serialized Object Notation) is different than JavaScript in that it is a lightweight, text-based, language-independent data interchange format, not a scripting language. JSON is formatted data which follows JavaScript syntax. JSON has rules about how to hold data and make the data easily retrievable. Portions of JSON are used inside the application as object calls. JSON ties together the frontend and backend through JSON-formatted data which are the results of HTTP request and response payloads. The frontend makes HTTP requests, sending form data (JSON-formatted data). The backend responds to HTTP requests with a HTML response (JSON-formatted data) or no body but status code and header fields. 

## Functionality: Improving code through refactoring and reusability 
An example of where I refactored code to improve functionality is when I changed HTML into JSON templates for the static facing client site using Handlebars. This makes the code more compact and less repetitive, and ready to be stored in in a database, thus making it more efficient. It also makes it more modular/reusable- rather than data being hardcoded and only used one time, I can use its function for anything and stream different data through it. Another example of refactored and reused code is where I  transferred the header/footers to their handlebar equivalents for calls.

## Additional Components
The program was comprised of many components, most of which used methods to accomplish design goals. The API-endpoints are the communication means between the JavaScript and JSON object. Additionally, security is composed of a myriad of different components, such as authorization and authentication.
