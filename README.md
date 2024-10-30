 # <SocialNetworkAPI>

## Description

This project is a fully functional API for a social network web application that allows users to share their thoughts, react to friends' thoughts, and manage a friend list. Built from scratch, it leverages a NoSQL database to handle user data efficiently. 
The motivation behind this project was to create a platform where users can easily express themselves and interact with their friends in a digital space. This project addresses the need for a social networking solution that is straightforward, allowing for real-time interactions and data management.
I built this project using Express.js for routing, a MongoDB database for data storage, and the Mongoose ODM for seamless database interactions. The application is designed to handle various API requests, enabling users to perform CRUD operations on their data.

## Features 


    User Management: Create, update, and delete user profiles.
    Thought Sharing: Users can post thoughts and react to others' thoughts.
    Friend List Management: Add and remove friends from a user's friend list.
    RESTful API: Fully functional RESTful API with GET, POST, PUT, and DELETE routes.
    Data Retrieval: Access user and thought data in a formatted JSON response.


## Installation

To get the development environment running, follow these steps:

    Clone the repository:

    git clone <repository-url>
    cd <repository-directory>

    Install dependencies:

    npm install

    Set up your MongoDB database: Ensure you have a MongoDB database set up and update your environment variables accordingly.

    Start the server:

    npm start

    Sync Mongoose models to the database: Upon starting the server, the Mongoose models will automatically sync to the MongoDB database.

## Usage

    Use Insomnia or Postman to test the API routes.
    GET Routes: Access user and thought data.
    POST Routes: Create new users, thoughts, and reactions.
    PUT Routes: Update existing users and thoughts.
    DELETE Routes: Remove users, thoughts, and reactions.


This project deepened my understanding of building RESTful APIs, managing a NoSQL database, and implementing user authentication and data validation using Mongoose. Additionally, I gained valuable experience in handling API requests and responses effectively.