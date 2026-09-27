---
title: Integrations
description: Optional integrations for EggEmAll Reloaded.
sidebar:
  order: 6
---

# Integrations

All integrations on this page are optional.

## PlaceholderAPI

Adds normal `%...%` placeholder parsing to supported messages and spawn-egg lore.

EggEmAll Reloaded also provides its own `%eggemall_...%` placeholders.

See [Placeholders](../placeholders/).

## RoseStacker

When a stacked entity is caught, EggEmAll Reloaded takes one entity from the stack and reduces the remaining stack by one.

## UltimateStacker

UltimateStacker is handled the same way.

Both the older `com.songoda` API package and the newer `com.craftaro` package are detected at runtime, so UltimateStacker is not a hard dependency.

## Missing integrations

EggEmAll Reloaded still starts normally when an optional integration is not installed.
