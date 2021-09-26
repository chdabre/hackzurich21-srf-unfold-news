import HTTP from '@/plugins/http';
import WidgetModel from '@/models/widget';

export default {
  async loadWidget(id) {
    const response = await HTTP.get(`/api/widgets/${id}/`);
    return new WidgetModel(response.data);
  },
};
