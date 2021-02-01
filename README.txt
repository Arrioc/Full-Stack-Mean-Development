Final Thoughts

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

For Express HTML, when we changed the static HTML into JSON templates for the client’s front-end we used handlebars as our template engine and wrote the code in JavaScript. Whereas in the single-page application (SPA), we converted code using an Angular template engine which was written in TypeScript, but we still used HTML files for rendering with Angular. Some differences I noted here was how we adopted our styles such as cascading style sheets (.css files), and the headers, footers and page views from the Express application we created.

Why did the backend use a NoSQL MongoDB database?

There are many reasons to use a NoSQL database for the MEAN stack. MongoDB is fast, scalable, and unlike relational databases which use rows and columns, MongoDB is a data store which allows for more variety of data by being less structured, and this data is stored as BSON (binary JSON) data and thus is a JavaScript method of storing data. The MEAN stack is JavaScript centric, so we need the database to use JavaScript (meaning BSON/JSON) because we want end-to-end JavaScript throughout the MEAN stack. This allows you to only need to know one language to create a whole program and allows for more efficient communications between the MEAN components. (Harber 15, 16)

Functionality

How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON (JavaScript Serialized Object Notation) is different than JavaScript in that it is a database language, not a scripting language. JSON is a language like SQL which has rules about how to hold data. These rules make the data easily retrievable. JSON ties together the frontend and backend through JSON-formatted data which are the results of HTTP request and response payloads. The frontend makes HTTP requests, sending form data/JSON-formatted data. The backend responds to HTTP requests with a HTML formatted response/JSON-formatted data or no body but status code and header fields. (vsupalov)

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.

An example of where I refactored code to improve functionality is when I changed HTML into JSON templates for the static facing client site using Handlebars. This makes the code more compact and less repetitive, and ready to be stored in in a database, thus making it more efficient. It also makes it more modular, which means its reusable. What that means is that rather than data being hardcoded-in and only used one time, instead, we can use its function for anything and stream different data through it. 

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

Some of my professional goals coming into this class were to design and build the architecture of a web application and create and integrate a database, all using frameworks and the MEAN stack, and have proof of this accomplishment in my GitHub repository. Although I didn’t have much of a hand in the design, this course did help me build the MEAN stack, integrating a frontend using middleware, MVP, Angular and Express knowledge which I didn’t have any experience with previously. Some other skills I learned that I didn’t have before is knowledge of different types of middleware, such as Seedgoose, Mongoose, Handlebars/Pug, and TypeScipt. Though I’ve had experience working with MongoDB, I hadn’t hosted a database and completely created it myself, which was fun and easy.

This class has given me the knowledge to pursue my career interests and provided me with proof of that knowledge, though I still have a lot to learn, that is always the case in the tech industry. Being knowledgeable about full stack development means I have a rare and in-demand expertise and versatility. Having this knowledge makes me eligible to work anywhere in the stack, and more capable since I understand how a component is integrated and how it communicates with other components in the stack. This all helps orient me toward my other goal. What I learned has given me several more steps toward the ability to find my dream job and the financial security that comes with it. 

	


Bibliography:
Harber, C. &  Holmes, S. (2019). Getting MEAN with MongoDB, Express, Angular, and Node. 2nd Ed. Shelter Island, NY: Manning Publications Co. Pages 3, 30-33, Ch. 2, 5, 6 & 8. Retrieved form: https://learning.oreilly.com/library/view/getting-mean-with/9781617294754/

https://vsupalov.com/how-backend-and-frontend-communicate/
