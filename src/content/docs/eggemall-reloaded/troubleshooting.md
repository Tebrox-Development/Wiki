---
title: Troubleshooting
description: Common EggEmAll Reloaded configuration and gameplay issues.
sidebar:
  order: 90
---

# Troubleshooting

## An entity cannot be caught

Check the capture conditions in this order:

1. The entity must have a valid spawn egg.
2. The entity must not be listed under `Restrictions.EntityBlacklist`.
3. The current world must be allowed by `BlacklistWorlds`.
4. Entity-state restrictions must allow the target.
5. If `OnlyAllowPlayerThrownEggs` is enabled, the egg must have been thrown by a player.
6. If `RequirePermissions` is enabled, the player needs a matching category or mob-specific permission.
7. The configured capture chance still has to succeed.

Relevant settings are documented under [Configuration](../configuration/).

## Permission denied when catching mobs

If:

```yaml
Restrictions:
  RequirePermissions: true
```

players need a matching capture permission.

You can grant category permissions such as:

```text
eggemall.passive
eggemall.aggressive
eggemall.villagers
```

or a mob-specific permission such as:

```text
eggemall.catchmob.cow
```

See [Commands & Permissions](../commands-permissions/).

## PlaceholderAPI placeholders are not resolving

Built-in EggEmAll placeholders use braces, for example:

```text
{player}
{entity}
{world}
```

Standard PlaceholderAPI placeholders use percent signs:

```text
%player_name%
```

The `%...%` form requires PlaceholderAPI to be installed and available. EggEmAll Reloaded itself does not require PlaceholderAPI.

See [Placeholders](../placeholders/).

## Existing EggEmAll2 settings were not imported automatically

Legacy settings are not silently overwritten into the Reloaded directory.

If `plugins/EggEmAll2/settings.yml` exists, use:

```text
/eggemall migrate
```

The migration process creates a backup and leaves the original EggEmAll2 directory untouched.

See [Migration from EggEmAll2](../migration/).

## A stacker plugin is installed but capture behavior is unexpected

EggEmAll Reloaded integrates optionally with RoseStacker and UltimateStacker.

Make sure the installed stacker version is compatible with the server version and test the behavior with the latest stable EggEmAll Reloaded release.

A missing or incompatible optional integration should not prevent EggEmAll Reloaded itself from starting.

## Previously captured legacy eggs behave differently

Legacy EggEmAll2 eggs store entity snapshot data differently from newly captured Reloaded eggs.

EggEmAll Reloaded retains a legacy reader, but restoration still depends on whether the current server can parse the stored legacy snapshot data.

## Reporting a bug

When opening an issue, include:

- server software and version
- EggEmAll Reloaded version
- relevant `settings.yml` sections
- installed optional integrations
- complete error or stack trace if one exists
- clear reproduction steps

Use the [GitHub issue tracker](https://github.com/Tebrox-Development/EggEmAll-Reloaded/issues).
