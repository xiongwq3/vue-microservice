<template>
  <div class="header-box">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <button class="btn-tool" title="折叠" @click="collapse" >
            <i class="el-icon-d-arrow-left"></i>
        </button>
        <button class="btn-tool" title="刷新" @click="refresh">
            <i class="el-icon-refresh"></i>
        </button>
        <button class="btn-tool" title="全屏" @click="$Utils.fullScreen">
            <i class="el-icon-rank"></i>
        </button>
      </el-col>
      <el-col :span="6" align="right">
        <span>{{ date }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  inject: ['reload'],
  data () {
    return {
      isCollapse: false,
      date: this.$Utils.todayDate(),
      timer: null
    }
  },
  methods: {
    collapse () {
      this.$store.commit('switchCollapse')
    },
    refresh () {
      this.reload()
    },
    initTimer () {
      var _this = this
      this.timer = setInterval(function () { _this.date = _this.$Utils.todayDate() }, 1 * 1000)
    },
    destroyTimer () {
      if (this.timer) { clearInterval(this.timer) }
      this.timer = null
    }
  },
  mounted () {
    this.initTimer()
  },
  beforeDestroy () {
    this.destroyTimer()
  }
}
</script>

<style lang="scss" scoped>
  .btn-tool {
    border: none;
    background: transparent;
    font-size: 18px;
    padding: 5px 10px;
    cursor: pointer;
    outline: none;
    text-align: left;
  }
  .header-box {
    border-bottom: 1px solid #949292f1;
  }
</style>
