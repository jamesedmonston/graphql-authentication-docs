---
id: two-factor-authentication
title: Two-Factor Authentication
sidebar_label: Two-Factor Authentication
slug: /usage/two-factor-authentication
---

Two-Factor Authentication requires the installation of the existing [Two-Factor Authentication](https://plugins.craftcms.com/two-factor-authentication?craft4) plugin.

## Generate Two-Factor QR Code

To generate a QR Code for the authenticated user to scan, you can call the `generateTwoFactorQrCode` mutation:

```graphql
mutation GenerateTwoFactorQrCode {
  generateTwoFactorQrCode
}

// returns
{
  "data": {
    "generateTwoFactorQrCode": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8..."
  }
}
```

## Generate Two-Factor Secret Code

To generate the authenticated user's secret code, you can call the `generateTwoFactorSecretCode` mutation:

```graphql
mutation GenerateTwoFactorSecretCode {
  generateTwoFactorSecretCode
}

// returns
{
  "data": {
    "generateTwoFactorSecretCode": "TWWBO37WUORAMBX7EXSJKR3..."
  }
}
```

## Verify Two-Factor code

To enable Two-Factor _*and*_ authenticate a user that has already enabled Two-Factor, you can call the `verifyTwoFactor` mutation:

```graphql
mutation VerifyTwoFactor {
  verifyTwoFactor(
    email: "james@testingthings.com"
    password: "testing123"
    code: "123456"
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
    "verifyTwoFactor": {
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

If a user with Two-Factor enabled attempts to authenticate with the regular `authenticate` mutation, all of the fields will be _nullified_ and a `requiresTwoFactor` option will be returned in the response:

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
    requiresTwoFactor
  }
}

// returns
{
  "data": {
    "authenticate": {
      "jwt": null,
      "jwtExpiresAt": null,
      "refreshToken": null,
      "refreshTokenExpiresAt": null,
      "user": null,
      "requiresTwoFactor": true
    }
  }
}
```

## Check Two-Factor enabled

To check if the authenticated user has enabled Two-Factor, you can call the `twoFactorEnabled` query:

```graphql
query TwoFactorEnabled {
  twoFactorEnabled
}

// returns
{
  "data": {
    "twoFactorEnabled": false
  }
}
```
