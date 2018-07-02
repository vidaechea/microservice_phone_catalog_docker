# Service 1

PoC who consist in create an endpoint to retrieve the phone catalog, and pricing.

## Requirements:

- It should have test.
- It should be documented in the readme file.
- It should be a REST API
- Docker oriented.
- Microservice approach.
- Database access from the microservices.
- NodeJS

### Installing

There are the commands i use:

- npm init --yes
- npm i express body-parser mongoose morgan cors
- npm install

### Running

- docker build -t capitole_consulting_service_1 .
- docker run -p 49160:3000 capitole_consulting_service_1

### Running

You can use a Postman or another service to return a GET call and it returns the phone catalog

http://localhost:49160/


This example has been done on a mac so you must run it on a mac, so that the docker environment variable works correctly 

### Database

#####IMPORTANT!

You must follow this steps:
- create an mongodb database with the name: capitoleConsulting
- create the collection phones
- add this example:
{ 
    "_id" : ObjectId("5b38ab35fa4afb02cd2ac58e"), 
    "name" : "Terminal 1", 
    "price" : 200.99, 
    "image" : "", 
    "description" : "Description of terminal 1"
}
{ 
    "_id" : ObjectId("5b390f37fa4afb02cd2ac590"), 
    "name" : "Terminal 2", 
    "image" : "", 
    "description" : "Description of the terminal 2", 
    "price" : 99.99
}


## Authors

* **Luis Vidaechea** - [Portfolio](https://github.com/vidaechea) - vidaechea.luis@gmail.com
