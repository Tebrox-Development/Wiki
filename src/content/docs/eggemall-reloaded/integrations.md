---
title: Integrations
description: Optional runtime integrations supported by EggEmAll Reloaded.
sidebar:
  order: 6
---

# Integrations

EggEmAll Reloaded keeps its feature integrations optional. Missing optional plugins must not prevent EggEmAll Reloaded from starting.

## PlaceholderAPI

PlaceholderAPI adds support for standard `%...%` placeholders in supported EggEmAll Reloaded messages and spawn-egg lore.

EggEmAll Reloaded also exposes its own `%eggemall_...%` placeholders.

See [Placeholders](../placeholders/) for the complete list.

## RoseStacker

RoseStacker support allows EggEmAll Reloaded to capture a single entity from a stacked group while reducing the remaining stack by exactly one.

The integration has been runtime-tested with the current maintained release line.

## UltimateStacker

UltimateStacker is also supported as an optional stack provider.

EggEmAll Reloaded detects both the legacy `com.songoda` API package and the current `com.craftaro` API package at runtime. UltimateStacker is therefore not a hard build dependency.

## Integration behavior

Optional integration failures are intended to remain isolated. Installing or removing an optional stacker should not turn it into a mandatory dependency for EggEmAll Reloaded.
