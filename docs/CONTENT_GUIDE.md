# Wiki content guide

The Tebrox Development Wiki uses one shared layout and one shared documentation structure for all plugins.

## Version policy

- The main documentation always describes the current stable release.
- Do not keep a permanent archive for every patch release.
- Add a separate beta section only while a public beta or preview needs documentation that differs from stable.
- When the beta becomes stable, promote its documentation to the normal plugin section.
- Keep migration guides for breaking upgrades when users still need them.

## Standard plugin structure

Use this structure where it applies:

1. Overview
2. Installation
3. Configuration
4. Commands & Permissions
5. Integrations
6. Feature-specific guides
7. Developer API (only when relevant)
8. Migration (only when relevant)
9. Troubleshooting

Not every plugin needs every page. Do not create empty public pages only to satisfy the structure.

## Page conventions

### Configuration options

Use the same order for every option:

1. Option name
2. Type
3. Default value
4. Description
5. Example
6. Notes or warnings, if needed

### Commands

Document commands with:

1. Command
2. Description
3. Usage
4. Permission
5. Aliases, if any
6. Example, when useful

### Permissions

Document permissions with:

1. Permission node
2. Description
3. Default
4. Related command or feature

## Stable and beta documentation

Stable stays at the normal plugin path. If a beta needs separate documentation, place it below a clearly labelled beta section and add a visible warning to every beta entry page. Remove that separation once the beta becomes stable.

## Language and tone

Public documentation should be concise, technical, and consistent across plugins. Prefer direct instructions and concrete examples over marketing language.
