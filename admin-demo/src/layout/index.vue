<template>
  <!--  <div class="layout-container">-->
  <!--    <div>顶部导航栏</div>-->
  <!--    <router-view/>-->
  <!--    <div>侧边导航栏</div>-->

  <!--  </div>-->
  <el-container class="layout-container">
    <el-aside width="200px" class="aside">
      <AppAside></AppAside>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i class="el-icon-s-fold"></i>
        </div>

        <el-dropdown>
          <span class="el-dropdown-link">
            <img class="avatar" src="https://avatars.githubusercontent.com/u/43260088?s=60&v=4" alt="用户头像">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '@/layout/components/aside'

export default {
  name: "LayoutIndex",
  components: {
    AppAside
  },
}
</script>

<style scoped lang="sass">
.layout-container
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0

.aside
  background-color: #00C185

.header
  background-color: #f0f0f0
  height: 60px
  display: flex
  justify-content: space-between
  align-items: center

.main
  background-color: #FF00FF

.avatar
  height: 30px
  width: 30px
  border-radius: 50%
  display: inline-block
  line-height: 15px


</style>