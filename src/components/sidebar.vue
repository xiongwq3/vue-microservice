<template>
  <el-menu
    class="menu-nav"
    router
    :default-active="currentPath"
    background-color="#20222A"
    text-color="rgba(255,255,255,.5)"
    active-text-color="rgba(255,255,255,1)"
    :collapse="isCollapse">
    <el-menu-item index="/unimplemented1">
      <i class="el-icon-upload2"></i>
      <span slot="title">流量管理</span>
    </el-menu-item>
    <el-menu-item index="/unimplemented2">
      <i class="el-icon-data-line"></i>
      <span slot="title">实时监控</span>
    </el-menu-item>
    <el-menu-item index="/unimplemented3">
      <i class="el-icon-folder"></i>
      <span slot="title">数据分类</span>
    </el-menu-item>
    <el-menu-item index="/unimplemented4">
      <i class="el-icon-pie-chart"></i>
      <span slot="title">优化分析</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: ['isCollapse'],
  data () {
    return {
      currentPath: location.pathname
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu {
    border: none;
  }
  .menu-nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-item:hover {
    background-color: rgb(75, 76, 77) !important;
  }
</style>
