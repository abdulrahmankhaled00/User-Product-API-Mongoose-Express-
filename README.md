Task: Build a User & Product Management System
This project involves creating an API using Mongoose and Express with two collections: user and product. The API will handle user registration, authentication, and product management, including CRUD operations. Below is a breakdown of the collections and API functionalities:

Collections:
User Collection

username: String
email: String (Unique)
password: String
age: Number
gender: String
phone: String
Product Collection

name: String
description: String
price: Number
userID: ObjectId (References user collection)
User APIs:
Sign up – Register a new user (email must be unique).
Sign in – User authentication.
Update user – Update user details.
Delete user – Remove a user from the collection.
Search users – Search users where the name contains "X" and age is less than Y (variables).
Search users by age range – Find users whose ages are between X and Y (variables).
Get all users – Retrieve all users.
Get user products – Retrieve all products created by a specific user.
Product APIs:
Add product – Create a new product (ensure the user exists).
Delete product – Remove a product (only the creator can delete).
Update product – Modify product details (only the creator can update).
Get all products – Retrieve all products.
Get products with owner info – Retrieve products and their owners using populate.
Sort products by date – Get all products sorted by createdAt in descending order.
This API manages user authentication and product relationships, with search and filtering capabilities using Mongoose.
