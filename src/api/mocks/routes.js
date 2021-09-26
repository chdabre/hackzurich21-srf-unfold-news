/* eslint-disable func-names */

export default function () {
  this.namespace = '/api';

  this.get('/stories/', function (schema) {
    const stories = schema.stories.all();
    return this.serialize(stories, 'storyList');
  });

  this.get("/widgets/:id", function (schema, request) {
    let id = request.params.id
    return this.serialize(schema.widgets.find(id), 'widgetWithActions');
  })
}
