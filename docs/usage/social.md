---
id: social
title: Social
sidebar_label: Social
slug: /usage/social
---

## Google

To authenticate a user through Google Sign-In, you can call the `googleSignIn` mutation:

:::note
The `googleSignIn` mutation both authenticates _and_ registers users. It will throw a `Cannot find matching user` error if registration is disabled, and no user with that email exists.
:::

:::note
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `googleSignIn` mutation for each user group (e.g. `googleSignInUser` and `googleSignInBusiness`).
:::

```graphql
mutation GoogleSignIn {
  googleSignIn(idToken: "...") {
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
    "googleSignIn": {
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

## Facebook

To authenticate a user through Facebook Login, you first need to call the `facebookOauthUrl` query:

```graphql
query FacebookOauthUrl {
  facebookOauthUrl
}

// returns
{
  "data": {
    "facebookOauthUrl": "https://www.facebook.com/login.php?..."
  }
}
```

Next, send the user to the generated URL and they will be asked to authenticate through Facebook. Once they have authenticated, they will be redirected to your [Redirect URL](/settings/social#redirect-url) with a `code` query parameter (e.g. `https://yoursite.com/facebook?code=...`).

Finally, once you've grabbed the `code` from the URL, you can call the `facebookSignIn` mutation:

:::note
The `facebookSignIn` mutation both authenticates _and_ registers users. It will throw a `Cannot find matching user` error if registration is disabled, and no user with that email exists.
:::

:::note
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `facebookSignIn` mutation for each user group (e.g. `facebookSignInUser` and `facebookSignInBusiness`).
:::

```graphql
mutation FacebookSignIn {
  facebookSignIn(code: "...") {
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
    "facebookSignIn": {
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

## Twitter

To authenticate a user through Log in with Twitter, you first need to call the `twitterOauthUrl` query:

```graphql
query TwitterOauthUrl {
  twitterOauthUrl
}

// returns
{
  "data": {
    "twitterOauthUrl": "https://api.twitter.com/oauth/authorize?oauth_token=..."
  }
}
```

Next, send the user to the generated URL and they will be asked to authenticate through Twitter. Once they have authenticated, they will be redirected to your [Redirect URL](/settings/social#redirect-url-1) with `oauthToken` and `oauthVerifier` query parameters (e.g. `https://yoursite.com/twitter?oauthToken=...&oauthVerifier=...`).

Finally, once you've grabbed `oauthToken` and `oauthVerifier` from the URL, you can call the `twitterSignIn` mutation:

:::note
The `twitterSignIn` mutation both authenticates _and_ registers users. It will throw a `Cannot find matching user` error if registration is disabled, and no user with that email exists.
:::

:::note
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `twitterSignIn` mutation for each user group (e.g. `twitterSignInUser` and `twitterSignInBusiness`).
:::

```graphql
mutation TwitterSignIn {
  twitterSignIn(
    oauthToken: "..."
    oauthVerifier: "..."
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
    "twitterSignIn": {
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

## Apple

To authenticate a user through Sign in with Apple, you first need to call the `appleOauthUrl` query:

```graphql
query AppleOauthUrl {
  appleOauthUrl
}

// returns
{
  "data": {
    "appleOauthUrl": "https://appleid.apple.com/auth/authorize?..."
  }
}
```

Next, send the user to the generated URL and they will be asked to authenticate through Apple. Once they have authenticated, they will be redirected to your [Redirect URL](/settings/social#redirect-url-2) with `code` and `state` POST parameters.

Due to Apple sending the fields as POST parameters, you'll need to add an intermediary route that grabs them (e.g. a [Next.js API route](https://nextjs.org/docs/api-routes/introduction)), and redirects to your front-end.

Finally, once you've grabbed `code` and `state`, you can call the `appleSignIn` mutation:

:::note
The `appleSignIn` mutation both authenticates _and_ registers users. It will throw a `Cannot find matching user` error if registration is disabled, and no user with that email exists.
:::

:::note
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `appleSignIn` mutation for each user group (e.g. `appleSignInUser` and `appleSignInBusiness`).
:::

```graphql
mutation AppleSignIn {
  appleSignIn(
    code: "..."
    state: "..."
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
    "appleSignIn": {
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

## Microsoft

To authenticate a user through Microsoft Login, you first need to call the `microsoftOauthUrl` query:

```graphql
query MicrosoftOauthUrl {
  microsoftOauthUrl
}

// returns
{
  "data": {
    "microsoftOauthUrl": "https://login.microsoftonline.com/common/oauth2/authorize..."
  }
}
```

Next, send the user to the generated URL and they will be asked to authenticate through Microsoft. Once they have authenticated, they will be redirected to your [Redirect URL](/settings/social#redirect-url-3) with a `code` query parameter (e.g. `https://yoursite.com/microsoft?code=...`).

Finally, once you've grabbed `code` and `state` from the URL, you can call the `microsoftSignIn` mutation:

:::note
The `microsoftSignIn` mutation both authenticates _and_ registers users. It will throw a `Cannot find matching user` error if registration is disabled, and no user with that email exists.
:::

:::note
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `microsoftSignIn` mutation for each user group (e.g. `microsoftSignInUser` and `microsoftSignInBusiness`).
:::

```graphql
mutation MicrosoftSignIn {
  microsoftSignIn(code: "...", state: "...") {
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
    "microsoftSignIn": {
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
