# vue-spa

Single page application built with Vue.js.

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

// TODO: tests not working because sass files not preprocessed before Karma runs tests, and e2e because selenium not installed

Using ESLint
```
eslint --ext .js,.vue src test/unit test/e2e/specs "--fix"
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Resources:

General Vue.js intro: [this](https://frontstuff.io/build-your-first-vue-js-component)

[Add event listener to vue component](
https://forum.vuejs.org/t/attach-new-type-of-event-listeners-to-a-vue-component/5096/2)

Vue lifecycle: [this](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram),
[this](https://stackoverflow.com/questions/40884194/vuejs-cant-access-refs-from-component),
[this](https://forum.vuejs.org/t/solved-this-refs-key-returns-undefined-when-it-really-is/1226/7)

Using refs to access components: [this](https://codingexplained.com/coding/front-end/vue-js/accessing-dom-refs)
[this](https://laracasts.com/discuss/channels/vue/vue-component-selector-or-get-element)


### Other

Front page images from [Vue Master](https://www.vuemastery.com/) front page.

This is based on the Vue.js SPA tutorial in [net](https://www.creativebloq.com/net-magazine) 306. The [split-screen landing page](https://codepen.io/2975/pen/WdMMaR) from net 305 has been adapted to Vue.js.
