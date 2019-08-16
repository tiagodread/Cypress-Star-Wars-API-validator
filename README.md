# Welcome to Cypress Star Wars API validator!

[![CircleCI](https://circleci.com/gh/tiagodread/cypress_test/tree/master.svg?style=svg)](https://circleci.com/gh/tiagodread/cypress_test/tree/master)

This project validates the status code and the structure of Star Wars API using cypress, the following end-points are:

- https://swapi.co/api/people/1/
- https://swapi.co/api/planets/1/

## Install

If you don't have npm installed in your machine, you can install [HERE](https://www.npmjs.com/get-npm)

1. Clone this repo:
	```sh
	$ git clone https://github.com/tiagodread/cypress_test.git
	```
2. Go to project folder:
	```sh
	$ cd cypress_test
	```
3. Install dependencies:
	```sh
	$ npm install 
	```
## Run
In the project folder execute:
```sh
$ npm run cypress:open
```

The Cypress runner will launch and you can choose between `people_spec.js` and `planet_spec.js` files.
