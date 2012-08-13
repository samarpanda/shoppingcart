(function(window, undefined){
	if(jQuery === undefined)
		return;
	var $ = jQuery,
		App = {
			Model: {},
			Collection: {},
			View: {}
		};
	
	App.Model.Item = Backbone.Model.extend({
		defaults:{
			photo: "images/temp.png",
			price: 20,
			quantity: 1
		}
	});

	App.Collection.Cart = Backbone.Collection.extend({
		model: App.Model.Item
	});

	App.View.ItemView = Backbone.View.extend({
		className: "item-wrap",
		template: $("#itemTemplate").html(),

		render:function(){
			//Render Item
			var templ = _.template(this.template);
			this.$el.html(templ(this.model.toJSON()));
			return this;
		}
	});

	App.View.CartCollectionView = Backbone.View.extend({
		el:"#mycart",
		initialize: function(){
			//Temp data
			var items = [
			  { title: "Macbook Air", price: 799 },
			  { title: "Macbook Pro", price: 999 },
			  { title: "The new iPad", price: 399 },
			  { title: "Apple Mouse", price: 50 },
			  { title: "Dell Monior", price: 799 }
			];
			this.collection = new App.Collection.Cart(items);
			this.render();
		},
		render: function(){
			this.collection.each(function(item){
				this.renderItem(item);
			}, this);
		},
		renderItem: function(item){
			var itemView = new App.View.ItemView({model: item});
			this.$el.append(itemView.render().el);
		}
	});
	
	var sBASE = function(){
		var UI      = {};
		var EXT     = {};
		var PROJECT = {
		};

		return {
			'UI' : UI,
			'EXT': EXT,
			'PROJECT': PROJECT
		};
	}();
	
	var cartObj = new App.View.CartCollectionView();

})(window);
