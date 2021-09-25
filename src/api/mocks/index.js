import {
  createServer, Serializer,
} from 'miragejs';

import routes from './routes';
import seeds from './seeds';

const ApplicationSerializer = Serializer.extend({
  root: false,
  embed: true,
});

export default () => createServer({
  models: {
  },
  serializers: {
    application: ApplicationSerializer,
  },
  factories: {
  },
  routes,
  seeds,
});
