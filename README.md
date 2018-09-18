# Cedar Proving Grounds

## Getting

```git clone https://github.com/rei/rei-cedar-proving-grounds.git```

## Building
### Client-Side Rendering:

1. in `nuxt.config.js`: change "mode" to `'spa'`
2. in command prompt: `npm i && npm run dev` for local rendering, `npm i && npm run build` for deployment to github pages.

### Server-Side Rendering
1. in `nuxt.config.js`: change "mode" to `'universal'`
2. in command prompt: `npm i && npm run dev` for local rendering, `npm i && npm run generate` for deployment to github pages.