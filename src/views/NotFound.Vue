<template>
  <div class="error-page">
    <div class="error-code">4<span>0</span>4</div>
    <div class="error-desc">啊哦~ 你所访问的页面走丢了</div>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.error-code {
  line-height: 1.5;
  font-size: 250px;
  font-weight: bolder;
  color: #2d8cf0;
  animation: myfirst 1s infinite;
}
.error-code span {
  color: #00a854;
}
.error-desc {
  font-size: 30px;
  color: #777;
}
.error-btn {
  margin-left: 100px;
}
@keyframes myfirst {
  0% {
    letter-spacing: 8px;
    transform: translate(0px, 0px);
  }
  50% {
    letter-spacing: 10px;
    transform: translate(0px, -5px);
  }
  100% {
    letter-spacing: 8px;
    transform: translate(0px, 0px);
  }
}
</style>
