<template>
  <div class="card">
    <div class="card__info">
      <h2 class="card__name">{{ title }}</h2>
      <p class="card__mail">{{ body }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  overflow: hidden;
  cursor: pointer;
  padding: 15px;
  margin: 0 auto;
  border-radius: 40px;
  border: 3px inset rgb(154 106 2 / 81%);
  font-family: sans-serif;
  font-weight: 600;
  transition: 0.3s;
  &__name {
    color: rgba(238, 149, 53, 0.813);
    font-size: 25px;
    margin: 0;
  }
  h2 {
    margin-top: 10px;
  }
  p {
    color: rgba(245, 222, 179, 0.911);
  }
  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 9px rgb(0, 0, 0);
  }

  &__info {
    animation-duration: 1s;
    animation-name: slidein;
    animation-iteration-count: 1;
    animation-direction: alternate;
    line-height: 25px;
    overflow: hidden;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
}
</style>
