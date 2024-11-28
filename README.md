# school_management

This project is a RESTful API for managing school data using **Node.js**, **Express.js**, and **MySQL**. It provides two main functionalities:

- **Add School**: Allows users to add new schools by providing details such as name, address, latitude, and longitude.
- **List Schools**: Retrieves a list of all schools from the database, sorted by proximity to a user-specified location (latitude and longitude).

## Features
- **Add new schools** to the database with essential details.
- **Fetch schools** based on geographical proximity to a user's location.
- **Input validation** ensures all required fields are provided before adding a school.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure the MySQL database (`school_management`).
4. Run the server using `node start` and test the API using Postman.

## API Endpoints
- **POST /addSchool**: Add a new school.
- **GET /listSchools**: Get a list of schools sorted by proximity.
##CREATE DATABASE school_management;

USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
