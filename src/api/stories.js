import HTTP from '@/plugins/http';
import StoryModel from '@/models/story';

export default {
  async loadStories() {
    const response = await HTTP.get('/api/stories/');
    return response.data.map((r) => new StoryModel(r));
  },
};
