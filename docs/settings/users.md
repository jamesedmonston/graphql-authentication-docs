---
id: users
title: Users
sidebar_label: Users
slug: /settings/users
---

## Permission Type

Choose whether users get assigned to a single schema, or each user group gets its own schema.

:::note
If you choose `Multiple Schemas`, you will see the following fields **_for each user group_**.
:::

## GraphQL Schema

The schema that tokens will be assigned to through the [authentication mutations](/docs/mutations).

## Allow Registration

Choose if the registration mutations should be available.

If you chose `Single Schemas` for the `Permission Type` field, you will have a single `register` mutation available.

Otherwise, you will have a mutation for each user group with registration enabled – with the group handle appended to the mutation name, for example `registerUser` and `registerBusiness`.

## User Group

Choose which user group users will be assigned to when created through a `register` mutation.

## Restricted Queries & Mutations

Here you can choose which sections should have restricted queries and mutations.

Restricted sections/volumes mean that users are only able to query/mutate **_their own_** entries/assets.

Only the sections allowed in the selected schema will show here.
