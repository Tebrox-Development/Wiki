---
title: Installation
description: Install EggEmAll Reloaded on a Minecraft server.
sidebar:
  order: 2
---

# Installation

Current stable release: **3.0.2**

For tested server versions and Java details, see [Compatibility](../compatibility/).

## Install

1. Download the latest JAR from [GitHub Releases](https://github.com/Tebrox-Development/EggEmAll-Reloaded/releases/latest) or [SpigotMC](https://www.spigotmc.org/resources/eggemall-reloaded.138577/).
2. Put the JAR in the server's `plugins` folder.
3. Start or restart the server.
4. Edit `plugins/EggEmAllReloaded/settings.yml` if needed.
5. Use `/eggemall reload` after config changes, or restart the server.

## Updating

Stop the server, replace the old JAR, and start the server again.

Existing configs and captured eggs are kept compatible across normal maintenance updates.

## Moving from EggEmAll2

EggEmAll Reloaded uses a separate data folder. Do not copy the old folder over the new one manually.

Use the built-in migration command instead. See [Migration from EggEmAll2](../migration/).
