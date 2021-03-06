---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

GraphQL Authentication adds a JWT authentication layer to your Craft CMS GraphQL endpoint.

## Plugin Overview

- Adds support for user registration and authentication (see [Authentication](/usage/authentication))
- Adds support for social sign-in – currently Google, Facebook, Twitter, and Apple (see [Social](/usage/social))
- Adds ability to define per-section user restrictions (queries and mutations can be limited to author-only) (see [User Settings](/settings/users))
- Checks mutation fields against schema permissions, and prevents fields being saved if user is trying to access private entries/assets
- Adds ability to assign unique schemas for each user group
- Adds ability to restrict user queries and mutations to Craft multi-site sites
- Adds a unique, per-user query cache
