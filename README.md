# 2021 Software Engineering Apprenticeship Assignment

## **Contents**

- [Discription](#Discription)
- [Routes](#routes)
- [How to run](#how-to-run)

## **Discription**

This is a simple server in NodeJS that accepts a POST request to the route <code>“/test”</code>, which accepts one argument <code>“string_to_cut”</code>
and returns a JSON object with the key <code>“return_string”</code> and a string containing every third letter from the original string.

## **Routes**

- `GET` '/' : get a welcome message.
- `POST` '/test/' : returns the cut string.

## **How to run**

- Clone the repository from GitHub,

- Go to the project folder

- Install dependencies: `npm install`

- Start in development server or http://localhost:3000: `npm start`

- Use <b>Postman</> for post request
