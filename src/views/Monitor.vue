<template>
  <el-container class="monitor-container">
    <el-row :gutter="20" justify="space-around">
      <el-col :span="12">
        <panel />
      </el-col>
      <el-col :span="12">
        <panel />
      </el-col>
    </el-row>
    <el-row :gutter="20" justify="space-around" class="monitor-row">
      <el-col :span="12">
        <panel />
      </el-col>
      <el-col :span="12">
        <panel />
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
  justify-content: center;
  flex-wrap: wrap;
}
.monitor-row {
  margin-top: 20px;
}
</style>
