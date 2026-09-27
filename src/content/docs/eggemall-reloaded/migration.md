---
title: Migration from EggEmAll2
description: Safely migrate an existing EggEmAll2 installation to EggEmAll Reloaded.
sidebar:
  order: 7
---

# Migration from EggEmAll2

EggEmAll Reloaded uses a new plugin name and therefore its own plugin data directory.

Existing command aliases, permission nodes, and the `eggemall` PlaceholderAPI namespace are intentionally retained for compatibility.

## Before migrating

Back up both plugin data directories and your server before changing the installation.

The legacy configuration is expected at:

```text
plugins/EggEmAll2/settings.yml
```

EggEmAll Reloaded stores its own configuration under:

```text
plugins/EggEmAllReloaded/settings.yml
```

## Migration process

When EggEmAll Reloaded detects an existing legacy `settings.yml`, it reports this on startup.

Run:

```text
/eggemall migrate
```

The migration process:

1. creates a backup of the current Reloaded `settings.yml`
2. imports the legacy EggEmAll2 settings
3. leaves the original EggEmAll2 directory untouched
4. reloads the imported configuration
5. marks a successful migration so the legacy file is not imported again accidentally

Legacy default `[EggEmAll]` log and chat prefixes are updated to `[EggEmAll Reloaded]`. Custom prefixes are preserved.

## After migrating

Verify the important configuration sections before allowing normal gameplay again:

- world blacklist/whitelist behavior
- capture chance
- entity blacklist
- capture restrictions
- permissions
- lore and messages

Once the Reloaded installation is working correctly, the old EggEmAll2 plugin JAR should no longer be loaded alongside it.

## Existing captured eggs

Compatibility support for legacy EggEmAll2 captured eggs is retained where the current server can parse the stored snapshot data.

Newly captured eggs use the server's native entity snapshot support where available when `NBT.MaintainEntityDataValues` is enabled.
