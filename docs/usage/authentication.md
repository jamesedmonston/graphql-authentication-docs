---
id: authentication
title: Authentication
sidebar_label: Authentication
slug: /usage/authentication
---

## Log in

To log in to a user, you can call the `authenticate` mutation:

:::note
Whilst the `refreshToken` is available in the mutation response, this is mainly intended for use in environments where cookies aren't available (i.e. mobile applications). An `HTTPOnly` refresh token cookie is automatically sent with all authentication mutation responses.
:::

```javascript
mutation {
  authenticate(
    email: "james@testingthings.com"
    password: "testing123"
  ) {
    jwt
    jwtExpiration
    refreshToken
    refreshTokenExpiration
    user {
      id
      fullName
    }
  }
}

// returns
{
  "data": {
    "authenticate": {
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDcmFmdENNUyIsImlhdCI6MTYwNzIyMjg5MywiZXhwIjoxNjA3MjI0NjkzLCJzdWIiOi...",
      "jwtExpiresAt": 1607224693,
      "refreshToken": "eu5l-FkvTaWEzIt38QFR8ETx5PIS706P",
      "refreshTokenExpiresAt": 1614998893,
      "user": {
        "id": "21",
        "fullName": "James Edmonston"
      }
    }
  }
}
```

## Register

To register a user, you can call the `register` mutation:

:::note
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `register` mutation for each user group that has registrations enabled (e.g. `registerUser` and `registerBusiness`).
:::

```javascript
mutation {
  register(
    email: "james@testingthings.com"
    password: "testing123"
    firstName: "James"
    lastName: "Edmonston"
    // also supports custom fields
  ) {
    jwt
    jwtExpiration
    refreshToken
    refreshTokenExpiration
    user {
      id
      fullName
    }
  }
}

// returns
{
  "data": {
    "register": {
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDcmFmdENNUyIsImlhdCI6MTYwNzIyMjg5MywiZXhwIjoxNjA3MjI0NjkzLCJzdWIiO...",
      "jwtExpiresAt": 1607224693,
      "refreshToken": "eu5l-FkvTaWEzIt38QFR8ETx5PIS706P",
      "refreshTokenExpiresAt": 1614998893,
      "user": {
        "id": "21",
        "fullName": "James Edmonston"
      }
    }
  }
}
```

## Refresh JWT

To refresh a user's JWT, you can call the `refreshToken` mutation:

:::note
Whilst this mutation accepts a `refreshToken` argument, browser requests will automatically use the refresh token cookie. The argument is mainly intended for use in mobile applications.
:::

:::note
Refresh tokens are consumed when generating a new JWT. A new refresh token is included in the mutation response, and also sent as an `HTTPOnly` cookie.
:::

```javascript
mutation {
  refreshToken(refreshToken: "Bc7xqt6ri5vFEzIEXRo-Z0CxgG0RqF_L") {
    jwt
    jwtExpiresAt
    refreshToken
    refreshTokenExpiresAt
  }
}

// returns
{
  "data": {
    "refreshToken": {
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDcmFmdENNUyIsImlhdCI6MTYwNzIyMjg5MywiZXhwIjoxNjA3MjI0NjkzLCJzdWIiO...",
      "jwtExpiresAt": 1607224693,
      "refreshToken": "eu5l-FkvTaWEzIt38QFR8ETx5PIS706P",
      "refreshTokenExpiresAt": 1614998893,
    }
  }
}
```

## Log out

### Log out of current device

To delete the current token, you can call the `deleteCurrentToken` mutation:

```javascript
mutation {
  deleteCurrentToken
}

// returns
{
  "data": {
    "deleteCurrentToken": true
  }
}
```

### Log out of all devices

To delete all tokens associated with a user, you can call the `deleteAllTokens` mutation:

```javascript
mutation {
  deleteAllTokens
}

// returns
{
  "data": {
    "deleteAllTokens": true
  }
}
```

## Forgotten Password

To send a password reset email to a user, you can call the `forgottenPassword` mutation:

```javascript
mutation {
  forgottenPassword(email: "james@testingthings.com")
}

// returns
{
  "data": {
    "forgottenPassword": "You will receive an email if it matches an account in our system"
  }
}
```

## Set Password

To set a user's password following a password reset email, you can call the `setPassword` mutation:

```javascript
mutation {
  setPassword(
    password: "testing1234"
    code: "aY6MHG5NhKvA5tzrxKXuAvOLKca3fjJQ" // `code` query param from reset password email
    id: "b50acbd9-c905-477a-a3f5-d0972a5a4356" // `id` query param from reset password email
  )
}

// returns
{
  "data": {
    "setPassword": "Successfully saved password"
  }
}
```
