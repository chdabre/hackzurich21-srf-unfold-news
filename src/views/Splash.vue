<template>
  <div v-if="!complete" class="splash d-flex justify-center" :class="{ 'hide': hide }">
    <object :data="svg" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      svg: require('@/assets/img/unfold_logo_anim1.svg'),
      hide: false,
      complete: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.hide = true;

      setTimeout(() => {
        this.complete = true;
      }, 500);
    }, 2500);
  }
}
</script>

<style lang="scss">
.splash {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  z-index: 100;

  object {
    width: 80%;
    transition: all .8s;
  }

  &.hide {
    opacity: 0;

    object {
      opacity: 0;
      transform: translateY(-90vh);
    }
  }

  transition: all 0.5s;
}
</style>
