<template>
  <el-menu
      default-active="/article"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
    <el-menu-item index="/">
      <i class="iconfont icon-shouye"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-menu-item index="/article">
      <i class="iconfont icon-file"></i>
      <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="/image">
      <i class="iconfont icon-atm-fill"></i>
      <span slot="title">素材管理</span>
    </el-menu-item>
    <el-menu-item index="/publish">
      <i class="iconfont icon-tradingdata"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="/comment">
      <i class="iconfont icon-file"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="/fans">
      <i class="iconfont icon-atm-fill"></i>
      <span slot="title">粉丝管理</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <i class="iconfont icon-atm-fill"></i>
      <span slot="title">个人设置</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "AppAside",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="sass">
.el-menu-vertical-demo
  height: 100%

i
  margin-right: 10px
  padding-left: 20px
</style>