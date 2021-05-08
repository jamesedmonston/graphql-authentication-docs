---
id: fields
title: Fields
sidebar_label: Fields
slug: /fields
---

Choose which fields are forbidden from being accessed through queries and mutations – per schema. Any attempts to access a restricted field will cause the request to throw.

- `Query & Mutate` (default) leaves fields unrestricted.
- `Query` makes fields available only in queries and mutation responses.
- `Private` stops fields from being queried and mutated.

![alt text](/assets/messages.png "Screenshot of field settings")
