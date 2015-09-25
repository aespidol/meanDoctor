var username = prompt("Enter Name")
appointmentApp.controller('creationsController', function($scope, $location, creationsFactory)
{
if(username === undefined){
username = prompt("Enter Name");	
$scope.username = username;
}
else{
	$scope.username=username;
}

$scope.currdate = new Date();
creationsFactory.show(function(data){
	$scope.appointments = data;
	console.log(data);

});
	$scope.logout = function(){
		$location.path('/logout');
		username = undefined;
	}
	$scope.addAppointment = function(){
		if($scope.appointment.date < $scope.currdate){
			alert("Must exceed current date. Please resubmit")
		}
		else{
		$scope.appointment.name = username;
		creationsFactory.add($scope.appointment);
		}
	}
	$scope.remove = function(appointment){
		creationsFactory.remove(appointment);
		$scope.appointments.splice($scope.appointments.indexOf(appointment),1);
	}

})
