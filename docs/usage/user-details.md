---
id: user-details
title: User Details
sidebar_label: User Details
slug: /usage/user-details
---

## Viewer

To get the authenticated user's data, you can call the `viewer` query:

```javascript
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
      "id": "21",
      "fullName": "James Edmonston"
    }
  }
}
```

## Update Viewer

To update the authenticated user, you can call the `updateViewer` mutation:

```javascript
mutation UpdateViewer {
  updateViewer (
    firstName: "Jerry"
    lastName: "Jackson"
    customField: "A value"
  ) {
    id
    fullName
    ... on User {
      customField
    }
  }
}

// returns
{
  "data": {
    "updateViewer": {
      "id": "21",
      "fullName": "Jerry Jackson",
      "customField": "A value"
    }
  }
}
```

## Update Password

To update the authenticated user's password, you can call the `updatePassword` mutation:

```javascript
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
