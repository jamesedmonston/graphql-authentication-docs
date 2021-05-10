---
id: modifying-jwts
title: Modifying JWTs
sidebar_label: Modifying JWTs
slug: /usage/modifying-jwts
---

## Payload

By default, the following data is encoded into JWT payloads:

```json
{
  "iss": "CraftCMS",
  "iat": 1607255926,
  "exp": 1607257726,
  "sub": "21",
  "fullName": "James Edmonston",
  "email": "james@testingthings.com",
  "groups": ["User"],
  "schema": "User",
  "admin": "0"
}
```

You are free to add any additional data that might be useful to you! To do so, you can use the `JwtCreateEvent` event.

Here's an example module that adds the user's `username` into the payload:

```php
<?php

namespace modules;

use craft\base\Plugin;
use jamesedmonston\graphqlauthentication\events\JwtCreateEvent;
use jamesedmonston\graphqlauthentication\services\TokenService;
use yii\base\Event;

class ModifyJwt extends Plugin
{
    public function init()
    {
        parent::init();

        Event::on(
            TokenService::class,
            TokenService::EVENT_BEFORE_CREATE_JWT,
            [$this, 'addJwtClaims']
        );
    }

    public function addJwtClaims(JwtCreateEvent $event)
    {
        $builder = $event->builder;
        $user = $event->user;
        $builder->withClaim('username', $user->username);
    }
}
```

The payload would now be as follows:

```json
{
  "iss": "CraftCMS",
  "iat": 1607255926,
  "exp": 1607257726,
  "sub": "21",
  "fullName": "James Edmonston",
  "email": "james@testingthings.com",
  "groups": ["User"],
  "schema": "User",
  "admin": "0",
  "username": "jamesedmonston"
}
```

## Validation

By default, JWTs are validated using the `JWT Secret Key` field you set up in settings. If they're not signed using the same key, it will throw an invalid token error.

You are free to modify the JWT validation steps to suit your needs. To do so, you can use the `JwtValidateEvent` event.

Here's an example module that adds an `IssuedBy` validator:

```php
<?php

namespace modules;

use craft\base\Plugin;
use jamesedmonston\graphqlauthentication\events\JwtValidateEvent;
use jamesedmonston\graphqlauthentication\services\TokenService;
use Lcobucci\JWT\Validation\Constraint\IssuedBy;
use yii\base\Event;

class ModifyJwt extends Plugin
{
    public function init()
    {
        parent::init();

        Event::on(
            TokenService::class,
            TokenService::EVENT_BEFORE_VALIDATE_JWT,
            [$this, 'validateJwt']
        );
    }

    public function validateJwt(JwtValidateEvent $event)
    {
        $config = $event->config;
        $validator = new IssuedBy('Custom Validator');
        $config->setValidationConstraints($validator);
    }
}

```
