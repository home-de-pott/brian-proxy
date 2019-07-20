# Home-de-Pott

_A partial clone of the Home Depot website, built with microservice architecture_

<img src="readme/assets/Screenshot 2019-07-20 10.21.55.png">

## About

This is a proxy server for a partial clone of the Home Depot website, employing microservice architecture.

Users can search for and view products, view reviews, view related products, log in, add products to a cart, see recently viewed products, and submit reviews.

## Contributors

[Brian Embry](https://github.com/baembry) built the proxy, which includes a home page with routing, and he built the carousel of recently viewed and related products.

[Michael Bergeron](https://github.com/Michael-Bergeron) built the nav bar and log in functionality.

[Hannah Hendrycks](https://github.com/hhendrycks) built the reviews component.

[Ibrahim Jabr](https://github.com/ibrahimjabr12) built the main product view.

## Tech Stack

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://lh5.googleusercontent.com/pqPRWyCMu39CU4GAERH3XI0fri2uJzMteIV5t-4qAG566IJWdXRABxLjV1jwdVvID-NvFw3USgyM8FXC5w_yAimYz4FY1gVEm96Yd2JQZh-pYl33lHpbOI7-3-uTixqgX1XHRker" width="100" />
<img src="https://lh3.googleusercontent.com/xcong6Yn8NoueMYWPhEfO76dw0Nt70kiDVOCOygTFEQWpysHxcT-5jYzq9XWIgD3lvCGnGrjlhddm7WEOw9V1FlHivqFjZCXF9IDsfd7uQ2SxlI80roSJcnHvb0O7POvlYOPNvRG" width="100" />
<img src="https://lh5.googleusercontent.com/_RcI-sgNRX5J0olXzRycjQN3tysoTXbH8kXRfE0AtBY8KkDrINApsrfZGAkczZYGwKTPZlYdJXQyKmWO4zFzvON9Op6Ovcu0GQxwabxWfGJH__oRB6YCC-qD_3b2yj_efkprD8UP" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="readme/assets/mongodb-logo-rgb-j6w271g1xn.jpg" width="100"/>
<img src="readme/assets/mongoose.jpg" width="100">
<img src="readme/assets/1200px-MySQL.svg.png" width="100">

## Minimum Viable Product (MVP)

The original goal was to display a product page with a nav bar, reviews, and a product carousel. The technical challenge described below arose from our efforts to implement routing, which goes beyond MVP.

## Technical challenges

Implementing routing was a challenge because of how the proxy pulls in each microservice.

Brian first tried to implement routing by hand, using history.pushState(). But this approach does not allow the user to use the browser's navigation buttons.

The second approach was to use React Router. This approach was better, but React Router does not re-render microservices that are appended to dom elements within a given route's component. For example, if a new product is select from the product page, the product page re-renders, but the microservices of which that page is composed do not re-render.

To get around this problem, we need to remount the product page when a new product is selected. To acheive that, when a new product is selected, we route through a proxy that routes back to the product page, which then remounts.

This is a hacky solution required by the fact that each microservice is appended to the product page by appending a script to the DOM. (That is why the product page is blind to the microservices and fails to rerender them). The problem could be avoided by packaging the front end of each microservice as a separate NPM package and importing each service as a component in the proxy App.

## The app in action

screen recordings

## Workflow

Our team used the agile workflow with a Trello board and code reviews.
