---
id: fyi
title: FYI
sidebar_label: FYI
slug: /extra/fyi
---

## Things you should be aware of

### `authenticate` mutation

When running the `authenticate` mutation, the parameters are passed directly to the [authenticate function](https://docs.craftcms.com/api/v3/craft-elements-user.html#method-authenticate) from Craft's `User` model. This function will fail validation if the user attempting to log in doesn't have access to the control panel.

Because of this, the `authenticate` mutation temporarily grants control panel access, and removes it upon success or failure.

The logic should run _very_ quickly, so users shouldn't ever _actually_ be able to access the control panel, but it's something to be aware of in case you want to implement additional back-end logic, if users _shouldn't_ have access.

The following snippet is how temporary access is granted:

```php
$userPermissions = $permissions->getPermissionsByUserId($user->id);

if (!in_array('accessCp', $userPermissions)) {
    $permissions->saveUserPermissions($user->id, array_merge($userPermissions, ['accessCp']));
}

if (!$user->authenticate($password)) {
    $permissions->saveUserPermissions($user->id, $userPermissions);
    throw new Error($error);
}

$permissions->saveUserPermissions($user->id, $userPermissions);
```

### Category restrictions

Due to the fact that categories don't have an `author`, it isn't currently possible to restrict them in the same way as entries and assets.

An alternative path would be to use entry channels as a replacement for categories, as this enables granular permission control.
