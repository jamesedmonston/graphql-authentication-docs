---
id: tokens
title: Tokens
sidebar_label: Tokens
slug: /settings/tokens
---

:::warning
Non-JWT tokens are now deprecated and will be removed in version `1.4.0`. JWTs offer [greater flexibility and security](/docs/modifying-jwts).
:::

## JWT Expiration

The length of time before JWTs expire. Generally you should keep this short (< 30 minutes) and use the [`refreshToken`](/docs/mutations#refreshToken) mutation to get a new JWT.

Possible values are:

- 15 minutes
- 30 minutes
- 1 hour
- 1 day
- 1 week

## Refresh Token Expiration

The length of time before refresh tokens expire.

Possible values are:

- 1 week
- 1 month
- 3 months
- 6 months
- 1 year

## JWT Secret Key

The key that is used to sign the JWT at generation and validation time. This defaults to a randomly-generated string using `Craft::$app->getSecurity()->generateRandomString(32)`, but you're free to use anything you like here!

## SameSite Cookie Policy

The `SameSite` cookie policy to use for the `HTTPOnly` refresh token cookie that is automatically sent with the authentication mutations.

Possible values are:

- Strict
- Lax
- None

:::tip
If you're authenticating from a domain separate to your Craft admin, Safari and Firefox may deem this as a 'cross-site tracking cookie' and block it.
:::
