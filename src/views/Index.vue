<template>
  <el-container class="index-box">
    <el-aside width="asideWidth">
      <div class="logo">
        <div v-show="!isCollapse">
          <img
            src="../assets/logo.svg"
            alt="ELementUI"
            width="60"
            height="60"
          />
          <p>Prometheus</p>
        </div>
      </div>
      <sidebar :isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <headers />
      </el-header>
      <el-main>
        <router-view v-if="isRouterAlive" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from '@/components/sidebar'
import Headers from '@/components/header'
export default {
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  components: {
    Sidebar,
    Headers,
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse
    },
    asideWidth() {
      return this.$store.state.isCollapse ? 'auto' : '200px'
    },
  },
}
</script>

<style lang="scss">
.index-box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .el-container {
    height: 100vh;
    .el-main {
      height: 100vh;
    }
  }
  .el-aside {
    background-color: #20222a;
    height: 100vh;
    min-height: 100%;
    .logo {
      background-color: #20222a;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      height: 130px;
      padding-top: 16px;
      font-size: 16px;
      box-sizing: border-box;
      border-bottom: 1px solid gray;
      p {
        margin-top: 0;
        font-family: Lato, sans-serif;
        font-size: 26px;
        font-weight: 300;
      }
    }
  }
  .el-header {
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    background-color: #fff;
    line-height: 60px;
  }
}
</style>
