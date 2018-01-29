# Phone Catalog App

## Description

This a simple **phone catalog app** done with Angular 5 and RxJS powered state management, inspired by Redux.

The main functionalities of the app are:
* Backend in NodeJS (Mocked data).
* Load items from API (Using ngrx/effects).
* Filter items.
* Change color/images of some phones.

You can see a demo video here: https://drive.google.com/file/d/1S-aB7wcz6eC91e3ce2-lAJ-ahuS8pyG5/view


## Instructions

### Backend

* Go to the backend directory
`$ cd backend`
* Install all dependences
`$ npm install`
* Run the server
`$ node app.js`

The server will be working on http://localhost:3000

### Frontend

* Go to the frontend directory
`$ cd frontend`
* Install all dependences
`$ npm install`
* Build the application and start a web server
`$ ng serve`

The web server will be working on http://localhost:4200/

#### Testing

* Run unit tests (9 specs)
`$ ng test`