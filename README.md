# Paywall Simulation Web Application

This project simulates a basic paywall system with subscription options. It is designed to showcase my skills and understanding of both front-end and back-end development, particularly using Next.js and Prisma.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Future Improvements](#future-improvements)
5. [Useful Information](#useful-information)

## Features

- **Subscription Model**: Users can choose from three subscription plans to access content.
- **Basic Login System**: The login system is minimalistic and stores user information in **local storage** for demonstration purposes.
- **Payment System Simulation**: The goal of the project is to simulate a basic paywall and subscription system. Payment processing is simulated, and no actual transactions occur.
- **SQLite Database**: The back-end utilizes **SQLite** as the database, with **Prisma** as the ORM to manage data storage and access.

## Technologies Used

- **Next.js**: Framework for building the web application, ensuring both server-side and client-side rendering.
- **Prisma**: ORM to interact with an SQLite database.
- **SQLite**: A lightweight relational database used to store user and subscription data.
- **Local Storage**: For storing user login information and session details.
- **CSS**: Basic styling to create a simple, functional design.
- **react-hot-toast**: A library for displaying notifications.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bejabeja/paywall-simulation.git
   cd paywall-simulation
   ```

2. Install all necessary dependencies:

   ```bash
   npm install
   ```

3. Set up the SQLite database:

   ```bash
   npx prisma migrate dev
   ```

4. Now you can start the app:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:

   [http://localhost:3000](http://localhost:3000)

## Future Improvements

This project is currently a basic simulation. In the future:

- **Real Payment Processing**: Integrate with payment providers (e.g., Stripe) for real transactions.
- **Authentication and Authorization**: Implement a secure login system with JWT tokens or OAuth for better security and authentication.
- **User Profile**: Allow users to view and manage their subscription details.

## Useful information

#### **Card Number**: 
- Valid Example: A valid transaction requires a 16-digit card number. This will create a transaction with `succes` in the database field.
- Failing Transaction: To simulate a failed transaction, you can use the card number 1111111111111111. This will create a transaction but will introduce `failed` in the database field.

#### **DB-prisma**: 
- If you want to add some data to the database, you can find a file named `seed.js` where you can add data structures, and then execute:

  ```bash
  npx prisma db seed
  ```

- If you want to reset database data:

  ```bash
  npx prisma migrate reset
  ```

- **Prisma Studio**: To interact with your database, you can open Prisma Studio:

  ```bash
  npx prisma studio
  ```
