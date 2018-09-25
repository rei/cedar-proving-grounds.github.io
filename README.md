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
