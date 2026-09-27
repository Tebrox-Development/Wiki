---
title: Placeholders
description: Built-in and PlaceholderAPI placeholders for EggEmAll Reloaded.
sidebar:
  order: 5
---

# Placeholders

EggEmAll Reloaded has its own `{...}` placeholders and optional PlaceholderAPI support.

## Built-in placeholders

| Placeholder | Value |
| --- | --- |
| `{player}` | Player who caught the entity |
| `{entity}` | Entity type |
| `{entity_name}` | Name used for the captured egg lore |
| `{profession}` | Villager profession, otherwise blank |
| `{world}` | Current world in supported messages |

Villager professions use readable names such as `Fletcher`.

## PlaceholderAPI

PlaceholderAPI is optional.

When it is installed, normal `%...%` placeholders can be used in supported messages and spawn-egg lore.

EggEmAll Reloaded also keeps the existing `eggemall` placeholder namespace:

| Placeholder | Value |
| --- | --- |
| `%eggemall_version%` | Installed plugin version |
| `%eggemall_catch_chance%` | Configured catch chance |
| `%eggemall_world_mode%` | `blacklist` or `whitelist` |
| `%eggemall_world_allowed%` | Whether catching is allowed in the player's world |
| `%eggemall_require_permissions%` | Whether catch permissions are enabled |
| `%eggemall_catchable_entities%` | Number of catchable entity types |
| `%eggemall_blacklisted_entities%` | Number of blacklisted entity types |

## Example

```yaml
CatchChance:
  Lore_Lines:
    - '&9{entity_name}'
    - '&9Captured by: &e&l{player}'
```

With PlaceholderAPI installed, placeholders from installed expansions can be mixed into supported fields as well.
