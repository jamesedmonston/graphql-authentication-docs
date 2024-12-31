---
id: installation
title: Installation
sidebar_label: Installation
slug: /installation
---

## Requirements

This plugin requires Craft CMS 4.0 or later.

## Installation

To install the plugin, follow these instructions.

1.  Open your terminal and go to your Craft project:

        `cd /path/to/project`

2.  Then tell Composer to load the plugin:

        `composer require jamesedmonston/graphql-authentication`

3.  In the Control Panel, go to Settings → Plugins and click the “Install” button for GraphQL Authentication.

4.  Go to GraphQL -> Schemas -> Public Schema -> Enable `Query for elements in the "{siteName}" site`.

## Reducing Installation Size

To reduce the installation size of the required Google packages by around 46MB, follow these instructions.

1.  Add `"pre-autoload-dump": "Google\\Task\\Composer::cleanup"` to your `composer.json`'s `scripts` block.

2.  Add `"google/apiclient-services": ["Oauth2"]` to your `composer.json`'s `extra` block.
