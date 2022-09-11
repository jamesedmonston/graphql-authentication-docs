---
id: authentication
title: Authentication
sidebar_label: Authentication
slug: /usage/authentication
---

## Log in

To log in to a user, you can call the `authenticate` mutation:

:::note
Whilst the `refreshToken` is available in the mutation response, this is mainly intended for use in environments where cookies aren't available (i.e. mobile applications). An `HttpOnly` refresh token cookie is automatically sent with all authentication mutation responses.
:::

```graphql
mutation Authenticate {
  authenticate(
    email: "james@testingthings.com"
    password: "testing123"
  ) {
    jwt
    jwtExpiresAt
    refreshToken
    refreshTokenExpiresAt
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
        "id": "1",
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

```graphql
mutation Register {
  register(
    email: "james@testingthings.com"
    password: "testing123"
    firstName: "James"
    lastName: "Edmonston"
    customField: "A value"
  ) {
    jwt
    jwtExpiresAt
    refreshToken
    refreshTokenExpiresAt
    user {
      id
      fullName
      ... on User {
        customField
      }
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
        "id": "1",
        "fullName": "James Edmonston",
        "customField": "A value"
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
Refresh tokens are consumed when generating a new JWT. A new refresh token is included in the mutation response, and also sent as an `HttpOnly` cookie.
:::

```graphql
mutation RefreshToken {
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

### Delete current refresh token

To delete the current refresh token, you can call the `deleteRefreshToken` mutation:

:::note
Whilst this mutation accepts a `refreshToken` argument, browser requests will automatically use the refresh token cookie. The argument is mainly intended for use in mobile applications.
:::

```graphql
mutation DeleteRefreshToken {
  deleteRefreshToken(refreshToken: "Bc7xqt6ri5vFEzIEXRo-Z0CxgG0RqF_L")
}

// returns
{
  "data": {
    "deleteRefreshToken": true
  }
}
```

### Delete all refresh tokens

To delete all refresh tokens associated with a user, you can call the `deleteRefreshTokens` mutation:

```graphql
mutation DeleteRefreshTokens {
  deleteRefreshTokens
}

// returns
{
  "data": {
    "deleteRefreshTokens": true
  }
}
```

## Activate User

To activate a user following an activation email, you first need to grab the `code` and `id` query parameters from the URL in the email.

Once you've grabbed these, you can call the `activateUser` mutation:

```graphql
mutation ActivateUser {
  activateUser(
    code: "aY6MHG5NhKvA5tzrxKXuAvOLKca3fjJQ"
    id: "b50acbd9-c905-477a-a3f5-d0972a5a4356"
  )
}

// returns
{
  "data": {
    "activateUser": "Successfully activated user"
  }
}
```

## Resend Activation Email

To resend an activation email to a user, you can call the `resendActivation` mutation:

```graphql
mutation ResendActivation {
  resendActivation(email: "james@testingthings.com")
}

// returns
{
  "data": {
    "resendActivation": "You will receive an email if it matches an account in our system"
  }
}
```

## Forgotten Password

To send a password reset email to a user, you can call the `forgottenPassword` mutation:

```graphql
mutation ForgottenPassword {
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

To set a user's password following a password reset email, you first need to grab the `code` and `id` query parameters from the URL in the email.

Once you've grabbed these, you can call the `setPassword` mutation:

```graphql
mutation SetPassword {
  setPassword(
    password: "testing1234"
    code: "aY6MHG5NhKvA5tzrxKXuAvOLKca3fjJQ"
    id: "b50acbd9-c905-477a-a3f5-d0972a5a4356"
  )
}

// returns
{
  "data": {
    "setPassword": "Successfully saved password"
  }
}
```
