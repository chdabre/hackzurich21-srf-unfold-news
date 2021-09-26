<template>
  <div v-if="!complete" class="splash d-flex justify-center" :class="{ 'hide': hide }">
    <object :data="svg" />
    <v-progress-circular indeterminate :class="{ 'hide': !animationEnded }"></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    loading: Boolean,
  },
  data() {
    return {
      svg: require('@/assets/img/unfold_logo_anim1.svg'),
      animationEnded: false,
      hide: false,
      complete: false,
    };
  },
  watch: {
    loading(value) {
      if (!value) this.onFinishedLoading();
    }
  },
  mounted() {
    setTimeout(() => { this.animationEnded = true }, 2500);
    if (!this.loading) this.onFinishedLoading();
  },
  methods: {
    onFinishedLoading() {
      if (this.animationEnded) {
        this.hide = true;
        setTimeout(() => {
          this.complete = true;
        }, 500);
      } else {
        setTimeout(this.onFinishedLoading, 10);
      }
    }
  }
}
</script>

<style lang="scss">
.v-progress-circular {
  transition: all 0.5s;
}

.splash {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;

  object {
    width: 80%;
    transition: all .8s;
  }

  transition: all .5s;
}

.hide {
  opacity: 0;

  object, .v-progress-circular {
    transform: translateY(-90vh);
  }
}
</style>
