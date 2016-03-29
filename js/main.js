'use strict';
// menu
var DocModel = Backbone.Model.extend({
  // attributes
  initialize: function() {
    this.set('properties', []);
  }
});

var DocCollection = Backbone.Collection.extend({
  initialize: function() {
    this.categories = [];

    this.on('add', function(model) {
      this.categories.push(model.get('category'));
      this.categories = _.uniq(this.categories);
    }, this);
  }
});

var DocView = Backbone.View.extend({
  initialize: function() {
    this.model = new DocModel();

    this.parseHtml();
  },

  parseHtml: function() {
    // get category
    this.model.set('category', this.$el.attr('data-category'));
    // prefix all title ids - and build model
    var selector = ['h1', 'h2', 'h3'];
    var type, inherited, namespace;

    this.$(selector.join(', ')).each(_.bind(function(index, el) {
      var text = el.innerHTML.replace(/\<code(.*)$/, '');
      text = text.replace('.', '');
      text = _.string.trim(text);
      var slugyfied = _.string.slugify(text);
      var id = namespace ?
        [namespace, slugyfied].join('-') :
        [this.model.get('category'), slugyfied].join('-');

      // get names
      if (el.tagName === 'H1') {
        namespace = id;
        this.model.set('name', text);
        this.model.set('hash', id);
      }

      // get property meta-data
      if (el.tagName === 'H2') {
        // update properties metadata
        inherited = /inherited/.test(slugyfied);
        type = /methods/.test(slugyfied) ? 'method' :
          /attributes/.test(slugyfied) ? 'attribute' : null;
      }

      // create property object
      if (el.tagName === 'H3') {
        var prop = { inherited: inherited, type: type, name: text, hash: id };
        this.model.get('properties').push(prop);
      }

      // replce id for link
      el.setAttribute('id', id);
    }, this));

  },

  render: function() {

  }
});

var DocMenu = Backbone.View.extend({
  tagName: 'div',

  docTemplate:
    ['<ul><li>',
      '<a class="lk" href="#<%= hash %>"><%= name %></a>',
      '<ul>',
      '<% for (index in properties) { %>',
        '<% var property = properties[index]; %>',
        '<li><a href="#<%= property.hash %>"><%= property.name %></a></li>',
      '<% } %>',
      '</ul>',
    '</li></ul>'].join(''),

  initialize: function() {
    // console.log(this.collection.categories);

  },

  render: function() {
    _.each(this.collection.categories, function(category) {
      var h2 = $('<h2>').text(category);
      var relatedDocs = this.collection.where({ category: category });

      this.$el.append(h2);

      _.each(relatedDocs, function(doc) {
        var ul = _.template(this.docTemplate)(doc.toJSON());
        this.$el.append(ul);
      }, this);
    }, this)

    return this;
  }
});

$(document).ready(function() {
  var collection = new DocCollection();
  var views = [];
  // parse class-definition sections to return
  $('.class-definition').each(function(index, el) {
    var view = new DocView({ el: el });
    collection.add(view.model);
    views.push(view);
  });

  var menu = new DocMenu({ collection: collection });
  $('#secondary-nav').append(menu.render().el);

  // // init menu
  $('#secondary-nav > div > ul').accordion();
  // // create anchors
  var selectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  $(selectors.join(', ')).createAnchor();
});
