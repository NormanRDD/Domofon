<template>
  <div>
    <body>
      <div class="icon">
        <div
          class="bar"
          style="background-color: #3498db; margin-left: -60px"
        ></div>
        <div
          class="bar"
          style="background-color: #e74c3c; margin-left: -20px"
        ></div>
        <div
          class="bar"
          style="background-color: #f1c40f; margin-left: 20px"
        ></div>
        <div
          class="bar"
          style="background-color: #2eb869; margin-left: 60px"
        ></div>
      </div>
    </body>
  </div>
</template>
<style lang="scss" scoped>
body {
  background: linear-gradient(
    222deg,
    rgba(18, 18, 18, 1) 0%,
    rgba(93, 50, 43, 1) 50%,
    rgba(44, 47, 66, 1) 100%
  );
  font-family: "Arial";
  text-align: center;
}

.icon {
  position: relative;
  left: 50vw;
  width: 0;
  top: 50vh;
  text-align: center;
  cursor: pointer;
}

.bar {
  position: absolute;
  transform: translate(-50%, -50%);
  align-items: center;
  top: -10px;
  background-color: #f98866;
  width: 20px;
  height: 20px;
  margin: 5px 0;
  border-radius: 10px;
  transition: 0.3s;
  animation: loading 1.5s ease-in-out 0s infinite;
}

.bar:nth-child(1) {
  animation-delay: 0s;
}

.bar:nth-child(2) {
  animation-delay: 0.15s;
}

.bar:nth-child(3) {
  animation-delay: 0.3s;
}

.bar:nth-child(4) {
  animation-delay: 0.45s;
}

@keyframes loading {
  0% {
    height: 20px;
  }
  50% {
    height: 60px;
  }
  100% {
    height: 20px;
  }
}
</style>
