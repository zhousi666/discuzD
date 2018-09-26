<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container>
      <el-header>
        <TopBar/>
      </el-header>
        <router-view/>
    </el-container>
  </div>
</template>

<script>
import TopBar from './components/TopBar'

export default {
  name: 'App',
  components: {
    TopBar
  },
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-header{
  background-color: aliceblue;
  height:80px;
}
.global-title{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }
.global-login{

}
.menu-bar{
  flex: 6;
  width: auto;
  background-color:aquamarine
}
.el-menu-demo{
  background-color: aliceblue;
}
.el-menu--horizontal>.el-menu-item{
  background-color: aliceblue
}
.el-menu-item.is-active{
  background-color: aliceblue
}
.el-dropdown-menu__item--divided:before, .el-menu, .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  background-color: aliceblue;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
