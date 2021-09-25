<template>
  <div>
    <div class="story-container" style="--bg-color: #F8E2DC">
      <span class="text-overline">CORONA + FREIHEIT</span>
      <v-row>
        <v-col>
          <div class="media media--video">

          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="action" v-ripple @click="console.log('c')">
            Action
          </div>
        </v-col>
        <v-col>
          <div class="action" v-ripple @click="console.log('c')">
            Action
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="story-container" style="--bg-color: #B2BCD0">
      Story
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
.media {
  padding: 12px;
  border-radius: 18px;
  min-height: 180px;
  border: 1px solid rgba(0,0,0,0.2);

  &--video {

  }
}


.action {
  padding: 12px;
  border-radius: 18px;
  min-height: 72px;
  border: 1px solid rgba(0,0,0,0.2);

  transition: all 0.25s;
}
</style>
