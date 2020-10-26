<template>
  <el-container class="monitor-container">
    <el-row class="monitor-row" :gutter="20">
      <!-- CPU -->
      <el-col :span="12">
        <panel
          src="http://139.9.57.167:3000/d-solo/TSEY6jLmk/istio-galley-dashboard?orgId=1&panelId=38"
        />
      </el-col>
      <!-- Memory -->
      <el-col :span="12">
        <panel
          src="http://139.9.57.167:3000/d-solo/TSEY6jLmk/istio-galley-dashboard?orgId=1&panelId=36"
        />
      </el-col>
    </el-row>
    <el-row class="monitor-row" :gutter="20">
      <!-- Disk -->
      <el-col :span="12">
        <panel
          src="http://139.9.57.167:3000/d-solo/TSEY6jLmk/istio-galley-dashboard?orgId=1&panelId=42"
        />
      </el-col>
      <!-- Goroutines -->
      <el-col :span="12">
        <panel
          src="http://139.9.57.167:3000/d-solo/TSEY6jLmk/istio-galley-dashboard?orgId=1&panelId=44"
        />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Panel from '@/components/panel'

export default {
  components: { Panel },
}
</script>

<style lang="scss">
.monitor-container {
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.monitor-row {
  margin-top: 20px;
}
.monitor-row:nth-child(1) {
  margin-top: 0px;
}
.monitor-row:nth-last-child(1) {
  margin-bottom: 20px;
}
</style>
