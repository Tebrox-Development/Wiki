---
title: Compatibility
description: Tested server and Java versions for EggEmAll Reloaded.
sidebar:
  order: 8
---

# Compatibility

Current stable release: **3.0.2**

Paper is the main target, but the same JAR has also been tested on current Spigot versions.

## Tested versions

| Runtime | Status |
| --- | --- |
| Paper 26.2 build 121 | Primary target; build, startup smoke, and manual tests passed |
| Paper 1.21.7 | Build/API check and manual tests passed |
| Spigot 26.2 | Manual tests passed |
| Spigot 1.21.7 | Manual tests passed |
| Older than 1.21 | Not a maintenance target |

Manual testing covered catching, restoring spawn eggs, entity data, permissions, world restrictions, catch restrictions, and catch chance behavior.

## Java

The project is built with **JDK 25**.

Plugin classes are compiled with `--release 17` where the API and dependencies allow it.

## Stacker plugins

RoseStacker and UltimateStacker have both been tested with stacked entities. Catching one entity removes exactly one entity from the stack.

## EggEmAll2 compatibility

The following are kept for existing setups:

- `/eggemall`
- `eggemall.*` permissions
- `%eggemall_...%` placeholders
- existing config names
- legacy captured egg data

EggEmAll Reloaded also declares `EggEmAll2` as a provided plugin name on servers that support it.
