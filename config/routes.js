var appointments = require("../server/controllers/appointments.js")
module.exports = function(app){
	app.post("/add", function(req,res)
	{
		appointments.add(req,res);
	})
	app.get('/appointments', function(req,res){
		appointments.show(req,res);
	})
	app.post('/remove/:id', function(req,res){
		appointments.remove(req,res);
	})
}