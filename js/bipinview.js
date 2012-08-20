(function(window, undefined){
  var $ = jQuery,
      App = {
          Model: {},
          Collection: {},
          View: {}
      };
  App.Model.User = Backbone.Model.extend({});
  App.Collection.OnlineUsers = Backbone.Collection.extend({
      model: App.Model.User
  });
  App.View.CounterView = Backbone.View.extend({
      tagName: "span",
      initialize: function(){
        _.bindAll(this, 'render');
        this.collection.on('add', this.render);
      },
      render: function(){
        this.$el.text(this.collection.size());
        return this;
      }
  });
  App.View.ListView = Backbone.View.extend({
      initialize: function(){
        _.bindAll(this, 'render');
        this.collection.on('add', this.render);
      },
      render: function(){
        var html = this.collection.map(function(m){
            return '<p>'+m.get('name')+'</p>';
        });
        this.$el.html(html.join(''));
        return this;
      }
  });
    
  var online = new App.Collection.OnlineUsers();
  var counter = new App.View.CounterView({collection: online});
  var list = new App.View.ListView({collection: online});
  $('#counter').append(counter.render().el);
  $('#main').append(list.render().el);
    
  $('#add').click(function(){
      online.add({ name: 'User ' + (online.size() + 1)});
  });
})(window);