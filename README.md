# iQinban-ssr

iQinban-ssr clone built with Vue 2.0 + vue-router + vuex, with server-side rendering.<br>
Based on vue-hackernews-2.0<br>

If you have any questions or suggestions, please submit a issue.<br>
And if this project was worked fine for you, please starred it.<br>

**A detailed Vue SSR guide can be found [here](https://ssr.vuejs.org).**

## ChangeLog
- v1.2.0-20171011
  - Updated a lot of things
- v1.1.0-20171003
  - Emergency fixes two bugs that can cause the server to fall into an unrecoverable state
- v1.0.2-20171003
  - Update animation system
- v1.0.1-20171002
  - Add animation system
- v1.0.0-20171001
  - Create

## Features
- Multi-device support
- Most of browsers support
- Vw Layout
- Server side render
- Animation system
- Service workers support

## How to deploy?
1. Remove code comments (file: src/entry-client.js, line 56-58)
2. Run "build" script (package.json)
3. Copy files to the server.<br>
4. Run "cd" to the server's root directory
5. Run "pm2 start process.json --env production" for production<br>
   Or run "pm2 start process.json" for development

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
