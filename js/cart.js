(function(window, undefined){
	if(jQuery === undefined)
		return;
	var $ = jQuery,
		App = {
			Model: {},
			Collection: {},
			View: {}
		};

	//Base item Model
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

	var items = [
	  { title: "Macbook Air", price: 799 },
	  { title: "Macbook Pro", price: 999 },
	  { title: "The new iPad", price: 399 },
	  { title: "Apple Mouse", price: 50 },
	  { title: "Dell Monior", price: 799 }
	];

	var cartCollection = new App.Collection.Cart(items);

	App.View.ItemView = Backbone.View.extend({
		className: "item-wrap",
		template: $("#itemTemplate").html(),

		render:function(){
			//Render Item
			return this;
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



})(window);
