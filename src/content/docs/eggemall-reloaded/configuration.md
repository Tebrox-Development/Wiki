---
title: Configuration
description: Configure EggEmAll Reloaded using settings.yml.
sidebar:
  order: 3
---

# Configuration

The main configuration file is:

```text
plugins/EggEmAllReloaded/settings.yml
```

After changing settings, use `/eggemall reload` or restart the server.

## General plugin settings

| Option | Default | Description |
| --- | --- | --- |
| `LogPrefix` | `&8[&aEggEmAll Reloaded&8]` | Prefix used for plugin log output. |
| `ChatPrefix` | `&8[&aEggEmAll Reloaded&8]` | Prefix used for plugin chat output. |
| `Log_Lag_Over_Millis` | `100` | Framework logging threshold for slow operations. |
| `Debug` | `[]` | Debug sections enabled for additional logging. |
| `Command_Aliases` | `[eggemall]` | Registered aliases for the main command. |
| `General.StartupConsoleStats` | `true` | Show plugin details in the console on startup or reload. |

## Worlds

`BlacklistWorlds` controls where entity catching is allowed.

```yaml
BlacklistWorlds:
  AsWhitelist: false
  Worlds:
    - blacklisted_world
```

### `BlacklistWorlds.AsWhitelist`

**Type:** `boolean`  
**Default:** `false`

When `false`, listed worlds are blocked. When `true`, the list is treated as a whitelist and catching is allowed only in the listed worlds.

### `BlacklistWorlds.Worlds`

**Type:** list of world names

Add the exact server world names that should participate in the blacklist or whitelist.

## Particles

| Option | Default | Description |
| --- | --- | --- |
| `Particles.EggTrails` | `true` | Show the configured egg trail effect. |
| `Particles.PlayerThrowOnly` | `true` | Restrict the relevant particle behavior to player-thrown eggs. |
| `Particles.ExplosionOnSuccess` | `true` | Show an effect when a capture succeeds. |
| `Particles.SmokeOnEscape` | `true` | Show smoke when a failed capture removes the entity. |

## Capture chance

```yaml
CatchChance:
  ChancePercentage: 100
  SpawnChickenOnFail: true
  RemoveEntityOnFail: true
  AddLoreToSpawnEgg: true
```

### `CatchChance.ChancePercentage`

**Type:** percentage  
**Default:** `100`

Controls the chance that an otherwise valid capture succeeds.

### Failure behavior

- `SpawnChickenOnFail: true` allows the normal egg failure path to spawn a chicken.
- `RemoveEntityOnFail: true` removes the target entity when the capture chance fails.
- `Particles.SmokeOnEscape` applies when entity removal on failure is enabled.

### `CatchChance.AddLoreToSpawnEgg`

**Type:** `boolean`  
**Default:** `true`

Adds configured lore to the captured spawn egg when the egg was thrown by a player.

### `CatchChance.Lore_Lines`

Default:

```yaml
Lore_Lines:
  - '&9{entity_name}'
  - '&9Captured by: &e&l{player}'
```

Built-in placeholders and, when installed, PlaceholderAPI placeholders can be used here. See [Placeholders](../placeholders/).

## Restrictions

| Option | Default | Description |
| --- | --- | --- |
| `OnlyAllowPlayerThrownEggs` | `true` | Only player-thrown chicken eggs can trigger captures. |
| `PreventCatchingBabyEntities` | `true` | Prevent catching baby entities. |
| `PreventCatchingTamedEntities` | `true` | Prevent catching tamed entities. |
| `PreventCatchingShearedSheep` | `true` | Prevent catching sheared sheep. |
| `PreventCatchingNamedEntities` | `true` | Prevent catching entities with custom names. |
| `RequirePermissions` | `true` | Require category or mob-specific capture permissions. |

### Entity blacklist

Only entities that have a valid spawn egg can be captured at all. `Restrictions.EntityBlacklist` adds an additional configurable block list.

Default entries include:

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

**Type:** `boolean`  
**Default:** `true`

Controls inventory handling for supported entities during capture.

## Entity data

### `NBT.MaintainEntityDataValues`

**Type:** `boolean`  
**Default:** `true`

Preserves supported entity data when creating captured spawn eggs.

Current versions use the server's native entity snapshot support for newly created captured eggs where available, while retaining compatibility with legacy EggEmAll2 egg data.

## GUI

```yaml
GUI:
  Title: "&9&l&oEggEmAll Reloaded"
  CatchableEntitiesTitle: "&2&l&oCatchable Entities"
  BlacklistedEntitiesTitle: "&c&l&oBlacklisted Entities"
```

These values control the titles shown by the built-in entity browser GUI.

## Messages

The `Messages` section controls capture feedback such as permission errors, restrictions, failed chance rolls, and successful captures.

Built-in `{entity}` and `{world}` placeholders are available in the applicable messages. PlaceholderAPI `%...%` placeholders are additionally parsed when PlaceholderAPI is installed.

See [Placeholders](../placeholders/) for the complete supported list.
