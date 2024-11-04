# Biome Quickstart

Introducción a biome para una aplicación vite, trabajando junto a husky

## Step by Step

1. Creamos nuestro proyecto: `npm create vite@latest`
2. Instalamos vite: `npm install --save-dev --save-exact @biomejs/biome`
3. Creamos el fichero de configuración de biome: `npx @biomejs/biome init`
4. Modificamos biome.json a nuestro gusto
5. Añadimos ficheros de settings y extensiones recomendadas para VS Code
6. Añadimos más scripts en el package.json para facilitar las llamadas a biome:
    - lint: `biome lint --write --changed --no-errors-on-unmatched`
    - format: `biome format --write --changed --no-errors-on-unmatched`
    - check: `biome check --write --changed --no-errors-on-unmatched`
    - check:hook: `biome check --write --changed --reporter=summary --error-on-warnings --error-on-warnings --no-errors-on-unmatched`,
    - check:ci: `biome check --diagnostic-level=error --reporter=summary --error-on-warnings --no-errors-on-unmatched`
    - check:unsafe: `biome check --write --unsafe --changed --no-errors-on-unmatched`
    - check:unsafe:all: `biome check --write --unsafe --no-errors-on-unmatched`
    - check:errors:all: `biome check --diagnostic-level=error --no-errors-on-unmatched`
    - check:errors:all:show-all: `biome check --diagnostic-level=error --max-diagnostics=none --no-errors-on-unmatched`

## Enlaces
- https://es.vitejs.dev/guide/
- https://biomejs.dev/guides/getting-started/
