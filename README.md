
A quiz game built with Ruby on Rails, React and Redux.

Cash Flow Quiz: 

How to run it

SERVER
CD to the server folder and run in the terminal:

bundle install

Seed the database:
rake db:migrate
db:reset db:seed


CLIENT
Open another terminal window and, cd to the client folder and run:

npm i
npm start

Now you should be able to access the app at http://localhost:3000/quiz

Tests status
Run rails tests from server folder with rails test
Run jest tests from client folder with npm test

