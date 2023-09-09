# A Fullstack Rendering (SSR, CSR and Hydration) Example Based-on Bun

This is a [Bun 1.0](https://bun.sh/blog/bun-v1.0)-based variation of the fullstack rendering exampled illustrated in https://vanjs.org/ssr. Compared to the Node.js based implementation illustrated there, here are notable differences:

* 🚀🚀🚀 Everything becomes extremely fast!
* Much cleaner `package.json`, as the Bun runtime can do most of the work. Here are all the dependencies (the `devDependencies` of `bun` is not necessary if `bun` is installed globally. We include it so that the code can be previewed in CodeSandbox):

```json
  "dependencies": {
    "mini-van-plate": "^0.4.0",
    "vanjs-core": "^1.2.0"
  },
  "devDependencies": {
    "bun": "^1.0.0",
    "bun-types": "^1.0.1"
  }
```

* No script files (`.sh` files) needed.
* The `src/server.ts` file is a few lines shorter, primarily thanks to the elimination of the need of importing external dependencies.
* The minified bundle of client `.js` file is slightly larger (`2.6kB` vs. `3.0kB`). This is because as a new bundler and minifier, Bun has less optimization options compared to [terser](https://terser.org/).

You can preview the app view [CodeSandbox](TODO).