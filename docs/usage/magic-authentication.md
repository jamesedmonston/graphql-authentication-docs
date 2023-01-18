---
id: magic-authentication
title: Magic Authentication
sidebar_label: Magic Authentication
slug: /usage/magic-authentication
---

## Send Magic Authentication Link

To authenticate a user through a 'magic link', you first need to call the `sendMagicLink` mutation:

```graphql
mutation SendMagicLink {
  sendMagicLink(email: "james@testingthings.com")
}

// returns
{
  "data": {
    "sendMagicLink": "You will receive an email if it matches an account in our system"
  }
}
```

Your user will receive an email containing a link and code. The default email reads as follows:

```twig
Hey {{user.friendlyName|e}},

Use the following link to sign in to your account: {{siteUrl}}auth?magicCode={{code}}

Or, use the following code to sign in: {{code}}.

The link and code will expire in 15 minutes.
```

It is editable in the `System Messages` settings.

Once your user has clicked the link or copied the code, you can call the `verifyMagicCode` mutation:

```graphql
mutation VerifyMagicCode {
  verifyMagicCode(code: "...", email: "...") {
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
    "verifyMagicCode": {
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
