<template>
  <el-container class="monitor-container">
    <el-row :gutter="20" justify="space-around">
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
    <el-row :gutter="20" justify="space-around">
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
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  flex-flow: row wrap;
}
</style>
