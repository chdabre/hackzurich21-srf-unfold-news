<template>
  <div class="stories">
    <story
        v-for="(story, i) in stories" :key="story.id"
        :story="story"
        :color="getColor(i)"
    ></story>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import Story from '@/components/Story';
import storiesApi from '@/api/stories';

const storyColors = shuffle(['#DFEDED', '#FFF0D6', '#B2BCD0']);

export default {
  name: 'Home',
  components: { Story },
  data() {
    return {
      clicked: false,
      stories: [],
    };
  },
  async created() {
    this.stories = await storiesApi.loadStories();
    this.SET_LOADED(true);
  },
  methods: {
    ...mapMutations(['SET_LOADED']),
    getColor(i) {
      return storyColors[i % storyColors.length];
    }
  }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
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
