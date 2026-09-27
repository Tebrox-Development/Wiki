---
title: Migration from EggEmAll2
description: Move an existing EggEmAll2 setup to EggEmAll Reloaded.
sidebar:
  order: 7
---

# Migration from EggEmAll2

EggEmAll Reloaded uses its own plugin folder:

```text
plugins/EggEmAllReloaded/
```

The old EggEmAll2 config stays at:

```text
plugins/EggEmAll2/settings.yml
```

Back up both folders before migrating.

## Run the migration

If the old config is found, EggEmAll Reloaded reports it during startup.

Run:

```text
/eggemall migrate
```

The command:

1. backs up the current Reloaded `settings.yml`
2. imports the EggEmAll2 settings
3. leaves the old EggEmAll2 folder untouched
4. reloads the imported config
5. records the completed migration so it is not run again by accident

The default `[EggEmAll]` prefixes are renamed to `[EggEmAll Reloaded]`. Custom prefixes are left alone.

## After migration

Check the important settings before reopening the server:

- worlds
- catch chance
- entity blacklist
- restrictions
- permissions
- lore and messages

Do not keep both plugin JARs active after the migration.

## Old captured eggs

Legacy EggEmAll2 eggs are still supported when the current server can read their stored entity snapshot data.

New captured eggs use the server's native entity snapshot support where available when `NBT.MaintainEntityDataValues` is enabled.
