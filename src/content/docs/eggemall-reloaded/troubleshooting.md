---
title: Troubleshooting
description: Common EggEmAll Reloaded problems.
sidebar:
  order: 90
---

# Troubleshooting

## A mob cannot be caught

Check these first:

1. The mob has a valid spawn egg.
2. It is not in `Restrictions.EntityBlacklist`.
3. The current world is allowed.
4. Baby/tamed/named/sheared restrictions do not block it.
5. If `OnlyAllowPlayerThrownEggs` is enabled, a player threw the egg.
6. If `RequirePermissions` is enabled, the player has a matching permission.
7. The catch chance succeeded.

See [Configuration](../configuration/).

## The player gets a permission message

With:

```yaml
Restrictions:
  RequirePermissions: true
```

the player needs either a category permission:

```text
eggemall.passive
eggemall.aggressive
eggemall.villagers
```

or a mob-specific permission:

```text
eggemall.catchmob.cow
```

See [Commands & Permissions](../commands-permissions/).

## PlaceholderAPI placeholders stay unchanged

Built-in placeholders use braces:

```text
{player}
{entity}
{world}
```

PlaceholderAPI uses percent signs:

```text
%player_name%
```

The second form only works when PlaceholderAPI is installed.

See [Placeholders](../placeholders/).

## My EggEmAll2 config was not imported

The old config is not copied automatically.

If this file exists:

```text
plugins/EggEmAll2/settings.yml
```

run:

```text
/eggemall migrate
```

See [Migration from EggEmAll2](../migration/).

## Problems with RoseStacker or UltimateStacker

Update EggEmAll Reloaded and the stacker plugin first, then test again.

The stacker integrations are optional. A missing integration should not stop EggEmAll Reloaded from loading.

## Old captured eggs behave differently

EggEmAll2 stored entity data differently from new Reloaded eggs.

The legacy reader is still included, but restoration depends on whether the current server can parse the old snapshot data.

## Reporting a bug

Include:

- server software and version
- EggEmAll Reloaded version
- relevant config
- installed integrations
- full error or stack trace
- steps to reproduce it

Report bugs on the [GitHub issue tracker](https://github.com/Tebrox-Development/EggEmAll-Reloaded/issues).
