# Express Api Build with TypeScript and TypeORM

This project is inspired by this article:
[TypeScript Rest API with Express.js, JWT, Authorization Roles and TypeORM](https://medium.com/javascript-in-plain-english/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4)

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

To login:

post `{ email, password }` to http://localhost:3000/api/auth/login

Note:
A few ways of query joined tables

1. raw query

```js
const users = await userRepository.query(`SELECT u.NAME, e.name FROM user AS u
    INNER JOIN booking AS b
    INNER JOIN event AS e
    WHERE u.id = b.userId
    and b.eventId = e.id`)
```

2. createQueryBuilder

```js
const users = await userRepository
  .createQueryBuilder('user')
  .innerJoinAndSelect('user.bookings', 'booking')
  .innerJoinAndSelect('booking.event', 'event')
  .getMany()
```
