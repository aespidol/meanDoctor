var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment')
module.exports = (function(){
	return{
		show: function(req,res){
			Appointment.find({}, function(err,results){
				if(err){
					console.log(err);
				}
				else
				{
					res.json(results);
				}
			})
		},
		remove: function(req,res){
			console.log(req.params.id);
			Appointment.remove({_id: req.params.id}, function(err,results){
				if(err){
					console.log("something went wrong")
				}
				else{
					console.log("success")
				}
			})
		},
		add: function(req,res){
			console.log("controller", req.body);
			var appointment = new Appointment({
				date: req.body.date,
				time: req.body.time,
				name: req.body.name,
				complaint: req.body.complaint
			})
			appointment.save(function(err){
				if(err){
					console.log("Something went wrong")
				}
				else{
					console.log("Added");
				}
			})
		}
	}
})();