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
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `googleSignIn` mutation for each user group that has registrations enabled (e.g. `googleSignInUser` and `googleSignInBusiness`).
:::

```javascript
mutation {
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
        "id": "21",
        "fullName": "James Edmonston"
      }
    }
  }
}
```

## Facebook

To authenticate a user through Facebook Login, you first need to call the `facebookOauthUrl` query:

```javascript
query {
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
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `facebookSignIn` mutation for each user group that has registrations enabled (e.g. `facebookSignInUser` and `facebookSignInBusiness`).
:::

```javascript
mutation {
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
        "id": "21",
        "fullName": "James Edmonston"
      }
    }
  }
}
```

## Twitter

To authenticate a user through Log in with Twitter, you first need to call the `twitterOauthUrl` query:

```javascript
query {
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
If you have `Permission Type` set to `Multiple Schemas` in your plugin settings, you will have a `twitterSignIn` mutation for each user group that has registrations enabled (e.g. `twitterSignInUser` and `twitterSignInBusiness`).
:::

```javascript
mutation {
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
        "id": "21",
        "fullName": "James Edmonston"
      }
    }
  }
}
```
