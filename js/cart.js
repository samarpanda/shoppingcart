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
			//return this.el.innerHTML;
			return this;
		}
	});

	App.View.ItemCollectionView = Backbone.View.extend({
		el:"#mycart",
		initialize: function(){
			//Temp data
			this.$formValues = $("#add").children("input[type='text']");
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
			//var temp = "";
			this.collection.each(function(item){
				//temp += this.renderItem(item);
				this.renderItem(item);
			}, this);
			//this.$el.append(temp);
			//temp = "";
		},
		renderItem: function(item){
			var itemView = new App.View.ItemView({model: item});
			this.$el.append(itemView.render().el);
			//return itemView.render();
		},
		addItem: function(){
			var data = {};
			this.$formValues.each(function(i, el){
				data[el.id] = $(el).val();
			});
			var newItem = new App.Model.Item(data);
			this.collection.add(newItem);
			this.renderItem(newItem);
		}
	});

	App.View.CartCollectionView = Backbone.View.extend({
		el: 'body',
		events: {
			"submit #add": "addItem"
		},
		initialize: function(){
			this.itemView = new App.View.ItemCollectionView();
		},
		addItem: function(e){
			e.preventDefault();
			this.itemView.addItem();
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
