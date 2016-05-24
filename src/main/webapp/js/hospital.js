function Hospital($scope, $http) {
    $http.get('http://193.191.187.14:10758/HospitalRest/patients1').
        success(function(data) {
            $scope.patients1 = data;
        });
}

function Doctors($scope, $http){
    $http.get('http://193.191.187.14:10758/HospitalRest/doctors1').
            success(function(data){
                $scope.doctors1 = data;
    });
}

function Appointments($scope, $http){
    $http.get('http://193.191.187.14:10758/HospitalRest/findAppointment1').
            success(function(data){
                $scope.findAppointment1 = data;
    });
}