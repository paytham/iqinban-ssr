# iQinban-ssr

iQinban-ssr clone built with Vue 2.0 + vue-router + vuex, with server-side rendering.<br>
Based on vue-hackernews-2.0<br>

If you have any questions or suggestions, please submit a issue, thanks for all of yours.<br>

**A detailed Vue SSR guide can be found [here](https://ssr.vuejs.org).**

## ChangeLog
- v1.1.0-20171003
  - Emergency fixes two bugs that can cause the server to fall into an unrecoverable state
- v1.0.2-10171003
  - Update animation system
- v1.0.1-20171002
  - Add animation system
- v1.0.0-20171001
  - Create

## Features
- Multi-device support
- Most of browser support
- Vm Layout
- Server side render
- Animation system

## How to deploy?
1. You should remove code comments (file: src/entry-client.js, line 56-58)
1. You should to copy dist/,public/,node_modules/,manifest.json,package.json,server.js to the server.<br>
2. Run "cd" to the server's root directory
3. Run "pm2 start server.js --name 'your project name'"

**A detail pm2 guide can be found [here](http://pm2.keymetrics.io/docs/usage/quick-start/).**

## Build Setup

**Requires Node.js 7+**

``` bash
# install dependencies
npm install # or cnpm

# serve in dev mode, with hot reload at localhost:3000
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## License

MIT
