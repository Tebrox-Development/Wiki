---
title: Commands & Permissions
description: Commands and permissions for EggEmAll Reloaded.
sidebar:
  order: 4
---

# Commands & Permissions

The default command is:

```text
/eggemall
```

Aliases can be changed with `Command_Aliases` in `settings.yml`.

## Commands

| Command | Permission | Description |
| --- | --- | --- |
| `/eggemall menu` | `eggemall.command.gui` | Opens the catchable/blacklisted entity GUI. |
| `/eggemall reload` | `eggemall.command.reload` | Reloads the config. |
| `/eggemall migrate` | `eggemall.command.migrate` | Imports the old EggEmAll2 config. |

See [Migration from EggEmAll2](../migration/) before using the migrate command.

## Catch permissions

These permissions matter when:

```yaml
Restrictions:
  RequirePermissions: true
```

### Categories

| Permission | Allows |
| --- | --- |
| `eggemall.villagers` | Villager-type entities |
| `eggemall.aggressive` | Monsters |
| `eggemall.passive` | Animals |
| `eggemall.unknown` | Entities that do not match the categories above |

`eggemall.all` grants all four category permissions and defaults to operators.

### Specific mobs

Use:

```text
eggemall.catchmob.<entity_type>
```

For example:

```text
eggemall.catchmob.cow
```

The entity type uses the lowercase Bukkit entity name.

The older EggEmAll2 display-name-based permission is still accepted for compatibility.
