v-tab-bar
=========

> A Vue Tab Bar Navigator

Installation
------------

### Using yarn

`yarn add v-tab-bar`

### Using npm

`npm i --save v-tab-bar`

Usage
-----

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'

import VTabBar from 'v-tab-bar'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-tab-bar/dist/v-tab-bar.css'

Vue.use(VTabBar)
```

### Browser

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="v-tab-bar/dist/v-tab-bar.css"></link>
<script src="v-tab-bar/dist/v-tab-bar.js"></script>
```

### Usage example

```html
<v-tab-bar>
  <router-link class="v-tab-bar-item" to="/home">
    <i class="fa fa-home"></i>
    <span class="label">Home</span>
  </router-link>
  <router-link class="v-tab-bar-item" to="/list">
    <i class="fa fa-list"></i>
    <span class="label">List</span>
  </router-link>
  <router-link class="v-tab-bar-item" to="/account">
    <i class="fa fa-user"></i>
    <span class="label">Account</span>
  </router-link>
  <router-link class="v-tab-bar-item" to="/config">
    <i class="fa fa-bars"></i>
    <span class="label">Config</span>
  </router-link>
  <router-link class="v-tab-bar-item" to="/options">
    <i class="fa fa-cog"></i>
    <span class="label">Options</span>
  </router-link>
</v-tab-bar>
```

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
