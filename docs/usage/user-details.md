---
id: user-details
title: User Details
sidebar_label: User Details
slug: /usage/user-details
---

## Get User

To get the authenticated user's data, you can call the `viewer` query:

```javascript
query {
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

## Update User

To update the authenticated user, you can call the `updateViewer` mutation:

```javascript
mutation {
  updateViewer (
    firstName: "Jerry"
    lastName: "Jackson"
    # also supports custom fields
  ) {
    id
    fullName
  }
}

// returns
{
  "data": {
    "updateViewer": {
      "id": "21",
      "fullName": "Jerry Jackson"
    }
  }
}
```

## Update Password

To update the authenticated user's password, you can call the `updatePassword` mutation:

```javascript
mutation {
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
