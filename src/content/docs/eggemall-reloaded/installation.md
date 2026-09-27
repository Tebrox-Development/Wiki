---
title: Installation
description: Install EggEmAll Reloaded on a Minecraft server.
sidebar:
  order: 2
---

# Installation

## Requirements

EggEmAll Reloaded is distributed as a normal server plugin.

The current stable release is **3.0.2**. Paper is the primary target, with current Spigot versions also manually validated.

For the exact tested versions, see [Compatibility](./compatibility/).

## Install

1. Download the latest stable JAR from [GitHub Releases](https://github.com/Tebrox-Development/EggEmAll-Reloaded/releases/latest) or [SpigotMC](https://www.spigotmc.org/resources/eggemall-reloaded.138577/).
2. Place the JAR in the server's `plugins` directory.
3. Start or restart the server.
4. Edit `plugins/EggEmAllReloaded/settings.yml` as needed.
5. Restart the server or use `/eggemall reload` after configuration changes.

## Updating EggEmAll Reloaded

For normal updates:

1. Stop the server.
2. Replace the existing EggEmAll Reloaded JAR.
3. Start the server again.

Existing configuration files and previously captured eggs are intended to remain compatible across maintenance updates.

## Upgrading from EggEmAll2

Do not manually overwrite the old EggEmAll2 data directory.

EggEmAll Reloaded uses its own plugin data directory and includes a migration command for the legacy `settings.yml`.

Follow [Migration from EggEmAll2](./migration/) before removing the old installation.
