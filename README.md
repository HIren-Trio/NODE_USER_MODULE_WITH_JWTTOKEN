**User Authentication API**

This repository contains a Node.js API for user authentication, including registration, login, and deletion.

**Files**

* **Router.js**: This file defines the Express router for handling user registration, login, and deletion requests.
* **ValidationSchema.js**: This file defines the Joi validation schemas for user registration and login data.
* **Controller.js**: This file defines the functions for handling user registration, login, and deletion logic. 

**Usage**

To use this API, follow these steps:

1. Clone the repository and install the dependencies using `npm install`.
2. Create a new Node.js project and require the `userRouter` module.
3. Use the `userRouter` module to handle user registration, login, and deletion requests.

**Endpoints**

* **POST /register**: Register a new user. Request body should contain `username`, `email`, and `password` fields.
* **POST /login**: Login an existing user. Request body should contain `email` and `password` fields.
* **DELETE /:id**: Delete a user by ID.

**Validation**

The API uses Joi validation schemas to validate user registration and login data. The validation rules are defined in the `validation.js` file.

**Error Handling**

The API returns error responses in JSON format with a 400 status code if the validation fails or if there is an error during registration, login, or deletion.

**Note**

This is a basic implementation of a user authentication API and should not be used in production without additional security measures and testing.
