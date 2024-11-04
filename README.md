# Biome Quickstart

Introducción a biome para una aplicación vite, trabajando junto a husky

## Step by Step

1. Creamos nuestro proyecto: `npm create vite@latest`
2. Instalamos _vite_: `npm install --save-dev --save-exact @biomejs/biome`
3. Iniciamos _biome_ (creamos el fichero de configuración): `npx @biomejs/biome init`
4. Modificamos _biome.json_ a nuestro gusto
5. Añadimos ficheros de _settings_ y _extensiones_ recomendadas para _VS Code_
6. Añadimos más _scripts_ en el _package.json_ para facilitar las llamadas a _biome_:
    - lint: `biome lint --write --changed --no-errors-on-unmatched`
    - format: `biome format --write --changed --no-errors-on-unmatched`
    - check: `biome check --write --changed --no-errors-on-unmatched`
    - check:hook: `biome check --write --changed --reporter=summary --error-on-warnings --no-errors-on-unmatched`,
    - check:ci: `biome check --diagnostic-level=error --reporter=summary --error-on-warnings --no-errors-on-unmatched`
    - check:unsafe: `biome check --write --unsafe --changed --no-errors-on-unmatched`
    - check:unsafe:all: `biome check --write --unsafe --no-errors-on-unmatched`
    - check:errors:all: `biome check --diagnostic-level=error --no-errors-on-unmatched`
    - check:errors:all:show-all: `biome check --diagnostic-level=error --max-diagnostics=none --no-errors-on-unmatched`
7. Instalamos _husky_: `npm install --save-dev husky`
8. Iniciamos _husky_ (creamos scripts de los hooks de git): `npx husky init`
9. Instalamos el _plugin_ de _biome_ para _vite_: `npm install -D @pbr1111/vite-plugin-biome`
10. Añadimos el _plugin_ en el _vite.config.ts_

## Enlaces
- https://es.vitejs.dev/guide/
- https://biomejs.dev/guides/getting-started/
- https://typicode.github.io/husky/get-started.html