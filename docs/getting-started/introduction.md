---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

GraphQL Authentication adds a JWT authentication layer to your Craft CMS GraphQL endpoint.

## Plugin Overview

- Adds support for user registration and authentication
- Adds support for social sign-in – currently Google, Facebook and Twitter (see [Social](/docs/social))
- Adds ability to define per-section user restrictions (queries and mutations can be limited to author-only)
- Checks mutation fields against schema permissions, and prevents fields being saved if user is trying to access private entries/assets
- Adds ability to assign unique GraphQL schemas for each user group
- Adds a unique, per-user GraphQL query cache
