var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
	date: Date,
	time: String,
	name: String,
	complaint: String
});

mongoose.model('Appointment', AppointmentSchema);