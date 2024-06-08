




var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.name = "SOFIA FIRDOUS";
    $scope.designation = "Director,";
    $scope.company = "METRO GROUP";
    $scope.mobile = "+91-671-2415296";
    $scope.mobileEA = "+91-91240-84069";
    $scope.email = "sofia@metrogroup.ind.in";
    $scope.officeEmail = "officesofia@metrogroup.ind.in";
    
    
});


var clipboard = new Clipboard(".btn");

clipboard.on("success", function (e) {
  $(".btn").html("Signature Copied!");
  $(".btn").css("background-color", "#1BC1A1");
  e.clearSelection();

  $(".collapse").addClass("show");

  setTimeout(function () {
    $(".btn").html("Copy to clipboard");
    $(".btn").css("background-color", "#832327");
  }, 3000);
});