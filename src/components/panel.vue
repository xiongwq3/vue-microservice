<template>
  <el-card>
    <iframe :src="src" :width="width" :height="height" frameborder="0" />
  </el-card>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {}
  },
}
</script>
