---
id: signing-requests
title: Signing Requests
sidebar_label: Signing Requests
slug: /usage/signing-requests
---

Once you've authenticated a user and have the JWT to hand, you're ready to start signing your requests.

JWT tokens currently need to be passed into the `Authorization` header as follows:

`Authorization: JWT ${token}`

Craft has its own internal logic for validating GraphQL authorization headers, so if it's passed in as `Authorization: Bearer ${token}`, it will step in and throw an `Invalid Authorization Header` error.
