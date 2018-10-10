# Cedar Proving Grounds

## Getting

```git clone https://github.com/rei/rei-cedar-proving-grounds.git```

## Building
### Client-Side Rendering:

1. in command prompt: `npm i && npm run dev -s` for local rendering, `npm i && npm run build -s` for deployment to github pages.

### Server-Side Rendering
Two options exist for SSR:
1. `npm i && npm run dev -u` for local rendering.
2. `npm i && npm run dev-ssr` for local rendering.  This explicitly runs `npm run genarate` and `npm run start` to start the nuxt server.

## Contributing
1. Execute a `git pull` to sync your local repo.
2. Run `npm i && npm run generate` locally, commit the changes to the master branch, and push to remote.  Site will build automatically.

## Multi version testing
1. Add component/versions to `cedar-packages.json`
    1. `"@rei/cdr-button": ["0.1.0", "1.0.0"]`
2. Run `npm run multi-version`
    1. This downloads the package at the specified versions to `cedar-packages/`
    2. It also creates js and scss indexes to easily import from
3. Import the versioned component for use
    1. Component names follow this pattern: <ComponentName><verion number without periods>
    2. I.e. CdrButton010, CdrButton100
    3. `import { CdrButton010, CdrButton100 } from '~/cedar-packages/cdr-button/';
4. Import versioned scss index
    1. This will import css for all versions in one line
    2. In a vue file: 
```
<style lang="scss">
  @import "~/cedar-packages/cdr-button/index.scss";
</style>
```

