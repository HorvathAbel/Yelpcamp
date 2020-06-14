var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Camp Lohikan",
		image: "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		desription: "Blah balh dkksd"
	},
	{
		name: "Camp Lohikan",
		image: "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		desription: "Blah balh dkksd"
	},
	{
		name: "Camp Lohikan",
		image: "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		desription: "Blah balh dkksd"
	}
]

function seedDB(){
	//Remove all campgrounds
	Campground.remove({}, function(err){
		if (err) {
			console.log(err);
		}
		console.log("removed campground");
		
		//add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err) {
					console.log(err);
				} else {
					console.log("added a campground");
					//create a comment
					Comment.create(
					{
						text: "This place is great but no internet",
						author: "Daniel"
					}, function(err, comment){
						if(err) {
							console.log(err);
						} else {
							campground.comments.push(comment);
							campground.save();
							console.log("Created new comment");
						}
					});
				}
			});
		});
	});
	
	//add a few comments
}

module.exports = seedDB;