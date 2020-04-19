# apitree-cli-example

> Example project CLI application

## Requirements

-   Node.js >= 13.x
-   Yarn >= 1.22.x

## Installation
```bash
npm i
```

## Development

Run in development mode (help)
```bash
yarn run dev --help
```

Run create command
```bash
yarn run dev create --name awesome-application
```

Run update command
```bash
yarn run dev update
```

## Build application

Build application
```bash
npm run build
```

## Publish in localhost (after build)
```bash
npm pack
```

```bash
npm i -g apitree-apitree-cli-example-0.1.0-alpha.1.tgz
```

## Publish to remote repository
> You must own NPM repository (logged in NPM or with .npmrc file)
```bash
npm publish
```

## Run application
> After publish (localhost or remote)

```bash
at-example create --name awesome-app
```

or with aliasses
```bash
at-example c -n awesome-app
```
