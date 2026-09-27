---
title: Compatibility
description: Supported and validated server versions for EggEmAll Reloaded.
sidebar:
  order: 8
---

# Compatibility

EggEmAll Reloaded is maintained with current Paper support as the primary target while avoiding unnecessary runtime requirements.

## Current stable release

The current stable release is **3.0.2**.

## Java

The project is built with **JDK 25** because the current Paper API uses the current Java generation.

The plugin itself is compiled with `--release 17` where the dependency and API surface permit it, keeping the plugin's own classes at Java 17 bytecode compatibility.

## Validated server software

| Runtime | Validation status |
| --- | --- |
| Paper 26.2 build 121 | Primary target; compile/API verification, automated startup smoke, and manual functional validation passed. |
| Paper 1.21.7 | Backward-compatibility compile/API verification and manual functional validation passed. |
| Spigot 26.2 | Manual functional validation passed. |
| Spigot 1.21.7 | Manual functional validation passed. |
| Older than 1.21 | Not a maintenance target unless compatibility comes without additional maintenance cost. |

The same EggEmAll Reloaded JAR was manually validated across the tested Paper and Spigot runtimes.

Functional validation covered:

- core capture flow
- spawn-egg restoration
- entity-data preservation
- permissions
- world restrictions
- capture restrictions
- chance handling

## Stacker integrations

RoseStacker and UltimateStacker were also exercised during runtime testing.

For both integrations, capturing from a stack reduced the remaining stack by exactly one while producing one captured entity egg.

## EggEmAll2 compatibility

The following compatibility surfaces are intentionally retained:

- `/eggemall` command
- `eggemall.*` permission nodes
- `%eggemall_...%` PlaceholderAPI namespace
- existing configuration conventions
- legacy captured egg reader

The plugin descriptor also declares EggEmAll Reloaded as providing `EggEmAll2` where supported by the server.

## Compatibility policy

The maintenance rules are:

1. keep existing configuration keys and defaults unless migration is necessary
2. keep existing commands, placeholder identifiers, and permission nodes unless correctness or security requires a change
3. prefer isolated compatibility adapters over unnecessarily raising the minimum server version
4. avoid fragile emulation of removed server behavior
5. keep optional integrations optional
