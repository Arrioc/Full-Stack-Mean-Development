# CS 465 Full Stack Development
This project features full Stack Development project, created in my CS 465 course, which uses a MEAN stack (MongoDB, Express, Angular, Node.js). I recently updated the project but this leaves some kinks I am currently working out.

## Architecture: Frontend 
For Express HTML, when we changed the static HTML into JSON templates for the client’s front-end we used handlebars as our template engine and wrote the code in JavaScript. Whereas in the single-page application (SPA), we converted code using an Angular template engine which was written in TypeScript, but we still used HTML files for rendering with Angular. Some differences I noted here was how we adopted our styles such as cascading style sheets (.css files), and the headers, footers and page views from the Express application we created.

## Architecture: Backend 
There are many reasons to use a NoSQL database for the MEAN stack. MongoDB is fast, scalable, and unlike relational databases which use rows and columns, MongoDB is a data store which allows for more variety of data by being less structured, and this data is stored as BSON (binary JSON) data and thus is a JavaScript method of storing data. The MEAN stack is JavaScript centric, so we need the database to use JavaScript (meaning BSON/JSON) because we want end-to-end JavaScript throughout the MEAN stack. This allows you to only need to know one language to create a whole program and allows for more efficient communications between the MEAN components. 

## Functionality: JSON ties together the frontend and backend 
JSON (JavaScript Serialized Object Notation) is different than JavaScript in that it is a database language, not a scripting language. JSON is a language like SQL which has rules about how to hold data. These rules make the data easily retrievable. JSON ties together the frontend and backend through JSON-formatted data which are the results of HTTP request and response payloads. The frontend makes HTTP requests, sending form data/JSON-formatted data. The backend responds to HTTP requests with a HTML formatted response/JSON-formatted data or no body but status code and header fields. 

## Functionality: Improving code through refactoring and reusability 
An example of where I refactored code to improve functionality is when I changed HTML into JSON templates for the static facing client site using Handlebars. This makes the code more compact and less repetitive, and ready to be stored in in a database, thus making it more efficient. It also makes it more modular, which means its reusable. What that means is that rather than data being hardcoded-in and only used one time, instead, we can use its function for anything and stream different data through it. 
