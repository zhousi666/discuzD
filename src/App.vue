<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container>
      <el-header>
        <div class = 'global-title'>
          <div style="display: flex; flex-direction: row;">
          <img src="./assets/i-neurology.png" style="width: 60px; height: 60px">
          <div style = "height: 60px;line-height: 60px;">我的个人博客</div>
          </div>
          <div class="menu-bar">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            mode="horizontal">
              <el-menu-item index='1'>
                首页
              </el-menu-item>
              <el-menu-item index='2'>
                文章
              </el-menu-item>
            </el-menu>
          </div>
          <div class = 'global-login'>
            <el-button type="text">
              登录
            </el-button>
            <el-button type="text">
              退出
            </el-button>
          </div>
          </div>
      </el-header>
      <el-container>
        <el-aside>
          <PersonalInfo/>
        </el-aside>
        <el-main>
         <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PersonalInfo from './components/PersonalInfo'

export default {
  name: 'App',
  components: {
    PersonalInfo
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
