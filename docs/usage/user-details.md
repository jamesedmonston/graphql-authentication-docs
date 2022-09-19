---
id: user-details
title: User Details
sidebar_label: User Details
slug: /usage/user-details
---

## Viewer

To get the authenticated user's data, you can call the `viewer` query:

```graphql
query Viewer {
  viewer {
    id
    fullName
  }
}

// returns
{
  "data": {
    "viewer": {
      "id": "1",
      "fullName": "James Edmonston"
    }
  }
}
```

## Update Viewer

To update the authenticated user, you can call the `updateViewer` mutation:

```graphql
mutation UpdateViewer {
  updateViewer (
    fullName: "Jerry Jackson"
    customField: "A value"
    photo: {
      fileData: "base64..."
      filename: "avatar.jpg"
    }
  ) {
    id
    fullName
    photo {
      id
      url
    }
    ... on User {
      customField
    }
  }
}

// sending `photo` as `null` will remove the user's avatar

// returns
{
  "data": {
    "updateViewer": {
      "id": "1",
      "fullName": "Jerry Jackson",
      "customField": "A value",
      "photo": {
        "id": "123",
        "url": "https://plugins.localhost/uploads/avatar.jpg"
      }
    }
  }
}
```

## Update Password

To update the authenticated user's password, you can call the `updatePassword` mutation:

```graphql
mutation UpdatePassword {
  updatePassword(
    currentPassword: "testing123"
    newPassword: "testing1234"
    confirmPassword: "testing1234"
  )
}

// returns
{
  "data": {
    "updatePassword": "Successfully updated password"
  }
}
```

## Delete Account

To delete the authenticated user's account, you can call the `deleteAccount` mutation:

```graphql
mutation DeleteAccount {
  deleteAccount(
    password: "testing1234"
    confirmPassword: "testing1234"
  )
}

// returns
{
  "data": {
    "deleteAccount": "Successfully deleted account"
  }
}
```
