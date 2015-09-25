appointmentApp.factory('creationsFactory', function($http)
{
	var factory = {};
	factory.add = function(info){
		console.log("Yay",info);
		$http.post("/add", info).then(function(response){
			console.log("success");
		})
	}
	factory.show = function(callback){
		$http.get('/appointments').then(function(response){
			callback(response.data);
		})
	}
	factory.remove = function(info){
		$http.post('/remove/'+info._id).then(function(response){
			console.log(response);
		})
	}
	return factory;
})