# Linting & formatting

- [Languages](#languages)
- [Scripts](#scripts)
  - [Terminal](#terminal)
  - [Pre-commit](#pre-commit)
  - [Editor](#editor)
- [Configuration](#configuration)

This project uses Biomejs to catch errors and avoid bike-shedding by enforcing a common code style.

## Languages

- **JavaScript** is linted and formatted by Biomejs
- **JSON** is formatted by Biome

## Scripts

There are a few different contexts in which the linters run.

### Terminal

```bash
# Lint all files without auto-fixing + safe fixing many violations automatically
pnpm run lint
```


### Pre-commit

Staged files are automatically linted and tested before each commit. See `package.json` to update.

### Editor

In supported editors, all files will be linted and show under the linter errors section.

## Configuration

This boilerplate ships with opinionated defaults, but you can edit each tools configuration in the following config files:

- [Biome](https://biomejs.dev/guides/getting-started/)
  - `biome.json`
