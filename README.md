### Full Stack Blog App

This is a full stack app that uses React, Express.js, MongoDB, Tailwind, and Clerk to handle various capabilities of a blog.

This follows along with this tutorial: <https://www.youtube.com/watch?v=Pfy3q6PbbRA>

#### Accounts / Tools required to use this app locally:

##### Clerk:
<https://clerk.com/>
Clerk is used to handle authentication for the app. So, in order to use this full stack blog app you must:
 - create a Clerk account,
 - setup a new project,
 - configure the desired parameters for authentication
 - setup a webhook that calls the `/webhooks/clerk` api endpoint in this application anytime a user event is triggered. (note, for local dev, ngrok is used to expose the localhost url so the webhooks endpoint can be accessed by clerk).
 - update the .env files in both the backend and client apps with the necessary configurations from Clerk.



##### Ngrok:
<https://ngrok.com/>
Ngrok is used to expose your local backend app to the world so Clerk can hit the `/webhooks/clerk` endpoint when users are updated. This requires:
 - creating an account at ngrok.com
 - installing ngrok on your machine
 - add your ngrok auth token to your ngrok configuration file
 - deploy your app online with a command like: `ngrok http http://localhost:3000`
 - update the webhook configuration in the Clerk panel to use the new forwarding url that ngrok created.


##### MongoDB:
<https://www.mongodb.com/>
MongoDB Atlas is used to handle the database logic for this app. This requires:
 - create a MongoDB Atlas account
 - setup a new project
 - create a new cluster in that project
 - update environment variables in the backend app to allow the app to connect to the database.
