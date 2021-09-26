<template>
  <div class="story" ref="story" :style="{ '--bg-color': color }">
    <!-- Story Overline -->
    <span class="text-overline" v-if="story.overline" v-text="story.overline"></span>

    <!-- Story Headline -->
    <v-row v-if="story.headline" ><v-col>
      <h5 class="text-h5" v-text="story.headline"></h5>
    </v-col></v-row>

    <!-- Story Subheading -->
    <v-row v-if="story.subtitle" ><v-col>
      <h5 class="text-caption" v-text="story.subtitle"></h5>
    </v-col></v-row>

    <v-scale-transition group tag="div" class="row">
      <story-widget
          v-for="(widget, i) in widgets"
          :class="{'last-story': i === widgets.length - 1}"
          :key="widget.id"
          :widget="widget"
          expanded
          span="12"
      ></story-widget>

      <story-widget
          v-for="widget in actions"
          :key="widget.id"
          :widget="widget"
          @select="actionClicked(widget.id)"
          :span="widget.span"
      ></story-widget>
    </v-scale-transition>
  </div>
</template>

<script>
import widgetApi from '@/api/widgets';
import StoryWidget from './StoryWidget';

export default {
  name: "Story",
  components: { StoryWidget, },
  props: {
    story: Object,
    color: String,
  },
  data() {
    return {
      nextWidget: null,
      actions: [],
      widgets: [],
    };
  },
  async created() {
    this.actions = this.story.actions || [];
  },
  methods: {
    async actionClicked(id) {
      const action = this.actions.find(a => a.id === id)
      const widget = await widgetApi.loadWidget(action.id);

      this.widgets.push(action);
      this.actions = widget.actions ? widget.actions.filter(a => a.id < widget.id) : [];

      this.$nextTick(() => {
        const lastWidget = this.$refs.story.querySelector('.last-story');
        if (lastWidget) this.$vuetify.goTo(lastWidget);
      })
    }
  }
}
</script>
