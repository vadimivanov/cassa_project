RAD.model('Item', Backbone.Model.extend(), false);

RAD.model('MenuList', Backbone.Collection.extend({
    model: RAD.models.Item

}), true);

