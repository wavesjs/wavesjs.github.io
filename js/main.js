// menu
(function() {
  var pluginName = 'accordion';

  var Plugin = function($el) {
    this.$el = $el;
    this.$subNav = this.$el.find('ul');
    this.$links = this.$el.find('.lk');
    this.delegateEvents();
  };

  Plugin.prototype.delegateEvents = function() {
    this.$links.on('click', $.proxy(this.onClick, this));
  };

  Plugin.prototype.onClick = function(e) {
    this.toggle(this.$links.filter(e.target));
  };

  Plugin.prototype.toggle = function($el) {
    if ($el.hasClass('active')) {
      return this.closeAll();
    }

    this.closeAll();
    $el.addClass('active')
       .next('ul').slideDown(100);
  };

  Plugin.prototype.closeAll = function() {
    this.$subNav.slideUp(100);
    this.$links.removeClass('active');
  };

  $.fn[pluginName] = function() {
    return this.each(function(index, el) {
      var $el = $(this);

      if (!$el.data(pluginName + '-plugin')) {
        $el.data(pluginName + '-plugin', new Plugin($el));
      }
    });
  }
}());

// anchors
(function() {
  var pluginName = 'createAnchor';

  var Plugin = function($el) {
    this.$el = $el;
    this.$anchor = null;

    this.createAnchor();
    this.delegateEvents();
  };

  Plugin.prototype.createAnchor = function() {
    var hash = '#' + this.$el.attr('id');
    this.$anchor = $('<a>', { 'href': hash, 'class': 'anchor' });
  };

  Plugin.prototype.delegateEvents = function() {
    this.$el.on('mouseenter', $.proxy(this.onMouseEnter, this));
    this.$el.on('mouseleave', $.proxy(this.onMouseLeave, this));
  };

  Plugin.prototype.onMouseEnter = function() {
    this.$el.prepend(this.$anchor);
  };

  Plugin.prototype.onMouseLeave = function() {
    this.$anchor.remove();
  };

  $.fn[pluginName] = function() {
    return this.each(function(index, el) {
      var $el = $(this);

      if (!$el.data(pluginName + '-plugin') && $el.attr('id')) {
        $el.data(pluginName + '-plugin', new Plugin($el));
      }
    });
  }
}());


$(document).ready(function() {
  // init menu
  $('#secondary-nav > ul').accordion();
  // create anchors
  var selectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  $(selectors.join(', ')).createAnchor();
});
