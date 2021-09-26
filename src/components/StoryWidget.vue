<template>
  <v-col :cols="colSpan" class="story-widget-container">
    <div class="story-widget"
         v-ripple="!expanded"
         @click="actionClicked"
    >
      <v-scroll-y-transition group>
        <div v-if="widget.type === 'article'" class="media-article" key="media-article">
          <template v-if="expanded">
            <img v-if="widget.data.imageUrl" :src="widget.data.imageUrl" alt="image">
            <div class="body" v-if="widget.data.text">
              <p class="text-body-1" v-text="widget.data.text"></p>
            </div>
          </template>
          <template v-else>
            <div class="fill-image" :style="{ 'background-image': `url(${widget.data.imageUrl})` }" key="fill-image"></div>
            <div class="body collapsed" key="body-collapsed">
                <h5 class="text-h6" v-if="widget.title" v-text="widget.title"></h5>
                <div class="text-caption" v-if="widget.subtitle" v-text="widget.subtitle"></div>
            </div>
          </template>
        </div>
        <div v-if="widget.type === 'video'" class="media-video" key="media-video">
          <template v-if="expanded">
            <video class="video-inline" ref="video" autoplay playsinline :src="widget.data.videoUrl" key="video-inline"></video>
            <div class="body" v-if="widget.data.text">
              <p class="text-body-1" v-text="widget.data.text"></p>
            </div>
          </template>
          <template v-else>
            <video class="video-background" :src="widget.data.videoUrl + '#t=0.001'" key="video-background"></video>
            <div class="body collapsed" key="body-collapsed">
              <h5 class="text-title" v-if="widget.title" v-text="widget.title"></h5>
              <div class="text-caption" v-if="widget.subtitle" v-text="widget.subtitle"></div>
            </div>
          </template>
        </div>
        <div v-if="widget.type === 'audio'" class="media-audio" key="media-audio" :class="{ expanded }">
          <template v-if="expanded">
            <div class="body" v-if="widget.data">
              <audio controls ref="audio">
                <source :src="widget.data.audioUrl" type="audio/wav">
              </audio>
              <p class="text-body-1" v-text="widget.data.text"></p>
            </div>
          </template>
          <template v-else>
            <div class="fill-image" :style="{ 'background-image': `url(${widget.data.imageUrl})` }" key="fill-image"></div>
            <div class="body collapsed" key="body-collapsed">
              <h5 class="text-title" v-if="widget.title" v-text="widget.title"></h5>
              <div class="text-caption" v-if="widget.subtitle" v-text="widget.subtitle"></div>
            </div>
          </template>
        </div>
      </v-scroll-y-transition>
    </div>
  </v-col>
</template>

<script>

export default {
  name: "StoryWidget",
  props: {
    span: String,
    widget: Object,
    expanded: Boolean,
  },
  computed: {
    colSpan() {
      return this.span;
    },
  },
  watch: {
    expanded(value) {
      if (value) {
        if (this.$refs.video) this.$refs.video.play();
        if (this.$refs.audio) this.$refs.audio.play();
      }
    }
  },
  methods: {
    actionClicked() {
      if (!this.expanded) {
        let media = document.querySelectorAll('video, audio');
        media.forEach(el => el.pause());
      }

      this.$emit('select');
    },
  }
}
</script>

<style lang="scss" scoped>
.fill-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 16px;
  z-index: -1;

  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
}

.media-article, .media-video , .media-audio{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 92px;

  z-index: 1;

  img , .video-inline, audio {
    width: 100%;
    border-radius: 16px 16px 0 0;
  }

  .body {
    padding: 16px;
    z-index: 1;
  }

  .collapsed {
    color: white;
  }

  .video-background {
    position: absolute;
    width: 100%;
    border-radius: 16px;
    z-index: -1;
  }

  p {
    margin: 0;
  }
}

.media-audio {
  &.expanded {
    justify-content: center;
  }
}

</style>
