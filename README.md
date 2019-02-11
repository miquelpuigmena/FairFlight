# FAIRFLIGHT
### Inspiration:
We have all had a delayed flight, and more than once! The refund claim process is usually long, opaque and unfair for the users. We wanted to design a new system, based on current legislations, much more convenient from a user point of view.

### What it does:
To solve this problem we decided to develop a service to help users worldwide to get these refunds easily. We can break out project into two distinct parts. One the one hand, he have designed a service to make flight refunds more transparent and easier for the client. On the other hand, we have developed a user friendly interface for the user to be able to purchase these flights.

### How we build it:
First of all, we have set a database that simulate airlines and their flights lists.

We believe that Azure services is the perfect platform to deploy our cloud environment. The whole project relies under a Cloud DB to store critical monitoring data originated at Azure’s Blockchain as a Service. Last, but not least, a refined react.js-UI and the API server reside on web servers provided as well by Azure’s services. 

In order to develop all the payment methods we rely on the APIs provided by VISA. Using FundsTransfer, we managed to pull fund from the user when buying a flight and then pushing them to the airline account. Also, with VISA Checkout we implemented a proper user-friendly payment system with a quick sign-in which allows users to skip inputting their payment and shipping information more than once.

This was a key process for our application since the whole goal was to simplify the refunds (a type of payment) and wouldn’t have been possible without these VISA APIs and Microsoft services.

### Challenges I ran into:
When using the VISA Checkout API we encountered a design problem. This API was not conveniently adapted to be used in our React application.
This is our first hackathon together as a team, so managing tasks was as important as challenging.
When it comes to the Microsoft services, we had worked with similar one but not this in particular. It took some time to adapt to all the features but the easy UI interface helped a lot.

## Accomplishments:
We have build a great-looking web application using React. On Saturday morning none of the team members had ever coded a single line in React, since we are Electrical Engineers and had no previous front-end experience.
We have created a cluster of services in Azure Cloud Platform, some of the services include web service, blockchain azure, app server, databases...
We managed to have all the backend structure based on blockchain, which provides a public and safe environment with immutable history perfect for auditability.
