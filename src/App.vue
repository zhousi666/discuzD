<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <canvas class="background"/>
    <router-view/>
  </div>
</template>
<script>
import Particles from '../node_modules/particlesjs/dist/particles.min.js'

export default {
  name: 'App',
  components: {},
  data () {
    return {
    }
  },
  mounted () {
    window.onload = function () {
      Particles.init({
        selector: '.background',
        color: 'white',
        maxParticles: 450,
        sizeVariations: 4,
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 200,
              color: '#48F2E3',
              connectParticles: false
            }
          }, {
            breakpoint: 425,
            options: {
              maxParticles: 100,
              connectParticles: true
            }
          }, {
            breakpoint: 320,
            options: {
              maxParticles: 0

              // disables particles.js
            }
          }
        ]
      })
    }
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.background {
  position: absolute;
  display: inline-table;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: black;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
}
.el-header {
  background-color: aliceblue;
  height: 80px;
}
.global-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.global-login {
}
.menu-bar {
  flex: 6;
  width: auto;
  background-color: aquamarine;
}
.el-menu-demo {
  background-color: aliceblue;
}
.el-menu--horizontal > .el-menu-item {
  background-color: aliceblue;
}
.el-menu-item.is-active {
  background-color: aliceblue;
}
.el-dropdown-menu__item--divided:before,
.el-menu,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: aliceblue;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
