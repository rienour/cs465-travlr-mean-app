# CS 465: Full Stack MEAN Application

The goal is to create a full stack application to demonstrate the student understanding of a tech stack which involves MongoDB, Express, Angular, and Node (MEAN).

## Demonstrations

The following considerations should be made while developing the application as a means to demonstrate good coding practices.

### Customer-Facing Website

Develop and run a complex public customer-facing web application that meets software requirements.

### MVC Routing

The customer-facing website must be an Express web application with routes, controllers, views, and data models.

### Static HTML to Templates With JSON

Use the Handlebars (HBS) templating engine to move the static HTML site to templates to render JSON data dynamically within the application.

### NoSQL Database

Configure a NoSQL database using Mongoose to store data in the server side of the software application.

### RESTful API

Integrate RESTful API with a NoSQL database, which is organized using models and schemas with existing software frameworks.

### SPA

Use frameworks to include rich functionality and features in a SPA to meet software requirements. Use the test data provided and add other examples of tours with dates and other data to test the SPA.

### Security

Refactor the code to add security controls, including a login form, and apply best practices to ensure authorized access using secure endpoints.

## Reflection

### Architecture

Utilization of the Express HTML was a first and seemed to lean toward server side rendering, while the Angular side of the application relied more on the client side handling the transitions of pages. Observing the differences in the number of network requests was a noticeable impact on the way the application communicated with the outside world. The SPA application provided a quicker transition on the use experience for rapidly working with the data once it loaded. The load time was significant on this application, however it had significantly more interactivity after the page loaded. While the Handlebars templates could be viewed as another tool to learn it was significantly easier to develop pages when compared to the Angular version with the extra aspects that had to be learned for adding additional functionality through the JavaScript.

The back end leveraged a Mongo database to make it easier for rapid development as the structure of the documents could easily be transitioned into a NoSQL format.

### Functionality

JSON is JavaScript Object Notation, which is meant as a format for storing and transporting data, while JavaScript itself is a programming language. JavaScript will utilize functions and data structures for working on web pages. In this specific application JSON helped by creating a common structure utilized by the front end and back end. This made it easy to have a full stack application where the data structures were the same for the pieces of the application, even if the way they were used was different.

Creating reusable components in the Angular application provided a clean way for developer's to understand how code was encapsulated in certain parts of the application. Creating reusable cards independent of the listing component for example was a way to decouple the implementations from each other. This created clearly encapsulated logic and made it easy to trace different pieces through the source code while reviewing the application.

### Testing

For testing I leveraged curl for interacting with the API to test various aspects of the endpoints and verify the intended methods were the only methods allowed for use. It's important to provide the appropriate context when choosing HTTP methods to utilize when interacting with an API to provide information to developer's, even without having to write any documentation. It provides a way to reference a specification to easily learn more on an application as opposed to needing even more information in the source documentation. It's important to break up the functionality over different endpoints to create a meaningful encapsulation to the data that the clients will consume. Adding the authentication endpoints provided a way to control the data that could be exposed by the application and limit user access.

### Reflection

This course has assisted by providing me the ability to work with a methodology I hadn't before using HTML templates with an Express server and the angular framework. It provided me a way to see a different perspective on the development process using Angular, which had a very different approach compared to Vue and React that I used professionally. It's given me an additional set of methodologies and tools to work with when solving problems for my stakeholders.
