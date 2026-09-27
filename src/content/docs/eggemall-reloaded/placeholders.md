---
title: Placeholders
description: Built-in and PlaceholderAPI placeholders supported by EggEmAll Reloaded.
sidebar:
  order: 5
---

# Placeholders

EggEmAll Reloaded supports two different placeholder systems:

1. built-in EggEmAll placeholders using `{...}`
2. optional PlaceholderAPI placeholders using `%...%`

## Built-in placeholders

These placeholders are available in the message or lore contexts where they apply.

| Placeholder | Value |
| --- | --- |
| `{player}` | Player who captured the entity. |
| `{entity}` | Captured entity type. |
| `{entity_name}` | Entity name used for spawn-egg lore. |
| `{profession}` | Villager profession, or blank when not applicable. |
| `{world}` | Current world name in supported messages. |

Villager professions are rendered as readable names such as `Fletcher`.

## PlaceholderAPI support

PlaceholderAPI is optional. EggEmAll Reloaded works normally without it.

When PlaceholderAPI is installed, normal `%...%` placeholders can be used in supported message values and spawn-egg lore.

## EggEmAll PlaceholderAPI namespace

The existing `eggemall` namespace is retained for compatibility.

| Placeholder | Value |
| --- | --- |
| `%eggemall_version%` | Installed EggEmAll Reloaded version. |
| `%eggemall_catch_chance%` | Configured capture chance percentage. |
| `%eggemall_world_mode%` | `blacklist` or `whitelist`. |
| `%eggemall_world_allowed%` | Whether capture is allowed in the current player's world. |
| `%eggemall_require_permissions%` | Whether capture permissions are required. |
| `%eggemall_catchable_entities%` | Number of currently catchable entity types. |
| `%eggemall_blacklisted_entities%` | Number of configured blacklisted entity types. |

## Example lore

```yaml
CatchChance:
  Lore_Lines:
    - '&9{entity_name}'
    - '&9Captured by: &e&l{player}'
```

With PlaceholderAPI installed, you can additionally use placeholders provided by installed expansions in supported fields.
