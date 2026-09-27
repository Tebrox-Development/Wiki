---
title: Commands & Permissions
description: Commands and permission nodes provided by EggEmAll Reloaded.
sidebar:
  order: 4
---

# Commands & Permissions

The default command alias is:

```text
/eggemall
```

The alias list can be changed through `Command_Aliases` in `settings.yml`.

## Commands

### `/eggemall menu`

Opens the GUI showing catchable and blacklisted entities.

**Permission:** `eggemall.command.gui`

### `/eggemall reload`

Reloads the plugin configuration.

**Permission:** `eggemall.command.reload`

### `/eggemall migrate`

Imports `plugins/EggEmAll2/settings.yml` into the EggEmAll Reloaded data directory using the built-in migration process.

**Permission:** `eggemall.command.migrate`

See [Migration from EggEmAll2](../migration/) before using it.

## Capture permissions

Capture permissions are used when:

```yaml
Restrictions:
  RequirePermissions: true
```

### `eggemall.all`

**Default:** `op`

Grants the category permissions below:

- `eggemall.villagers`
- `eggemall.aggressive`
- `eggemall.passive`
- `eggemall.unknown`

### Category permissions

| Permission | Purpose |
| --- | --- |
| `eggemall.villagers` | Allow catching villager-type entities. |
| `eggemall.aggressive` | Allow catching monsters. |
| `eggemall.passive` | Allow catching animals. |
| `eggemall.unknown` | Fallback category for entities not assigned above. |

### Mob-specific permissions

Use:

```text
eggemall.catchmob.<entity_type>
```

The entity type is the lowercase Bukkit entity type.

Example:

```text
eggemall.catchmob.cow
```

For compatibility with upstream EggEmAll2 2.1.1 configurations, the previous display-name-derived mob-specific permission format is also accepted during the compatibility transition.
