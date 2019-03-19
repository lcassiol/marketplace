# marketplace
This is a project from Rocketseat bootcamp NodeJs module

For easy start do:

1. <b>npm install</b>
1. <b>docker run --name noderedis -p 6379:6379 -d -t redis:alpine</b>
1. <b>docker run --name mongonode -p 27017:27017 -d -t mongo</b>

then:
* <b> yarn start </b>

> Or you can download and install in your machine Redis and Mongo, and edit .env file. That's it


This project use:
> Express

> Mongoose

> Bcryptjs

> jsonwebtoken

> nodemailer (in this case we use [MailTrap](https://mailtrap.io) to test send email)

> nodemailer-express-handlebars (Templates for email)

> joi (Schema validation)

> youch (Pretty error reporting)

