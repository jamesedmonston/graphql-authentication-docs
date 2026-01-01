---
id: fyi
title: FYI
sidebar_label: FYI
slug: /extra/fyi
---

### `entry` and `asset` queries

Queries without a `section`/`sectionId` or `volume`/`volumeId` argument are automatically restricted to the current user's entries/assets. This acts as a security fallback, and also to keep pagination working correctly.

The inclusion of a section or volume argument means the query can be checked against permissions ahead of time.

Take the following query for example:

```graphql
query Entries {
  entries(limit: 5) {
    id
    title
  }
}
```

If private entries were removed _after_ the query had been fired, you could end up with fewer results than requested.

### Category restrictions

Due to the fact that categories don't have an `author`, it isn't currently possible to restrict them in the same way as entries and assets.

An alternative path would be to use entry channels as a replacement for categories, as this enables granular permission control.
