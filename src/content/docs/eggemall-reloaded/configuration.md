---
title: Configuration
description: EggEmAll Reloaded settings.yml reference.
sidebar:
  order: 3
---

# Configuration

The main config is:

```text
plugins/EggEmAllReloaded/settings.yml
```

After editing it, run `/eggemall reload` or restart the server.

## General

| Option | Default | What it does |
| --- | --- | --- |
| `LogPrefix` | `&8[&aEggEmAll Reloaded&8]` | Prefix used in console output. |
| `ChatPrefix` | `&8[&aEggEmAll Reloaded&8]` | Prefix used in chat messages. |
| `Log_Lag_Over_Millis` | `100` | Framework threshold for slow-operation logging. |
| `Debug` | `[]` | Enables additional debug sections. |
| `Command_Aliases` | `[eggemall]` | Aliases for the main command. |
| `General.StartupConsoleStats` | `true` | Prints plugin details on startup and reload. |

## Worlds

```yaml
BlacklistWorlds:
  AsWhitelist: false
  Worlds:
    - blacklisted_world
```

With `AsWhitelist: false`, the listed worlds are blocked.

With `AsWhitelist: true`, catching is only allowed in the listed worlds.

Use the exact world names from the server.

## Particles

| Option | Default | What it does |
| --- | --- | --- |
| `Particles.EggTrails` | `true` | Shows the egg trail effect. |
| `Particles.PlayerThrowOnly` | `true` | Limits the relevant effect to player-thrown eggs. |
| `Particles.ExplosionOnSuccess` | `true` | Shows an effect after a successful catch. |
| `Particles.SmokeOnEscape` | `true` | Shows smoke when a failed catch removes the target. |

## Catch chance

```yaml
CatchChance:
  ChancePercentage: 100
  SpawnChickenOnFail: true
  RemoveEntityOnFail: true
  AddLoreToSpawnEgg: true
```

### `ChancePercentage`

Chance for a valid catch to succeed.

**Default:** `100`

### Failed catches

- `SpawnChickenOnFail` allows the normal chicken-spawn behavior after a failed throw.
- `RemoveEntityOnFail` removes the target when the catch roll fails.
- `Particles.SmokeOnEscape` controls the smoke effect used with entity removal.

### Spawn egg lore

`AddLoreToSpawnEgg` adds the configured lore when a player catches an entity.

Default lore:

```yaml
Lore_Lines:
  - '&9{entity_name}'
  - '&9Captured by: &e&l{player}'
```

Built-in placeholders and PlaceholderAPI placeholders can be used here. See [Placeholders](../placeholders/).

## Restrictions

| Option | Default | What it does |
| --- | --- | --- |
| `OnlyAllowPlayerThrownEggs` | `true` | Only eggs thrown by players can catch mobs. |
| `PreventCatchingBabyEntities` | `true` | Blocks baby mobs. |
| `PreventCatchingTamedEntities` | `true` | Blocks tamed mobs. |
| `PreventCatchingShearedSheep` | `true` | Blocks sheared sheep. |
| `PreventCatchingNamedEntities` | `true` | Blocks mobs with custom names. |
| `RequirePermissions` | `true` | Requires category or mob-specific catch permissions. |

### Entity blacklist

Only entities with a valid spawn egg can be caught. `EntityBlacklist` can block additional entity types.

Default:

```yaml
EntityBlacklist:
  - ENDER_DRAGON
  - WITHER
  - ELDER_GUARDIAN
  - WARDEN
  - EVOKER
  - VEX
  - GHAST
  - SHULKER
  - RAVAGER
  - TADPOLE
```

## Entity inventories

### `EntityInventories.DeleteInventoryOnCatch`

Controls inventory handling for supported entities when they are caught.

**Default:** `true`

## Entity data

### `NBT.MaintainEntityDataValues`

Keeps supported entity data on captured spawn eggs.

**Default:** `true`

New eggs use the server's native entity snapshot support where available. Legacy EggEmAll2 egg data is still read for compatibility.

## GUI

```yaml
GUI:
  Title: "&9&l&oEggEmAll Reloaded"
  CatchableEntitiesTitle: "&2&l&oCatchable Entities"
  BlacklistedEntitiesTitle: "&c&l&oBlacklisted Entities"
```

These values set the titles used by the built-in GUI.

## Messages

The `Messages` section contains the text shown for successful catches, failed catches, restrictions, and permission errors.

Built-in placeholders such as `{entity}` and `{world}` work in the supported messages. PlaceholderAPI placeholders are parsed when PlaceholderAPI is installed.

See [Placeholders](../placeholders/).
