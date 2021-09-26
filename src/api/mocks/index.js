import {
  createServer, hasMany, Model, Serializer,
} from 'miragejs';

import routes from './routes';
import seeds from './seeds';

const ApplicationSerializer = Serializer.extend({
  root: false,
  embed: true,
});

export default () => createServer({
  models: {
    story: Model.extend({
      actions: hasMany('widget'),
    }),
    widget: Model.extend({
      actions: hasMany('widget'),
    }),
  },
  serializers: {
    application: ApplicationSerializer,
    storyList: ApplicationSerializer.extend({
      include: ['actions'],
    }),
    widgetWithActions: ApplicationSerializer.extend({
      include: ['actions'],
    }),
  },
  factories: {
  },
  routes,
  seeds,
});
