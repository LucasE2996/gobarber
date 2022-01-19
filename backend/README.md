<h1 align="center">GoBarber 💈 - Backend</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.2.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/lucashtwt" target="_blank">
    <img alt="Twitter: lucashtwt" src="https://img.shields.io/twitter/follow/lucashtwt.svg?style=social" />
  </a>
</p>

> This project is a barber calendar scheduler.

## Environment

First make sure you have the environment set up. So let's start!

### Docker

> I prefer using docker to setup databases, it's a very easy way to get up and running with the environment.

> If you don't have docker intalled follow this [LINK.](https://docs.docker.com/get-docker/)

You will need PostgreSQL and Redis docker instances to get started, so open your favorite terminal and run the following commands:

```sh
# install postgresql docker image and create a new container:
docker run --name <my-cotainer-name> -e POSTGRES_PASSWORD=<mysecretpassword> -p 5432:5432 -d postgres

# install redis docker image and create new container:
docker run --name <my-container-name> -p 6379:6379 -d -t redis:alpine

# run this to know that your instances are up and running:
docker ps
```

Now we will need to create a database named *gobarber* for our app:

```sh
# Access the container on your host or server:
docker exec -it my-postgres bash

# Now you are ‘inside’ your container. We can access postgres and create the database:
psql -U postgres

# Create gobarber database:
CREATE DATABASE mytestdb;
```

> To get back to your terminal just run "\q" to exit psql and then "exit" to exit docker instance.

All done here!

## Install

First we will install all packages for the project using yarn/npm:

```sh
# if you use yarn
yarn

# if you use npm
npm install
```

Now we need to initiate the database and tables with Sequelize:

```sh
npx sequelize-cli db:migrate
```

## Start

```sh
yarn start
```

## Author

👤 **Lucas Rosa**

* Website: https://codepen.io/Lucas-Rosa/
* Twitter: [@lucashtwt](https://twitter.com/lucashtwt)
* Github: [@LucasE2996](https://github.com/LucasE2996)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
