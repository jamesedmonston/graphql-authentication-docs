---
id: signing-requests
title: Signing Requests
sidebar_label: Signing Requests
slug: /usage/signing-requests
---

Once you've authenticated a user and have the JWT to hand, you're ready to start signing your requests.

JWTs currently need to be passed into the `Authorization` header as follows:

`Authorization: JWT ${token}`

Craft has its own internal logic for validating GraphQL authorization headers, so if it's passed in as `Authorization: Bearer ${token}`, it will step in and throw an `Invalid Authorization Header` error.

:::note
If you are using Apache to handle your network, make sure you've enabled `CGIPassAuth` or modified your `.htaccess` file as seen [here](https://craftcms.com/docs/3.x/graphql.html#querying-a-private-schema), to ensure the authorization header isn't blocked.
:::

### Testing

Craft's built-in GraphiQL doesn't allow you to send custom headers, so a quick way of testing your authorization flow is to use https://graphiql-online.com.

:::note
You'll need to add https://graphiql-online.com to your [`allowedGraphqlOrigins`](https://craftcms.com/docs/3.x/config/config-settings.html#allowedgraphqlorigins) setting in `general.php`.
:::
