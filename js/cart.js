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

	var sBASE = function(){
		var UI      = {};
		var EXT     = {};
		var PROJECT = {
		};

		return {
			'UI' , UI,
			'EXT', EXT,
			'PROJECT', PROJECT
		};
	}();



})(window);
