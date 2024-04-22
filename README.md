# About 

The JustEat Restaurant Finder is a full-stack web application that allows users to search for restaurants by UK postal code. It utilizes JustEat's API to fetch and display restaurant information. Users can enter any UK postal code into the search bar, and the application will present a list of data for the first 10 restaurants returned by the API. This data includes the restaurant's name, cuisines offered, ratings, and address.

The frontend of the application is built with React and styled using TailwindCSS, providing a responsive and intuitive user interface. The backend is developed with Node.js and Express, which handles the API requests and data processing. This project showcases the integration of a modern JavaScript stack for full-stack web development.

# Guide on building, compiling and running the application

1) Clone the repository to your local machine:

git clone https://github.com/kater1naa/justeat-restaurant-finder.git

2) Navigate to the project directory:

cd justeat-restaurant-finder

3) Install dependencies for the server:
   
cd server <br>
npm install

4) Install dependencies for the client:

cd client/my-react-client <br>
npm install

5) Return to the root of the project (justeat-restaurant-finder):
cd ../../    
   
6) Run the Application
To run both the client and the server concurrently:

npm run start-both

The server will start on http://localhost:3001 and the client on http://localhost:3000 <br>
Open http://localhost:3000 and happy browsing!
